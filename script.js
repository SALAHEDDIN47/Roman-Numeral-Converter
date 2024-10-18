const input = document.getElementById("convert-btn");
const result = document.getElementById("output");
const inputVal = input.value;

const conversion = (input) => {
    if( input === "" ){
        result.classList.remove("hidden");
        result.textContent = "Please enter a valid number";
    }
};

input.addEventListener("click",conversion(inputVal));