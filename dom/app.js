let ptag = document.createElement('p');
let textInput = document.createElement('input');
let myBtn = document.createElement('button');
let body = document.querySelector('body');

// Function to handle keypress logic
const keyPressed = (e) => {
    let target = e.target;
    let value = e.target.value;

    if (value.length <= 7) {
        target.style.color = 'red'
         
         target.style.border = '2px solid red';
        console.log('Input length is 7 or less');
        //console.log(target.style)
    } else if (value.length <= 10) {
        target.style.color = 'orange'
        
         target.style.border = '2px solid orange';
        console.log('Input length is less than or equal to 10');
    } else {
        target.style.color = 'green'
        
         target.style.border = '2px solid green';
        console.log('Input length is above 10');
    }

    if (e.key === "Enter") {
        console.log('Entered Value:', e.target.value); 
    }
};

// Function to handle submission logic
const submitted = () => {
    console.log('Submitted Value:', textInput.value);
};

// Dynamically update output text content
const displayText = () => {
    let output = document.getElementById('output');
    if (!output) {
        output = document.createElement('div');
        output.id = 'output';
    }
    output.textContent = textInput.value;
};

textInput.addEventListener('keyup', (e) => {
    displayText();   // Updates display text as you type
    keyPressed(e);   // Logs logic based on length
});

myBtn.addEventListener('click', submitted);

ptag.innerText = "hello world";
myBtn.innerText = 'Click me';

body.appendChild(ptag);
body.appendChild(textInput);
body.appendChild(myBtn);

console.log(body);
console.log(ptag);
console.log(textInput);
console.log(textInput.value);
