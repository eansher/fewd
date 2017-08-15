// 1.	Slide the header element up when it is clicked on.
$('header').on('click', function(){
  $('header').slideUp(500);
});

// 2.	Remove the purplebox class from everything.
$('.box').removeClass('purplebox');

// 3.	Hide all of the divs in #row4 (hint: your selector could be $('#row4 div') )

$('#row4 div').hide();

// 4.	Add a paragraph that says "I have been added" to all boxes with class "add-para" (Hint: you'll need to look up the append() method)

$('.add-para').append("i have been added!");

// 5.	Add a class in your css and add it to all items with the class .box

$('.box').addClass('color');

// 6.	Show the footer when the anchor in #box2 is clicked (hint: your selector could be $('#box2 a') )

$('#box2 a').on('click', function() {
  $('footer').slideDown(500);
});

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3 span').addClass('purple');

// 8.	Add a unique class to your CSS and add it to the articles in #row1
$('#row1').addClass('unique');

// 9.	Change the background color of all the articles

$('article').addClass('background');

// 10.	Change the font color of all the articles in row 2

$('#row2 article').addClass('fontcolor');

// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.

$("h4").siblings().addClass('hide');

// 12.	Clicking on #box7 should hide the span within the h2

$('#box7').on('click', function(){
  $('h2 span').toggleClass('hide');
});

// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)

$("#box12").prepend("Hello There!");

// 14.	SlideUp all the h1s on the page

$('h1').slideUp(500);

// 15. Add the selected class [already in the CSS] to the divs in #row4

$('#row4 div').addClass('selected');

// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
$('button').on('click', function(){
  $('#row4 div').removeClass('selected');
  $('header').fadeIn(500);
  $('footer').fadeIn(500);
  $('.box').fadeIn(500);
  });
