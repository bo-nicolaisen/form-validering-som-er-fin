//console.log('loaded');

const feedBackElement = document.getElementById("feedBackElement");



const submitButton = document.getElementById("submitButt");


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    console.log('clicked: ' + event);

});



const fname = document.getElementById("fname");


fname.addEventListener("change", (event) => {


    console.log('tastet: ' + event);

});







console.log(feedBackElement);


let fName = false; // boolean
let eName = false; // boolean









//feedBackElement.innerText = "her skal der stå en errormsg";