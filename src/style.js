const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);




  // select the open-btn button
  let openBtn = document.getElementById('open-btn');
  // select the modal-background
  let modalBackground = document.getElementById('modal-background');
  // select the close-btn 
  let closeBtn = document.getElementById('close-btn');

  // shows the modal when the user clicks open-btn
  openBtn.addEventListener('click', function () {
    modalBackground.style.display = 'block';
  });

  // hides the modal when the user clicks close-btn
  closeBtn.addEventListener('click', function () {
    modalBackground.style.display = 'none';
  });

  // hides the modal when the user clicks outside the modal
  window.addEventListener('click', function (event) {
    // check if the event happened on the modal-background
    if (event.target === modalBackground) {
      // hides the modal
      modalBackground.style.display = 'none';
    }
  });


var className = "trans";
var scrollTrigger = 60;

window.onscroll = function() {
// We add pageYOffset for compatibility with IE.
if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
  document.getElementsByTagName("nav")[0].classList.add(className);
} else {
  document.getElementsByTagName("nav")[0].classList.remove(className);
}
};


