const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    if (input.value.trim() === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value.trim();
    }
});