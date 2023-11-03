

  let tabLinks = document.getElementsByClassName('tab-links');
  let tabContents = document.getElementsByClassName('tab-contents');

 function opentab(tabname) {
 for(tablink of tabLinks) {
    tablink.classList.remove('active-link');
 }

 for(tabcontent of tabContents) {
    tabcontent.classList.remove('active-tab');
 }
 event.currentTarget.classList.add('active-link');
 document.getElementById(tabname).classList.add('active-tab');


 }

 let sideMenu = document.getElementById('sideMenu')
 let darkImg = document.getElementById('darkImg');

 function openMenu() {
   sideMenu.style.right = "0"
 }

  function closeMenu() {
   sideMenu.style.right = "-200px";
 }

 let icon = document.getElementById('icon');

 icon.onclick = function() {
   document.body.classList.toggle('dark-theme');
   if (document.body.classList.contains('dark-theme')) {
      icon.src = "images/moon.png"
   }
   else {
      icon.src = "images/sun.png"
     
   }
 }

 // Get the scroll-to-top button element
const scrollButton = document.getElementById('scroll-to-top');

// Show/hide the button based on the scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

// Scroll to the top when the button is clicked
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Add smooth scrolling behavior
  });
});



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDxm_rpepy0bL3wHEavEkG6V__g5eXUEKPlzFn-uwwyhiViP6a7T-F7ofKkfJdCOlM4g/exec'
  const form = document.forms['submit-to-google-sheet']
 
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        msg.innerHTML = "Message successfully sent.";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })


 