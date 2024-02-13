// import {addToDB} from '../App.js';

const data = [];

export function addToDB(){
    const gameName = document.querySelector('#gameName').value;
    const price = document.querySelector('#price').value;
    if(gameName === ''){
        const label = document.querySelectorAll('label')[0];
        console.log(document.querySelectorAll('label'));
        label.style = 'color: red;';
        label.innerText = 'Game name field can`t be empty'
    } else if(price === ''){
        const label = document.querySelectorAll('label')[1];
        label.style = 'color: red;';
        label.innerText = 'Price field can`t be empty'
    } else{
        const newElement = {
            Game_name: gameName,
            Price: price,
        };
        document.querySelector('#gameName').value = '';
        document.querySelector('#price').value = '';
        console.log(data);
        return data.splice(data.length, 0, newElement);
    }
  }