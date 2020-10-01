import React, {Fragment, useEffect} from 'react';
import Usuario from './Usuario'

//redux
import {useSelector, useDispatch} from 'react-redux';
import {obtenerUsuarios} from '../actions/usuarioActions'

const ListadoUsuarios = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        //consultar api
        const cargarUsuarios = () => dispatch(obtenerUsuarios())
        cargarUsuarios();
    },[])
    //get state
    const usuarios = useSelector(state => state.usuarios.usuarios);
    const error = useSelector(state => state.usuarios.error);
    const cargando = useSelector(state => state.usuarios.loading);

    return ( 
        <Fragment>
        <h2 className="text-center my-5">Contactos</h2>
        {error ? <p className="font-weight-bold alert
        alert-danger text-center mt-4">Hubo un error</p> : null}
        {cargando ? <p className="text-center">Cargando...</p> : null}
        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.length === 0 ? 'No hay contactos' : 
                (
                    usuarios.map(usuario => 
                    <Usuario
                        key={usuario.id}
                        usuario={usuario}
                    />
                    )
                )}
            </tbody>
        </table>
        </Fragment>
     );
}
 
export default ListadoUsuarios;