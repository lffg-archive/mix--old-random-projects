(function($) {
  'use strict';

  var getTitle = function(icon) {
    return icon.replace(/^fa-/gi, '').replace(/-o(?!\w)/g, 'outlined').split('-').map(function(icon) {
      return icon.split('').map(function(letter, index) {
        if (index === 0) return letter.toUpperCase();
        return letter.toLowerCase();
      }).join('')
    }).join(' ');
  };

  $(function() {
    $.each(icons, function(index, icon) {
      $('<div>', {
        'id': icon,
        'class': 'fa-icons-col col-md',
        'html': '<i class="fa ' + icon + '"></i>',
        'data-original-icon': icon,
        'data-icon': icon.replace(/^fa-/gi, ''),
        'data--original-title': getTitle(icon),
        'title': getTitle(icon)
      }).css({
        'flex-basis': 'initial',
        'text-align': 'center',
        'font-size': '25px',
        'padding': '10px 0',
        'width': '25%'
      }).on('click', function() {
        $(this)
          .tooltip('dispose')
          .attr('title', 'Copied!')
          .tooltip('show')
        ;

        new ClipboardJS('#' + $(this).attr('id'), {
          text: function(trigger) {
            return '<i class="fa ' + $(trigger).attr('data-original-icon') + '" aria-hidden="true"></i>'
          }
        });
      }).on('mouseleave', function() {
        $(this)
          .tooltip('dispose')
          .attr('title', $(this).attr('data--original-title'))
          .tooltip('show')
        ;
      }).appendTo('.append-zone');
    });

    $('#icons-search').on('keyup', function() {
      var icon = $(this).val();

      $('.fa-icons-col').each(function() {
        if ($(this).attr('data-icon').indexOf(icon) === -1) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    });
  });

  $(window).on('load', function() {
    setTimeout(function() {
      $('.icons-container').slideDown(350);
      
      setTimeout(function() {
        $('.fa-icons-col').tooltip();
      }, 150);

      setTimeout(function() {
        $('.icons-loading').fadeOut(350);
      }, 350);
    }, 200);
  });
})(jQuery);