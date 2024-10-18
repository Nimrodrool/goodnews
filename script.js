// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementsByClassName("card-image");
var modalImg = document.getElementById("modalImage");
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbz8dk1IJLWEl4rEB3vPvzjvYPuhDVT2F9oVR0PJLxJT_njLRiLgY4pz1PAQowVf5axu/exec'
﻿
const form = document.forms['contact-form']
﻿
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
