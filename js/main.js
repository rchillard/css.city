window.addEventListener('resize', function () {
    resizeToScrollHeight(document.querySelectorAll('textarea'));
})

document.addEventListener('DOMContentLoaded', function () {
    resizeToScrollHeight(document.querySelectorAll('textarea'));
}, false);

function resizeToScrollHeight(nodelist) {
    for (const node of nodelist) {
        node.style.height = "";
        node.style.height = node.scrollHeight + 3 + "px";
    }
}