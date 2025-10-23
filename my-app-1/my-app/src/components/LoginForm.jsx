import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUserserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log('UserserName:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserserName:</label><br />
          <input
            type="username"
            value={username}
            onChange={(e) => setUserserName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Login</button>
      </form>
    </>
  );
}
