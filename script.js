//initial references
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//convert decimal to binary when user inputs in the decimal fields
decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    // converts the decimal value to binary
    binInp.value = decValue.toString(2);
});

//convert binary to decimal when user inputs in the binary fields
binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    //if the binary number is valid convert it to decimal
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    }
    //else display an error message
    else {
        errorMsg.textContent = "Please Enter An Valid Binary Input"
    }

    // function to check id the binary number is valid i.e it does not contain any number other than 0 and 1
    function binValidator(num) {
        for (let i = 0; i < num.lenght; i++) {
            if (num[i] != "0" && num[i] != "1") {
                return false;
            }
        }
        return true;
    }
});