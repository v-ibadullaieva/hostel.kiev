'use strict';

var curLang = 'ru';

$(function() {
  $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

  var dialog = $( "#block-modal" ).dialog({
    autoOpen: false,
    width: 500,
    modal: true,
  });

  $( "#modal1" ).on( "click", function() {
        dialog.dialog( "open" );
  })
  $( "#modal2" ).on( "click", function() {
        dialog.dialog( "open" );
  })

  $( "#date" ).selectmenu({
    icons: { button: "ui-icon-triangle-1-s" }
  })
  $( "#date2" ).selectmenu({
    icons: { button: "ui-icon-triangle-1-s" }
  })
  $('#date-button').attr('lang', 'ru');
  $('#date2-button').attr('lang', 'en');

  var largeImg = $('#largeImg');
  var thumbs = $('#thumbs a');

  thumbs.click(function(e) {
    e.preventDefault();

    var target = $(this);

    showThumbnail(target.attr('href'), target.attr('title'));
  })

  function showThumbnail(href, title) {
    largeImg.attr('src', href);
    largeImg.attr('alt', title);
  }

  $('.bxslider').bxSlider({
    slideWidth: 465,
    minSlides: 1,
    maxSlides: 2,
    slideMargin: 40
  });

  $('#show-menu').click(function() {
    $('.header-menu ul').slideToggle();
  })

  $('#lang').click(function() {
    curLang = curLang == 'ru' ? 'en' : 'ru';
    $('body').toggleClass('ru');
    $('body').toggleClass('en');
    changeLang();
  })
  function changeLang() {
    $('[data-i18n]').each(function() {
      $(this).html($(this).data(curLang));
    })
    
  }

  changeLang();

});

