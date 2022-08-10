import PropTypes from 'prop-types';
import { BsPersonFill, BsTrash, BsTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Item, RemoveBtn } from './ContactListItem.styled';
import { delateContact } from '../../redux/store';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <BsPersonFill />
      <p>name: {contact.name}</p>
      <BsTelephoneFill />
      <p>number: {contact.number}</p>
      <RemoveBtn
        type="button"
        onClick={() => dispatch(delateContact(contact.id))}
      >
        Delate <BsTrash />
      </RemoveBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
