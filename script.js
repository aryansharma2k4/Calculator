let res = document.querySelector('.result');
let alClr = document.querySelector('#ac');
alClr.addEventListener('click',function(){
      res.innerHTML = '0';
},false);
let one = document.querySelector('#one');
one.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = one.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + one.innerHTML;
      }
},false);
let two = document.querySelector('#two');
two.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = two.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + two.innerHTML;
      }
},false);
let three = document.querySelector('#three');
three.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = three.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + three.innerHTML;
      }
},false);
let four = document.querySelector('#four');
four.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = four.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + four.innerHTML;
      }
},false);
let five = document.querySelector('#five');
five.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = five.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + five.innerHTML;
      }
},false);
let six = document.querySelector('#six');
six.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = six.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + six.innerHTML;
      }
},false);
let seven = document.querySelector('#seven');
seven.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = seven.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + seven.innerHTML;
      }
},false);
let eight = document.querySelector('#eight');
eight.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = eight.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + eight.innerHTML;
      }
},false);
let nine = document.querySelector('#nine');
nine.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = nine.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + nine.innerHTML;
      }
},false);
let zero = document.querySelector('p#zero');
zero.addEventListener('click',function(){
      if(res.innerHTML == '0'){
            res.innerHTML = zero.innerHTML;
      }
      else{
            res.innerHTML = res.innerHTML + zero.innerHTML;
      }
},false);

document.addEventListener('keydown', function(event) {
      if (event.key === '1') {
            if(res.innerHTML == '0'){
                  res.innerHTML = '1';
            }
            else{
                  res.innerHTML = res.innerHTML + '1';
            }
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
      }
});
document.addEventListener('keydown', function(event) {
      if (event.key === 'Backspace') {
            res.innerHTML = '0';
      }
});
let op =0;

let plus = document.querySelector('#addition');
plus.addEventListener('click',function(){
      plus.style.backgroundColor = '#ddc094';
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '0';
      op = 1;
})
let subtraction = document.querySelector('#subtraction');
subtraction.addEventListener('click',function(){
      subtraction.style.backgroundColor = '#ddc094';
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '0';
      op = 2;
})
let multiplication = document.querySelector('#multiplication');
multiplication.addEventListener('click',function(){
      multiplication.style.backgroundColor = '#ddc094';
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '0';
      op =3;
})
let division = document.querySelector('#division');
division.addEventListener('click',function(){
      division.style.backgroundColor = '#ddc094';
      frpt = parseInt(res.innerHTML);
      res.innerHTML = '0';
      op =4;
})
let scpt = 0;
let equal = document.querySelector('#equal');
equal.addEventListener('click', function() {
    scpt = parseInt(res.innerHTML);
    if (op == 1) {
      res.innerHTML = frpt + scpt;
   } 
   else if (op == 2) {
      res.innerHTML = frpt - scpt;
   }
    else if (op == 3) {
      res.innerHTML = frpt * scpt;
   }
    else if (op == 4) {
      res.innerHTML = frpt / scpt;
  }
});







