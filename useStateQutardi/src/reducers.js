function reducer(state, action) {
    switch (action.type) {
        case "setinptValue":
            return { ...state, inptValue: action.inptValue }
        case "setDec":
            // console.log(state.inptValue)
            return { ...state, count: state.count - +state.inptValue }
        case "setmInc":
            console.log(state.inptValue)
            return { ...state, count: state.count + +state.inptValue }
        default:
            break;
    }

}
export default reducer