function adjustContentHeight() {
  const overlayContent = document.querySelector(".overlay-content");
  const viewportHeight = window.innerHeight;
  const minHeight = 3818; // The minimum height you want to ensure

  if (viewportHeight < minHeight) {
    overlayContent.style.minHeight = `${viewportHeight}px`;
  } else {
    overlayContent.style.minHeight = `${minHeight}px`;
  }
}

// Adjust the content height on load and on resize
window.addEventListener("load", adjustContentHeight);
window.addEventListener("resize", adjustContentHeight);

function performSearch() {
  let filter = document.getElementById("nav-search").value.toUpperCase();
  let items = document.querySelectorAll(".overlay-content p");

  // Scroll to the first matching item, if any
  for (let item of items) {
    let text = item.textContent || item.innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      break; // Scroll to the first match and exit the loop
    }
  }
}

document.getElementById("search-button").addEventListener("click", function () {
  // Perform search and scroll to the location of the matching text
  performSearch();
});
