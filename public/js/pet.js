const newFormHandler = async (event) => {
    event.preventDefault();
  // const petID = document.querySelector('#pet-id').value.trim();
  const petID = function getpetdetail() {
   document.getElementById('petid');
  }
  
      const response = await fetch('/api/petdetailRoutes', {
        method: 'get',
        body: JSON.stringify({ 
            petID, 
        }),
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('cannot find pet id');
      }
   
  };


document.querySelector('.new-pet-form')
  .addEventListener('submit', newFormHandler);


  
