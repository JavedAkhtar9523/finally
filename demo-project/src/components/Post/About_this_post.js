// import React from 'react'
// import { useSelector } from 'react-redux';
// import { SlCalender } from "react-icons/sl";
// import { MdOutlineLocationOn } from "react-icons/md";
// import './post.css'
// export default function About_this_post() {
//           const {  user, isAuthenticated } = useSelector(
//                     (state) => state.user
//                   );
                 
//                  function formatDate(dateString) {
//                     const date = new Date(dateString);
//                     const options = { year: 'numeric', month: 'long' }; // 'long' for full month name
//                     return date.toLocaleDateString(undefined, options); // Locale 'undefined' to use default
//                   }
//   return (
//           <React.Fragment>
//           <div className="About_this_post ">
//           <div className='text-center'><h5>About this account</h5></div>
//           <hr />
//           <div className='text-center'>
//           <img  src={ user?.avatar[0]?.url ||
//         "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
//       } width='70' height='70' className='rounded-circle'
//       alt="" />
//         <h6>entrepreneursonig</h6>
//         <p className='text-secondary-emphasis' style={{fontSize: "0.8rem"}}>To help keep our community authentic, we're showing information about accounts on Instagram. <span><a href='#' className='text-decoration-none text-primary-emphasis' >See why thiss information is important</a></span> </p>
//           </div>
//           <div className="ms-2 mt-4">
//           <div className="d-flex align-items-center ms-2" style={{fontSize: "0.9rem"}}>
//             <SlCalender className="me-3 fw-semibold" />
//             <div className="lh-sm">
//               <p className="mb-1">Date joined</p> 
//               <p className="mb-0 text-secondary">
//                 {user?.createdAt ? formatDate(user.createdAt) : "Date not available"}
//               </p>
//             </div>
    
//           </div>
//           <div className="d-flex mt-4 align-items-center ms-2" style={{fontSize: "0.9rem"}}>
//             <MdOutlineLocationOn className="me-3 fw-semibold fs-5" />
//             <div className="lh-sm"> 
//               <p className="mb-1">Account based in </p> 
//               <p className="mb-0 text-secondary">
//                 Not shared
//               </p>
//             </div>
//           </div>
    
//         </div>
//         <hr />       
//           </div>
    
//         </React.Fragment>
//   )
// }

// import React from 'react'
// import { useSelector } from 'react-redux';
// import { SlCalender } from "react-icons/sl";
// import { MdOutlineLocationOn } from "react-icons/md";
// export default function About_this_post() {
//   const {  user, isAuthenticated } = useSelector(
//     (state) => state.user
//   );
 
//  function formatDate(dateString) {
//     const date = new Date(dateString);
//     const options = { year: 'numeric', month: 'long' }; // 'long' for full month name
//     return date.toLocaleDateString(undefined, options); // Locale 'undefined' to use default
//   }
//   return (
//   <React.Fragment>
//   <div className="About_this_post ">
//   <div className='text-center'><h5>About this account</h5></div>
//   <hr />
//   <div className='text-center'>
//   <img  src={ user?.avatar[0]?.url ||
// "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
//       } width='70' height='70' className='rounded-circle'
//       alt="" />
// <h6>entrepreneursonig</h6>
// <p className='text-secondary-emphasis' style={{fontSize: "0.8rem"}}>To help keep our community authentic, we're showing information about accounts on Instagram. <span><a href='#' className='text-decoration-none text-primary-emphasis' >See why thiss information is important</a></span> </p>
//   </div>
//   <div className="ms-2 mt-4">
//   <div className="d-flex align-items-center ms-2" style={{fontSize: "0.9rem"}}>
//     <SlCalender className="me-3 fw-semibold" />
//     <div className="lh-sm">
//       <p className="mb-1">Date joined</p> 
//       <p className="mb-0 text-secondary">
// {user?.createdAt ? formatDate(user.createdAt) : "Date not available"}
//       </p>
//     </div>
    
//   </div>
//   <div className="d-flex mt-4 align-items-center ms-2" style={{fontSize: "0.9rem"}}>
//     <MdOutlineLocationOn className="me-3 fw-semibold fs-5" />
//     <div className="lh-sm"> 
//       <p className="mb-1">Account based in </p> 
//       <p className="mb-0 text-secondary">
//         Not shared
//       </p>
//     </div>
//   </div>
    
// </div>
// <hr />       
//   </div>
    
// </React.Fragment>
//   )
// }

import { HiOutlineExclamationCircle } from "react-icons/hi";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import React from "react";
import { useSelector } from "react-redux";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import './post.css'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
};

export default function AboutThisPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" }; // 'long' for full month name
    return date.toLocaleDateString(undefined, options); // Locale 'undefined' to use default
  }

  return (
    <div className={open ? 'blur-background' : ''} >
      <button
        className="fw-normal fs-6 text-secondary d-flex align-items-center"
        onClick={handleOpen}
      >
        <HiOutlineExclamationCircle className="me-2 fs-5" />
        <span>About This Post</span>
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
            <div className="About_this_post">
              <div className="text-center mt-3">
                <h5>About this account</h5>
              </div>
              <hr />
              <div className="text-center">
                <img
                  src={
                    user?.avatar[0]?.url ||
                    "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
                  }
                  width="70"
                  height="70"
                  className="rounded-circle"
                  alt=""
                />
                {/* <h6 className="fw-medium">{user?.username || "Username"}</h6> */}
                <h6 className="fw-semibold mt-2">entrepreneursonig</h6>
                <p
                  className="text-secondary-emphasis fw-medium mx-3 px-3 mt-1"
                  style={{ fontSize: "0.8rem" }}
                >
                  To help keep our community authentic, we're showing
                  information about accounts on Instagram.{" "}
                  <span>
                    <a
                      href="#"
                      className="text-decoration-none text-primary-emphasis"
                    >
                      See why this information is important
                    </a>
                  </span>
                </p>
              </div>
              <div className="ms-3 ps-3 mt-4">
                <div
                  className="d-flex align-items-center ms-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  <SlCalender className="me-3 fs-5 fw-bolder" />
                  <div className="lh-sm fs-6">
                    <p className="mb-1">Date joined</p>
                    <p className="mb-0 text-secondary">
                      {user?.createdAt ? formatDate(user.createdAt) : "Date not available"}
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex mt-4 align-items-center ms-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  <MdOutlineLocationOn className="me-3 fw-bolder fs-4" />
                  <div className="lh-sm fs-6">
                    <p className="mb-1">Account based in</p>
                    <p className="mb-0 text-secondary">Not shared</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="text-center pb-2">
              <button className="text-secondary border-0 bg-white text-dark" onClick={handleClose}>
                Close
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
