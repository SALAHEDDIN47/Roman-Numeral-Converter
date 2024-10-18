const input = document.getElementById("convert-btn");
const result = document.getElementById("output");

const conversion = () => {
    const inputVal = input.value; // Get the value inside the function
    if (inputVal === "" || inputVal  ==="e") {
        result.classList.remove("hidden");
        result.textContent = "Please enter a valid number";
    }
    
};


input.addEventListener("click", conversion);