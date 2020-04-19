import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="input-group mt-2" style={{width:'50%'}}>
                  <input type="text" className="form-control" placeholder="Enter Task" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
            </div>
        )
    }
}

export default  Form