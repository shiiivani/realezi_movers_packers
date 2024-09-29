document.addEventListener('DOMContentLoaded', function() {
  const priceCheckContainer = document.getElementById('price-check-container');
  const priceCheckForm = document.getElementById('price-check-form');
  const closeFormBtn = document.getElementById('close-form');

  // Function to check if it's a mobile device
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (isMobile()) { // Apply the logic only if it's a mobile device
    priceCheckContainer.addEventListener('click', function() {
      priceCheckForm.style.display = 'block';
    });

    closeFormBtn.addEventListener('click', function() {
      priceCheckForm.style.display = 'none';
    });

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
      if (event.target == priceCheckForm) {
        priceCheckForm.style.display = 'none';
      }
    }
  } 
});


const dropdownSelect = document.querySelector('.dropdown-select');
const dropdownList = document.querySelector('.dropdown-list');
const selectText = document.querySelector('.select-text');

dropdownSelect.addEventListener('click', () => {
  dropdownList.classList.toggle('show');
});

dropdownList.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    selectText.textContent = li.textContent; // Update the select-text
    dropdownList.classList.remove('show'); // Hide the list after selection
  });
});
