import { ContactForm } from './ContactForm';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter';

// const LS_KEY = 'contacts';

export function App() {
  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  //   setContacts(prevContacts => {
  //     return [contact, ...prevContacts];
  //   });
  // };

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <div>
        <h2>Phonebook</h2>
      </div>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
