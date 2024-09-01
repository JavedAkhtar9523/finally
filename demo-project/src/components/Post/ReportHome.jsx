// import { CiFlag1 } from "react-icons/ci";
// import React from "react";
// import './post.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const ReportHome = () => {
//   return (
//     <div className="report_home">
// <button type="button" className="fw-normal fs-6 text-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#reportModal">
// <CiFlag1 className="fs-5 me-2" />
// <span>Report post</span>
//   </button>
//   <div className="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true" >
//     <div className="modal-dialog modal-dialog-centered"   >
//       <div className="modal-content">
//         <div className="modal-header">
//           <h1 className="modal-title fs-5" id="reportModalLabel">Modal title</h1>
//           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div className="modal-body">
//           ...ja ho 
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" className="btn btn-primary">Save changes</button>
//         </div>
//       </div>
//     </div>
//   </div>
//     </div>


//   );
// };

// export default ReportHome;
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { MdClose } from "react-icons/md";
import Typography from '@mui/material/Typography';
import { CiFlag1 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '60vh', // Height is 60% of viewport
  overflowY: 'auto', // Allow scrolling if content overflows
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
};


export default function ReportHome() {
  const [open, setOpen] = React.useState(false);

  // Function to open the modal
  const handleOpen = () => setOpen(true);

  // Function to close the modal
  const handleClose = () => setOpen(false);
  const reportdata=[
    "It's spam",
    "Nudity or sexual activity",
    "Hate speach or symbols",
    "Violence or dangerous organizations",
    "Sale of illegal or regulated goods",
    "Bullying or harassment",
    "Intellectual property violation",
    "Suicide or self-injury",
    "Violence or dangerous organizations",
    "Sale of illegal or regulated goods",
    "Bullying or harassment",
    "Intelletual property violation",
    "Scam or fraud",
    "False information",
    "I just don't like it",
    "Drugs"

  ]
  return (
    <div className=''>
      <button
        onClick={handleOpen}
        className="fw-normal fs-6 text-secondary d-flex align-items-center"
        type="button"
      >
        <CiFlag1 className="fs-5 me-2" />
        <span>Report post</span>
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className="d-flex p-2 justify-content-between align-items-center mx-auto w-100" >  
          <div className="flex-grow-1 text-center">
            <span className='fs-6 fw-semibold'>Report</span>
          </div>
      <div className="ms-auto">
        <span>
          <MdClose onClick={handleClose} className='fs-4 text-dark'/>
        </span>
      </div>
    </div>
    <hr />
    <div>
    <h6 className='text-dark fw-semibold px-3'>Why are you reporting this post ?</h6>
      <hr />
    
      <ul class="list-group list-group-flush">
        {
          reportdata.map((reportdata, index)=>{
            return <li className='list-group-item d-flex justify-content-between'><span>{reportdata}</span><span><FaAngleRight /></span></li>
          })
        }
</ul>
    </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
