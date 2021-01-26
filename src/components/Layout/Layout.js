import React from 'react';
import Aux from '../../hoc/Auxillary';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div> Sidebar , toolbar, backdrop </div>
        <main className="Layout-Content" >
            {props.children}
        </main>
    </Aux>
)

export default layout;