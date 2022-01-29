// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var todayDate = moment().format('MMMM Do, YYYY');
$("#currentDay").append(todayDate);


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
function colorCode() {
    var currentHour = moment().hours();
    console.log('currentHour:', currentHour);

    $(".event-text").each(function () {
        var hourBlock = parseInt(
            $(this).attr("id")
        );
        if (hourBlock < currentHour) {
            $(this).addClass('past')
        }
        else if (hourBlock === currentHour) {
            $(this).addClass('present')
        }
        else { $(this).addClass('future')}
    })

    $(".time-block").each(function () {
        var hourBlock = parseInt(
            $(this).attr("id")
        );
        console.log('hourBlock:', hourBlock)
        if (hourBlock < currentHour) {
            $(this).addClass('past')
        }
        else if (hourBlock === currentHour) {
            $(this).addClass('present')
        }
        else { $(this).addClass('future') }
    })
    console.log('colorcode checked')
}

$(document).ready(function () {

    colorCode();
    var checkTime = setInterval(() => {
        colorCode
    }, 30);
})

// WHEN I click into a time block
// THEN I can enter an event







// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


$(".saveBtn").on("click", function () {
    console.log($(this).parent().siblings(".event-text").val())
    var event = $(this).parent().siblings(".event-text").val();
    var time = $(this).parent().siblings(".event-text").attr("id");
    localStorage.setItem(time, event);

}

)

console.log(localStorage.getItem("9"))

// $(".text-area").attr("9").val(localStorage.getItem("9"))
// $('text area with id 9 or class 9').val(local storage get item with key 9)
// Repeat this for all other textareas

$("#9 .event-text").val(localStorage.getItem("9"))
$("#10 .event-text").val(localStorage.getItem("10"))
$("11 .event-text").val(localStorage.getItem("11"))
$("12 .event-text").val(localStorage.getItem("12"))
$("13 .event-text").val(localStorage.getItem("13"))
$("14 .event-text").val(localStorage.getItem("14"))
$("15 .event-text").val(localStorage.getItem("15"))
$("16 .event-text").val(localStorage.getItem("16"))
$("17 .event-text").val(localStorage.getItem("17"))

// WHEN I refresh the page
// THEN the saved events persist
