import React, { PureComponent } from 'react';


export default class Pictures extends PureComponent {
    render() {
        const {picture} = this.props;
        return (
            <div align="center" >
            <img src={picture} alt=' ' width="150" height="150" />
            </div>
        )
    }

}