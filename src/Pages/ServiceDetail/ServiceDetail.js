import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));    console.log(serviceId);
    }, []);
    return (
        <div>
            <h2>you are about to book: {service.name}</h2>
            <Link to="/checkout">
                <button className='btn btn-primary'>proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;