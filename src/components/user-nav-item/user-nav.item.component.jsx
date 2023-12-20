import React, { useState } from 'react';
import './user-nav.styles.css'; // Import your CSS file
import { SignOutUser } from '../../utils/firebase/firebase.util';

const UserNavItem = ({ photoURL, displayName }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    SignOutUser()
    console.log('Signing out...');
  };

  return (
    <div className="user-nav-item" onMouseEnter={handleToggleDropdown} onMouseLeave={handleToggleDropdown}>
      <div className="nav-item-pill">
        <img src={photoURL} alt={displayName} className="user-avatar" />
        {displayName}
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={handleSignOut}>
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNavItem;
