import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

import Layout from './Layout';

const Dashboard = ({ auth, logout }) => {
  const onLogoutClick = (e) => {
    console.log('logoutClicked');
    // e.preventDefault();
    logout();
  };

  const { user } = auth;

  return (
    <Layout>
      <div style={{ height: '75vh' }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <div>
              <b>Hey there,</b>
              {' '}
              {user.userName}
              <p className="flow-text grey-text text-darken-1">
                                You are logged into a full-stack
                {' '}
                <span style={{ fontFamily: 'monospace' }}>MERN</span>
                {' '}
app 👏
              </p>
            </div>
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
              onClick={onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
                            Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logout: logoutUser },
)(Dashboard);
