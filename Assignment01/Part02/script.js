const students = [
  {
  name: 'Emily Tremblay',
  address: '321 Rue Principale, Montreal, QC',
  image: 'images/emily.jpg',
  details: 'Emily Tremblay is a student at the University of Montreal.'
  },
  {
  name: 'Alexandre Gagnon',
  address: '654 Rue Sainte-Catherine, Montreal, QC',
  image: 'images/alexandre.jpg',
  details: 'Alexandre Gagnon is a student at the University of Montreal.'
  }
  ];
  
  const teachers = [
  {
  name: 'Dr. Isabelle Lefebvre',
  address: '987 Rue Sherbrooke, Montreal, QC',
  image: 'images/isabelle.jpg',
  details: 'Dr. Isabelle Lefebvre is a professor of Physics at the University of Montreal.'
  },
  {
  name: 'Prof. Mathieu Dubois',
  address: '456 Rue Saint-Denis, Montreal, QC',
  image: 'images/mathieu.jpg',
  details: 'Prof. Mathieu Dubois teaches Mathematics at the University of Montreal.'
  }
  ];

function renderUserCards(users) {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
  
    const image = document.createElement('img');
    image.src = user.image;
    image.alt = user.name;
    image.addEventListener('click', () => openModal(user));
  
    const name = document.createElement('p');
    name.textContent = user.name;
  
    const address = document.createElement('p');
    address.textContent = user.address;
  
    userCard.appendChild(image);
    userCard.appendChild(name);
    userCard.appendChild(address);
  
    userList.appendChild(userCard);
  });
}
function openModal(user) {
  const modal = document.getElementById('user-details-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = user.name;
  modalBody.innerHTML = '<p>' + user.details + '</p>';

  modal.style.display = 'block';

  const closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

document.querySelectorAll('input[name="user-type"]').forEach(input => {
  input.addEventListener('change', () => {
    const selectedUserType = document.querySelector('input[name="user-type"]:checked').value;
    
    if (selectedUserType === 'student') {
      renderUserCards(students);
    } else if (selectedUserType === 'teacher') {
      renderUserCards(teachers);
    }
  });
});

renderUserCards(students);
