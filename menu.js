document.addEventListener("DOMContentLoaded", function () {
  const includeHTML = (path, element) => {
      fetch(path)
          .then((response) => response.text())
          .then((html) => {
              element.innerHTML = html;
          });
  };

  const topBarContainer = document.getElementById("topBarContainer");
  if (topBarContainer) {
      includeHTML("menu.html", topBarContainer);
  }
});

