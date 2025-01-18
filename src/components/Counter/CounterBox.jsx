import React, { useEffect, useState } from 'react';

const CounterBox = ({ icon, title, target, duration }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = target / (duration / 100);
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < target) {
                    return Math.min(prevCount + increment, target);
                } else {
                    clearInterval(interval);
                    return target;
                }
            });
        }, 100);
        return () => clearInterval(interval);
    }, [target, duration]);

    return (
        <>
        <div className="col-xl-3 col-md-6 ">
            <div className='box icon-shadow p-3 d-flex gap-3'>
                <span className='icon c-my-primary fs-1'>{icon}</span>
                <div className="desc text-secondary w-100">
                    <span className='fs-2 fw-bold'>{Math.floor(count)}</span>
                    <p>{title}</p>
                </div>  
            </div>  
        </div>
       </>
    );
        
      
};


export default CounterBox;