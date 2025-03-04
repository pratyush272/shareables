document.addEventListener("DOMContentLoaded", function () {
    console.log("Custom script loaded!"); // Debug log

    // Hide the default Metabase header
    const originalHeader = document.querySelector("header");
    if (originalHeader) {
        originalHeader.style.display = "none";
        console.log("Original header hidden");
    } else {
        console.log("Original header not found");
    }

    // Create a new dummy header
    const newHeader = document.createElement("div");
    newHeader.style.position = "fixed";
    newHeader.style.top = "0";
    newHeader.style.left = "0";
    newHeader.style.width = "100%";
    newHeader.style.height = "50px";
    newHeader.style.background = "#333";
    newHeader.style.color = "white";
    newHeader.style.display = "flex";
    newHeader.style.alignItems = "center";
    newHeader.style.justifyContent = "center";
    newHeader.style.zIndex = "1000";
    newHeader.innerHTML = "<b>Custom Dummy Header</b>";

    document.body.prepend(newHeader);
    console.log("New dummy header added");
});
