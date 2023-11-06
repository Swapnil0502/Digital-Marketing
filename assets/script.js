'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});
// Get references to the login button, overlay, and close button





// Get references to the login button, overlay, and close button


const sign=document.getElementById("signButton");
const close=document.getElementById("close");
const signOverlay=document.getElementById("Overlay");
// Add click event listeners to the login button and close button

close.addEventListener("click",()=>{
    signOverlay.style.display="none";
});
signButton.addEventListener("click",()=>{
    signOverlay.style.display="block";
});







function SendEmail(){
    var params={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        adress:document.getElementById("adress").value,
        phone:document.getElementById("phone number").value,
        message:document.getElementById("area").value
    }
    emailjs.send('service_ue0u59e', 'template_zrwiudc', params)
    .then(function(res) {
        alert('SUCCESS!'+res.status);
    })
}