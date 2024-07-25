import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Footer from "./Footer";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...prevContacts,{id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
       return contact.id !== id;
      });

      setContacts(newContactList);
      };

  // useEffect(() => {
  //  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //  if (retrieveContacts) setContacts(retrieveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className='ui container'>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
        <Footer />
      </div>
    </>
  );
}
export default App;