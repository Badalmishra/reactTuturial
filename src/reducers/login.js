const login = (state = {token:false,show:false}, action) => {
    switch (action.type) {
      case 'SET_LOGIN':
        return {...state,token:action.token}

      case 'SET_LOGOUT':
        localStorage.removeItem('token')
        return {...state,token:false}

      case 'SET_SHOW':
        return {...state,show:true}
      
      case 'SET_HIDE':
        return {...state,show:false}
  
      default:
        return state
    }
  }
  
  export default login