import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expart from '../Expart/Expart';

const exparts = [
    {id: 1, name: 'will smith', img: expart1},
    {id: 2, name: 'chris rock', img: expart2},
    {id: 3, name: 'dwayne rock', img: expart3},
    {id: 4, name: 'messy vai', img: expart4},
    {id: 5, name: 'ronaldo bro', img: expart5},
    {id: 6, name: 'stachy jonson', img: expart6}
]

const Exparts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Our Exparts</h2>
            <div className='row'>
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;