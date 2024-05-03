


const reducer = (state, action) => {
    switch (action.type) {

        case 'setTitle':
            return { ...state, title: action.title }
        case 'setDes':
            return { ...state, des: action.des }
        case 'setPrice':
            return { ...state, price: action.price }
        default:
            break;
    }
}

export default reducer