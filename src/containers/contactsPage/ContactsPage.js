import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ duplicate, setDuplicate ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicate) {
      const newContact = {
        name: name,
        phone: phone,
        email: email,
      }
      addContact(newContact);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const exists = contacts.some(curContact => curContact.name === name);
    setDuplicate(exists);
  }, [name, addContact])

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists": ""}
        </h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList content={contacts} />
      </section>
    </div>
  );
};
