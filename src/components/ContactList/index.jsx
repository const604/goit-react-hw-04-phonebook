import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <Item key={id}>
      {name}: {number}
      <Button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
