import React from 'react';
import classNames from 'classnames';
function Button({ cart, children, className }) {
  return (
    <div>
      <button
        className={classNames('button', className, {
          'button--cart': cart,
        })}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
