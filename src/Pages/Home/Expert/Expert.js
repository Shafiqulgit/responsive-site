import React from 'react';

const Expert = ({expert}) => {
    const {img, name, expertize} = expert;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3 className="text-info">{expertize}</h3>
        </div>
    );
};

export default Expert;