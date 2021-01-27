import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
            {
                controls.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        // added={props.ingredientAdded.bind(this, ctrl.type)}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
                ))
            }
            <button
                onClick={props.ordered}
                disabled={!props.purchasable}
                className="OrderButton"
            >ORDER NOW</button>
        </div>
    )
};

export default buildControls;