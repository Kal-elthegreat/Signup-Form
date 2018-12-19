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

// look into toggle()

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
let total = 0
const $label = $('<label></label>'); // create total label
$('.activities').append($label) // add to activities

// if certain boxes are checked disable attr must be added to others w/ same time
                
$('.activities input').each(function(index){
    $('.activities input').eq(index).on('change', function(){
    
    if($('.activities input').eq(1).prop('checked')){
        $('.activities input').eq(3).attr('disabled', true);
        $('.activities label').eq(3).css('color', 'grey');

        $('.activities input').eq(5).attr('disabled', true);
        $('.activities label').eq(5).css('color', 'grey');

          
    } else if ($('.activities input').eq(3).prop('checked')){
        $('.activities input').eq(1).attr('disabled', true);
        $('.activities label').eq(1).css('color', 'grey');

        $('.activities input').eq(5).attr('disabled', true);
        $('.activities label').eq(5).css('color', 'grey');


    } else if($('.activities input').eq(5).prop('checked')){
        $('.activities input').eq(3).attr('disabled', true);
        $('.activities label').eq(3).css('color', 'grey');

        $('.activities input').eq(1).attr('disabled', true);
        $('.activities label').eq(1).css('color', 'grey');


    } else {
        $('.activities input:odd').attr('disabled', false)
        $('.activities label:odd').css('color', 'black');


    }
    if($('.activities input').eq(2).prop('checked')){
        $('.activities input').eq(4).attr('disabled', true);
        $('.activities label').eq(4).css('color', 'grey');

        $('.activities input').eq(6).attr('disabled', true);
        $('.activities label').eq(6).css('color', 'grey');

        
    } else if ($('.activities input').eq(4).prop('checked')){
        $('.activities input').eq(2).attr('disabled', true);
        $('.activities label').eq(2).css('color', 'grey');

        $('.activities input').eq(6).attr('disabled', true);
        $('.activities label').eq(6).css('color', 'grey');


    } else if($('.activities input').eq(6).prop('checked')){
        $('.activities input').eq(2).attr('disabled', true);
        $('.activities label').eq(2).css('color', 'grey');

        $('.activities input').eq(4).attr('disabled', true);
        $('.activities label').eq(4).css('color', 'grey');


    } else {
        $('.activities input:even').attr('disabled', false)
        $('.activities label:even').css('color', 'black');


    }
    
    total = total + 100;
    $label.text('Total:'+ total);


    })
})



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



/************************ Form Validation *****************/
const userName = document.getElementById('name');
const userEmail = document.getElementById('mail');
const userCC = document.getElementById('cc-num');
const userZip = document.getElementById('zip');
const userCVV = document.getElementById('cvv');

function isValidName (userName){
    return /^[A-Za-z]*\s?[A-Za-z]+$/.test($('input#name').val()) // test sname field
}

function isValidEmail (userEmail){
    return  /^[^@]+@[^\.]+\.[a-z]+$/i.test($('input#mail').val()) // test email field
}

function isValidCC (userCC){
   return /^\d{13,16}$/.test($('input#cc-num').val()) // test cc field
}

function isValidZip(userZip){
    return /^\d{5}$/.test($('input#zip').val()) // test zip field
}

function isValidCVV (userCVV){
   return /^\d{3}$/.test($('input#cvv').val()) // test cvv field
}

userName.addEventListener('input',(isValidName)=>{

})

userEmail.addEventListener('input',(isValidEmail) => {
    
})

userCC.addEventListener('input',(isValidCC) =>{

})


    
