
        let now = new Date();

        let h4 = document.querySelector("h4");

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let day = days[now.getDay()];

        let hour = now.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }
        let minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        h4.innerHTML = `${day}, ${hour}:${minutes}`;

        function showWeather(response) {
            document.querySelector("#input-location").innerHTML = response.data.name;
            document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
            document.querySelector("#humidity").innerHTML = response.data.main.humidity;
            document.querySelector("#feels-like").innerHTML = Math.round(response.data.main.feels_like);
            document.querySelector("#temp-max").innerHTML = Math.round(response.data.main.temp_max);
            document.querySelector("#temp-min").innerHTML = Math.round(response.data.main.temp_min);
        }

        function search(city) {
            let apiKey = `2fb16a57cb4b18c7686f92b2ebb6446f`;
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(showWeather);
        }
        function submitCity(event) {
            event.preventDefault();
            let city = document.querySelector("#city-input").value;
            search(city);
        }

        let locationForm = document.querySelector("#location-form");
        locationForm.addEventListener("submit", submitCity);

        search("Antananarivo");