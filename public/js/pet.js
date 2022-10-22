// const newFormHandler = async (event) => {
//     event.preventDefault();
//   // const petID = document.querySelector('#pet-id').value.trim();
//   const petID = function getpetdetail() {
//    document.getElementById('petid');
//   }
  
//       const response = await fetch('/api/petdetailRoutes', {
//         method: 'get',
//         body: JSON.stringify({ 
//             petID, 
//         }),
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('cannot find pet id');
//       }
   
//   };

const newPetHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-addpet').value.trim();
  const breed = document.querySelector('#breed-addpet').value.trim();
  const description = document.querySelector('#description-addpet').value.trim();
  const age = document.querySelector('#age-addpet').value.trim();

  if (name && breed && description) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ name, breed, description, age }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Pet added successfully!')
      document.location.replace('/pets');
    } else {
      alert('Failed to add pet');
    }
  }
};

document.querySelector('.addpet-form')
  .addEventListener('submit', newPetHandler);


  
