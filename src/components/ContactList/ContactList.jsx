import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from '../../redux/contacts.slice';

import {
  ContactsList,
  ContactItem,
  ContactText,
  ContactButton,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactText>
            <BsFillPersonFill
              style={{
                fill: 'orange',
                marginRight: '5px',
                width: '14px',
                height: '14px',
              }}
            />
            {name}
          </ContactText>
          <ContactText>
            <BsTelephoneFill
              style={{
                fill: 'orange',
                marginRight: '5px',
                width: '14px',
                height: '14px',
              }}
            />
            {number}
          </ContactText>
          <ContactButton
            type="button"
            aria-label="Add new contact"
            onClick={() => dispatch(deleteContactAction(id))}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};
