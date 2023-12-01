let plus = $('.plus');
let minus = $('.minus');

$(plus).click(function () { 
  $($(this).parent().parent()).toggleClass('active');
});
$(minus).click(function () { 
  $($(this).parent().parent()).toggleClass('active');
});

