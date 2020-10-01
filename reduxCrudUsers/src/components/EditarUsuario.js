import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {editarUsuarioAction} from '../actions/usuarioActions'

const EditarUsuario = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        ciudad: ''
    })
    
    //usuario a editar
    const usuarioeditar = useSelector(state => state.usuarios.usuarioeditar);

    useEffect(() => {
        setUsuario(usuarioeditar);

    },[usuarioeditar]);

    //leer los datos del form
    const onChangeFormulario = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, apellido, email, telefono, ciudad} = usuario;
    
    const submitEditarUsuario = e => {
        e.preventDefault();
        dispatch(editarUsuarioAction(usuario))
        history.push('/');
    }

    

    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4
                        font-weight-bold"
                        >Editar Usuario</h2>

                        <form
                            onSubmit={submitEditarUsuario}
                        >
                        <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    autoComplete="off"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    autoComplete="off"
                                    name="apellido"
                                    value={apellido}
                                    onChange={onChangeFormulario}
                                />
                            </ div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    autoComplete="off"
                                    name="email"
                                    value={email}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Telefono</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Telefono"
                                    autoComplete="off"
                                    name="telefono"
                                    value={telefono}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ciudad</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Ciudad"
                                    autoComplete="off"
                                    name="ciudad"
                                    value={ciudad}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold
                                text-uppercase d-block w-100">Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditarUsuario;