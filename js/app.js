$("#name").focus(); //this focuses the name on the main textbox
/******************
 Job Role
 ****************** */
//Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
$("#other-title").hide()
$('label[for="other-title"]').hide()
const selected = document.getElementById('title').children[5]
$('#title').on('change', (function(event) {
    const clicked = event.target.value;
    if (clicked == "other") {
        $('label[for="other-title"]').fadeIn(1000)
        $("#other-title").fadeIn(1000)
    }}));

/******************
 dynamically adding classes upon page load to t-shirt styles using jQuery to make the Color list filterable
 ****************** */
const $selected = $('<option selected="selected">Please Select a T-shirt theme</option>')
$('#color').prepend($selected);
$('#color').children().each(function() {
    console.log(this);
    if($("not:this:contains(Please)")) {
        $(this).hide();//maybe this works
    }

})
$('#color').children().each(function() {
     console.log(this)
     if ($(this).text().includes('Puns')) {
         $(this).addClass('puns')
     } else if ($("not:this:contains(Puns)")) {
         $(this).addClass('love')
     }
})



/******************
 Tshirt Info attempting a ternery operator
 ****************** */
function hide (attribute) {
    $(attribute).hide()
}

$('#design').on('change', (function(event) {
    const clicked = event.target.value;
    if (clicked == 'js puns') {
        $('.love_style').hide();
    }
   
    


}))

/******************
 Greying out workshops that are at the same day and time of selected. Upon uncheck competing activities are no
 longer disabled
 ****************** */

 /******************
 Running total cost of all selected activities
 ****************** */

 /******************
 Display payment selections basesd on the payment option chosen in the select menu. Credit card is default.
 When user selects PayPal, PayPal information should be displayed and rest hidden
 same for bitcoin
 ****************** */

 /******************
 Validation 
 name
 email
 must choose at least one under "register for activities"
 properly formatted credit card
 ****************** */

 /******************
 Form validation messages 
 name
 email
 register for activities
 credit card number
 zip code
 cvv
 ****************** */
