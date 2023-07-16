import React, {Component} from "react";

class ErrorBoundry extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasError: true});
    }
    render(){
        let {hasError} = this.state;
        if(hasError === true){
            return <h1>Ooooops. That is not good</h1>
        } 
        return this.props.children;

        
    }
}

export default ErrorBoundry;