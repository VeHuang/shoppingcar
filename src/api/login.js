import {apiClient} from '../utils/fetch';

export function validateUser(user, pwd) {
    return apiClient({
        url: '/login',
        method: 'post',
        data: { 
            "username": user,
            "psd": pwd
         }
    });
}