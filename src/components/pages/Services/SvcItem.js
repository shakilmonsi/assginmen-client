import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const SvcItem = ({serviceItem}) => {
    const {description, img, price, serviceName, _id} = serviceItem;
    return (
        <div>
            <div className="card border shadow-xl">
                <figure className="px-10 pt-10 border-b pb-4">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <Link><img src={img} alt="" className='h-[165px]' srcset="" /></Link>
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body ">
                    <h2 className="card-title capitalize text-2xl font-bold">{serviceName}</h2>
                    <p className='text-[20px] mb-2'>
                        {
                            description?.length > 100  ? description.slice(0, 100) + '.....' : description
                        }
                    </p>
                    <p className='mb-2 font-bold'>
                        {price}$
                    </p>
                    
                    <div className="card-actions">
                    <Link to={`/services/${_id}`}>
                        <button className="btn pb-0 pt-1 text-[18px]  rounded bg-yellow-700 text-white border-0">View Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SvcItem;