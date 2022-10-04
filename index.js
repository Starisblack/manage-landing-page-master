let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})




document.querySelector(".go-btn").addEventListener("click", function() {
  var emailInput = document.querySelector(".email-address");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailInput.value.match(mailformat)) {
    alert("subscribed successfully");
    document.querySelector(".error-msg").style.display = "none";
    emailInput.value = "";
  } else {
    document.querySelector(".error-msg").style.display = "block";
  }
});



const menuIcon = document.querySelector(".navbar-toggler-icon");
const navbar = document.querySelector('.navbar');
const container = document.querySelector('main');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  container.classList.toggle('menu-open');
});
