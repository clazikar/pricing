const checkBox = document.getElementById("checkBox");
const basicPrice = document.getElementsByClassName("basicPrice");
const annualPrice = document.getElementsByClassName("annualPrice");
const boxes = document.querySelectorAll(".box");

checkBox.addEventListener("click", runEvent); // To change price on toggle

function runEvent(e) {
  for (i = 0; i < annualPrice.length; i++) {
    annualPrice[i].classList.toggle("displayToggle");
    for (z = 0; z < basicPrice.length; z++) {
      basicPrice[i].classList.toggle("undisplayToggle");
    }
  }
}

/*

change Colors on boxes

*/

boxes.forEach((box) => {
  box.addEventListener("click", changeColor);
  function changeColor(e) {
    for (i = 0; i < boxes.length; i++) {
      if (boxes[i] === e.target) {
        addClass(boxes[i], "colorChange"); // Add colorChange class
        removeClass(boxes[i], "colorRemove"); // Remove colorRemove class
        addClass(boxes[i], "colorTwo"); // Add white colors to the text
        addClass(boxes[i].firstElementChild.nextElementSibling, "colorTwo"); // Add white colors to the Price
        addClass(boxes[i].lastElementChild, "colorButton"); // Add Blue background and white color to button
        addClass(boxes[i], "heightChange"); // change height on click
      } else {
        removeClass(boxes[i], "colorChange"); //remove active class if not clicked on
        addClass(boxes[i], "colorRemove"); // add colorRemove class
        removeClass(boxes[i], "colorTwo");
        removeClass(boxes[i].firstElementChild.nextElementSibling, "colorTwo");
        removeClass(boxes[i].lastElementChild, "colorButton");
        removeClass(boxes[i], "heightChange");
      }
    }
    if (e.target === boxes[1]) {
      // change color on the default selection (box[i])
      const boxTwo = document.querySelectorAll(".boxtit");
      const priceTwo = document.getElementsByClassName("price2");
      const buttonTwo = document.getElementById("button2");
      for (i = 0; i < boxTwo.length; i++) {
        // add white color to text
        boxTwo[i].style.color = "white";
      }
      for (i = 0; i < priceTwo.length; i++) {
        // add white color to price
        priceTwo[i].style.color = "white";
      }
      buttonTwo.style.background = "white"; // add white white to button
      buttonTwo.style.color = "hsl(237, 63%, 64%)"; // add Bluish color to text
    } else {
      const priceTwo = document.getElementsByClassName("price2");
      const boxTwo = document.querySelectorAll(".boxtit");
      const buttonTwo = document.getElementById("button2");
      for (i = 0; i < boxTwo.length; i++) {
        boxTwo[i].style.color = "hsl(233, 13%, 49%)";
      }
      for (i = 0; i < priceTwo.length; i++) {
        priceTwo[i].style.color = "hsl(232, 13%, 33%)";
      }
      buttonTwo.style.background =
        "linear-gradient( hsl(236, 72%, 79%), hsl(237, 63%, 64%))";
      buttonTwo.style.color = "white";
    }
  }
});

//func to add class
function addClass(el, klass) {
  el.classList.add(klass);
}

//function to remove class

function removeClass(el, klass) {
  el.classList.remove(klass);
}
