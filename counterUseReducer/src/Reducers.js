const Reducers = (state, action) => {
    switch (action.type) {

        case 'setDec':
            if (state.count > 0) {
                return { ...state, count: state.count - 1 }
            } else {
                return { ...state, count: 0 }
            }

        case 'setInc':
            return { ...state, count: state.count + 1 }

        case 'setInputVal':
            return { ...state, inputVal: action.inputVal }

        case 'setToDos':
            return { ...state, toDos: [...state.toDos, { id: state.toDos.length + 1, name: state.inputVal }], inputVal: '' }

        case 'editedArr':
            return { ...state, toDos: action.arr }
        default:
            break;
    }
}

export default Reducers