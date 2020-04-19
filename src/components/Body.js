import React from 'react'

class Body extends React.Component {
    render() {
        return (
            <>
            <h2>
                {this.props.name}
            </h2>
            <button onClick={()=>this.props.changeName()}>
                change username
            </button>
            </>
        )
    }
}

export default  Body