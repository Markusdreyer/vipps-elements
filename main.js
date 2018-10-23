function displayCode(id) {
    var x = escapeHtml(document.getElementById(id).outerHTML);
    htmlContainer = document.getElementById("hidden-html");
    htmlContainer.innerHTML = x;
    cssContainer = document.getElementById("hidden-css")
    if (cssContainer.style.display === "none" || htmlContainer.style.display === "none") {
        htmlContainer.style.display = "block";
        cssContainer.style.display = "block";
    }
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
