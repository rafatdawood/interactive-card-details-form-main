let place_number = document.querySelector('.number');
let place_name = document.querySelector('.name');
let place_exp = document.querySelector('.exp');
let place_cvc = document.querySelector('.cvc');

let error_span = document.querySelectorAll(".error");

let inp_card_holder = document.getElementById('card-holder');
let inp_card_number = document.getElementById('card-number');
let inp_month = document.getElementById('mm');
let inp_year = document.getElementById('yy');
let inp_cvc = document.getElementById('cvc');
let confirm = document.getElementById('confirm');


function changeDate(part, type) {
    let r = place_exp.innerHTML.split("/");
    r[part] = type.value;
    place_exp.innerHTML = r.join('/');
}

function chack_name() {
    inp_card_holder.addEventListener('keyup', e => {
        place_name.innerHTML = e.target.value.toUpperCase();
    });
    inp_card_holder.addEventListener('focusout', e => {
        let namereg = /\w+\s\w+/g;
        if (e.target.value == '') {
            error_span[0].innerHTML = "Can't be blank";
            error_span[0].style.display = 'block';
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else if (namereg.test(e.target.value) == false && e.target.value != '') {
            error_span[0].innerHTML = "Incorrect name";
            error_span[0].style.display = 'block';
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else {
            error_span[0].style.display = 'none';
            e.target.style.borderColor = 'hsl(270, 3%, 87%)';
        }
    })
}
chack_name();



function chack_number() {
    inp_card_number.addEventListener("keyup", e => {
        e.target.value = e.target.value.split(' ').join('').match(/.{1,4}/g).join(' ');
        place_number.innerHTML = e.target.value;
    });
    inp_card_number.addEventListener("focusout", e => {
        numreg = /\d{4}\s\d{4}\s\d{4}\s\d{4}/g;
        if (e.target.value.length == 0) {
            error_span[1].innerHTML = "Can't be blank";
            error_span[1].style.display = "block";
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else if (numreg.test(e.target.value) == false && e.target.value.length == 19) {
            error_span[1].innerHTML = "Wrong format, numbers only";
            error_span[1].style.display = "block";
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else if (e.target.value.length < 19 && e.target.value.length > 0) {
            error_span[1].innerHTML = "Invalid number";
            error_span[1].style.display = "block";
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else {
            error_span[1].style.display = "none";
            e.target.style.borderColor = 'hsl(270, 3%, 87%)';
        }
    });

}
chack_number();



function check_mm() {
    inp_month.addEventListener("keyup", e => {
        changeDate(0, inp_month)
    })
    inp_month.addEventListener("focusout", e => {
        let mmreg = /\d+/g
        if (e.target.value == '') {
            e.target.value = '';
            error_span[2].innerHTML = "Can't be blank";
            error_span[2].style.display = 'inline-block';
            e.target.style.borderColor = "hsl(0, 100%, 66%)";
            changeDate(0, inp_month)
        } else if (e.target.value > 12 || e.target.value <= 0) {
            e.target.value = '';
            error_span[2].innerHTML = "Invalid number";
            error_span[2].style.display = 'block';
            e.target.style.borderColor = "hsl(0, 100%, 66%)";
            changeDate(0, inp_month)
        } else if (e.target.value.length < 2 && e.target.value > 0 && e.target.value < 10 && mmreg.test(e.target.value)) {
            e.target.value = `0${e.target.value}`;
            error_span[2].style.display = 'none';
            e.target.style.borderColor = "hsl(270, 3%, 87%)";
            changeDate(0, inp_month)
        } else if (mmreg.test(e.target.value) == false) {
            e.target.value = '';
            error_span[2].innerHTML = "Wrong format, numbers only";
            error_span[2].style.display = 'block';
            e.target.style.borderColor = "hsl(0, 100%, 66%)";
            changeDate(0, inp_month)
        } else {
            e.target.value = e.target.value;
            error_span[2].style.display = 'none';
            e.target.style.borderColor = "hsl(270, 3%, 87%)";
            changeDate(0, inp_month)
        }
    })
}

check_mm()



function check_yy() {
    inp_year.addEventListener("keyup", e => {
        changeDate(1, inp_year)
    })
    inp_year.addEventListener("focusout", e => {
        let yyreg = /\d+/g
        if (e.target.value == '') {
            e.target.value = '';
            error_span[3].innerHTML = "Can't be blank";
            error_span[3].style.display = 'inline-block';
            e.target.style.borderColor = "hsl(0, 100%, 66%)";
            changeDate(1, inp_year)
        } else if (e.target.value < 0) {
            e.target.value = '';
            error_span[3].innerHTML = "Invalid number";
            error_span[3].style.display = 'block';
            e.target.style.borderColor = "hsl(0, 100%, 66%)";
            changeDate(1, inp_year)
        } else if (e.target.value.length < 2 && e.target.value >= 0 && yyreg.test(e.target.value)) {
            e.target.value = `0${e.target.value}`;
            error_span[3].style.display = 'none';
            e.target.style.borderColor = "hsl(270, 3%, 87%)";
            changeDate(1, inp_year)
        } else if (yyreg.test(e.target.value) == false) {
            e.target.value = '';
            error_span[3].innerHTML = "Wrong format, numbers only";
            error_span[3].style.display = 'block';
            e.target.style.borderColor = "hsl(0, 100%, 66%)";
            changeDate(1, inp_year)
        } else {
            e.target.value = e.target.value;
            error_span[3].style.display = 'none';
            e.target.style.borderColor = "hsl(270, 3%, 87%)";
            changeDate(1, inp_year)
        }
    })
}

check_yy()


function check_cvc() {
    inp_cvc.addEventListener("keyup", e => {
        place_cvc.innerHTML = e.target.value;
    });
    inp_cvc.addEventListener("focusout", e => {
        let b = "yes";
        e.target.value.split("").forEach(e => {
            if (isNaN(e)) {
                b = "no"
            }
        })
        if (e.target.value.length == 0) {
            error_span[4].innerHTML = "Can't be blank";
            error_span[4].style.display = "block";
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else if (b == "no") {
            error_span[4].innerHTML = "Wrong format, numbers only";
            error_span[4].style.display = "block";
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else if (e.target.value.length < 3) {
            error_span[4].innerHTML = "Invalid number";
            error_span[4].style.display = "block";
            e.target.style.borderColor = 'hsl(0, 100%, 66%)';
        } else {
            error_span[4].style.display = "none";
            e.target.style.borderColor = 'hsl(270, 3%, 87%)';
        }
    });
}

check_cvc()

// let b = "yes"
// let cvcreg = /\d{1,}/g;
// // console.log("skks".split(" "))
// " 2".split("").forEach(e => {
//     if (cvcreg.test(e) == false) {
//         b = "no"
//     }
// })