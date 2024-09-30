// import React, { useContext } from 'react';
// import { ThemeContext } from './App';

// const ThemedButton = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <button
//       style={{
//         background: theme.background,
//         color: theme.fontColor,
//       }}
//       onClick={toggleTheme}
//       className="btn"
//     >
//       Dynamic Theme
//     </button>
//   );
// };

// export default ThemedButton;

import React, { Component } from 'react';
import { ThemeContext } from './contextTheme';

class ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontcolor,
        }}
        className="btn"
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
