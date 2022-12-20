import React from 'react';
import { Link } from 'react-router-dom';
import SvcItem from '../Services/SvcItem';

const ServiceItem = ({serviceItem}) => {
    return (
        <div>
            <SvcItem serviceItem={serviceItem} />
        </div>
    );
};

export default ServiceItem;