import React, { PureComponent } from 'react';


export default class Company extends PureComponent {
    render() {
        const {company} = this.props;
        return (
            <p>{company}</p>
        )
    }

}