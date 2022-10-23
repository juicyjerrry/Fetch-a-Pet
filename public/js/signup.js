const signupFormHandler = async (event) => {
    event.preventDefault();

const username = document.querySelector('#username-signup').value.trim();
const first_name = document.querySelector('#firstname-signup').value.trim();
const last_name = document.querySelector('#lastname-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

if (email && password) {

    const response = await fetch('api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          username,
          first_name,
          last_name,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/pets');
      } else {
        alert('Failed to sign up');
      }
}
}
//signup-form pointing at form class in signuo.handlebar
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
