
const num_res = document.querySelector(".number_res");
let expression = "";
window.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data")) {
        const buttonValue = event.target.textContent.trim();
        if (buttonValue === "=") {
            try {
                const result = Function('"use strict"; return (' + expression + ')')();
                num_res.textContent = result; 
                expression = ""; 
            } catch (error) {
                expression = ""; 
            }
        } 
        else {
            expression += buttonValue;
            num_res.textContent = expression;
        }
    }
});
