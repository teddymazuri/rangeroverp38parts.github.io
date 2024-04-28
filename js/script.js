// Get all buttons that trigger the modal
var buttons = document.querySelectorAll(".openModalBtn");

// Get the modal element
var modal = document.getElementById("myModal");

// Get the elements inside the modal to populate with data
var imageElement = document.getElementById("modalImage");
var nameElement = document.getElementById("modalName");
var priceElement = document.getElementById("modalPrice");
var statusElement = document.getElementById("modalStatus");

// Function to open the modal and populate with data
function openModal(imageURL, name, price, status) {
    modal.style.display = "block";
    imageElement.src = imageURL;
    nameElement.textContent = name;
    priceElement.textContent = price;
    statusElement.textContent = status;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Loop through each button and add click event listener
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var imageURL = button.dataset.image;
        var name = button.dataset.name;
        var price = button.dataset.price;
        var status = button.dataset.status;
        openModal(imageURL, name, price, status);
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
