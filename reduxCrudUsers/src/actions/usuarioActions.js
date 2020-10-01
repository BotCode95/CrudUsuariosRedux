import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,
    LISTADO_USUARIOS,
    LISTADO_USUARIOS_EXITO,
    LISTADO_USUARIOS_ERROR,
    OBTENER_USUARIO_ELIMINAR,
    USUARIO_ELIMINAR_EXITO,
    USUARIO_ELIMINAR_ERROR,
    COMENZAR_EDICION_USUARIO,
    USUARIO_EDITADO_EXITO,
    USUARIO_EDITADO_ERROR,
    OBTENER_USUARIO_EDITAR
    
} from '../types'

import clienteAxios from '../config/axios'
import Swal from 'sweetalert2';


//create
export function crearUsuarioAction(usuario){
    return async (dispatch) => {
        dispatch(agregarUsuario());

        try {
          await clienteAxios.post('/usuarios', usuario);
          
          dispatch(agregarUsuarioExito(usuario));
        } catch (error) {
            console.log(error);
            dispatch(agregarUsuarioError(true));
        }
    }
}

const agregarUsuario = () => ({
    type: AGREGAR_USUARIO,
    payload: true
})

//si el usuario se almacena en bd
const agregarUsuarioExito = usuario => ({
    type: AGREGAR_USUARIO_EXITO,
    payload: usuario
})

const agregarUsuarioError = usuario => ({
    type: AGREGAR_USUARIO_ERROR,
    payload: usuario
});

//get user
export function obtenerUsuarios() {
    return async (dispacth) => {
        dispacth(listadoUsuarios());

        try {
            setTimeout( async() => {

            },3000)
            const respuesta = await clienteAxios.get('/usuarios');
            dispacth(listadoUsuariosExito(respuesta.data))
        } catch (error) {
            dispacth(listadoUsuariosError());
        }
    }
}

const listadoUsuarios= () => ({
    type: LISTADO_USUARIOS,
    payload: true,
})

const listadoUsuariosExito = usuarios => ({
    type: LISTADO_USUARIOS_EXITO,
    payload: usuarios
})

const listadoUsuariosError = () => ({
    type: LISTADO_USUARIOS_ERROR,
    payload: true
})

export function obtenerUsuarioEliminar(id) {
    return async (dispacth) => {
        dispacth(eliminarUsuario(id))
        try {
            await clienteAxios.delete(`/usuarios/${id}`);
            dispacth(eliminarUsuarioExito())

               //si se elimina, mostrar alerta
               Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispacth(eliminarUsuarioError())
        }
    }
}

const eliminarUsuario = id => ({
    type: OBTENER_USUARIO_ELIMINAR,
    payload: id
})

const eliminarUsuarioExito = () => ({
    type: USUARIO_ELIMINAR_EXITO
})

const eliminarUsuarioError = () => ({
    type: USUARIO_ELIMINAR_ERROR,
    payload: true
})


//enviar usuario a ruta edicion
export function obtenerUsuarioEditar(usuario){
    return(dispacth) => {
        dispacth(obtenerEdicion(usuario))
    }
}

const obtenerEdicion = usuario => ({
    type: OBTENER_USUARIO_EDITAR,
    payload: usuario
})


//editar registro en la api y state
export function editarUsuarioAction(usuario){
    return async (dispacth) => {
        dispacth(editarUsuario())

        try {
           await clienteAxios.put(`/usuarios/${usuario.id}`, usuario) 
           dispacth(editarUsuarioExito(usuario))
        } catch (error) {
            console.log(error)
            dispacth(editarUsuarioError())
        }
    }
}

const editarUsuario = () => ({
    type: COMENZAR_EDICION_USUARIO
})

const editarUsuarioExito = usuario => ({
    type: USUARIO_EDITADO_EXITO,
    payload: usuario
})

const editarUsuarioError = () => ({
    type: USUARIO_EDITADO_ERROR,
    payload: true
})