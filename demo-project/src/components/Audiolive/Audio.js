import './Audio.css';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { TiMicrophone } from "react-icons/ti";
import { HiUserCircle } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { LuSend } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FaRegClosedCaptioning } from "react-icons/fa";
import { TbFlag3Filled } from "react-icons/tb";
import { FaCamera } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import React, { useState, useRef } from 'react';
import Add_Audio_User from './AddUser';

export default function Audio() {
  const [threedot, setThreeDot] = useState(false);
  const [userClick, setUserClick] = useState(false);
  const [share, setShareClick] = useState(false);
  const videoRef = useRef(null);
  const localStreamRef = useRef(null);
  const [stop, setStop] = useState(false);
  

  function threedothandle() {
    setThreeDot(!threedot);
  }

  function handleUserClick() {
    setUserClick(!userClick);
  }

  function AudioLearning() {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
  }

  const VideoPlaying = () => {
    if (stop) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setStop(false);
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          localStreamRef.current = stream;
          videoRef.current.srcObject = stream;
          videoRef.current.autoplay = true;
          setStop(true);
        })
        .catch((err) => {
          console.error(`You got an error: ${err}`);
        });
    }
  };

  function ShareOption() {
    setShareClick(!share);
  }

  return (
    <div className={`audio-container ${share ? 'split-layout' : ''}`}>
      <div className={`bg-dark text-white mx-5 px-3 rounded-2 ${share ? 'half' : 'full-width'}`}>
        <div className="text-end">
          <PiDotsThreeOutlineFill onClick={threedothandle} className='fs-4' />
        </div>
        {threedot && <div className={`position-absolute show-option-1 ${share ? 'half' : ''}`}><ThreeDot /></div>}
        <div className='text-center align-content-center img-container'>
          <img src="deposit.jpg" className="img-fluid rounded-circle" />
          <h5 className='mt-2'>Host</h5>
        </div>
        <div className='d-flex justify-content-between pb-2'>
          <div className='fs-2'>
            <TiMicrophone className='bg-white rounded-circle text-black p-1' onClick={AudioLearning} />
            <FaCamera className='bg-white rounded-circle text-black p-1 mx-2' onClick={VideoPlaying} />
            <LuSend className='bg-primary rounded-circle text-white p-1' onClick={ShareOption} />
          </div>
          <div>
            <HiUserCircle onClick={handleUserClick} className={`fs-2 mt-1 bg-white rounded-circle text-black p-1 ${share ? 'half' : ''}`} />
            {userClick && <div className={`position-absolute show-option-2 ${share ? 'half' : ''}`}><Add_Audio_User /></div>}
          </div>
        </div>
      </div>
      {share && (
        <div className="rounded-2 left-corner d-flex flex-column justify-content-between half">
          <div className="d-flex justify-content-between">
            <span className='bg-danger text-white px-2 mt-1 rounded-2'>
              <GoDotFill /> Live
            </span>
            <RxCross2 className='fs-2 fw-bold p-1' onClick={() => setShareClick(false)} />
          </div>
          <div className="video-container">
            <video ref={videoRef} className="h-100 w-100" />
          </div>
          <div className='mt-auto'>
            <form className='d-flex position-relative'>
              <img src="deposit.jpg" width="30" className="img-fluid rounded-circle mt-1 mx-1 position-absolute" />
              <input type='text' className='form-control' />
              <LuSend className='bg-primary text-white rounded-circle fs-3 p-1 mt-1 share-icon' />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


function ThreeDot(){
    return (
        <div className='ThreeDot border rounded-2 mt-3 pb-2'>
            <div className='bg-secondary py-1 rounded-1 '>
            <a href='#' className='text-white'><IoMdSettings className='me-3 ms-2 ' />Space settings</a>
            </div>
            <a href='#' className='text-white px-2'><FaRegClosedCaptioning className='me-3' />Show captions</a> <br />
            <a href='#' className='text-danger px-2'><TbFlag3Filled className='me-3' />Report this Space</a>
        </div>
    )
}

