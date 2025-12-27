// <--------------navbar start---------------->
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu.style.right === '0px') {
      menu.style.right = '-220px';
    } else {
      menu.style.right = '0px';
    }
  }

  // <-----------------navbar end----------------->




    // <---------------institute details start( Who We Are)---------------->

    const scrollContainer = document.getElementById('scrollContainer');
  function scrollLeft() {
    scrollContainer.scrollBy(`{ left: -600, behavior: 'smooth' }`);
  }
  function scrollRight() {
    scrollContainer.scrollBy(`{ left: 600, behavior: 'smooth' }`);
  }

  // <--------------------institute details end( Who We Are)----------------->

  // <---------------------See More Button--------------------->

          function openModal() {
  document.getElementById('customModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('customModal').style.display = 'none';
}
            

  // <---------------------See More Button End--------------------->


// <-------------------------Email Js------------------------


// EmailJS Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
  if (typeof emailjs !== 'undefined' && emailjs.init) {
    emailjs.init("yilg1U30SjE-KJOfm");
  } else {
    console.error('EmailJS library not loaded.');
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (typeof emailjs === 'undefined' || !emailjs.send) {
        alert('EmailJS is not loaded. Please try again later.');
        return;
      }
      console.log("Name value:", document.getElementById("name").value);
      emailjs.send("service_ljruqbv", "template_08tawo4", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        course: document.getElementById("course").value,
        message: document.getElementById("message").value
      })
      .then(function(response) {
        alert("Message sent successfully!");
        
        contactForm.reset();
      }, function(error) {
        alert("Failed to send message. Please try again.");
      });
    });
  }
});


  // <--------------------------EMail Js End------------------------>





