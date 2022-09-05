import React, { Component } from 'react';
// all for react 16 and above
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {  // like try catch block in js, any error out  it will run this lifecyle hook
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops...Something Wrong Here!</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry;