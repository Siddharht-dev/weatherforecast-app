let userInput = document.querySelector("#input");
let btn = document.querySelector("#btn");
let weatherImg = document.querySelector("#image");
let nameToDisplay = document.querySelector("#nameShow");
let tempToDisplay = document.querySelector("#tempShow");
let time = document.querySelector("#timeShow");
let cloud = document.querySelector("#cloudShow");
let speed = document.querySelector("#windShow");

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});

btn.addEventListener("click", async () => {
    let key  = "6d4520aa91ed0dbc88a36be9ff1aae2b";
    let URL = "https://api.openweathermap.org/data/2.5/weather?q="
    + userInput.value + "&appid=" + key + "&units=metric"

    async function getData(){
        let res = await fetch(URL);
        let data = await res.json();
        return data;
    }

    let result = await getData();

    let localTime = new Date((result.dt)*1000);

    nameToDisplay.innerHTML = userInput.value;
    tempToDisplay.innerHTML = result.main.temp;
    time.innerHTML = localTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
    cloud.innerHTML = result.clouds.all + "%";
    speed.innerHTML = result.wind.speed + "m/s";

});