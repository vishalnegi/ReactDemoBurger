import React from 'react';
import './BuildControl.css'
// import Button from 'react-bootstrap/Button';

const buildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button
                className="Less"
                onClick={props.removed}
                disabled={props.disabled}
            >Less</button>
            <button
                className="More"
                onClick={props.added}
            >More</button>
            {/* <Button variant="primary">Primary</Button> */}
        </div>
    )
};

export default buildControl;