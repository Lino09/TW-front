import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Input({ children, id, req, type , onStateChange, val }) {
    const [hasText, hasTextSet] = useState(false);
  
    const checkBlur = (e) => e.target.value ? null : hasTextSet(false)
  
    return (
    <label htmlFor={id} className="border-2 border-indigo-800 w-full py-2 px-4 rounded-2xl group relative col-span-1" onFocus={()=> hasTextSet(true)} onBlur={(e) => checkBlur(e)}>
        <span className={`transform absolute transition-all duration-300 rounded-full font-semibold ${hasText ? 'text-xs -translate-y-5 bg-gray-200 px-1' : ''}`}  > {children}{req ? '': ' (Opcional)'}</span>
        <input
          type={type}
          name={children}
          id={id}
          required={req}
          className="w-full focus:outline-none border-none p-0 focus:border-none focus:ring-0 bg-gray-200"
          onChange={(e) => onStateChange(e)}
          autoComplete="off"
          value={val}
        />
    </label>
    );
  };

  Input.propTypes = {
    children: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    req: PropTypes.bool,
    type: PropTypes.string,
    onStateChange: PropTypes.func.isRequired,
  };
  
  Input.defaultProps = {
    req: true,
    type: 'text',
  };