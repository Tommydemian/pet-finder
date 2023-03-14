import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false }
    static getDerivedStateFromError() {
        return { hasError: true }
    } // Every time an error is encountered this function is called. => static => the function gets call from the class, not from an instance of the class. 


    componentDidCatch(error, info) {
        // typically you would log these top trackJS or Rollbar
        console.error(`ErrorBoundary component catch an error: ${error}: info: ${info}`)
    } // No equivalent in functional components. 


    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>
                        There was an error with this listing <Link to="/">Click here to go back to the home page</Link>
                    </h2>
                </div>
            )
        }

        return this.props.childen // if there's is no error just keep moving.
    }
}

export default ErrorBoundary;