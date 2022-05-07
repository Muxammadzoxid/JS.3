/* YOW************ */

// var number = +prompt('Yoshingizni kiriting')
// if (number < 0 ) {
//     alert('oqiwiz kere ')
// }else if (number < 18) {
//     alert('oqiwiz kere ')
// }else if (number < 50 ) {
//     alert('ishlashingiz kerak')
// }else if (number < 59 ) {
//     alert('siz yaqinda nafaqaga ciqasiz')
// }else if (number < 150 ){
//     alert ('siz nafaqadoshsiz')

// }
// else if  (isNaN(number))  {
//     alert ('nimadur notogri ketti')
// }

/* SOAT************ */

// var number = +prompt ('Soatni kiriting')
// if (number < 18) {
//     alert('soat kundizgi ' + (number - 12))
// }else if (number < 21) {
//     alert('soat kechgi ' + (number - 12))
// }else if (number < 24) {
//     alert('soat tungi ' + (number - 12))
// }else if  (isNaN(number))  {
//     alert ('soatni kirgiz')
// }


/* SON&&&&&&&&&&&&& */




/* YOW */

// var age = +prompt('Yowingizni kiriting!')

// if(age > 0 && age <= 18) {
//     alert('Siz yowsiz!')
// }else if(age > 18 && age <= 50) {
//     alert('Iwlawingiz kerak!')
// }else if(age > 50 && age <= 60) {
//     alert('Siz yaqinda nafaqaga cqasz!')
// }else if(age > 60 && age < 150) {
//     alert('Siz nafaqaxorsiz')
// }else {
//     console.info('Qandaydir xatolik keldi')
// }

/* SOAT */

// var time = +prompt('Soat neci bo\'ldi')

// if(time > 0 && time <= 3) {
//     alert('soat tungi ' + time)
// }else if(time < 3 && time <= 7) {
//     alert('soat tongi ' + time)
// }else if(time  < 7 && time <= 12) {
//     alert('soat kundizgi ' + time)
// }else if(time < 12 && time + 17) {
//     alert('soat tuwgi ' + (time - 12))
// }else if(time < 17 && time + 21) {
//     alert('soat kechki ' + (time - 12))
// }else if(time < 21 && time + 23) {
//     alert('soat tungi ' + (time - 12))
// }else if(time == 24|| time == 0) {
//     alert('soat tungi 12')
// }else {
//     console.error('xato kiritingiz!')
// }


/* O'rta soni topiw *********/

var num1 = +prompt('Birinici sonni kiriting!')
var num2 = +prompt('Ikkinci sonni kiriting!')
var num3 = +prompt('Ucinci sonni kiriting!')

if(num1 < (num2 && num1 > num3) || (num1 > num2 && num1 < num3) && !isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    alert('Orta qiymat ' + num1)
}else if((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)  && !isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    alert('Orta qiymat ' + num2)
}else if((num3 < num1 && num3 > num2) || (num3 > num1 && num3 < num2)  && !isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    alert('Orta qiymat ' + num3)
}else {
    if(isNaN(num1) && isNaN(num2) && isNaN(num3)){
        console.error('Siz umuman son kiritmadiz!')
    }
    else if(!isNaN(num1) && isNaN(num2) && isNaN(num3)){
        console.error('Ikinci va ucinci soningiz son emas!')
    }
    else if(isNaN(num1) && !isNaN(num2) && isNaN(num3)){
        console.error('Birinci va ucinci soningiz son emas!')
    }
    else if(isNaN(num1) && isNaN(num2) && !isNaN(num3)){
        console.error('Birinci va ikkinci soningiz son emas!')
    }
    else if(isNaN(num1) && isNaN(num2) && !isNaN(num3)){
        console.error('Birinci va ikkinci soningiz son emas!')
    }
    else if(!isNaN(num1) && !isNaN(num2) && isNaN(num3)){
        console.error('Ucinci soningiz son emas!')
    }
    else if(!isNaN(num1) && isNaN(num2) && !isNaN(num3)){
        console.error('Ikkinci soningiz son emas!')
    }
    else if(isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
        console.error('Birinci soningiz son emas!')
    }

    else if (num1 === num2 && num1 === num3){
        alert ('siz birxil raqam kiritiz')
    }
    else if(num3 === num1 ){
        alert ('birinci raqam uchinchiga teng')
    }
    else if (num2 === num3){
        alert ('Ikinchi va Uchinchi son birxil')
    }
    else if (num1 === num2){
        alert('Birinci ikinchi sonlarimiz birxil')
    }
}





 


