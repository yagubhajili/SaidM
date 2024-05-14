
const Reducers = (state, action) => {
    switch (action.type) {

        case 'setData':
            return { ...state, data: action.data }
        case 'setInputVal':
            return { ...state, inputVal: action.inputVal }
        case 'setLocalStorages':
            // let obj = {
            //     id: state.
            // }
            return { ...state, localStorages: state.inputVal }
        default:
            break;
    }
}

export default Reducers