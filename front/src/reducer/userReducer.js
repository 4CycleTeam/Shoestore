import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,
    ADMIN_USERS_REQUEST,
    ADMIN_USERS_SUCCESS,
    ADMIN_USERS_FAIL,
    ADMIN_USER_DETAILS_REQUEST,
    ADMIN_USER_DETAILS_FAIL,
    ADMIN_USER_DETAILS_SUCCESS,
    ADMIN_USER_UPDATE_REQUEST,
    ADMIN_USER_UPDATE_SUCCESS,
    ADMIN_USER_UPDATE_FAIL,
    ADMIN_USER_UPDATE_RESET,
    ADMIN_DELETE_USER_REQUEST,
    ADMIN_DELETE_USER_SUCCESS,
    ADMIN_DELETE_USER_FAIL,
} from "../constants/userConstants"

//Cambios y reducer sobre procesos de autenticacion
export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case LOGOUT_SUCCESS:
            return{
                loading:false,
                isAuthenticated:false,
                user:null
            }

        case LOGOUT_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

//Actualizar usuario, actualizar contraseña
export const userReducer = ( state = {}, action) =>{
    switch (action.type){
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading:true
            }
    
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }
        
        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
            return{
                ...state,
                isUpdated: false
            }
        
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        
        default:
            return state
        
    }
}

export const forgotPasswordReducer = (state={}, action)=>{
    switch(action.type){
        
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return{
                ...state,
                loading: true,
                error:null
            }
        
        case FORGOT_PASSWORD_SUCCESS:
            return{
                ...state,
                loading:false,
                message: action.payload
            }
        
        case NEW_PASSWORD_SUCCESS:
            return{
                ...state,
                success: action.payload
            }
        
        case FORGOT_PASSWORD_FAIL:
        case NEW_PASSWORD_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
}

//Ver usuarios ADMIN
export const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ADMIN_USERS_REQUEST:
            return {
                loading: true,
                users: []
            }
            
        case ADMIN_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case ADMIN_USERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

//REDUCER PARA TENER  DETALLES DEL USUARIO
export const userDetailsReducer =  (state = { user: {} }, action) => {
    switch (action.type) {

        case ADMIN_USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADMIN_USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case ADMIN_USER_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



         
    // ACTUALIZAR USUARIO DESDE EL ADMIN 
    export const updateUserReducer = (state={}, action)=>{
        switch(action.type){
            case ADMIN_DELETE_USER_REQUEST:
            case ADMIN_USER_UPDATE_REQUEST:
                return{
                    ...state, 
                    loading:true
                }
            case  ADMIN_DELETE_USER_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    isDeleted: action.payload
                }
    
            case ADMIN_USER_UPDATE_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    isUpdated: action.payload
                }
                
            case ADMIN_DELETE_USER_FAIL:
            case ADMIN_USER_UPDATE_FAIL:
                return{
                    ...state,
                    error: action.payload
                }
                
            case ADMIN_USER_UPDATE_RESET:
                return{
                    ...state,
                    isUpdated: false
                }
            case CLEAR_ERRORS:
                return {
                    error:null
                }
            default:
                return state
        }
    }
    