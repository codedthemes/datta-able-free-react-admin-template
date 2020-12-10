import React from 'react';

class UcFirst extends React.Component {
    render() {
        const string = this.props.text;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export default UcFirst;