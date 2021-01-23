const user = {
    username : '',
    area:''
}

function userReducer(state = user, action) {
    switch (action.type) {
            
        case 'ACTUALIZAR_USUARIO':
      
            let nuevoUsuario = {...state, ...action.payload}

            return nuevoUsuario;
    
        default:
            return state;
    }
}

export default userReducer