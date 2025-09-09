import React ,{Component} from "react";

class Welcome extends Component {
    render() {

        return <div><h1>Welcome to the Detection Microfrontend. This is the Welcome Component</h1>
            <p>The name is {this.props.name} and the role is {this.props.role}</p>
        </div>;
    }
}
export default Welcome;