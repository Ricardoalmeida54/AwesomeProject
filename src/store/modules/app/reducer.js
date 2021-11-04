import types from './types';
import produce from 'immer';
const INITIAL_STATE = {
    user: {
        fbId: null,
        nome: null,
        email: null,
        tipo: 'M',
        accesssToken: null,
    },
};

function app(state = INITIAL_STATE, action) {
switch(action.types) {
case types.UPDATE_USER: {
    return produce(state, (draft) => {
        draft.user = { ...state.user, ...action.user};
    });
    }
default: 
    return state;

}
}

export default app;