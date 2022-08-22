import { ContactItem } from '../ContactItem/ContactItem';
import { PropTypes } from 'prop-types';
import { ListContacts } from './ContactList.styled';
import { useSelector } from 'react-redux/es/exports';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactList.contacts);
  const filter = useSelector(state => state.contactList.filter);

  const normalizedFilter = filter.toLowerCase();
  const filtered = contacts.filter(contact =>
    contact.name.includes(normalizedFilter)
  );

  return (
    <ListContacts>
      {filtered.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ListContacts>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
