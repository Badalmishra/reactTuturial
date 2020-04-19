import React from 'react'

class List extends React.Component {
    render() {
        return (
            <ul className="list-group w-50 mt-5">
                {
                    this.props.todos.map(task=>(
                        
                        <li className="list-group-item">
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                <div style={{flex:1}} className="btn-group">
                                    {
                                        task.status == 0 
                                        ? 
                                            <button className="btn btn-sm btn-success">Done</button>
                                            : 
                                            <button className="btn btn-sm btn-dark">Pending</button>
                                    }
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </div>
                                <span style={{flex:4}} className="ml-3">{task.body}</span>    
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default  List