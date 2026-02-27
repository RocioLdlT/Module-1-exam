const twoViews = document.querySelectorAll("#valoration, #thanks");

const select1 = document.querySelector("#circle1".checked);
const select2 = document.querySelector("#circle2".checked);
const select3 = document.querySelector("#circle3".checked);
const select4 = document.querySelector("#circle4".checked);
const select5 = document.querySelector("#circle5".checked);

//const selectRadio = document.querySelector('input[name="calification"]:checked')
//:checked es una pseudo clase utilizada también en css que permite hacer referencia al radio button marcado. Se usa mucho en los inputs para esto.
//después solo necesitaríamos que nos devolviera el valor, en este caso span.textContent = `${selectRadio.value} de 5`

const toSend = document.querySelector('button[type="submit"]')

const answer = document.querySelector('.rating')
