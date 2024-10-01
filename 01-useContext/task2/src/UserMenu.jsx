// import React, { useContext } from 'react';
// import { UserContext } from './context';

// const UserMenu = () => {
//   const { userData } = useContext(UserContext);
//   return (
//     <div className="menu">
//       <span className="menu__greeting">Hello, {userData.name}</span>
//       <img alt="User Avatar" src={userData.avatar_url} className="menu__avatar" />
//     </div>
//   );
// };

// export default UserMenu;

import React, { Component } from 'react';
import { UserContext } from './context';

class UserMenu extends Component {
  static contextType = UserContext;

  render() {
    const userData = this.context;

    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {userData.name}</span>
        <img alt="User Avatar" src={userData.avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

export default UserMenu;
