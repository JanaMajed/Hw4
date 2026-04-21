function showLoadTime() {
    console.log("Function is working!");

    var footer = document.querySelector("footer");

    var newParagraph = document.createElement("p");

    var currentDate = new Date();

      var text = document.createTextNode("Page loaded on: " + currentDate.toLocaleString());
    newParagraph.appendChild(text);

    footer.appendChild(newParagraph);
}

window.onload = showLoadTime;

