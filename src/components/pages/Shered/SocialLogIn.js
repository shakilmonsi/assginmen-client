import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import gmail from '../../../assets/gmail.svg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
// import { setAuthToken } from '../../../api/api';
import Swal from 'sweetalert2';
import { setAuthToken } from '../../../api/api';


const SocialLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    

    const { signInWithGmailPopup } = useContext(AuthContext);
    
    const handleSignInWithPopUp = () => {
        signInWithGmailPopup()
        .then( result => {
            const user = result.user;
            Swal.fire({
                icon: 'success',
                title: 'Login Succesfully!!',
                timer: 1500
            });
            setAuthToken(user);
            navigate(from, {replace: true})
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: `${err.message}`,
                timer: 1500
            });
        })
    }
    return (
        <>
            <button onClick={handleSignInWithPopUp} className="bg-gray-100 rounded-[100%]  w-10 h-10 font-semibold text-white justify-center items-center flex space-x-2">
                <img src={gmail} alt="" srcset="" />
            </button>
        </>
    );
};

export default SocialLogIn;