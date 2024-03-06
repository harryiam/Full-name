import React, { useState } from 'react';

function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      const fullNameValue = `${firstName} ${lastName}`;
      setFullName(fullNameValue);
      // Do not reset the input fields if the form is submitted successfully
    }
  };

  return (
    <>
      <h3>Full Name Display</h3>
      
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
        {fullName && <div>{`Full Name: ${fullName}`}</div>}
      </form>
    </>
  );
}

export default UserForm;
