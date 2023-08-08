let deci = document.querySelector('#dec');
let content = document.querySelector('#text-num');
var value = content.textContent;
deci.addEventListener('click',function(){
   content.textContent = --value;
   console.log('ok');
});
let inci = document.querySelector('#inc');
inci.addEventListener('click',function(){
    content.textContent = ++value;
    console.log('ok');
 });
 function reset(){
   value = 0;
   content.textContent = value;
 }
