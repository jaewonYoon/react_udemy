export default (state = [],action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        case 'USER_POST':
            return action.payload;
        default:
            return state;
    }
};