import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice';
import { ItemContact, BtnDelete } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ItemContact>
      {name} : {number}
      <BtnDelete
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        Delete
      </BtnDelete>
    </ItemContact>
  );
};

ContactItem.prototype = {
  id: PropTypes.string.isRequried,
  name: PropTypes.string.isRequried,
  number: PropTypes.string.isRequried,
};
