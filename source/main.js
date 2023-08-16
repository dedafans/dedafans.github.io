function loadFile(filePath) {
    let result = 'ERR';
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status===200) {
        result = xmlhttp.responseText;
    }
    return result;
}
document.write(loadFile('/source/head.html'));
