function testFunction() {
    fetch('/api')
    .then((response) => response.text())
    .then((response) => {
         console.log(response);
    })
    document.querySelector("title").innerHTML = response;
    document.querySelector("h1").innerHTML = response;
    document.body.style.backgroundColor = 'rgb(113, 2, 2)';
}