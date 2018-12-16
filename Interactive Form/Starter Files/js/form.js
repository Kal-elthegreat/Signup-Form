console.log('GameTime')

/************ Unit 3 *****************/

/******************** Payment Info **************/

const $paymentParagraphs = $('div p');
$paymentParagraphs.hide();

$('#payment').on('change',function(){ 
    if(  $('#payment').val() == $('#payment option').eq(2).val()){
      $paymentParagraphs.eq(0).show(); //show() paypal
      $paymentParagraphs.eq(1).hide(); // hide() bitcoin if it's showing
    } else if($('#payment').val()==$('#payment option').eq(3).val()){ 
       $paymentParagraphs.eq(1).show(); //show() bitcoin
       $paymentParagraphs.eq(0).hide() // hide() paypal if it's showing
    }
})
























































/* for later use
const regexName = /^[a-z\s]+/i  (name field regex)
const regexEmail = /^[^@]+@[^\.]+\.[a-z]+$/i (email field regex)
  */