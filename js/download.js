function downloadCode(link, code) {
    link.href = 'data:text/html;charset=utf-8,' + code;
}

document.getElementById('download').addEventListener('click', function () {
    downloadCode(this, html.textContent);
}, false);