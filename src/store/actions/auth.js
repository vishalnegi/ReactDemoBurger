import * as actionTypes from './actionTypes';
import axios from 'axios';
import { secretKey } from '../../secret';
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + secretKey
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + secretKey
        }
        axios.post(url, authData)
            .then((res) => {
                dispatch(authSuccess(res.data.idToken, res.data.localId))
                dispatch(checkAuthTimeout(res.data.expiresIn))
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error))
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT,
        path: path
    }
}