console.log("Hello World!");

var name="My name is";
let nickname="noidea";
let _age= 5;


function myFunction(param) {
	debugger;
	console.log("the name is "+ name);
	console.log("the nickname is "+ nickname);
    var myNumber = document.getElementById("myNumber").value;
    console.log(myNumber);
    alert(myNumber);
	console.log(_age);
  _age += parseInt(myNumber);
  console.log(_age);
  //var famname = 'other name';
}
//console.log("the famname is "+ famname);
/*
const students = [
    "Anna Smith",
    "John Doe",
    "Sam Jones"
  ];

  const students = [];
students[0]= "Anna Smith";
students[1]= "John Doe";
students[2]= "Sam Jones";
*/
	
 let x;
if (typeof x === "undefined") {
 var text = "x is undefined";
  	console.log(text);
} else {
  text = "x is defined";
  console.log(text);
}
 let x1;
if ( x1 === "undefined") {
 var text = "x is undefined";
  	console.log(text);
} else {
  text = "x is defined";
  console.log(text);
}
// Adding element dynamically
/*
	let divElement = document.createElement('div');
	let textNode = document.createTextNode('Dynamic Element');

	divElement.appendChild(textNode);
	divElement.classList.add('primary');
  divElement.style.marginTop = "50px"
  divElement.innerHTML='<h1>Inside the element added a p element</h1>';

  let containerElement = document.querySelector('.container');
  containerElement.appendChild(divElement);

  let divs = document.getElementByTagname("div");
*/