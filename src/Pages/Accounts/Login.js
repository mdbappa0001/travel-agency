import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../Firebase/Firebase.init"
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (gLoading || loading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-700'><small>{error?.message || gError?.message}</small></p>
    }

    if (user || gUser) {
        navigate('/tour');
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-8 lg:mt-0 lg:ml-36">
                <figure><img src="https://web.programming-hero.com/static/media/man-with-laptop.331dfa07.png" alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex h-screen justify-center items-center'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center text-3xl font-bold mb-4">Login</h2>

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Please Provide a valid Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Your Password"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 characters or longer'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                        </label>
                                    </div>

                                    {signInError}
                                    <input className='btn btn-warning w-full max-w-xs' type="submit" value="Login" />
                                </form>
                                <p><small>New to Travel Agency? <Link className='text-primary' to="/signUp">Create New Account</Link></small></p>
                                <div className="divider">OR</div>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline"
                                >SignIn With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;