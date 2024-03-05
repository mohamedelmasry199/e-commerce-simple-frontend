document.querySelector('.hamburger-button').addEventListener('click', function() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
  } else {
      navLinks.style.display = 'block';
  }
});
// Get the button element
const button = document.querySelector('product-info');

// Add a mouseover event listener
button.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.backgroundColor = 'blue';
});

// Add a mouseout event listener
button.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.backgroundColor = '';
});
  
//search function
function myFunction() {
  var input, filter, ul, li, a, i, txtValue, noProductMessage;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('product'); // Assuming each product is enclosed in a list item (li)
  noProductMessage = document.getElementById("noProductMessage");

  var found = false;

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0]; // Assuming the product name is enclosed in an h3 tag
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = ""; // Show the product
          found = true;
      } else {
          li[i].style.display = "none"; // Hide the product
      }
  }

  // Display "No products found" message if no matching products were found
  if (!found) {
      noProductMessage.style.display = "block";
      ul.style.display = "none"; // Hide the product showcase section
  } else {
      noProductMessage.style.display = "none";
      ul.style.display = "block"; // Show the product showcase section
  }
}
