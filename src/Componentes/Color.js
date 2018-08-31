import React, { PureComponent } from 'react';


export default class Color extends PureComponent {
    render() {
        const {eyeColor} = this.props;
        return (
            <span class="dot" style={{background: eyeColor}}></span>
        )
    }

}