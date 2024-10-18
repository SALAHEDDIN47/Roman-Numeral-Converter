const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const inputField = document.getElementById("number");

const convertToRoman = (num) => {
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let roman = "";

    // Loop through the numeral mapping array
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            roman += romanNumerals[i].symbol;  // Append the corresponding symbol
            num -= romanNumerals[i].value;     // Subtract the value from the number
        }
    }

    return roman;
}

const conversion = () => {
    const inputVal = inputField.value; 
    if (inputVal === "" || inputVal  ==="e") {
        result.classList.remove("hidden");
        result.textContent = "Please enter a valid number";
    }
    else if (parseInt(inputVal) < 1){
        result.classList.remove("hidden");
        result.textContent = "Please enter a number greater than or equal to 1.";
    }
    else if (parseInt(inputVal) >= 4000){
        result.classList.remove("hidden");
        result.textContent = "Please enter a number less than or equal to 3999.";
    }
    else {
        result.classList.remove("hidden");
        
        result.style.color= "#f5f6f7";
        result.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        result.style.border = "3px solid white";
        let roman = convertToRoman(inputVal);
        result.textContent = roman ;
    }
};


convertBtn.addEventListener("click", conversion);

inputField.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        conversion();
    }
});