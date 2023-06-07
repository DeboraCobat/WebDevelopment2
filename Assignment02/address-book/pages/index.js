import { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import Image from 'next/image';
import 'materialize-css/dist/css/materialize.min.css';

Modal.setAppElement('#__next');

const options = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' }
];

const defaultUsers = [
  {
    id: 1,
    name: 'Emily Tremblay',
    address: '321 Rue Principale, Montreal, QC',
    image: 'emily.jpg',
    type: 'student'
  },
  {
    id: 2,
    name: 'Dr. Isabelle Lefebvre',
    address: '987 Rue Sherbrooke, Montreal, QC',
    image: 'isabelle.jpg',
    type: 'teacher'
  },
  {
    id: 3,
    name: 'Alexandre Gagnon',
    address: '654 Rue Sainte-Catherine, Montreal, QC',
    image: 'alexandre.jpg',
    type: 'student'
  },
  {
    id: 4,
    name: 'Prof. Mathieu Dubois',
    address: '456 Rue Saint-Denis, Montreal, QC',
    image: 'mathieu.jpg',
    type: 'teacher'
  }
];


export default function AddressBook() {
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [users, setUsers] = useState(defaultUsers);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalUser, setModalUser] = useState(null);

  const filteredUsers = users.filter(user =>
    user.type === (selectedUserType ? selectedUserType.value : user.type)
  );

  const handleUserSelect = selectedOption => {
    setSelectedUserType(selectedOption);
  };

  const handleAddUser = () => {
    if (selectedUserType) {
      const newUser = {
        id: Date.now(),
        name: 'Michel Tremblay',
        address: '4006 Rue Saint-Denis, Montreal, QC',
        image: 'alexandre.jpg',
        type: selectedUserType.value
      };
      setUsers(prevUsers => [...prevUsers, newUser]);
    }
  };

  const handleImageClick = (user) => {
    setModalIsOpen(true);
    setModalUser(user);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Address Book</h1>

      <Select
        options={options}
        value={selectedUserType}
        onChange={handleUserSelect}
        placeholder="Select user type"
      />

      <button onClick={handleAddUser} disabled={!selectedUserType}>
        Add User
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>
                <div onClick={() => handleImageClick(user)} style={{ cursor: 'pointer' }}>
                  <Image
                    src={`/${user.image}`}
                    alt={user.name}
                    width={50}
                    height={50}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            width: '300px',
            margin: 'auto'
          } 
        }}
      >
        {modalUser && (
          <div>
            <h2>{modalUser.label} Details</h2>
            <div key={modalUser.id}>
              <p>Name: {modalUser.name}</p>
              <p>Address: {modalUser.address}</p>
            </div>
          </div>
        )}

        <button onClick={closeModal} style={{ marginTop: '10px' }}>
          Close
        </button>
      </Modal>
    </div>
  );
}
