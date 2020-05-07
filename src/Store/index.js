import { createStore } from 'redux';

const INITIAL_STATE = {
    spinVisible: true,
    modalShow: false,
    activeItens: [],
    pendingItens: [],
    toastShow: false
}

function reducer (state = INITIAL_STATE, action) {

    if (action.type === 'SET_ITENS') {
        return {
            ...state,
            spinVisible: false,
            activeItens: action.activeItens,
            pendingItens: action.pendingItens
        };
    } else if (action.type === 'TOGGLE_TOAST') {
        return {
            ...state,
            toastShow: action.showToast
        }
    }
    
    return state;
}

const store = createStore(reducer);

export default store;