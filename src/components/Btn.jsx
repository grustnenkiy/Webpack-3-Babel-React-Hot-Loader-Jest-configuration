import React from 'react';
import './btn.scss';

export class Btn extends React.Component {
    state = {
        isChanged: false
    }

    handleClick = () => {
        this.setState({ isChanged: !this.state.isChanged })
    }

    render() {
        return (
            <div className="btn">
                <button onClick={this.handleClick} className="btn-button">Change</button>
                <span className={(this.state.isChanged ? "btn-text" : "btn-text-highlighted")}>Very important text</span>
            </div>
        )
    }
}