// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .
//= require bootstrap-wysihtml5
//= require bootstrap-wysihtml5/wysihtml5x-toolbar.js
//= require bootstrap-wysihtml5/handlebars.runtime.min.js

//= require bootstrap-wysihtml5/minimum


$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

  $('.radial-menu').on('mousedown touchstart', function() {
  
  if (!active1) $(this).find('.menu-item1').css({
    'background-color': '#F2EFD4', 
    'transform': 'translate(0px,125px)'
  });
  else $(this).find('.menu-item1').css({
    'background-color': '#E6E2AF', 
    'transform': 'none'
  }); 
  
  if (!active2) $(this).find('.menu-item2').css({
    'background-color': '#F2EFD4', 
    'transform': 'translate(60px,105px)'
  });
  else $(this).find('.menu-item2').css({
    'background-color': '#E6E2AF', 
    'transform': 'none'
  });

  if (!active3) $(this).find('.menu-item3').css({
    'background-color': '#F2EFD4', 
    'transform': 'translate(105px,60px)'
  });
  else $(this).find('.menu-item3').css({
    'background-color': '#E6E2AF', 
    'transform': 'none'
  });

  if (!active4) $(this).find('.menu-item4').css({
    'background-color': '#F2EFD4', 
    'transform': 'translate(125px,0px)'
  });
  else $(this).find('.menu-item4').css({
    'background-color': '#E6E2AF', 
    'transform': 'none'
  });

  active1 = !active1;
  active2 = !active2;
  active3 = !active3;
  active4 = !active4;
    
  });
});
