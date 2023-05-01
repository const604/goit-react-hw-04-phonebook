import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <label>Find contacts by name</label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
