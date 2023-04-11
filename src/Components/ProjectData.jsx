import { Component } from "react";
import "./heroprojects.css";

class ProjectData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="himatera__first-project_text">
                    <h2 className='gradient__text'>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="himatera__project-image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}

export default ProjectData