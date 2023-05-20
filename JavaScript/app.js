// const text = document.getElementById("auto-type").innerHTML; // get the text to be auto-typed
// document.getElementById("auto-type").innerHTML = ""; // clear the element
// let i = 0;
// const intervalId = setInterval(function () {
//   if (i < text.length) {
//     document.getElementById("auto-type").innerHTML += text.charAt(i);
//     i++;
//   } else {
//     clearInterval(intervalId);
//   }
// }, 40); // set the interval time in milliseconds (50ms in this example)

function autoType() {
  const textElement = document.getElementById("auto-type");
  const text = textElement.innerHTML; // get the text to be auto-typed
  textElement.innerHTML = ""; // clear the element
  let i = 0;
  const intervalId = setInterval(function () {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
      setTimeout(autoType, 1000); // wait for 1 second and restart
    }
  }, 80);
}

// Start the auto-typing effect
autoType();


window.addEventListener("scroll", function () {
  var div = document.querySelector(".navbar");
  if (window.pageYOffset > 0) {
    div.style.backgroundColor = "gray";
  } else {
    div.style.backgroundColor = "transparent";
  }
});


const homeBtn = document.getElementById("eclipse");
homeBtn.addEventListener("click", function () {
  window.location = "http://127.0.0.1:5501/index.html";
});



