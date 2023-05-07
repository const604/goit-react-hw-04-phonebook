import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <ContactItem
      key={id}
      id={id}
      contacts={contacts}
      onDeleteContact={onDeleteContact}
      name={name}
      number={number}
    />
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

