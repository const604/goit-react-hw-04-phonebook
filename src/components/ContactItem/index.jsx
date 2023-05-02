import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <Item key={id}>
      {name}: {number}
      <Button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  ));
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactItem;
