import React from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'setData':
            return { ...state, data: action.data }
        default:
            break;
    }
}

export default reducer