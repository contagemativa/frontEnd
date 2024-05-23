import React from "react";
import PropTypes from 'prop-types';

export default function Button (children, onClick, type = 'button') {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
  
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
};
