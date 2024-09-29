document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const faqItem = this.parentElement;

    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });

    faqItem.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const riveInstance = new rive.Rive({
    src: 'assets/images/Party-popper.riv',
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
  });

  // --- Consult Form Functionality ---
  document.getElementById('consult-btn').addEventListener('click', function() {
    // 1. Create Form Container
    const formContainer = document.createElement('div');
    formContainer.id = 'consultationForm';
    formContainer.innerHTML = `
      <h2>Please share your details</h2>
      <input type="text" id="name" placeholder="Name" required>
      <div class="mobile-input-container">
        <select id="countryCode">
          <option value="+91" selected>+91</option>
          <option value="+1">+1</option>
        </select>
        <input type="tel" class="mobile-no-input" id="mobile" placeholder="Enter mobile number" required maxlength="10">
        <button id="sendOtpButton">Send OTP</button>
      </div>
      <p id="otpMessage" class="otp-message"></p>
      <input type="text" id="otp" placeholder="OTP" required maxlength="6" minlength="6">
      <span class="otp-info">Didn't receive OTP?  <a href="#" class="otp-on-call">Request OTP on call</a></span>
      <input type="email" id="email" placeholder="Email ID" required>
      <label class="checkbox-label">
        <input type="checkbox" id="agreement" required>
        I agree to be contacted by Realezi's dedicated manager.
      </label>
      <button type="submit" id="submitButton">Submit</button>
      <div id="success-box" class="hidden">Form submitted successfully!</div> 
    `;

    // 2. Create Overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '1001';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';

    // 3. Create Close Button
    const closeButton = document.createElement('button');
    closeButton.id = 'close-btn';
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    closeButton.addEventListener('mouseover', function() {
      closeButton.style.color = '#000';
    });
    closeButton.addEventListener('mouseout', function() {
      closeButton.style.color = '#ccc';
    });

    closeButton.onclick = function() {
      document.body.removeChild(formContainer);
      document.body.removeChild(overlay);
    };

    formContainer.appendChild(closeButton);

    // 4. Append Elements to DOM
    document.body.appendChild(formContainer);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function() {
      document.body.removeChild(formContainer);
      document.body.removeChild(overlay);
    });

    setTimeout(() => {
      formContainer.style.transform = 'translate(-50%, -50%) scale(1)';
      overlay.style.opacity = '1';
    }, 10);

    // --- Form Submission and Validation ---
    const form = document.getElementById('consultationForm');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const otpInput = document.getElementById('otp');
    const emailInput = document.getElementById('email');
    const agreementCheckbox = document.getElementById('agreement');
    const submitButton = document.getElementById('submitButton');
    const successBox = document.getElementById('success-box');
    const sendOtpButton = document.getElementById('sendOtpButton');
    const otpMessage = document.getElementById('otpMessage');

  submitButton.addEventListener('click', function() {
      successBox.classList.remove('hidden');
      form.style.display = 'none';
      setTimeout(() => {
        successBox.classList.add('show-content');
      }, 4000);
      setTimeout(() => {
        successBox.classList.add('hidden');
        overlay.style.display = 'none';
        window.location.reload();
      }, 5750);
  });

    // Function to update the OTP message
    function updateOtpMessage() {
      const mobileNumber = mobileInput.value.trim();
      if (mobileNumber) {
        otpMessage.textContent = `We have sent the OTP to ${mobileNumber}`;
        setTimeout(() => {
          otpMessage.textContent = '';
          console.log('OTP sent successfully!')
        }, 1500);
      } else {
        otpMessage.textContent = ''; // Clear the message if the input is empty
      }
    }

    // Add event listener to the SEND OTP button
    sendOtpButton.addEventListener('click', function(event) {
      updateOtpMessage();
    });

  }); // End of consult-btn click event handler

}); // End of DOMContentLoaded event handler
