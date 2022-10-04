import PropTypes from 'prop-types';

import { Button, Ul, Li } from './ContactList.styled';

const ContactsList = ({ contacts, onClickDelete }) => {
  // console.log('contacts', contacts);
  if (!contacts.length) {
    return <p>No any data</p>;
  }
  return (
    <>
      <Ul>
        {contacts.map(contact => (
          <Li key={contact.id}>
            {contact.name}:
            <span style={{ margin: '0 200px 0 auto' }}>{contact.phone}</span>
            <Button type="button" onClick={() => onClickDelete(contact.id)}>
              Delete
            </Button>
          </Li>
        ))}
      </Ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  onClickDelete: PropTypes.func.isRequired,
};

export default ContactsList;
