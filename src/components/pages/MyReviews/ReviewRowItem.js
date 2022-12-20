import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';
import '../../All.css';
import Swal from 'sweetalert2';
const ReviewRowItem = ({reviewItem, serialReview, handleReviewDelete, dfltValue, handleUpdata}) => {
    const {serviceName, textArea, _id } = reviewItem;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    

    
    return (
        <tr className=''>
             
            <th>{serialReview}</th>
            <th>{serviceName}</th>
            <td>{textArea}</td>
            <td className='pr-12'>
                <button className='btn m-1 btn-primary pt-1' onClick={() => handleReviewDelete(_id)}>Delete</button>
                <label onClick={showModal} className='ml-5 cursor-pointer'>Edit</label>
                <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="text-whit bg-[#ebe9ee] bg-opacity-80">
                        <div className=" bg-[#fff] relative">
                            <h3 className="font-bold text-xl">Service: {serviceName}</h3>
                            <div className='flex flex-col'>
                            <form onSubmit={(event) => handleUpdata(event, _id)}>
                                <textarea name='reveiwTextArea' defaultValue={dfltValue} className="text-white textarea text-[18px] w-full h-40" placeholder={dfltValue}></textarea>
                                <div>
                                     <button className='btn btn-primary mt-4 pt-1'  
                                     type='submit'>Update Review</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </Modal>
               
            </td>
            <div>
            </div>
        </tr>
        
    );
};

export default ReviewRowItem;