const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
        //is this correctly pointing to userRoutes.js?
      const response = await fetch('/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
            email, 
            password
         }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
////////////////////////////////////////////////////////////////

const signupFormHandler = async (event) => {
    event.preventDefault();

const username = document.querySelector('#username-login').value.trim();
const first_name = document.querySelector('#first_name').value.trim();
const last_name = document.querySelector('#last_name').value.trim();
const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

if (username && email && password) {
    //is this correctly pointing to userRoutes.js?
    const response = await fetch('/api/users', {
        method: 'post',
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
        document.location.replace('/');
      } else {
        alert('Failed to sign up');
      }
}
}
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
