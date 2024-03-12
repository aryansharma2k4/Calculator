let res = document.querySelector('.result');
let alClr = document.querySelector('#ac');

function styleReset(){
      plus.style.backgroundColor = ''
      subtraction.style.backgroundColor='';
      multiplication.style.backgroundColor='';
      division.style.backgroundColor='';
      plus.style.color = ''
      subtraction.style.color='';
      multiplication.style.color='';
      division.style.color='';
}

function styleChange(ele){
      ele.style.backgroundColor = '#ffffff';
      ele.style.color = '#ffad32';
      ele.style.transition = 'color 0.5s ease';
      ele.style.transition = 'background-color 0.5s ease';
}

function keyStyleChange(ele){
      ele.style.backgroundColor = '#8a8a8a';
      ele.style.transition = 'background-color 1s ease';
      setTimeout(() => {
            ele.style.backgroundColor = '';
      }, 200);

}
alClr.addEventListener('click',function(){
      res.innerHTML = '0';
      alClr.style.backgroundColor = '#ffffff';
      alClr.style.transition = 'background-color 1s ease';
      setTimeout(() => {
            alClr.style.backgroundColor = '';
      }, 200);
},false);
let op =0;

let plus = document.querySelector('#addition');
plus.addEventListener('click',function(){
      styleChange(plus);
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '';
      op = 1;
})
let subtraction = document.querySelector('#subtraction');
subtraction.addEventListener('click',function(){
      styleChange(subtraction);
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '';
      op = 2;
})
let multiplication = document.querySelector('#multiplication');
multiplication.addEventListener('click',function(){
      styleChange(multiplication);
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '';
      op =3;
})
let division = document.querySelector('#division');
division.addEventListener('click',function(){
      styleChange(division);
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '';
      op =4;
})
let sign = document.querySelector('#sign');
sign.addEventListener('click',function(){
      sign.style.backgroundColor = '#ffffff';
      sign.style.transition = 'background-color 1s ease';
      setTimeout(() => {
            sign.style.backgroundColor = '';
      }, 200);
      res.innerHTML = -res.innerHTML;
      frpt = parseInt(res.innerHTML);
})
let percentage = document.querySelector('#percentage');
percentage.addEventListener('click',function(){
      percentage.style.backgroundColor = '#ffffff';
      percentage.style.transition = 'background-color 1s ease';
      setTimeout(() => {
            percentage.style.backgroundColor = '';
      }, 200);
      frpt = parseInt(res.innerHTML);
      res.innerHTML = frpt/100;
})
document.addEventListener('keydown', function(event) {
      if (event.key === '+') {
             styleChange(plus);
             frpt = parseInt(res.innerHTML);
             res.innerHTML = '';
      op = 1;
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '-') {
            styleChange(subtraction);
             frpt = parseInt(res.innerHTML);
             res.innerHTML = '';
      op = 2;
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '*') {
            styleChange(multiplication);
             frpt = parseInt(res.innerHTML);
             res.innerHTML = '';
      op = 3;
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '/') {
            styleChange(division);
             frpt = parseInt(res.innerHTML);
             res.innerHTML = '';
      op = 4;
      }
});  


let one = document.querySelector('#one');
one.addEventListener('click',function(){
      plus.style.backgroundColor = '';
      if(res.innerHTML == '0'){
            res.innerHTML = one.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + one.innerHTML;
      }
      styleReset();
      keyStyleChange(one);

},false);
let two = document.querySelector('#two');
two.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = two.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + two.innerHTML;
      }
       styleReset();
      keyStyleChange(two);


},false);
let three = document.querySelector('#three');
three.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = three.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + three.innerHTML;
      }
       styleReset();
      keyStyleChange(three);

},false);
let four = document.querySelector('#four');
four.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = four.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + four.innerHTML;
      }
       styleReset();
      keyStyleChange(four);

},false);
let five = document.querySelector('#five');
five.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = five.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + five.innerHTML;
      }
       styleReset();
      keyStyleChange(five);

},false);
let six = document.querySelector('#six');
six.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = six.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + six.innerHTML;
      }
       styleReset();
      keyStyleChange(six);

},false);
let seven = document.querySelector('#seven');
seven.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = seven.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + seven.innerHTML;
      }
       styleReset();
      keyStyleChange(seven);

},false);
let eight = document.querySelector('#eight');
eight.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = eight.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + eight.innerHTML;
      }
       styleReset();
      keyStyleChange(eight);

},false);
let nine = document.querySelector('#nine');
nine.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = nine.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + nine.innerHTML;
      }
       styleReset();
      keyStyleChange(nine);
},false);
let zero = document.querySelector('p#zero');
zero.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = zero.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + zero.innerHTML;
      }
       styleReset();
      keyStyleChange(zero);

},false);

document.addEventListener('keydown', function(event) {
      if (event.key === '1') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '1';
            }
            else{
                  res.innerHTML = res.innerHTML + '1';
            }
            styleReset();
            keyStyleChange(one);
      }
});

document.addEventListener('keydown', function(event) {
      if (event.key === '2') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '2';
            }
            else{
                  res.innerHTML = res.innerHTML + '2';
            }
            styleReset();
            keyStyleChange(two);

      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '3') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '3';
            }
            else{
                  res.innerHTML = res.innerHTML + '3';
            }
            styleReset();
            keyStyleChange(three);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '4') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '4';
            }
            else{
                  res.innerHTML = res.innerHTML + '4';
            }
            styleReset();
            keyStyleChange(four);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '5') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '5';
            }
            else{
                  res.innerHTML = res.innerHTML + '5';
            }
            styleReset();
            keyStyleChange(five);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '6') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '6';
            }
            else{
                  res.innerHTML = res.innerHTML + '6';
            }
            styleReset();
            keyStyleChange(six);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '7') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '7';
            }
            else{
                  res.innerHTML = res.innerHTML + '7';
            }
            styleReset();
            keyStyleChange(seven);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '8') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '8';
            }
            else{
                  res.innerHTML = res.innerHTML + '8';
            }
            styleReset();
            keyStyleChange(eight);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '9') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '9';
            }
            else{
                  res.innerHTML = res.innerHTML + '9';
            }
            styleReset();
            keyStyleChange(nine);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === '0') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '0';
            }
            else{
                  res.innerHTML = res.innerHTML + '0';
            }
            styleReset();
            keyStyleChange(zero);
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === 'Backspace') {
            alClr.style.backgroundColor = '#ffffff';
            alClr.style.transition = 'background-color 1s ease';
            setTimeout(() => {
                  alClr.style.backgroundColor = '';
            }, 200);
            res.innerHTML = '0';
            styleReset();
            keyStyleChange();
      }
});
let scpt = 0;
const equal = document.querySelector('#equal');

function calculateResult() {
    scpt = parseInt(res.innerHTML);
    if (op == 1) {
        res.innerHTML = frpt + scpt;
        frpt = parseInt(res.innerHTML);
    } else if (op == 2) {
        res.innerHTML = frpt - scpt;
        frpt = parseInt(res.innerHTML);
    } else if (op == 3) {
        res.innerHTML = frpt * scpt;
        frpt = parseInt(res.innerHTML);
    } else if (op == 4) {
        res.innerHTML = frpt / scpt;
        frpt = parseInt(res.innerHTML);
    }
}

equal.addEventListener('click', calculateResult);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      equal.style.backgroundColor = '#ffffff';
      equal.style.color = '#ffad32';
      equal.style.transition = 'color 0.5s ease';
      equal.style.transition = 'background-color 0.5s ease';
      setTimeout(() => {
            equal.style.backgroundColor = '';
            equal.style.color = '';
      }, 200);
      event.preventDefault();
      calculateResult();
    }
});