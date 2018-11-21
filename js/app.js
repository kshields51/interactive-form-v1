$("#name").focus(); //this focuses the name on the main textbox
/******************
 The following code creates a text box called other which appears above Job Role when Other is selected
 ****************** */
$("#other-title").hide()
$('label[for="other-title"]').hide() //other label and text area are hidden
const selected = document.getElementById('title').children[5] //uses vanilla javascript to get the selection box could have used Jquery too
$('#title').on('change', (function(event) { //When the title is changed to other this makes the text block visible with a fade in animation
    const clicked = event.target.value;
    if (clicked == "other") {
        $('label[for="other-title"]').fadeIn(500)
        $("#other-title").fadeIn(500)
    }}));

/******************
 dynamically adding classes upon page load to t-shirt styles using jQuery to make the Color list filterable
 ****************** */
const $selected = $('<option selected="selected">Please Select a T-shirt theme</option>') //creates the Please select a Tshirt Element that will be default
$('#color').prepend($selected); //prepends $selected to the dom
$('#color').children().each(function() {
    if($("not:this:contains(Please)")) {
        $(this).hide(); //makes it so the box is not color box is not clickable by default
    }

})
$('#color').children().each(function() { //dynamically adds classes so that the items can be targeted to be made hidden
     if ($(this).text().includes('Puns')) {
         $(this).addClass('puns')
     } else if ($("not:this:contains(Puns)")) {
         $(this).addClass('love')
     }
})
$('#design').on('change', (function(event) { //When user selects a shirt theme the colors are hidden or shown depending on their class which was assigned above
    const clicked = event.target.value;
    if (clicked == 'js puns') {
        $('.puns').show();
        $('.love').hide();
        $($selected).hide();
    } else if (clicked == 'heart js') {
        $('.love').show();
        $('.puns').hide();
        $($selected).hide();
    } else if (clicked == 'Select Theme') {
        $('#color').children().each(function() {
            if($("not:this:contains(Please)")) {
                $(this).hide();
            }
        })
    }
}))

/******************
 Greying out workshops that are at the same day and time of selected. Upon uncheck competing activities are no
 longer disabled cost is displayed
 ****************** */
const activities = $('.activities').children() //targets all the workshop inputs
const finalCost =$('.activities').after('<h1 class="total-cost"></h1>') //variable that appends a final cost to the bottom of the activities area
$('.activities').children().on('change', function(event){ //this is the function that acts on each individual checkbox and contains the logic to stop multiple conflicting time slots from being selected
    const targetIndex = ($(event.target).parent().index()) //this is the index of the checkbox that will be used in the switch function
    function totalCost () { // this function calculates the total cost that is displayed below the activities section
        let cost = $('input:checkbox:checked').length * 100
        if ($(activities).eq(1).index() == 1 && $(activities).eq(1).children().prop('checked')){
            cost +=100
            return cost 
        } else {
            
            return cost
        }
    }
    const $postedCost = $('<p class="total-cost">Total Cost: $'+(totalCost()).toString()+'</p>') //this is the actual string that contians the cost

    $('.total-cost').replaceWith($postedCost); // this makes the cost underneath the activities area update dynamcially with each checkbox that is clicked
    switch (targetIndex) { //this switch statement takes targetIndex which is the index of each checkbox if the box is checked then activities that have the same time slot as the checked item will be disabled and will have a strike through them
        case 1: //Main Conference — $200
            break;
        case 2: //JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100
            if ($(event.target).is(':checked')) {
                
                activities.eq(4).html('<input type="checkbox" name="express"><strike> Express Workshop — Tuesday 9am-12pm, $100</strike>')
                activities.eq(4).children().attr("disabled", "disabled");
            
            } else {
                activities.eq(4).html('<input type="checkbox" name="express"> Express Workshop — Tuesday 9am-12pm, $100')
                activities.eq(4).removeAttr("disabled");
            }
            break;
        case 3: //JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100
        if ($(event.target).is(':checked')) {
                
            activities.eq(5).html('<input type="checkbox" name="node"><strike> Node.js Workshop — Tuesday 1pm-4pm, $100</strike>')
            activities.eq(5).children().attr("disabled", "disabled");
        
        } else {
            activities.eq(5).html('<input type="checkbox" name="node"> Node.js Workshop — Tuesday 1pm-4pm, $100')
            activities.eq(5).removeAttr("disabled");
        }
            break;
        case 4://Express Workshop — Tuesday 9am-12pm, $100
        if ($(event.target).is(':checked')) {
                
            activities.eq(2).html('<input type="checkbox" name="js-frameworks"><strike> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</strike>')
            activities.eq(2).children().attr("disabled", "disabled");
        
        } else {
            activities.eq(2).html('<input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100')
            activities.eq(2).removeAttr("disabled");   
        }
            break;
        case 5: //Node.js Workshop — Tuesday 1pm-4pm, $100
        if ($(event.target).is(':checked')) {
                
            activities.eq(3).html('<input type="checkbox" name="js-libs"><strike> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</strike>')
            activities.eq(3).children().attr("disabled", "disabled");
        
        } else {
            activities.eq(3).html('<input type="checkbox" name="js-libs"> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100')
            activities.eq(3).removeAttr("disabled");
        }
            break;
        default:
            // null
}}
);

 /******************
 Displays payment selections basesd on the payment option chosen in the select menu. Credit card is default.
 When user selects PayPal, PayPal information is displayed and the rest is hidden
 same for bitcoin
 ****************** */

const creditPreSelect = $('#payment').children().eq(1);//selects the first dropdown menu under payment info
$('#payment').prepend(creditPreSelect); 
$('#payment').children().eq(1).remove();//these two lines make credit card the default option
$('div').children(8).eq(22).hide();
$('div').children(8).eq(21).hide();//these two lines hide the instructions for paypal and bitcoin
$('#payment').on('change', (function(event) { //this is the logic that dynamically changes what payment information is seen when user selects credit card, paypal, or bitcoin
    const clicked = event.target.value;
    if (clicked == 'credit card') {
        $('#credit-card').fadeIn(500);
        $('div').children(8).eq(22).fadeOut();
        $('div').children(8).eq(21).fadeOut();
    } else if (clicked == 'paypal') {
        $('#credit-card').fadeOut(500);
        $('div').children(8).eq(22).fadeOut(500);
        $('div').children(8).eq(21).fadeIn(500);
    } else if (clicked == 'bitcoin') {
        $('#credit-card').fadeOut(500);
        $('div').children(8).eq(22).fadeIn(500)
        $('div').children(8).eq(21).fadeOut(500);}}))
        



 /******************
 Validation area that houses the validator function
 ****************** */

function nameValidator (name) { //validates name field
    return /^[^\s]/.test(name) 

}   

function emailValidator (email) { //validates email field
    return /^[A-Z|a-z|0-9].*\@[^\-]*[A-Z|a-z|0-9].*[^-\.]*\.[A-Z|a-z|0-9].*/.test(email)
} 

function creditCardNumberValidator (creditCardNumber) { //validates credit card number
    return /^\d{13,16}$/.test(creditCardNumber)
} 

function zipValidator (zip) { //validates zip
    return /^\d{5}$/.test(zip)
} 

function cvvValidator (cvv) { //validates cvv
    return /^\d{3}$/.test(cvv)
} 


$('button').on('click', function(event){ //event handler for when the button to register is clicked on the form
    
    const nameTest = nameValidator($('#name').val());
    const emailTest = emailValidator($('#mail').val());
    const creditTest = creditCardNumberValidator($('#cc-num').val());
    const zipTest = zipValidator($('#zip').val());
    const cvvTest = cvvValidator($('#cvv').val()); //these variables hold the boolean values that are the results of the validator functions

    if (nameTest && emailTest  && $('input:checkbox:checked').length > 0 && $('#credit-card').is(":hidden") === true) { // this checks to see if a checkbox is checked and whether the name and email boxes are correct
         //this checkes to see if the payment selection is anything but credit card
        
        console.log('looks valid to me')} //FORM IS SUBMITTED

    else { 
        
        if (nameTest === true) { //checks to see if the name is correct if it is not it adds appropriate invalid indicator
        } else {$('#name').css('border', '2px solid red');
        event.preventDefault(); //stops the from from submitting

        }
        if (emailTest === true) { //checks to see if the email is correct if it is not it adds appropriate invalid indicator
        } else {
            $('#mail').css('border', '2px solid red');
            event.preventDefault();
        }
        if (creditTest === true ) { //checks to see if the credit card number is correct if it is not it adds appropriate invalid indicator
        } else if (($('#credit-card').is(":hidden")) === false){
            $('#cc-num').css('border', '2px solid red');
            event.preventDefault();
        }
        if (zipTest === true) { //checks to see if the zip is correct if it is not it adds appropriate invalid indicator
        } else if (($('#credit-card').is(":hidden")) === false) {
            $('#zip').css('border', '2px solid red');
            event.preventDefault();
        }
        if (cvvTest === true) { //checks to see if the cvv is correct if it is not it adds appropriate invalid indicator
        } else if (($('#credit-card').is(":hidden")) === false) {
            $('#cvv').css('border', '2px solid red');
            event.preventDefault();
        }
        if ($('input:checkbox:checked').length > 0) { //checks to see if at least one checkbox is checked if not it adds the appropriate invalid indicators
        } else {
            $('.activities').children().eq(1).css('border', '2px solid red')
            $('.activities').children().eq(2).css('border', '2px solid red')
            $('.activities').children().eq(3).css('border', '2px solid red')
            $('.activities').children().eq(4).css('border', '2px solid red')
            $('.activities').children().eq(5).css('border', '2px solid red')
            $('.activities').children().eq(6).css('border', '2px solid red')
            $('.activities').children().eq(7).css('border', '2px solid red')
            event.preventDefault();
        }
    }
    });