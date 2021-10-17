window.addEventListener("load", function(){
  window.cookieconsent.initialise({
      "palette": {
          "popup": {
              "background": "rgba(0, 0, 0, 0)",
              "text": "#fffff"
          },
          "button": {
              "background": "rgba(0, 0, 0, 0)"
          }
      },
      "theme": "edgeless",
      "content": {
          "message": "🍪 Diese Seite verwendet Cookies.",
          "dismiss": "OK",
          "link": "",
          "href": "imprint.html"
      }
  })});