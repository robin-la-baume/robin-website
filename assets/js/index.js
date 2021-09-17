const infoButton = document.querySelector('#content-2 h3 a');
const infoUnderline = document.querySelector('#content-2 .underline');

infoButton.addEventListener('mouseover', function () {
  infoUnderline.style.display = 'block';
  infoUnderline.style.marginLeft = '0';
})
infoButton.addEventListener('mouseout', function () {
  infoUnderline.style.marginLeft = '100%';
  infoUnderline.style.display = 'none';
})