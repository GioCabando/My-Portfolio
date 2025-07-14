window.onload = function () {
  const aboutBtn = document.querySelector('.button');

  if (aboutBtn) {
    aboutBtn.onclick = function () {
      window.location.href = 'about.html'; // <-- change to the correct URL of your About page
    };
  }
};  

