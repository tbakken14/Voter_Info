function OnSubmission(event) {
    event.preventDefault();
    console.log(age.value);
};

window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = OnSubmission;
    const age = document.getElementById("age");

};

