
const data = [];

export function addToDB(){
    const gameName = document.querySelector('#gameName').value;
    const price = document.querySelector('#price').value;
    if(gameName === '' || price === ''){
        if(gameName === ''){
           const label = document.querySelectorAll('label')[0];
           label.style = 'color: red;';
           label.innerText = 'Game name field can`t be empty'
        }
        if(price === ''){
           const label = document.querySelectorAll('label')[1];
           label.style = 'color: red;';
           label.innerText = 'Price field can`t be empty'
        }
    } else{
        const newElement = {
            Game_name: gameName,
            Price: price,
        };
        const label = document.querySelectorAll('label');
        label.forEach((el) => {
            el.style = 'color: #000;';
        })
        document.querySelector('#gameName').value = '';
        label[0].innerText = 'Game name:';
        document.querySelector('#price').value = '';
        label[1].innerText = 'Price:';
        return data.splice(data.length, 0, newElement);
    }
  }