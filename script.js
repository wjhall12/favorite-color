let userColor;

document.getElementById("submitColor").onclick = function() {
    userColor = document.getElementById("colorInput").value;
    document.getElementById("colorMessage").textContent = `Your favorite color is ${userColor}!`;
};
