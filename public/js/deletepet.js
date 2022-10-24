//function to delete selected pet 

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const petid = event.target.getAttribute('data-id');
   
      alert(`deletescript :  ${petid}`)
      const response = await fetch(`/api/pets/${petid}`,
      {
        method: 'DELETE', 
      });
  
      if (response.ok) {
        alert('Pet deleted successfully!')
        document.location.replace('/pets');
      } else {
        alert('Failed to delete pet');
      }
      
    }
  };
  
  document
    .querySelector('.petdelete')
    .addEventListener('click', delButtonHandler);
  