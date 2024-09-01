import React, { useState } from 'react';
import './Audio.css';
import { IoAddOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Audio from './Audio';

function LiveSpread() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartClick = () => {
    setIsStarted(true);
  };

  return (
    <div className="py-3 ">
      {isStarted ? (
        <Audio />
      ) : (
        <div style={{width: "600px"}} >
          <div className='d-flex  justify-content-between align-items-center' >
            <div className='text-center mx-auto'>
              <img src='video_1.png' width="80" height='80' className='img-fluid rounded-circle' alt='image' />
              <h5 className='go-live'>Go live</h5>
            </div>
            <div className='text-end' style={{marginTop: "-50px"}}>
              <IoMdInformationCircleOutline className='icons fs-3 me-2' href='#' />
            </div>
          </div>
          <div className="ms-2 form-check">
            <div className="ps-2 form-check">
              <input className="form-check-input ps-1" type="radio" name="Audio" id="Audio" defaultChecked />
              <label className="form-check-label" htmlFor="Audio">
                <p className='fs-5'>Audio</p>
              </label>
            </div>
            <div className="ps-2 form-check">
              <input className="form-check-input ps-1" type="radio" name="video" id="video" defaultChecked />
              <label className="form-check-label" htmlFor="video">
                <p className='fs-5'>Video</p>
              </label>
            </div>
          </div>
          <div className="dropdown-center mx-2 mt-2">
            <button className="w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="d-flex justify-content-between align-items-center mx-2">
                <div className='text-start'>
                  <h6 className='text-secondary m-1'>Who can see this?</h6>
                  <h6 className='ms-3'>Everyone</h6>
                </div>
                <div>
                  <IoIosArrowDown className='fs-5' />
                </div>
              </div>
            </button>
            <ul className="dropdown-menu w-100 dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item fs-6" href="#">In Person</a></li>
              <li><a className="dropdown-item fs-6" href="#">Virtual</a></li>
            </ul>
          </div>
          <div className="dropdown-center mx-2 mt-2">
            <button className="w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="d-flex justify-content-between align-items-center mx-2">
                <div className='text-start'>
                  <h6 className='text-secondary m-1'>Who can speak?</h6>
                  <h6 className='ms-3'>Everyone</h6>
                </div>
                <div>
                  <IoIosArrowDown className='fs-5' />
                </div>
              </div>
            </button>
            <ul className="dropdown-menu w-100 dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item fs-6" href="#">In Person</a></li>
              <li><a className="dropdown-item fs-6" href="#">Virtual</a></li>
            </ul>
          </div>
          <div className="row pt-2 justify-content-between align-item-center">
            <div className='col'>
              <p className='fs-6 fw-semibold ms-2'>Add topic</p>
            </div>
            <div className="col-auto">
              <IoAddOutline className='icons fs-4 fw-bold me-2' />
            </div>
          </div>
          <div className="row pt-2 justify-content-between align-items-center">
            <div className="col ms-2">
              <p className='fs-5'>Record session</p>
            </div>
            <div className="col-auto">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
              </div>
            </div>
            <div className='text-center pt-2 ms-4'>
              <button className="btn btn-primary ps-3" onClick={handleStartClick}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveSpread;
