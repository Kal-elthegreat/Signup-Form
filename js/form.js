console.log('GameTime')

/************ Unit 3 *****************/

/******************** Basic Info **************/
$('fieldset div').first().hide(); // hide "other" on load

//show "other" role input field
$('#title').on('change', () => { $('#title').val() === $('#title option').last().val() ?
    $('fieldset div').first().show() :
    $('fieldset div').first().hide()
});
/******************** T-Shirt Info **************/
$('#design option').first().hide(); // remove select theme option
$('#color').hide(); // hide color select menu

$('#design').on('change', function(){
    $("#color").show();
    
    const $options = $("#design option").not($("#design option").first()); // excludes "select theme" in arr
    if ($('#design').val() === $options.first().val()){
        $('#color option').first().attr('selected', true);

        $('#color option').each(function(index, element){
            index >= 3 ? $(element).hide() : $(element).show();
        })
    } else {
        $('#color option').first().attr('selected', false);
        $('#color option').eq(3).attr('selected', true);

        $("#color option").each(function(index, element) {
            index < 3 ? $(element).hide() : $(element).show();
        });
    }
})

/******************** Activities Info **************/
let total1 = 0;
let total2 = 0;
let total3 = 0;
let showTotal = 0;
const $label = $('<label></label>'); // create total label
$('.activities').append($label) // add to activities

// if certain boxes are checked disable attr must be added to others w/ same time
                
$('.activities input').each(function(index){
    $('.activities input').eq(index).on('change', function(){
        let $selectedInput = $(".activities input").eq(index);
        
        if ($selectedInput.attr("name") === "js-frameworks" && $selectedInput.prop('checked')) {
            $(".activities label").eq(3).toggleClass("disabled");
            $(".activities input").eq(3).attr("disabled", true);
            total1 = 100;
            $label.text("Total:" + total1);
        } else if ($selectedInput.attr("name") === "express" && $selectedInput.prop('checked')) {
            $(".activities label").eq(1).toggleClass("disabled");
            $(".activities input").eq(1).attr("disabled", true);
            total1 = 100;
            $label.text("Total:" + total1);
        } else if ($selectedInput.attr("name") === "express" && !$selectedInput.prop('checked') || $selectedInput.attr("name") === "js-frameworks" && !$selectedInput.prop('checked')) {
            
            $(".activities label").eq(1).removeClass("disabled");
            $(".activities input").eq(1).attr("disabled", false);

            $(".activities label").eq(3).removeClass("disabled");
            $(".activities input").eq(3).attr("disabled", false);

            total1 = 0
            $label.text("Total:" + total1);
        }     
    })
    //     console.log($('.activities label').eq(index).val());
    // // all buttons 9-12pm
    // if($('.activities input').eq(1).prop('checked')){
    //     $('.activities input').eq(3).attr('disabled', true);
    //     $('.activities label').eq(3).css('color', 'grey');

    //     $('.activities input').eq(5).attr('disabled', true);
    //     $('.activities label').eq(5).css('color', 'grey');

    //     total1 = 100
        //$label.text('Total:'+ total);

          
    // } else if ($('.activities input').eq(3).prop('checked')){
    //     $('.activities input').eq(1).attr('disabled', true);
    //     $('.activities label').eq(1).css('color', 'grey');

    //     $('.activities input').eq(5).attr('disabled', true);
    //     $('.activities label').eq(5).css('color', 'grey');

    //     total1 = 100
    //     //$label.text('Total:'+ total);


    // } else if($('.activities input').eq(5).prop('checked')){
    //     $('.activities input').eq(3).attr('disabled', true);
    //     $('.activities label').eq(3).css('color', 'grey');

    //     $('.activities input').eq(1).attr('disabled', true);
    //     $('.activities label').eq(1).css('color', 'grey');

    //     total1 = 100
    //     //$label.text('Total:'+ total);


    // } else {
    //     $('.activities input:odd').attr('disabled', false)
    //     $('.activities label:odd').css('color', 'black');
    //     total1 = 0;
    //     //$label.text('Total:'+ total);


    // }
    // // all buttons 1-4pm
    // if($('.activities input').eq(2).prop('checked')){
    //     $('.activities input').eq(4).attr('disabled', true);
    //     $('.activities label').eq(4).css('color', 'grey');

    //     $('.activities input').eq(6).attr('disabled', true);
    //     $('.activities label').eq(6).css('color', 'grey');

    //     total2 = 100;

        
    // } else if ($('.activities input').eq(4).prop('checked')){
    //     $('.activities input').eq(2).attr('disabled', true);
    //     $('.activities label').eq(2).css('color', 'grey');

    //     $('.activities input').eq(6).attr('disabled', true);
    //     $('.activities label').eq(6).css('color', 'grey');
    //     total2 = 100;


    // } else if($('.activities input').eq(6).prop('checked')){
    //     $('.activities input').eq(2).attr('disabled', true);
    //     $('.activities label').eq(2).css('color', 'grey');

    //     $('.activities input').eq(4).attr('disabled', true);
    //     $('.activities label').eq(4).css('color', 'grey');

    //     total2 = 100;
        

    // } else {
    //     $('.activities input:even').attr('disabled', false)
    //     $('.activities label:even').css('color', 'black');
    //     total2 = 0;


    // }
    // if($('.activities input').eq(0).prop('checked')){
    //     total3 = 200;
        
    // } else {
    //     total3 = 0;
        

    // }
    // showTotal = total1 + total2 + total3;
    // $label.text('Total:'+ showTotal);


    // })
})



/******************** Payment Info **************/

const $paymentParagraphs = $('div p');
$paymentParagraphs.hide(); // hide all p elements

$('#payment option').eq(0).hide(); 
$('#payment option').eq(1).attr('selected',true); // auto select CC option

$('#payment').on('change',function(){ 

    if(  $('#payment').val() === $('#payment option').eq(2).val()){
        $paymentParagraphs.eq(0).show(); //show() paypal
        $paymentParagraphs.eq(1).hide(); // hide() bitcoin if it's showing
        $('#payment option').eq(2).attr('selected',true);
        $('#payment option').eq(1).attr('selected',false);
        $('#payment option').eq(3).attr('selected',false);

      
      $('#credit-card').hide(); // hide() cc fields 
    } else if($('#payment').val()==$('#payment option').eq(3).val()){ 
        $paymentParagraphs.eq(1).show(); //show() bitcoin
        $paymentParagraphs.eq(0).hide() // hide() paypal if it's showing
        $('#credit-card').hide(); // hide() cc fields 
        $('#payment option').eq(2).attr('selected',false);
        $('#payment option').eq(1).attr('selected',false);
        $('#payment option').eq(3).attr('selected',true);
    } else {
        $('#credit-card').show(); // show() cc fields 
        $('#payment option').eq(2).attr('selected',false);
        $('#payment option').eq(1).attr('selected',true);
        $('#payment option').eq(3).attr('selected',false);
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
    resetStyles();

    if($('input:checked').length === 0){
        event.preventDefault();
        $(".activities legend").css({ "color": "red"});
    }
    if (!name || !email) {
        event.preventDefault();
        $("fieldset legend").first().css({"color": "red"});
        if(!name && !email){
            $("#name").css({ "border-color": "red" })
            $("#mail").css({ "border-color": "red" });
        } else if (!name){
            $("#name").css({ "border-color": "red" })
        } else {
            $("#mail").css({ "border-color": "red" });
        }
    }
    if($('#payment option:selected').val() === 'credit card'){
        if (!cc || !zip || !cvv){
            event.preventDefault();
            $('fieldset legend').last().css('color', 'red');
            if (!cc){
                $("#cc-num").css({ "border-color": "red" });
            }
            if (!zip){
                $("#zip").css({ "border-color": "red" });
            }
            if (!cvv){
                $("#cvv").css({ "border-color": "red" });
            }
        }
    }    
})

resetStyles = () => {
    $("legend").each(function() {
      $("legend").css({ color: "#184f68" });
    });
    $("#name").css({ "border-color": "#5e97b0" });
    $("#mail").css({ "border-color": "#5e97b0" });
    $("#cc-num").css({ "border-color": "#5e97b0" });
    $("#zip").css({ "border-color": "#5e97b0" });
    $("#cvv").css({ "border-color": "#5e97b0" });
}