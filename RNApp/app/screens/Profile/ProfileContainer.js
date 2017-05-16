import React from 'react';
import Profile from './Profile';

const ProfileContainer = (props) => {
  return (
    <Profile
    />
  );
};

ProfileContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default ProfileContainer;
