$(document)
.ready(function() {
  $('.ui.form')
  .form({
    fields: {
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your e-mail'
          },
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]
      },
      password: {
        identifier  : 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your password'
          },
          {
            type   : 'length[6]',
            prompt : 'Your password must be at least 6 characters'
          }
        ]
      }
    }
  })
  ;
})
;

// calendar
function showCalendar() {
  $('#calendar').calendar();
}

// alert
$('#submit').click(function() {
  $('.ui.basic.modal')
  .modal('setting', 'closable', false)
  .modal('show');
});

// redirect for mobile
if (screen.width <= 699) {
  document.location = "mobile.html";
}
