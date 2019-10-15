import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getContact } from '../../actions/contactActions';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = props => {
  const { contacts, filtered, loading } = props.contacts;
  const { getContact } = props;

  useEffect(() => {
    getContact();
    // eslint-disable-next-line
  }, []);

  if (contacts && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  const renderContact = filtered ? filtered : contacts;

  return (
    <>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {renderContact.map(contact => (
            <CSSTransition key={contact._id} timeout={500} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = state => {
  //console.log(state.contacts);
  return {
    contacts: state.contacts
  };
};

const mapActionToProps = {
  getContact
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Contacts);
