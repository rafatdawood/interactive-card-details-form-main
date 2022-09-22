let place_number = document.querySelector('.number');
let place_name = document.querySelector('.name');
let place_exp = document.querySelector('.exp');
let plase_cvc = document.querySelector('.cvc');

let error_span = document.createElement('span');
error_span.classList.add('error');

let inp_card_holder = document.getElementById('card-holder');
let inp_card_number = document.getElementById('card-number');
let inp_month = document.getElementById('mm');
let inp_year = document.getElementById('yy');
let inp_cvc = document.getElementById('cvc');
let confirm = document.getElementById('confirm');


function chack_name(){
    inp_card_holder.addEventListener('keyup', e => {
        place_name.innerHTML = e.target.value;
        inp_card_holder.addEventListener('focusout', e => {
            let namereg = /\w+\s\w+/g;
            if (namereg.test(inp_card_holder) == true || inp_card_holder.value == '') {
                error.span.innerHTML = 'Incorrct name';
                inp_card_holder.appendChild(error_span);
            }else {
                
               
            }
        })
    })
}
chack_name();



function chack_number(){
    inp_card_number.addEventListener("keyup", e =>{
        e.target.value = e.target.value.split(' ').join('').match(/.{1,4}/g).join(' ');
         place_number.innerHTML = e.target.value;
    })
    
}
chack_number();

function check_mm(){
    inp_month.addEventListener("keyup", e =>{
         inp_month.addEventListener("focusout", e => {
             if (e.target.value.length == 1 && e.target.value > 0){
                 e.target.value = `0${e.target.value}`
             }else if (e.target.value > 12 || e.target.value <= 0){
                 e.target.value = '';
             }else{
                 e.target.value = e.target.value
             }
         })
    })
}

check_mm()



function check_yy(){
    inp_year.addEventListener("keyup", e =>{
         inp_year.addEventListener("focusout", e => {
             if (e.target.value.length == 1 && e.target.value > 0){
                 e.target.value = `0${e.target.value}`
             }else if(e.target.value <= 0){
                 e.target.value = ''
             }else{
                 e.target.value = e.target.value
             }
         })
    })
}

check_yy()


function check_cvc(){
    inp_cvc.addEventListener("keyup", e =>{
         inp_cvc.addEventListener("focusout", e => {
             if (e.target.value.length < 3 || e.target.value < 0){
                 e.target.value = ''
             }else{
                 e.target.value = e.target.value
             }
         })
    })
}

check_cvc()

