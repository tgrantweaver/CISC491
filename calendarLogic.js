$(function(){
  $('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view) {
      $(this).css('background-color', 'red');
    }
  });
})
