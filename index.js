

const display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value += input;
}


function appendToDisplayOperator(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function displayError() {
    display.value = "ERROR";
}

function backspace() {
    display.value = display.value.slice(0, -1)
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        displayError();
    }
}



function showConversions() {
    document.querySelector(".Calculator").style.display = "none";
    document.querySelector(".convert").style.display = "flex";
}

function hideConversions() {
    document.querySelector(".Calculator").style.display = "flex";
    document.querySelector(".convert").style.display = "none";
}

function calcLength() {
    document.querySelector(".convert").style.display = "none"
    document.querySelector(".length").style.display = "flex"
}

function calcWeight() {
    document.querySelector(".convert").style.display = "none"
    document.querySelector(".weight").style.display = "flex"
}


function calcTemperature() {
    document.querySelector(".convert").style.display = "none"
    document.querySelector(".temperature").style.display = "flex"
}

function calcSpeed() {
    document.querySelector(".convert").style.display = "none"
    document.querySelector(".speed").style.display = "flex"
}




function evaluateLength(event) {
    event.preventDefault();
    const fromUnit = document.querySelector("#lengthfrom").value;
    const toUnit = document.querySelector("#lengthto").value;
    const value = parseFloat(document.querySelector("#lengthenter").value);
    let result;

    if (isNaN(value)) {
        ``
        document.querySelector("#lengthresult").value = "Invalid input";
        return;
    }

    const conversionFactors = {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
    };

    if (fromUnit in conversionFactors && toUnit in conversionFactors) {
        result = (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
        document.querySelector("#lengthresult").value = result;
    } else {
        document.querySelector("#lengthresult").value = "Conversion error";
    }
}


function evaluateWeight(event) {
    event.preventDefault();
    const fromUnit = document.querySelector("#weightfrom").value;
    const toUnit = document.querySelector("#weightto").value;
    const value = parseFloat(document.querySelector("#weightenter").value);
    let result;

    if (isNaN(value)) {
        document.querySelector("#weightresult").value = "Invalid input";
        return;
    }

    const conversionFactors = {
        gram: 1,
        kilogram: 1000,
        miligram: 0.001,
    };

    if (fromUnit in conversionFactors && toUnit in conversionFactors) {
        result = (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
        document.querySelector("#weightresult").value = result;
    } else {
        document.querySelector("#weightresult").value = "Conversion error";
    }
}


function evaluateTemperature(event) {
    event.preventDefault();
    const fromUnit = document.querySelector("#tempfrom").value;
    const toUnit = document.querySelector("#tempto").value;
    const value = parseFloat(document.querySelector("#tempenter").value);
    let result;

    if (isNaN(value)) {
        document.querySelector("#tempresult").value = "Invalid input";
        return;
    }

    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (value * 9 / 5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (value - 32) * 5 / 9;
    } else {
        document.querySelector("#tempresult").value = "Conversion error";
        return;
    }

    document.querySelector("#tempresult").value = result;
}



function evaluateSpeed(event) {
    event.preventDefault();
    const fromUnit = document.getElementById('speedfrom').value;
    const toUnit = document.getElementById('speedto').value;
    const value = parseFloat(document.getElementById('speedenter').value);
    let result;

    if (isNaN(value)) {
        document.querySelector("#speedresult").value = "Invalid input";
        return;
    }

    if (fromUnit === toUnit) {
        document.getElementById('speedresult').value = inputValue;
        return;
    }

    // km/h to mph
    if (fromUnit === 'kmh' && toUnit === 'mph') {
        result = (value * 0.621371).toFixed(2);
    }

    // mph to km/h
    if (fromUnit === 'mph' && toUnit === 'kmh') {
        result = (value * 1.60934).toFixed(2);
    }

    // km/h to km/s
    if (fromUnit === 'kmh' && toUnit === 'kms') {
        result = (value / 3600).toFixed(6);
    }

    // km/s to km/h
    if (fromUnit === 'kms' && toUnit === 'kmh') {
        result = (value * 3600).toFixed(2);
    }

    // km/h to m/s
    if (fromUnit === 'kmh' && toUnit === 'mps') {
        result = (value * 1000 / 3600).toFixed(2);
    }

    // m/s to km/h
    if (fromUnit === 'mps' && toUnit === 'kmh') {
        result = (value * 3.6).toFixed(2);
    }

    document.querySelector("#speedresult").value = result;
}


function hideCalculateLength() {
    document.querySelector(".length").style.display = "none";
    document.querySelector(".convert").style.display = "flex";
}

function hideCalculateWeight() {
    document.querySelector(".weight").style.display = "none";
    document.querySelector(".convert").style.display = "flex";
}

function hideCalculateTemp() {
    document.querySelector(".temperature").style.display = "none";
    document.querySelector(".convert").style.display = "flex";
}

function hideCalculateSpeed() {
    document.querySelector(".speed").style.display = "none";
    document.querySelector(".convert").style.display = "flex";
}