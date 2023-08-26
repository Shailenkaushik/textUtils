import React from 'react'

export default function Alert(props) {
  const Capatalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    
    <div style={{height: '50px'}}>
    {props.alert && <div className="alert alert-success" role="alert">
      {Capatalize(props.alert.type)}: {props.alert.msg}
    </div>}
    </div>
    
  )
}
