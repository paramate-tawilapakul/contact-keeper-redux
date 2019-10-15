import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterContacts, clearFilter } from '../../actions/contactActions';

const ContactFilter = props => {
  const text = useRef('');

  const { filtered } = props.contacts;
  const { filterContacts, clearFilter } = props;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapActionToProps = {
  filterContacts,
  clearFilter
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(ContactFilter);
