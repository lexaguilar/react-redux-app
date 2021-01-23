const mail = {

}

function mailReducer(state = mail, action) {
    switch (action.type) {
            
        case 'SET_MAIL':

            return action.payload;
    
        default:
            return state;
    }
}

export default mailReducer