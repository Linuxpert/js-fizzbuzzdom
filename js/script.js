const squareCont = document.getElementById("containerSquare");

for(let i = 1; i <= 100; i++){


    if((i % 3 === 0)&&(i % 5 === 0)) {

        let square = `<div class="square red-square"> fizzbuzz </div>`;
        squareCont.innerHTML += square;

    }else if(i % 3 === 0) {

        let square = `<div class="square green-square"> fizz </div>`;
        squareCont.innerHTML += square;

    }else if(i % 5 === 0) {

        let square = `<div class="square yellow-square"> buzz </div>`;
        squareCont.innerHTML += square;

    }else{

        let square = `<div class="square"> ${i} </div>`;
        squareCont.innerHTML += square;

    }

    
}