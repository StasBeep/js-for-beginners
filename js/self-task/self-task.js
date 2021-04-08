"use strict";


function name() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    let y = Number(document.getElementById('y').value);
    let x = Number(document.getElementById('x').value);


    if (x >= 3 && x <= 4) {
        console.log(Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2)));
        // document.getElementById('z').value = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
        // return min;

    } else if (x < 3) {
        // Предположение, что y - максимальное число
        let max = y;
        if (max < c) {
            max = c;
        }
        if (max < Math.pow(x, 2)) {
            max = Math.pow(x, 2);
        }

        let min = a;
        if (min > max) {
            min = max;
        }
        console.log(min);
        // document.getElementById('z').value =  min;
        // return min;
    } else {
        let max = a * x + c;
        if (max < Math.pow(y, 3)) {
            max = Math.pow(y, 3);
        }
        console.log(max);
        // document.getElementById('z').value = max.toString();
        // return min;
    }
}

const buttonEl = document.querySelector('button');

let s = buttonEl.addEventListener('click', name);

// document.getElementById('z').value = s;
// document.getElementById('z') = s;