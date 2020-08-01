import React from 'react';
class ErrorBoundary extends React.Component {
    state = {
        errorMsg :'',
        showError : false
    }
    componentDidCatch = (error,info) => {
        this.setState({showError: true, errorMsg: error})
    }
    render() {
        if(this.state.showError)
          return <h1>{this.state.errorMsg}</h1>
        else
          return this.props.children
        }
}

export default ErrorBoundary;