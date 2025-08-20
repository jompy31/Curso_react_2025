import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { name, role, ciudad } = this.props;
    return (
      <div>
        <h2 >{name}</h2>
        <p >Rol: {role}</p>
        <p >Ciudad: {ciudad}</p>
      </div>
    );
  }
}

export default UserProfile;
