import React from 'react';
import { connect } from 'react-redux'
import { setLogin,setShow,setLogout } from '../actions'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body:''
        }
    }
    setBody(event ){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    add(){
        if(this.props.login.token) {

            if (this.state.body != '') {
                this.props.addTodo(this.state.body)
                this.setState({body:''})
            } else {
                alert('pehle kuch likh le!')
            }
        } else {
            this.props.setShow()
        }
    }
    render() {
        return (
            <div className="input-group mt-2" style={{width:'50%'}}>
                  <input name="body" value={this.state.body} onChange={(event)=>this.setBody(event)} type="text" className="form-control" placeholder="Enter Task" />
                    <div class="input-group-append">
                        <button onClick={()=>this.add(this.state.body)} class="btn btn-outline-secondary" type="button" id="button-addon2">ADD</button>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    login: state.login
  })
  
const mapDispatchToProps = dispatch => ({
    setShow: () => dispatch(setShow()),
   
})
// export default  Login
export default connect(mapStateToProps, mapDispatchToProps)(Form)