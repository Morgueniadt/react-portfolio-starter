import React, { useState } from 'react';

export default function SignUpForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    newsletter: true,
  });

  const [signedUp, setSignedUp] = useState(false);

  // Universal change handler
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Sign up by user: ${form.username}`);
    setSignedUp(true);
  };

  return (
    <>
      {signedUp ? (
        <h3>You are signed up, {form.username}!</h3>
      ) : (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label><br />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <label>Password:</label><br />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <label>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={form.newsletter}
                  onChange={handleChange}
                />
                Subscribe to newsletter
              </label>
            </div>
            <button type="submit" style={{ marginTop: '15px' }}>Sign Up</button>
          </form>
          <label>
            Hi {form.username}!, you {form.newsletter ? 'are' : 'are not'} subscribed to the newsletter.
          </label>
        </>
      )}
    </>
  );
}
