// Check e-mail and password
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

// Calendar
function showCalendar() {
  $('#calendar').calendar();
}

// Alert
$('#submit').click(function() {
  $('.ui.basic.modal')
  .modal('setting', 'closable', false)
  .modal('show');
});

// City dropdown
$('.ui.dropdown')
  .dropdown()
;

// TODO select/deselect items
// $('#menu li a').on('click', function(){
//     $('li a.current').removeClass('current');
//     $(this).addClass('current');
// });


// TODO Populate with cities
// $.getJSON("data/uk-cities.json", function(result) {
//     var options = $("#options");
//     //don't forget error handling!
//     $.each(result, function(item) {
//         options.append($("<option />").val(item.ImageFolderID).text(item.Name));
//     });
// });
