// --------------------------------Current location--------------------------------------
getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    }
}

function showPosition(position) {
    let lati = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lati, long);

}


    // --------------------------------------5day_forecast_weather---------------------------------------------
    let htday1 = document.getElementById("day1");
    let htday2 = document.getElementById("day2");
    let htday3 = document.getElementById("day3");
    let htday4 = document.getElementById("day4");
    let htday5 = document.getElementById("day5");

    let htday1png = document.getElementById("day1png");
    let htday2png = document.getElementById("day2png");
    let htday3png = document.getElementById("day3png");
    let htday4png = document.getElementById("day4png");
    let htday5png = document.getElementById("day5png");

    let htday1condition = document.getElementById("day1condition");
    let htday2condition = document.getElementById("day2condition");
    let htday3condition = document.getElementById("day3condition");
    let htday4condition = document.getElementById("day4condition");
    let htday5condition = document.getElementById("day5condition");


    const d = new Date();
    console.log(d);


    let year = d.getFullYear();
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());

    let day1 = String(d.getDate() + 1);
    let day2 = String(d.getDate() + 2);
    let day3 = String(d.getDate() + 3);
    let day4 = String(d.getDate() + 4);
    let day5 = String(d.getDate() + 5);

    // ---------------------------------------------------day1--------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=yakkalamulla&dt=${year}-${month}-${day1}`)
        .then(res => res.json())
        .then(data => {
            data.forecast.forecastday.forEach(element => {
                htday1.innerText = year + "-" + month + "-" + day1;
                htday1png.src = `${element.day.condition.icon}`;
                htday1condition.innerHTML = element.day.condition.text;

            });

        });


    // ---------------------------------------------------day2--------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=yakkalamulla&dt=${year}-${month}-${day2}`)
        .then(res => res.json())
        .then(data => {
            data.forecast.forecastday.forEach(element => {
                htday2.innerText = year + "-" + month + "-" + day2;
                htday2png.src = `${element.day.condition.icon}`;
                htday2condition.innerText = element.day.condition.text;

            });

        });

    // ---------------------------------------------------day3--------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=yakkalamulla&dt=${year}-${month}-${day3}`)
        .then(res => res.json())
        .then(data => {
            data.forecast.forecastday.forEach(element => {
                htday3.innerText = year + "-" + month + "-" + day3;
                htday3png.src = `${element.day.condition.icon}`;
                htday3condition.innerHTML = element.day.condition.text;

            });

        });

    // ---------------------------------------------------day4--------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=yakkalamulla&dt=${year}-${month}-${day4}`)
        .then(res => res.json())
        .then(data => {
            data.forecast.forecastday.forEach(element => {
                htday4.innerText = year + "-" + month + "-" + day4;
                htday4png.src = `${element.day.condition.icon}`;
                htday4condition.innerHTML = element.day.condition.text;

            });

        });
    // ---------------------------------------------------day5--------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=yakkalamulla&dt=${year}-${month}-${day5}`)
        .then(res => res.json())
        .then(data => {
            data.forecast.forecastday.forEach(element => {
                htday5.innerText = year + "-" + month + "-" + day5;
                htday5png.src = `${element.day.condition.icon}`;
                htday5condition.innerHTML = element.day.condition.text;

            });


        });

    // -----------------------------------------Forecast Weather-------------------------------------
    defaultForecastSearch();
    function defaultForecastSearch() {
        let usersearch = document.getElementById("txtsearch").value;
        let htForeday1 = document.getElementById("htday1");
        let htForeday2 = document.getElementById("htday2");
        let htForeday3 = document.getElementById("htday3");
        let htForeday4 = document.getElementById("htday4");
        let htForeday5 = document.getElementById("htday5");

        let htForeday1png = document.getElementById("htday1png");
        let htForeday2png = document.getElementById("htday2png");
        let htForeday3png = document.getElementById("htday3png");
        let htForeday4png = document.getElementById("htday4png");
        let htForeday5png = document.getElementById("htday5png");

        let htForeday1condition = document.getElementById("htday1condition");
        let htForeday2condition = document.getElementById("htday2condition");
        let htForeday3condition = document.getElementById("htday3condition");
        let htForeday4condition = document.getElementById("htday4condition");
        let htForeday5condition = document.getElementById("htday5condition");

        let input_date1 = document.getElementById("inputdate_to").value;
        let input_date2 = document.getElementById("inputdate_end").value;

        var x = input_date1;
        const d = new Date(x);
        console.log(d);


        let year = d.getFullYear();
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());

        let day1 = String(d.getDate());
        let day2 = String(d.getDate() + 1);
        let day3 = String(d.getDate() + 2);
        let day4 = String(d.getDate() + 3);
        let day5 = String(d.getDate() + 4);

        // ---------------------------------------------------day1--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${"galle"}&dt=${year}-${month}-${day1}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htForeday1.innerText = `${year}-${month}-${day1}`;
                    htForeday1png.src = `${element.day.condition.icon}`;
                    htForeday1condition.innerHTML = element.day.condition.text;

                });


            });
        // ---------------------------------------------------day2--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${"galle"}&dt=${year}-${month}-${day2}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htForeday2.innerText = `${year}-${month}-${day2}`;
                    htForeday2png.src = `${element.day.condition.icon}`;
                    htForeday2condition.innerHTML = element.day.condition.text;
                });
            });

        // ---------------------------------------------------day3--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${"galle"}&dt=${year}-${month}-${day3}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htForeday3.innerText = `${year}-${month}-${day3}`;
                    htForeday3png.src = `${element.day.condition.icon}`;
                    htForeday3condition.innerHTML = element.day.condition.text;
                });

            });

        // ---------------------------------------------------day4--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${"galle"}&dt=${year}-${month}-${day4}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htForeday4.innerText = `${year}-${month}-${day4}`;
                    htForeday4png.src = `${element.day.condition.icon}`;
                    htForeday4condition.innerHTML = element.day.condition.text;
                });

            });

        // ---------------------------------------------------day5--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${"galle"}&dt=${year}-${month}-${day5}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htForeday5.innerText = `${year}-${month}-${day5}`;
                    htForeday5png.src = `${element.day.condition.icon}`;
                    htForeday5condition.innerHTML = element.day.condition.text;
                });

            });
    }


    // --------------------------------Search_by_location_name--------------------------------------
    function Search() {
        let usersearch = document.getElementById("txtsearch").value;
        let temperature = document.getElementById("txttemperature");
        let searchlocation = document.getElementById("searchlocation");
        let condition = document.getElementById("txtcondition");
        let conditionpng = document.getElementById("weatherpng");
        let txthumidity = document.getElementById("txthumidity");
        let txtwind_speed = document.getElementById("txtwind_speed");

        fetch(`https://api.weatherapi.com/v1/current.json?key=deb6473242c04b95b29150633243009&q=${usersearch}`)
            .then(res => res.json())
            .then(data => {
                temperature.innerText = data.current.temp_c + "°C";
                searchlocation.innerText = data.location.name + " Current Weather";
                condition.innerText = data.current.condition.text;
                conditionpng.src = `${data.current.condition.icon}`;
                txthumidity.innerText = data.current.humidity + "%";
                txtwind_speed.innerText = data.current.wind_kph + "kph";
            });

        // --------------------------------------5day_forecast_weather---------------------------------------------
        let htday1 = document.getElementById("day1");
        let htday2 = document.getElementById("day2");
        let htday3 = document.getElementById("day3");
        let htday4 = document.getElementById("day4");
        let htday5 = document.getElementById("day5");

        let htday1png = document.getElementById("day1png");
        let htday2png = document.getElementById("day2png");
        let htday3png = document.getElementById("day3png");
        let htday4png = document.getElementById("day4png");
        let htday5png = document.getElementById("day5png");

        let htday1condition = document.getElementById("day1condition");
        let htday2condition = document.getElementById("day2condition");
        let htday3condition = document.getElementById("day3condition");
        let htday4condition = document.getElementById("day4condition");
        let htday5condition = document.getElementById("day5condition");


        const d = new Date();
        console.log(d);


        let year = d.getFullYear();
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());

        let day1 = String(d.getDate() + 1);
        let day2 = String(d.getDate() + 2);
        let day3 = String(d.getDate() + 3);
        let day4 = String(d.getDate() + 4);
        let day5 = String(d.getDate() + 5);

        // ---------------------------------------------------day1--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day1}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htday1.innerText = `${year}-${month}-${day1}`;
                    htday1png.src = `${element.day.condition.icon}`;
                    htday1condition.innerHTML = element.day.condition.text;

                });

            });


        // ---------------------------------------------------day2--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day2}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htday2.innerText = `${year}-${month}-${day2}`;
                    htday2png.src = `${element.day.condition.icon}`;
                    htday2condition.innerText = element.day.condition.text;

                });

            });

        // ---------------------------------------------------day3--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day3}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htday3.innerText = `${year}-${month}-${day3}`;
                    htday3png.src = `${element.day.condition.icon}`;
                    htday3condition.innerHTML = element.day.condition.text;

                });

            });

        // ---------------------------------------------------day4--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day4}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htday4.innerText = `${year}-${month}-${day4}`;
                    htday4png.src = `${element.day.condition.icon}`;
                    htday4condition.innerHTML = element.day.condition.text;

                });

            });
        // ---------------------------------------------------day5--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day5}`)
            .then(res => res.json())
            .then(data => {
                data.forecast.forecastday.forEach(element => {
                    htday5.innerText = `${year}-${month}-${day5}`;
                    htday5png.src = `${element.day.condition.icon}`;
                    htday5condition.innerHTML = element.day.condition.text;

                });


            });
    }
//     // -----------------------------------------Forecast Weather-------------------------------------
    function ForecastSearch() {
        let usersearch = document.getElementById("txtsearch").value;
        let htForeday1 = document.getElementById("htday1");
        let htForeday2 = document.getElementById("htday2");
        let htForeday3 = document.getElementById("htday3");
        let htForeday4 = document.getElementById("htday4");
        let htForeday5 = document.getElementById("htday5");

        let htForeday1png = document.getElementById("htday1png");
        let htForeday2png = document.getElementById("htday2png");
        let htForeday3png = document.getElementById("htday3png");
        let htForeday4png = document.getElementById("htday4png");
        let htForeday5png = document.getElementById("htday5png");

        let htForeday1condition = document.getElementById("htday1condition");
        let htForeday2condition = document.getElementById("htday2condition");
        let htForeday3condition = document.getElementById("htday3condition");
        let htForeday4condition = document.getElementById("htday4condition");
        let htForeday5condition = document.getElementById("htday5condition");

        let input_date1 = document.getElementById("inputdate_to").value;
        let input_date2 = document.getElementById("inputdate_end").value;

        var x = input_date1;
        const d = new Date(x);
        console.log(d);


        let year = d.getFullYear();
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());

        let day1 = String(d.getDate());
        let day2 = String(d.getDate() + 1);
        let day3 = String(d.getDate() + 2);
        let day4 = String(d.getDate() + 3);
        let day5 = String(d.getDate() + 4);

        // ---------------------------------------------------day1--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day1}`)
            .then(res => res.json())
            .then(data => {
                htForeday1.innerText = year + "-" + month + "-" + day1;
                data.forecast.forecastday.forEach(element => {
                    htForeday1png.src = `${element.day.condition.icon}`;
                    htForeday1condition.innerHTML = element.day.condition.text;
                });

            });
        // ---------------------------------------------------day2--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day2}`)
            .then(res => res.json())
            .then(data => {
                htForeday2.innerText = year + "-" + month + "-" + day2;
                data.forecast.forecastday.forEach(element => {
                    htForeday2png.src = `${element.day.condition.icon}`;
                    htForeday2condition.innerHTML = element.day.condition.text;
                });

            });

        // ---------------------------------------------------day3--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day3}`)
            .then(res => res.json())
            .then(data => {
                htForeday3.innerText = year + "-" + month + "-" + day3;
                data.forecast.forecastday.forEach(element => {
                    htForeday3png.src = `${element.day.condition.icon}`;
                    htForeday3condition.innerHTML = element.day.condition.text;
                });

            });

        // ---------------------------------------------------day4--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day4}`)
            .then(res => res.json())
            .then(data => {
                htForeday4.innerText = year + "-" + month + "-" + day4;
                data.forecast.forecastday.forEach(element => {
                    htForeday4png.src = `${element.day.condition.icon}`;
                    htForeday4condition.innerHTML = element.day.condition.text;
                });

            });

        // ---------------------------------------------------day5--------------------------------------------
        fetch(`https://api.weatherapi.com/v1/history.json?key=deb6473242c04b95b29150633243009&q=${usersearch}&dt=${year}-${month}-${day5}`)
            .then(res => res.json())
            .then(data => {
                htForeday5.innerText = year + "-" + month + "-" + day5;
                data.forecast.forecastday.forEach(element => {
                    htForeday5png.src = `${element.day.condition.icon}`;
                    htForeday5condition.innerHTML = element.day.condition.text;
                });

            });
    }

    // ------------------------------------------------------------------Dark Mode--------------------------------------------
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }