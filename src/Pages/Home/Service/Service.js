import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const { name, price, img, description} = service;

    return (
        <div className="service-style">
            <img className="imge" src={img} alt="" />
            <p className="mt-2 text-primary">{name}</p>
            <h3 className="text-info">Price: {price}</h3>
            <p className="px-3"><small>{description}</small></p>
        </div>
    );
};

export default Service;