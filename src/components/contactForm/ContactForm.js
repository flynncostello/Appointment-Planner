import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form className="styled-form" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Contact Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Contact Name"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          placeholder="Contact Phone (###-###-####)"
          aria-label="Contact Phone"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact"/>
    </form>
  );
};
