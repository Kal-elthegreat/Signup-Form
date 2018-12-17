console.log('GameTime')

/************ Unit 3 *****************/

/******************** Basic Info **************/

$('fieldset div').eq(0).hide();

$('#title').on('change',function(){
    //show other role input field
    if($('#title').val() == $('#title option').last().val()) {
        $('fieldset div').eq(0).show();   
    } else {
        $('fieldset div').eq(0).hide();
    }   
})

/******************** T-Shirt Info **************/


$('#design option').eq(0).hide(); // remove select theme option
$('#color').hide(); // hide color select menu

$('#design').on('change', function(){
    if($('#design').val() == $('#design option').eq(1).val()){ // design puns
        
        $('#color').show(); // show select menu

        $('#color option').eq(0).attr('selected', true);
         for(let i = 0; i < 3; i++){
            $('#color option').eq(i).show(); //show first 3 options
        }

        $('#color option').eq(3).attr('selected', false);
         for(let i =3; i < 6; i++){
            $('#color option').eq(i).hide(); // hide last 3 options
         }

    }
    if($('#design').val() == $('#design option').last().val()){ // design heart
        
        $('#color').show(); // show select menu

        $('#color option').eq(0).attr('selected', false);
         for(let i = 0; i < 3; i++){
            $('#color option').eq(i).hide();  // hide first 3 options
        }

        $('#color option').eq(3).attr('selected', true);
         for(let i = 3; i < 6; i++){
            $('#color option').eq(i).show(); // show last 3 options
        }
     
    }
})

/******************** Activities Info **************/

const $label = $('<label>Total:</label>'); // create total label
$('.activities').append($label) // add to activities

// if certain boxes are checked disable attr must be added to others w/ same time
// 1-4pm & 9-12pm
// total cost
// display in $label


/******************** Payment Info **************/

const $paymentParagraphs = $('div p');
$paymentParagraphs.hide(); // hide all p elements

$('#payment option').eq(0).hide(); 
$('#payment option').eq(1).attr('selected',true); // auto select CC option

$('#payment').on('change',function(){ 

    if(  $('#payment').val() == $('#payment option').eq(2).val()){
      $paymentParagraphs.eq(0).show(); //show() paypal
      $paymentParagraphs.eq(1).hide(); // hide() bitcoin if it's showing
      $('#credit-card').hide(); // hide() cc fields 
    } else if($('#payment').val()==$('#payment option').eq(3).val()){ 
       $paymentParagraphs.eq(1).show(); //show() bitcoin
       $paymentParagraphs.eq(0).hide() // hide() paypal if it's showing
       $('#credit-card').hide(); // hide() cc fields 
    } else {
        $('#credit-card').show(); // show() cc fields 
    }
})



















































/* for later use
const regexName = /^[a-z\s]+/i  (name field regex)
const regexEmail = /^[^@]+@[^\.]+\.[a-z]+$/i (email field regex)
  */