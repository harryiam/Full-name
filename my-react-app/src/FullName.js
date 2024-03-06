import React, { useState } from 'react';

function UserForm({ onFullNameChange }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      const fullNameValue = `${firstName} ${lastName}`;
      onFullNameChange(fullNameValue);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const [fullName, setFullName] = useState('');

  const handleFullNameChange = (value) => {
    setFullName(value);
  };

  return (
    <>
      <h3>Full Name Display</h3>
      <UserForm onFullNameChange={handleFullNameChange} />
      {fullName && <div>Full Name: {fullName}</div>}
    </>
  );
}

export default App;
