import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import { loadUser } from '../../actions/authActions';

const Home = props => {
  const { loadUser, user } = props;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        {user && <Contacts />}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

const mapActionToProps = {
  loadUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Home);
