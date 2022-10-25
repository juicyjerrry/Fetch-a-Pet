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
  //once sign up is sucessfull revert back to login screen to save session ids
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to sign up');
      }
}
}
//signup-form pointing at form class in signup.handlebar
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
