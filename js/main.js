window.addEventListener('resize', function () {
    resizeTextareas();
})

document.addEventListener('DOMContentLoaded', function () {
    resizeTextareas();
}, false);

function resizeTextareas() {
    const nodelist = document.querySelectorAll('textarea')
    for (const node of nodelist) {
        node.style.height = "";
        node.style.height = node.scrollHeight + 3 + "px";
    }
}