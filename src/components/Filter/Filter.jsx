import { PropTypes } from 'prop-types';
import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/slice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <input
        value={value}
        onChange={e => dispatch(filteredContacts(e.currentTarget.value))}
      />
    </Label>
  );
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
