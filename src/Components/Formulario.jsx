import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
const Formulario = () => {
    const navigate = useNavigate()

    const {
        register,
        formState:{errors},
        handleSubmit
    } = useForm();
    
     
    const clickBotonIniciar = handleSubmit((data)=>  {
        navigate('/HomePage')
    });

    return (
        <form onSubmit={clickBotonIniciar} className="container mt-5 p-10 "  >
            <div className="row justify-content-center ">
                <div className="col-md-4">
                    <h2 className="mb-4">Iniciar Sesión</h2>
                    <div id="loginForm">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label"> Usuario:</label>

                            <input 
                                type="text" className="form-control" id="username" name="username" 
                                {...register('userName',{required:{value:true,message:"Por favor ingrese el usuario"},
                                minLength:{value:2,message:"El usuario debe tener minimo 2 caracteres"},
                                maxLength:{value:10, message:"El usuario debe tener maximo 10 caracteres"},
                                pattern:{value:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, message:"Ingrese un correo valido" }

                            })
                                } />
                                {errors.userName && (
                                    <span className="text-danger"> {errors.userName.message}  </span>
                                )}

                            
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input 
                                type="password" className="form-control" id="password" name="password"
                                {...register('password',{required:{value:true,message:"Por favor ingrese la contraseña"},
                                minLength:{value:2,message:"La contraseña debe tener minimo 2 caracteres"},
                                maxLength:{value:10, message:"La contraseña debe tener maximo 10 caracteres"}

                            })
                                }
                            />
                                {errors.password && (
                                    <span className="text-danger"> {errors.password.message} </span>
                                )}
                        </div>
                        <button  className="btn btn-success">Iniciar Sesión</button>
                    </div>
                    <div id="loginMessage" className="mt-3"></div>
                </div>
            </div>
        </form>
    )
}
export default Formulario  