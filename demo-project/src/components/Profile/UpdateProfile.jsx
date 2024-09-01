// import React, { useEffect, useState } from "react";
// import { IoMdImages } from "react-icons/io";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   updateProfile,
//   clearErrors,
//   loadUser,
// } from "../../actions/userActions";
// import { UPDATE_USER_RESET } from "../../constant/userConstant";
// import { toast } from "react-toastify";
// import { FaRegEdit } from "react-icons/fa";
// import "./EditProfile.css";

// const UpdateProfile = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
//   const [avatar, setAvatar] = useState("");
//   const [coverPreview, setCoverPreview] = useState("");
//   const [coverImage, setCoverImage] = useState("");

//   const { user } = useSelector((state) => state.user);
//   const { isUpdated, error, loading } = useSelector(
//     (state) => state.userUpdateProfile
//   );

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     username: "",
//     bio: "",
//     address: "",
//     avatar: "",
//     coverImage: "",
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         firstName: user.firstName || "",
//         lastName: user.lastName || "",
//         email: user.email || "",
//         mobile: user.mobile || "",
//         username: user.username || "",
//         bio: user.bio || "",
//         address: user.address || "",
//         avatar: user.avatar?.url || "",
//         coverImage: user.coverImage?.url || "",
//       });
//       setAvatarPreview(user.avatar?.url || "/Profile.png");
//       setCoverPreview(user.coverImage?.url || "");
//     }

//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }

//     if (isUpdated) {
//       toast.success("Profile updated successfully!");
//       dispatch(loadUser());
//       navigate("/profile");
//       dispatch({ type: UPDATE_USER_RESET });
//     }
//   }, [dispatch, error, navigate, isUpdated, user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const updateProfileChange = (e) => {
//     const reader = new FileReader();

//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         setAvatarPreview(reader.result);
//         setAvatar(reader.result);
//       }
//     };

//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const updateCoverChange = (e) => {
//     const reader = new FileReader();

//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         setCoverPreview(reader.result);
//         setCoverImage(reader.result);
//       }
//     };

//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const updateProfileSubmit = (e) => {
//     e.preventDefault();
//     const myForm = new FormData();
//     Object.keys(formData).forEach((key) => {
//       myForm.append(key, formData[key]);
//     });
//     myForm.append("avatar", avatar);
//     myForm.append("coverImage", coverImage);
//     dispatch(updateProfile(myForm));
//     navigate("/profile");
//   };

//   return (
//     <div className="modal-content-edit w-100 p-4">
//       <div className="modal-body-edit bg-white p-1">
//         <div className="cover-avatar position-relative">
//           {coverPreview ? (
//             <img src={coverPreview} width="100%" height="300" alt="Cover" />
//           ) : (
//             <h3 className="mt-2 text-center">Upload Your Cover Image</h3>
//           )}
//           <label
//             htmlFor="cover-file-input"
//             className="position-absolute float-end me-1"
//             style={{ cursor: "pointer", zIndex: "1000" }}
//           >
//             <input
//               type="file"
//               id="cover-file-input"
//               accept="image/*"
//               className="d-none"
//               onChange={updateCoverChange}
//             />
//             <FaRegEdit className="fs-3 text-dark" />
//           </label>
//         </div>

//         <div className="avatar text-center position-relative">
//           <img
//             src={user?.avatar[0]?.url}
//             alt="Avatar"
//             className="img-fluid rounded-circle me-2"
//             height="100"
//             width="100"
//           />
//           <h5 className="fs-6 fw-bold">
//             {user?.firstName} {user?.lastName}
//           </h5>
//           <p
//             className="text-muted"
//             style={{ fontSize: "1rem", fontFamily: "cursive" }}
//           >
//             {user?.bio}
//           </p>
//         </div>
//         <h5 className="text-left fs-6 fw-bolder w-25" id="exampleModalLabel">
//           Profile Setting :-
//         </h5>
//         <hr />
//         <form onSubmit={updateProfileSubmit} encType="multipart/form-data">
//           <div className="row p-1">
//             <div className="col-3">
//               <img
//                 src={avatarPreview}
//                 alt={user?.firstName}
//                 width="150"
//                 height="140"
//                 className="img-fluid rounded-circle me-2"
//               />
//             </div>
//             <div className="col-9">
//               <div className="position-relative">
//                 <label htmlFor="file-input" className="form-label">
//                   Avatar Image:
//                 </label>
//                 <input
//                   type="file"
//                   name="avatar"
//                   accept="image/*"
//                   className="file-input"
//                   onChange={updateProfileChange}
//                 />
//                 {/* <IoMdImages className="file-input-icon" /> */}
//               </div>
//               <div className="row">
//                 <div className="col-6">
//                   <label className="form-label">First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     placeholder="Enter first name.."
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-6">
//                   <label className="form-label">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     placeholder="Enter last name.."
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mt-2">
//                 <div className="col-6">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter email.."
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-6">
//                   <label className="form-label">Username</label>
//                   <input
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleInputChange}
//                     placeholder="Enter username.."
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mt-2">
//                 <div className="col-12">
//                   <label className="form-label">Mobile</label>
//                   <input
//                     type="text"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     placeholder="Enter mobile number.."
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mt-2">
//                 <div className="col-12">
//                   <label className="form-label">Bio</label>
//                   <textarea
//                     name="bio"
//                     value={formData.bio}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mt-2">
//                 <div className="col-12">
//                   <label className="form-label">Address</label>
//                   <textarea
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     placeholder="Enter your address.."
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <button
//                   type="submit"
//                   className="btn btn-dark rounded-0 btn-sm mt-3"
//                 >
//                   {loading ? "Updating..." : "Update"}
//                 </button>
//                 <NavLink to="/profile" className="text-danger fw-semibold btn">
//                   Close
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateProfile,
  clearErrors,
  loadUser,
} from "../../actions/userActions";
import { UPDATE_USER_RESET } from "../../constant/userConstant";
import { toast } from "react-toastify";
import "./EditProfile.css"; // Keep this for any necessary styles not covered by Input.css
import Banner from "./Banner";

const UpdateProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const [coverPreview, setCoverPreview] = useState("");

  const { user } = useSelector((state) => state.user);
  const { isUpdated, error, loading } = useSelector(
    (state) => state.userUpdateProfile
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    username: "",
    bio: "",
    address: "",
  });

  const [avatar, setAvatar] = useState("");
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        mobile: user.mobile || "",
        username: user.username || "",
        bio: user.bio || "",
        address: user.address || "",
      });
      setAvatarPreview(user.avatar?.url);
      setCoverPreview(user.coverImage?.url || "");
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile updated successfully!");
      dispatch(loadUser());
      navigate("/profile");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, error, navigate, isUpdated, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateProfileChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const updateCoverChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setCoverPreview(reader.result);
        setCoverImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    Object.keys(formData).forEach((key) => {
      myForm.append(key, formData[key]);
    });
    myForm.append("avatar", avatar);
    myForm.append("coverImage", coverImage);
    dispatch(updateProfile(myForm));
  };

  return (
    <div className="contain">
      <Banner
        avatarPreview={avatarPreview}
        coverPreview={coverPreview}
        updateAvatarChange={updateProfileChange}
        updateCoverChange={updateCoverChange}
      />
      <div className="input">
        {/* <div className="cover-avatar position-relative">
          {coverPreview ? (
            <img src={coverPreview} width="100%" height="300" alt="Cover" />
          ) : (
            <h3 className="mt-2 text-center">Upload Your Cover Image</h3>
          )}
          <label
            htmlFor="cover-file-input"
            className="position-absolute float-end me-1"
            style={{ cursor: "pointer", zIndex: "1000" }}
          >
            <input
              type="file"
              id="cover-file-input"
              accept="image/*"
              className="d-none"
              onChange={updateCoverChange}
            />
            <span className="edit-icon">🖉</span>
          </label>
        </div> */}

        {/* <div className="avatar text-center position-relative">
          <img
            src={avatarPreview}
            alt="Avatar"
            className="img-fluid rounded-circle me-2"
            height="100"
            width="100"
          />
          <label htmlFor="avatar-file-input" className="edit-icon-label">
            <input
              type="file"
              id="avatar-file-input"
              accept="image/*"
              className="d-none"
              onChange={updateProfileChange}
            />
            <span className="edit-icon">🖉</span>
          </label>
        </div> */}

        <input
          type="text"
          name="firstName"
          placeholder="Enter Your First Name..."
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Your Last Name..."
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        <textarea
          name="bio"
          placeholder="Bio..."
          value={formData.bio}
          onChange={handleInputChange}
        ></textarea>
        <textarea
          name="address"
          placeholder="Address..."
          value={formData.address}
          onChange={handleInputChange}
        ></textarea>
        <div className="save_btn">
          <button onClick={updateProfileSubmit} disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;