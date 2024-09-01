import React from 'react';
import { BsEarFill } from "react-icons/bs";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { TbDots } from "react-icons/tb";
import './Audio.css';
const userData = [
  { id: 1, name: 'Aditya Shivastava', role: 'speaker', img: 'deposit.jpg' },
  { id: 1, name: 'Shivanshu duve', role: 'speaker', img: 'deposit.jpg' },
  { id: 2, name: 'Akash Panday', role: 'joined', img: 'deposit.jpg' },
  
];

function Add_Audio_User() {
  const speakers = userData.filter(user => user.role === 'speaker');
  const joined = userData.filter(user => user.role === 'joined');

  return (
    <div className='Add_Audio_User'>
      <div className='d-flex px-2 fw-semibold justify-content-between'>
        <span className='text-danger mt-2'>End</span>
        <span className='mt-2'>
          <TbDots className='text-black fs-4' />
        </span>
      </div>
      <h5 className='ms-3 mt-3'>Speakers</h5>
      <hr id='hr-line' />
      <div>
        {speakers.map(user => (
          <div key={user.id} className='d-flex justify-content-between mt-2 ms-3 me-3'>
            <img src={user.img} alt={user.name} className='rounded-circle' width='40' height='40' />
            <h4 className='ms-2 mt-2 fs-5 fw-medium'>{user.name}</h4>
            <BiSolidMicrophoneAlt className='text-danger mt-3 ms-5 fw-semibold fs-5' />
          </div>
        ))}
      </div>
      <hr id='hr-line' />
      <div>
        <h5 className='ms-3 mt-3'>Joined</h5>
        {joined.map(user => (
          <div key={user.id} className='d-flex mt-2 ms-3 me-1'>
            <img src={user.img} alt={user.name} className='rounded-circle' width='40' height='40' />
            <h4 className='ms-2 mt-2 fs-5 fw-medium'>{user.name}</h4>
            <button className='text-white rounded-2 my-3 ms-4 border-0 px-2 bg-primary'>Request</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Add_Audio_User;
