import React from 'react';
import { Link } from 'react-router-dom';
import SvcItem from './SvcItem';

const ServicesItem = ({serviceItem}) => {
    return (
        <div>
            <SvcItem serviceItem={serviceItem} />
        </div>
    );
};

export default ServicesItem;