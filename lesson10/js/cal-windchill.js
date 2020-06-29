const windChill = (temperature, speed) => {
    return (temperature >= 50 && speed > 3) 
    ?
        Math.round(
            35.74 
            + 0.6215 
            * temperature 
            - 35.75 
            * Math.pow(speed, 0.16) 
            + 0.4275 
            * temperature 
            * Math.pow(speed, 0.16) 
            * 10)
        / 10
    :
        "N/A";
}

/* 

const displayWindChill = () => {
    let temperature = Number(document.getElementById("temperature").textContent || 0);
    let wind = Number(document.getElementById("wind").textContent || 0);
    let result = calWindChill(temperature, wind);
    document.getElementById("chillWind").innerHTML = result;
}

displayWindChill(); 
*/