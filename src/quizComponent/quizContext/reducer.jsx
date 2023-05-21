const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {...state,category : action.payload};
        case 'SET_RESULT':
            return {...state,result_count : state.result_count + 1};
            break;
        default:
            return {...state};
}
}


export default reducer;