function showLoadTime() {
    console.log("Function is working!");

    var footer = document.querySelector("footer");

    var newParagraph = document.createElement("p");

    var currentDate = new Date();
var text = document.createTextNode(
    "Page loaded on: " + currentDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    })
);
    newParagraph.appendChild(text);

    footer.appendChild(newParagraph);
}

window.onload = showLoadTime;

