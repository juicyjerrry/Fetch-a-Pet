const newPetHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-addpet').value.trim();
  const breed = document.querySelector('#breed-addpet').value.trim();
  const description = document.querySelector('#description-addpet').value.trim();
  const age = document.querySelector('#age-addpet').value.trim();

  if (name && breed && description && age) {
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


  
