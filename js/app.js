function textComparison (arg1, arg2) {
    if (arg1 === arg2) {
        return true
    } else {
        return false
    }
}

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
    if($("not:this:contains(Please)")) {
        $(this).hide();//maybe this works
    }

})
$('#color').children().each(function() {
     if ($(this).text().includes('Puns')) {
         $(this).addClass('puns')
     } else if ($("not:this:contains(Puns)")) {
         $(this).addClass('love')
     }
})
$('#design').on('change', (function(event) {
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
 longer disabled
 ****************** */
const activities = $('.activities').children()
const finalCost =$('.activities').after('<h1 class="total-cost"></h1>')
$('fieldset').children().on('change', function(event){

    // let cost = $('input:checkbox:checked').length * 100
    const targetIndex = ($(event.target).parent().index())
    function totalCost () {
        let cost = $('input:checkbox:checked').length * 100
        if ($(activities).eq(1).index() == 1 && $(activities).eq(1).children().prop('checked')){
            cost +=100
            return cost 
        } else {
            
            return cost
        }
    }
    //im trying to create and append after the paragraph a total cost line that is dynamcically updated i have it but its not being updated
    console.log(totalCost()+ 'hi')
    const $postedCost = $('<p class="total-cost">Total Cost: $'+(totalCost()).toString()+'</p>')

    $('.total-cost').replaceWith($postedCost);
    console.log(totalCost()+ "after posting")
    switch (targetIndex) {
        case 1:
            break;
        case 2:
            if ($(event.target).is(':checked')) {
                
                activities.eq(4).html('<input type="checkbox" name="express"><strike> Express Workshop — Tuesday 9am-12pm, $100</strike>')
                activities.eq(4).children().attr("disabled", "disabled");
            
            } else {
                activities.eq(4).html('<input type="checkbox" name="express"> Express Workshop — Tuesday 9am-12pm, $100')
                activities.eq(4).removeAttr("disabled");
            }
            break;
        case 3:
        if ($(event.target).is(':checked')) {
                
            activities.eq(5).html('<input type="checkbox" name="node"><strike> Node.js Workshop — Tuesday 1pm-4pm, $100</strike>')
            activities.eq(5).children().attr("disabled", "disabled");
        
        } else {
            activities.eq(5).html('<input type="checkbox" name="node"> Node.js Workshop — Tuesday 1pm-4pm, $100')
            activities.eq(5).removeAttr("disabled");
        }
            break;
        case 4:
        if ($(event.target).is(':checked')) {
                
            activities.eq(2).html('<input type="checkbox" name="js-frameworks"><strike> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</strike>')
            activities.eq(2).children().attr("disabled", "disabled");
        
        } else {
            activities.eq(2).html('<input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100')
            activities.eq(2).removeAttr("disabled");   
        }
            break;
        case 5:
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
 Running total cost of all selected activities
 ****************** */
console.log('hello')
//console.log($('input:checkbox:checked').length);






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
