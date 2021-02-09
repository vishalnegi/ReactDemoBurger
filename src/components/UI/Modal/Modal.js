import React, { useMemo } from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== props.show || nextProps.children !== props.children;
    // }

    return (
        < Aux >
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className="Modal">
                {props.children}
            </div>
        </Aux >
    )
}

// export default React.memo(Modal);
export default React.memo(Modal, (prevProps, nextProps) => {
    return nextProps.show === prevProps.show && nextProps.children === prevProps.children;
});