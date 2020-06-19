
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  // When the user clicks on image, show corresponding the modal 
    $("#github").click(function() {
    $("#githubAd").show();
  })
  
    $("#email").click(function() {
    $("#emailAd").show();
  })
  
  // When the user clicks on <span> (x), close the modal
  $(".close").click(function() {
    $("#githubAd").hide();
    $("#emailAd").hide();
  })
  
  // When the user clicks anywhere on window
  window.onclick = function(event) {
  if (event.target == ("#emailAd")) {
    $("#emailAd").hide();
    } 
    if  (event.target == ("#githubAd")){
        $("#githubAd").hide();
      }
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  
  $('.navbar ul li a').on('click',function(event){
     let $anchor = $(this);
     $('html, body').animate({
       scrollTop: $($anchor.attr('href')).offset().top + "px"
     }, 4500);
      event.preventDefault();
      $('#menu').hide();
  });
  
    $('#ham').click(function() {
    $('#menu').show();
    })