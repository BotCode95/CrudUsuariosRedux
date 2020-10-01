import React from 'react';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'

//redux
import {useDispatch} from 'react-redux';
import {obtenerUsuarioEditar, obtenerUsuarioEliminar} from '../actions/usuarioActions'

const Usuario = ({usuario}) => {

    const {nombre, apellido, email, telefono, ciudad, id} = usuario;

    const dispatch = useDispatch();
    const history = useHistory();

    //confirmar si desea eliminarlo
    const confirmarEliminarUsuario = id => {
        //modal decision
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'El usuario sera eliminado',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Si, eliminar'
        }).then((result) => {
            if(result.value){
                dispatch(obtenerUsuarioEliminar(id));
            }
        })
    }

    const redireccionarEdicion = usuario => {
        dispatch(obtenerUsuarioEditar(usuario));
        history.push(`/usuarios/editar/${usuario.id}`)
    }
    return (
        <tr>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{email}</td>
            <td>{telefono}</td>
            <td>{ciudad}</td>
            <td className="acciones">
                <button
                    type="button"
                    onClick={() => redireccionarEdicion(usuario)}
                    className="btn btn-primary mr-2"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarUsuario(id)}
                >Eliminar</button>
            </td>
        </tr>
      );
}
 
export default Usuario;