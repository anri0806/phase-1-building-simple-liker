// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
modal.classList.add("hidden");

document.addEventListener("DOMContentLoaded", function () {
  handleResponse();
});

//Handle response here
function handleResponse() {
  document.querySelectorAll(".like-glyph").forEach((heart) => {
    heart.addEventListener("click", function () {
      mimicServerCall()
        .then(function () {
          if (heart.innerHTML === EMPTY_HEART) {
            heart.innerHTML = FULL_HEART;
            heart.classList.add("activated-heart");
          } else if (heart.innerHTML === FULL_HEART) {
            heart.innerHTML = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(function (error) {
          modal.classList.remove("hidden");
          const message = document.querySelector("p#modal-message");
          message.innerHTML = error;
          setTimeout(() => {
            const modal = document.querySelector("#modal");
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
