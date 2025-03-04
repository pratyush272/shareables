function hideHeader() {
    const header = document.querySelector("header");
    if (header) {
        header.style.display = "none";
        console.log("Header hidden");
    } else {
        console.log("Header not found, setting up observer...");
        
        // Observe the DOM for changes and hide the header when it appears
        const observer = new MutationObserver((mutations, obs) => {
            const newHeader = document.querySelector("header");
            if (newHeader) {
                newHeader.style.display = "none";
                console.log("Header found and hidden");
                obs.disconnect(); // Stop observing once header is hidden
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
}

// Run immediately in case header is already available
hideHeader();
