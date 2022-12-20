import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from '../Shered/SocialLogIn';
import facebookIcon from '../../../assets/fa.svg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { setAuthToken } from '../../../api/api';


const Register = () => {
    const {createUser, updateProfileName} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.form?.pathName || '/';
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       
        createUser(email, password)
        .then((result) => {

            updateProfileName(name)
            
            const user = result.user;
            setAuthToken(user);
            Swal.fire({
                icon: 'success',
                title: 'User Create Succesfully!!',
                timer: 1500
              });
            navigate(from, {replace: true})
            form.reset()
          })
          .catch(error => {
            Swal.fire({
                icon: 'error',
                title: `${error.message}`,
                timer: 1500
              });
          });
        console.log(form);
    }

    return (
        <div className='pt-24'>
            <h1 className='text-4xl text-center uppercase text-black question-title font-bold course-title custom-brder relative  mb-4 pb-4'>Sign UP</h1>
            <div className="p-4 w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <form onSubmit={handleRegister} className="space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required="" />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <label for="remember" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-xl text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    
                </form>
                <div className='mt-5'>
                    <div className='pt-2 mb-5'>
                            <div class="flex items-center justify-center">
                                <SocialLogIn />
                                <button class="bg-gray-100 rounded-[100%] ml-4 mr-4 w-10 h-10 font-semibold text-white justify-center items-center flex space-x-2">
                                    <img src={facebookIcon} alt="" srcset="" />
                                </button>
                                
                            </div>
                    </div>
                    <div className="text-xl text-center font-medium text-gray-500 dark:text-gray-300">
                        Have a Account? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500"> Login</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;