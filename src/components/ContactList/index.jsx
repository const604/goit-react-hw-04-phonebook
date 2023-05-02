import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />;
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
