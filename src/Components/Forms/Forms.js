import React from "react";
import './Forms.css'

export function Forms(props){
    return(
        <div className="div-form">
        <label htmlFor={props.id}>{props.label}</label>

                <input
            className="form-input"
            type={props.type}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            required={props.required}
            pattern={props.pattern}
            readOnly={props.readOnly}
      />
    </div>
    )
}