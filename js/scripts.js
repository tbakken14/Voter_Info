//Global variables
let form;
let age;
let voterInfo;
let minorInfo;
let isMinor = false;

//UI Functions
function OnSubmission(event) {
    event.preventDefault();
    AgeLogic(parseInt(age.value));
}

//Parameter: age of user type Number
//display correct info based on result
function AgeLogic(age_value) {
    console.log(age_value);
    if (Number.isNaN(age_value)) {
        alert("Please enter a valid number.");
    }
    else if (age.value >= 18) {
        if (isMinor) {
            alert("Nice try");
        }
        else {
            swapClassNameHidden(voterInfo, minorInfo);
        }
    }
    else {
        isMinor = true;
        swapClassNameHidden(minorInfo, voterInfo);
    }
}

function swapClassNameHidden(makeHidden, makeVisible) {
    makeVisible.setAttribute("class", "hidden");
    makeHidden.removeAttribute("class");
}

//Initialization functions
function InitializeVariables() {
    form = document.querySelector("form");
    age = document.getElementById("age");
    voterInfo = document.getElementById("voter_info");
    minorInfo = document.getElementById("minor_info");
}

function InitializeUIFunctions() {
    form.onsubmit = OnSubmission;
}

//Initialize on load
window.onload = function () {
    InitializeVariables();
    InitializeUIFunctions();
};



