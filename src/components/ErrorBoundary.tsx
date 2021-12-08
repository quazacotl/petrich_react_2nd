import {Component} from "react";

interface ErrorBoundaryState {
    error: boolean
}

class ErrorBoundary extends Component<any, ErrorBoundaryState> {
    state = {
        error: false
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error)
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return <h2>Error came here</h2>
        }

        return this.props.children
    }
}

export default ErrorBoundary