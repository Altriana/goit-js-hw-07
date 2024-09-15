console.log(`Number of categories:`,document.querySelectorAll("li.item").length)

document.querySelectorAll("li.item").forEach(li => {
    console.log(
        `Category:`,li.querySelector("h2").textContent,
        `Elements:`,li.querySelectorAll("li").length
    )
    });