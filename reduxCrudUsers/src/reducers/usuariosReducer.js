import {AGREGAR_USUARIO,
        AGREGAR_USUARIO_EXITO,
        AGREGAR_USUARIO_ERROR,
        LISTADO_USUARIOS,
        LISTADO_USUARIOS_EXITO,
        LISTADO_USUARIOS_ERROR,
        USUARIO_ELIMINAR_ERROR, 
        USUARIO_EDITADO_ERROR, 
        USUARIO_ELIMINAR_EXITO, 
        OBTENER_USUARIO_ELIMINAR, 
        OBTENER_USUARIO_EDITAR, 
        USUARIO_EDITADO_EXITO,
             
} from "../types";


//reducer state
const initialState = {
    usuarios: [],
    error: null,
    loading: false,
    usuarioeliminar: null,
    usuarioeditar: null,
}

export default function(state = initialState, action){
    switch(action.type){
    case AGREGAR_USUARIO:
    case LISTADO_USUARIOS:
        return {
            ...state,
            loading: action.payload
        }
    case AGREGAR_USUARIO_EXITO:
        return {
            ...state,
            loading: false,
            usuarios: [...state.usuarios, action.payload]
        }
    case AGREGAR_USUARIO_ERROR:
    case LISTADO_USUARIOS_ERROR:
    case USUARIO_ELIMINAR_ERROR:
    case USUARIO_EDITADO_ERROR:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
    case LISTADO_USUARIOS_EXITO:
        return {
            ...state,
            loading: false,
            error: null,
            usuarios: action.payload
        }
    case OBTENER_USUARIO_ELIMINAR:
        return {
            ...state,
            usuarioeliminar: action.payload
        }
    case USUARIO_ELIMINAR_EXITO:
        return{
            ...state,
            usuarios: state.usuarios.filter( usuario =>
                 usuario.id !== state.usuarioeliminar)
        }
    case OBTENER_USUARIO_EDITAR:
        return {
            ...state,
            usuarioeditar: action.payload
        }
    case USUARIO_EDITADO_EXITO:
        return {
            ...state,
            usuarioeditar:null,
            usuarios: state.usuarios.map(usuario => 
                usuario.id === action.payload.id 
                ? usuario = action.payload 
                : usuario
            )
        }
        
        default:
            return state;
    }
}