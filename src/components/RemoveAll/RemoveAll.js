import React, { Component } from 'react';
import './RemoveAll.css'

class RemoveAll extends Component {
    render() {
        return (
            <div className='removeAll'>
                <button onClick={this.props.removeAll} >Delete all</button>
            </div>
        );
    }
}

export default RemoveAll;
