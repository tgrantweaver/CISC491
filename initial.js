$(function() {
  $('#calendar').fullCalendar({
    header: {
      left:'prevYear, prev',
      center:'title, today',
      right:'next, nextYear'
    },
    buttonText: {
      prevYear: new moment().year() - 1,
      nextYear: new moment().year() + 1,
    },
    footer: {
      center:'month, year'
    },
    
    selectable: true,
    selectHelper: true,
  });
})
