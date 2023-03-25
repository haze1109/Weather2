const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    // Call the search function here
    console.log("Enter key pressed!");
  }
});
