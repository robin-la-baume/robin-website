const cookieContainer = document.getElementById('bw_cookie');
const cookieButton = document.querySelector('#bw_cookie button');

cookieButton.addEventListener('click', () => {
  cookieContainer.classList.remove('active');
  localStorage.setItem('cookieBannerDisplayed', true);
});



setTimeout(() => {
  if (!localStorage.getItem('cookieBannerDisplayed')) {
    cookieContainer.classList.add('active');
  }
}, 2000);