// IFFE
// immedialy Invoked Function Expression
"use strict";
(() => {
  function Start() {
    var myVar = 20;
    console.log(`my Number is ${myVar}!`);

    myVar = "Baktash";
    console.log(`my Number is ${myVar}!`);

    for (let i = 0; i < 10; i++) {
      console.log(`Your Number is ${i}!`);
    }
  }

  window.addEventListener('load', Start);
})();
