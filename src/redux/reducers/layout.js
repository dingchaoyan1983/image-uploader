export const LOAD_LAYOUT_SUCCESS = 'LOAD_LAYOUT_SUCCESS';

const initailState = {

};

export default function(state = initailState, {type, payload}) {
    switch (type) {
        case LOAD_LAYOUT_SUCCESS:
            return payload;
    }
    return state;
}