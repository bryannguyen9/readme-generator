# ReadMe-Generator

## Description 

This is a readme generator, this is a tool to automate a users life and make creating and populating readme's efficient and productive. Users will get prompted with questions using node.js that will then populate into the readme. This generator uses the inquirer package in order to prompt users with questions that will then be stored and generated in a dynamic function that generates the markdown file with the user inputs.

## Table of Contents

* [Installation](#installation)
* [Mock Up](#mock-up)
* [Code Example](#code-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)

## Installation

1. Clone down the repository or download all files within repository
2. You will need to install node.js
3. Open terminal within VS Code and type 'node index.js'
4. Enter your inputs as wish
5. Find your generatedREADME.md under generated-readmes folder, and download it or upload it to your project as you wish.

## Mock-Up

The following image shows an example of a generated readme through this application:

![Generated Readme Screenshot](./assets/homepage.png)

## Code Example

Here is an example of my getApi() function that allows the users to when inputting a city name it will use the weather api to search the forecast data.

```javascript
  function getApi() {
    var currentWeatherQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&units=imperial&appid=" + API_KEY;
    var fiveDayForecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&units=imperial&appid=" + API_KEY;

    fetch(currentWeatherQueryURL)
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                return response.json();
            }
            else {
                throw new Error('Error fetching weather data');
            }
        }).then(function(data){
            console.log(data);
            console.log("Name ", data.name);
            var currName = document.createElement('p');
            currName.textContent = "City: " + data.name;
            currentCityHeader.append(currName);
            //added dayjs for date
            var today = dayjs(today).format('dddd MMM DD, YYYY');
            currentCityHeader.append(today);

            var currTemp = document.createElement('p');
            currTemp.textContent = "Temperature(F): " + data.main.temp;
            cityInfoContainer.append(currTemp);

            var currWind = document.createElement('p');
            currWind.textContent = "Wind Speeds(MPH): " + (((data.wind.speed)/1609.34)*3600).toFixed(2);
            cityInfoContainer.append(currWind);

            var currHumidity = document.createElement('p');
            currHumidity.textContent = "Humidity: " + data.main.humidity + "%";
            cityInfoContainer.append(currHumidity);

    // make another API request for the 5-day forecast data
    fetch(fiveDayForecastQueryURL)
        .then(function (response) {
            if (response.status === 200) {
                previousCities.unshift(cityInput.value);
                localStorage.setItem("cities", JSON.stringify(previousCities));
            return response.json();
            } else {
            throw new Error('Error fetching weather data');
            }
        }).then(function (data) {
            try {
            // check if data and data.list are defined
                if (data && data.list) {
                    console.log(data);
                    // rest of your code for displaying current weather

                    // loop through 5 day forecast data
                    for (var i = 0; i < 5; i++) {
                    // display forecast data for each day

                    //need a way to identify which exact forecastData container to append dayData to at end need another index for day containers.
                        var dayData = document.createElement('div');
                        dayData.classList.add('day-data');

                        var date = dayjs(data.list[i*8].dt_txt).format('dddd MMM DD, YYYY');
                        var dateEl = document.createElement('p');
                        dateEl.textContent = date;
                        dayData.append(dateEl);                   

                        var temp = document.createElement('p');
                        temp.textContent = "Temperature(F): " + data.list[i*8].main.temp;
                        dayData.append(temp);

                        var wind = document.createElement('p');
                        wind.textContent = "Wind Speeds(MPH): " + (((data.list[i*8].wind.speed)/1609.34)*3600).toFixed(2);
                        dayData.append(wind);

                        var humidity = document.createElement('p');
                        humidity.textContent = "Humidity: " + data.list[i*8].main.humidity + "%";
                        dayData.append(humidity);

                        $(`#day-${i+1}`).append(dayData);
                    }
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (err) {
                console.error(err);
                currName.textContent = "Error fetching weather data";
                currentCityHeader.append(currName);
                }
        }).catch(function (error) {
            console.log(error);
            currName.textContent = "Error fetching weather data";
            currentCityHeader.append(currName);
        });
    })
}

```

## Usage
 
Here you can see how I access the terminal within VS Code:

![Weather Forecast Homepage Screenshot](./assets/homepage.png)

Here you can see what I input into the terminal to initalize the application:

![Search Input Screenshot](./assets/searchinput.png)

Here you can see the list of prompts the user can then input by typing or selecting if it is a list:

![Search Output Screenshot](./assets/searchoutput.png)

Here you can see after finishing the prompts the users inputs are console logged then a message stating whether or not the generated readme was generated and saved happened:

Here is the finished readme with all user inputs populated into the proper sections:



## Learning Points 

This was a really fun task in my opinion. I believe automation and making daily monotonous tasks easier and more efficient is something I truly believe in. This project taught me a lot about using node.js and export import methodology. It also taught me certain aspects of Object-Oriented Programming as well as using the inquirer package which was something that was completely new to me. There was not very many stopping points for me but definitely more to improve on in the future. I want more prompt questions so if users want to they are able to be more specific as to what category they want to choose from and then get a set of questions based on their wants in their readme.

1. [W3 schools](https://www.w3schools.com/jsrEF/api_fetch.asp)
2. [Stack-Overflow](https://stackoverflow.com/questions/61337464/how-to-use-local-storage-to-store-data-from-an-api)
3. [Stack-Overflow](https://stackoverflow.com/questions/16303954/setting-button-text-via-javascript)

## About Me

Hi, my name is Bryan Nguyen I am an up and coming full-stack web developer working
on getting into the space with projects that support both my growth, belief, and imagination. I hope to one day work within the realm of AI, web-development, and even site-reliability/the space of cyber-security.

## My links

* [Portfolio](https://bryannguyen9.github.io/Bryan-Nguyen-Portfolio/)
* [LinkedIn](https://linkedin.com/in/bryannguyen9)
* [Github](https://github.com/bryannguyen9)


## Credits

### Special thanks to David Chung: 
 
 * His Github Portfolio: [David-Chung-Github](https://github.com/dchung13/)
 * His Linked-In: [David-Chung-LinkedIn](https://www.linkedin.com/in/david-chung-77141526b/)
 * His Portfolio Site: [David-Chung-Portfolio](https://dchung13.github.io/David-Chung-Portfolio/) 

### Special thanks to these reference websites that taught me different functionalities within my website for me to create a seamless experience for users.

1. [W3 schools](https://www.w3schools.com/jsrEF/api_fetch.asp)
2. [Stack-Overflow](https://stackoverflow.com/questions/61337464/how-to-use-local-storage-to-store-data-from-an-api)
3. [Stack-Overflow](https://stackoverflow.com/questions/16303954/setting-button-text-via-javascript)

## License

MIT License

Copyright (c) [2023] [Bryan-Nguyen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
