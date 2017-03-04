import { LOAD_LAYOUT_SUCCESS } from './layout';

export function loadLayout() {
    return {
        API_CALL: true,
        url: '/api/v1/layouts/2007',
        types: [null, LOAD_LAYOUT_SUCCESS, null]
    }
}