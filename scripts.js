function showLoadTime() {
    var footer = document.querySelector("footer");

    if (footer) {
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
}

function setupBlockquoteEffect() {
    var quote = document.getElementById("quote");

    if (quote) {
        quote.addEventListener("mouseover", function () {
             quote.style.backgroundColor = "#8e3a64";
            quote.style.color = "white";  
            quote.style.fontStyle = "italic";
            
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "";
             quote.style.color = "#2f2f3a";
            quote.style.fontStyle = "normal";
        });
    }
}

window.onload = function () {
    showLoadTime();
    setupBlockquoteEffect();
};


function toggleDescription(id) {
    var desc = document.getElementById(id);

    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}
