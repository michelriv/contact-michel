import React, { useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import { useContext } from 'react';
import ContactCard from '../component/ContactCard.js';
import ContactForm from '../component/ContactForm.js';

const ContactList = () => {

  const { store, actions } = useContext(Context)


   useEffect(()=>{
       actions.getContacts()
   },[]);

  const [Open, setOpen] = useState(false);


  const openModal = () => {
    setOpen(true);
  };


  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <h1 className='mb-5'>Contact List</h1>

      <div className="column">
        {store.contacts.map((contact, index) => (
          <ContactCard
            key={index}
            contact={contact}
            deleteContact={() => deleteContact(index)}
            editContact={openModal}
          />
        ))}
      </div>

      <button
        type="button"
        className="btn add btn-dark mb-3 mx-auto"
        onClick={openModal}
        >Add New Contact</button>

      <ContactForm
        isOpen={Open}
        onClose={closeModal}
      />
      <Footer />
    </div>
  );
};

export default ContactList;