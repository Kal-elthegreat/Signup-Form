console.log('GameTime')

/************ Unit 3 *****************/

/******************** Payment Info **************/

const $paymentParagraphs = $('div p');
$paymentParagraphs.hide();

$('#payment option').on('click',function(){ // <--- selector not correct....how to fix???
    if( e = $('#payment option').eq(2)){
      $paymentParagraphs.eq(0).show(); //show() paypal
    }
    if( e = $('#payment option').eq(3)){ 
       $paymentParagraphs.eq(1).show(); //show() bitcoin
    }
})
























































/* for later use
const regexName = /^[a-z\s]+/i  (name field regex)
const regexEmail = /^[^@]+@[^\.]+\.[a-z]+$/i (email field regex)
  */