import React, {useState} from 'react';
//redux
import {useDispatch, useSelector} from 'react-redux'

//action react
import {crearUsuarioAction} from '../actions/usuarioActions'

const NuevoUsuario = ({history}) => {

    //state del componente
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [ciudad, setCiudad] = useState('');

    const dispatch = useDispatch();
    

    //acceder al state del store
    const cargando = useSelector((state) => state.usuarios.loading);
    const error = useSelector((state) => state.usuarios.error);

    const agregarUsuario = (usuario) => dispatch(crearUsuarioAction(usuario));

    const submitNuevoUsuario = e => {
        e.preventDefault();

        if(nombre.trim() === '' ||
            apellido.trim() === '' ||
            email.trim() === '' ||
            telefono <= 0 ||
            ciudad.trim() === ''){
            
            return 'Complete los campos';
        }

        agregarUsuario({
            nombre,
            apellido,
            email,
            telefono,
            ciudad
        })

        //redireccionar
        history.push('/');
    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb.5
                        font-weight-bold"
                        >Agregar Usuario
                        </h2>
                        <form
                            onSubmit={submitNuevoUsuario}
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
                                    onChange={(e) => setNombre(e.target.value)}    
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
                                    onChange={e => setApellido(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    autoComplete="off"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => Number (setTelefono(e.target.value))}
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
                                    onChange={e => setCiudad(e.target.value)}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold
                                text-uppercase d-block w-100">Agregar</button>
                        </form>
                        {cargando ? <p>Cargando...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoUsuario;