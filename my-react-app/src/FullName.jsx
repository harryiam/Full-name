import React, { useState } from 'react';

function FullName() {
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showFullName, setShowFullName] = useState(false);

  const handleSubmit = () => {
    const fullNameValue = `${fullName} ${lastName}`;
    setFullName(fullNameValue);
    setShowFullName(true); // Set to true to display full name
  };

  return (
    <div>
      <h2>Enter Your Name</h2>
      <div>
        <label htmlFor="fullInput">Full:</label>
        <input
          type="text"
          id="fullInput"
          placeholder="Full"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastInput">Last:</label>
        <input
          type="text"
          id="lastInput"
          placeholder="Last"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {showFullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default FullName;