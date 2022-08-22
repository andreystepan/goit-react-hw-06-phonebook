import { ContactForm } from './ContactForm';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter';

export function App() {
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
