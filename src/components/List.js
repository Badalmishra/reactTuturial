import React from 'react'

class List extends React.Component {
    render() {
        return (
            <ul className="list-group w-50 mt-5">
                {
                    this.props.todos.map(task=>(
                        
                        <li key={task.id} className="list-group-item">
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                <div style={{flex:1}} className="btn-group">
                                    
                                        <button
                                            onClick={()=>this.props.togglePending(task.id)}
                                            className={task.status==0?"btn btn-sm btn-success":"btn btn-sm btn-dark"}>
                                                Mark {task.status == 0 ?'Done':'Pending'}
                                        </button>
                        
                                    <button onClick={()=>this.props.deleteTask(task.id)} className="btn btn-sm btn-danger">Delete</button>
                                </div>
                                <span 
                                    style={{
                                        flex:2,
                                        textDecoration:task.status == 1 ?'line-through':''
                                    }} 
                                    className="ml-3">
                                        {task.body}
                                </span>    
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default  List