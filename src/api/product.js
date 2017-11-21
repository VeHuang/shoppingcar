import {apiClient} from '../utils/fetch';

export function getProducts() {
    return apiClient({
        url: '/getlist',
        method: 'get'
    });
}