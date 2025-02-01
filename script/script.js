// main.js

function loadHTML(id, url) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(id).innerHTML = data;
      });
}

document.addEventListener("DOMContentLoaded", function() {
  loadHTML("nav-placeholder", "nav.html");
  loadHTML("footer-placeholder", "footer.html");
});
