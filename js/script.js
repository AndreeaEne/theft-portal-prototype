// Form validation
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
  });


  $('.ui.form.info')
    .form({
      inline : true,
      fields: {
        model: {
          identifier: 'model',
          rules: [
            {
              type: 'empty',
              prompt: 'You must add the item model'
            }
          ]
        },
        manufacturer: {
          identifier: 'manufacturer',
          rules: [
            {
              type: 'empty',
              prompt: 'You must add the manufacturer name'
            }
          ]
        },
        color: {
          identifier: 'color',
          rules: [
            {
              type: 'empty',
              prompt: 'You must add the item color'
            }
          ]
        },
        'reg-number': {
          identifier: 'reg-number',
          rules: [
            {
              type: 'empty',
              prompt: 'You must add the registration number'
            }
          ]
        }
      }
    });

  $('.ui.form.event')
  .form({
    inline : true,
    fields: {
      calendar: {
        identifier: 'calendar',
        rules: [
          {
            type: 'empty',
            prompt: 'You must add the date and time'
          }
        ]
      },

      city: {
        identifier: 'city',
        rules: [
          {
            type: 'empty',
            prompt: 'You must add the city'
          }
        ]
      },

      street: {
        identifier: 'street',
        rules: [
          {
            type: 'empty',
            prompt: 'You must add the street and number'
          }
        ]
      },

      postcode: {
        identifier: 'postcode',
        rules: [
          {
            type: 'empty',
            prompt: 'You must add the postcode'
          }
        ]
      },

      model: {
        identifier: 'model',
        rules: [
          {
            type: 'empty',
            prompt: 'You must add the item model'
          }
        ]
      },

    }
  });


  $('.ui.form.event .submit').click(function() {
    $('.ui.form.info').submit();
  });
});


// Calendar
function showCalendar() {
  $('#calendar').calendar();
}

// Alert
// TODO: un-comment
// $('#submit').click(function() {
//   $('.ui.basic.modal')
//   .modal('setting', 'closable', false)
//   .modal('show');
// });

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
