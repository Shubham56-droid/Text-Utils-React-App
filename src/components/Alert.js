import React from 'react'

export default function Alert(props) {
  const capatalize = (word) => {
    const lower  = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
    /* if props.alert is not null then we will get rest code */
      <div className="AlertBox">
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capatalize(props.alert.type)} </strong>: {props.alert.msg}
        </div>}
      </div>
  )
}
