/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
    const response = await fetch('', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    }catch(error) {
        console.log('hello');
        console.log("error".error);
        // appropriately handle the error
    }
}

const getZipCode = async (baseURL, zip, key)=>{
    const res = await fetch('/sendZip');
    try {
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log('error'.error);

    }
}


// TODO-Call Function
console.log('here')
postData('/formData', {animal:'Giraff'});

// Event listener for Generate Click
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', clicked);

function clicked(event) {
    console.log("Clicked")
    const zip = document.getElementById('zip');
    console.log(zip.value);
    postData('/formData', {zip:zip.value});
}