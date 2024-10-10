
   // JavaScript function to validate the password
   document.getElementById('signup-form').addEventListener('submit', function(event) {
     const password = document.getElementById('password').value;
     const confirmPassword = document.getElementById('confirm-password').value;

     if (password !== confirmPassword) {
       event.preventDefault(); // Prevent form submission
       alert("Passwords do not match! Please try again."); // Alert the user
     }
   });

 // Function to toggle password visibility
 function togglePassword(inputId) {
   const input = document.getElementById(inputId);
   const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
   input.setAttribute('type', type);

   // Optionally change the icon based on visibility
   const eyeIcon = document.querySelector(`#eye-icon-${inputId}`);
   if (type === 'text') {
     eyeIcon.classList.remove('fa-eye');
     eyeIcon.classList.add('fa-eye-slash');
   } else {
     eyeIcon.classList.remove('fa-eye-slash');
     eyeIcon.classList.add('fa-eye');
   }
 }

