function castforward() {
  window.open("https://www.castupload.com/actors/yana-robin-la-baume", "_blank");
}

function filmmakers() {
  window.open("https://filmmakers.de/yana.robin-la.baume", "_blank");
}

function schauspielervideos() {
  window.open("https://www.schauspielervideos.de/fullprofile/schauspieler-yana-robin-la-baume.html", "_blank");
}



// window.onload=function(){
//   const buttons = document.querySelectorAll(".platforms-btn");
//   for (let i = 0; i < buttons.length; i++) {
//     const button = buttons[i];
//     setInterval(function(){ 
//       console.log(button); 
//     }, interval);
//     interval += interval;
//   }

const buttons = document.querySelectorAll(".platforms-btn");
window.onload = function () {
  let timer = 250;
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    let interval = setInterval(function () {
      console.log(button);
      button.style.opacity = 1;
      button.style.filter = 'blur(0)'
      button.style.fontSize = '2vw'
    }, timer);

    setTimeout(stopInterval, timer);

    function stopInterval() {
      clearInterval(interval);
    }

    timer += 250;
  }
}



const vitaAccordion = document.querySelectorAll("#resume p");
const vitaContent = document.querySelectorAll("#resume ul");
const vitaToggle = document.querySelectorAll("#resume p span");
const t = document.querySelector('template');







for (let i = 0; i < vitaAccordion.length; i++) {
  const clone = document.importNode(t.content, true);
  vitaToggle[i].appendChild(clone);

  $(document).ready(function () {
    $(vitaAccordion[i]).click(function () {
      $(vitaContent[i]).slideToggle("fast", "linear");
      $(vitaContent[i]).toggleClass("open");
      if($(vitaContent[i]).hasClass("open")) {
        $(vitaToggle[i]).css("transform", "rotate(45deg)")
      } else {
        $(vitaToggle[i]).css("transform", "rotate(0deg)")
      }

    });
  })

}



console.log(vitaToggle);