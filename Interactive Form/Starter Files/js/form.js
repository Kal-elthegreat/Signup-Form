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
    
    // total = total + 100;
    // $label.text('Total:'+ total);


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

// create variables
const userName = document.getElementById('name');
const userEmail = document.getElementById('mail');
const userCC = document.getElementById('cc-num');
const userZip = document.getElementById('zip');
const userCVV = document.getElementById('cvv');

//event listeners to test validation

// name field

let name = false;
userName.addEventListener('input', function(event){

    let $nameReg = new RegExp('^[A-Za-z]*\\s?[A-Za-z]+$');
    const isValidName = $nameReg.test($('input#name').val())
    if(isValidName){
        $('input#name').css('color','black')
        name = true;
    } else {
        $('input#name').css('color','red')
    
    }

})

 // email field 

 let email = false;
userEmail.addEventListener('input',() => {
    let $emailReg = new RegExp('^[^@]+@[^\\.]+\\.[a-z]+$');
    const isValidEmail = $emailReg.test($('input#mail').val())
    if(isValidEmail){
        $('input#mail').css('color','black')
        email = true;
    } else {
        $('input#mail').css('color','red')
        console.log('bad')
    }
    
})

// cc field

let cc = false;

userCC.addEventListener('input',() =>{
    let $cardReg = new RegExp('^\\d{13,16}$');
    const isValidCard = $cardReg.test($('input#cc-num').val())
    if(isValidCard){
        $('input#cc-num').css('color','black')
        cc = true
    } else {
        $('input#cc-num').css('color','red')
        console.log('bad')
    }
})

// //zip field
let zip = false

userZip.addEventListener('input', () =>{
    let $zipReg = new RegExp ('^\\d{5}$')
    const isValidZip = $zipReg.test($('input#zip').val())
    if(isValidZip){
        $('input#zip').css('color','black');
        zip = true;
    } else {
        $('input#zip').css('color','red')
    }
})

//cvv field


let cvv = false

userCVV.addEventListener('input', () => {
    let $cvvReg = new RegExp ('^\\d{3}$')
    const isValidCVV = $cvvReg.test($('input#cvv').val())

    if(isValidCVV){
        $('input#cvv').css('color','black');
        cvv = true
    } else {
        $('input#cvv').css('color','red')
    }

})

/*********** Prevent Default **************/

const $button = $('button');
$button.on('click', function(event){
    if($('input:checked').length === 0){
        event.preventDefault();
        $('.activities legend').css('color', 'red')
        alert(`Please choose 1 activity.`)
    }
    if(name === false){
        event.preventDefault();
        $('fieldset legend').first().css('color', 'red');
        alert(`Please enter a valid name`);
    }  
    if (email === false){
        event.preventDefault();
        $('fieldset legend').first().css('color', 'red');
        alert(`Please enter a valid email`);
    } 
     if (cc === false){
        event.preventDefault();
        $('fieldset legend').last().css('color', 'red');
        alert(`Card must contain 13-16 digits`);
    }
     if (zip === false){
        event.preventDefault();
        $('fieldset legend').last().css('color', 'red');
        alert(`Please enter 5 digit zip`);
    }
     if (cvv === false){
        event.preventDefault();
        $('fieldset legend').last().css('color', 'red');
        alert(`Please enter a 3 digit cvv`);

    }
})