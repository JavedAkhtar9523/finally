import React, { useEffect, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import Carousel from "../carosuel/carousel";
import ChartComponent from "../../layout/chartcomponent";
import TextCard from "./Spread/TextCard.jsx";
import Spread_news from "../../pages/Card/Spread-news";
import NetworkCard from "../../pages/Card/Network-Card";
import MatchCard from "../../pages/Card/matchCard";
import Terms_Service from "../../pages/Card/Terms_Service/Terms_Service";
import ActivitySection from "./ActiveSection";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";
import TakeATour from "./../../pages/Card/TakeATour.js";
import { FaMicrophone } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { LuCircleDashed } from "react-icons/lu";

const featuredPosts = [
  {
    category: "science",
    title: "Renewable Energy",
    description:
      "Solar panels and wind turbines generating for green and sustainable future.",
    image:
      "https://media.istockphoto.com/id/1450272068/photo/wind-sun-and-water-energy.jpg?s=1024x1024&w=is&k=20&c=zmMsbQLf_RcuaKVH4coGYzZuFnD5FFUtTNAEo6yUO8o=",
  },
  {
    category: "nature",
    title: "Ecological Call",
    description:
      "Abstract icon representing the ecological call to recycle and reuse in the form of a pond with a recycling symbol in the middle of a beautiful untouched jungle. 3d rendering.",
    image:
      "https://media.istockphoto.com/id/1340716614/photo/abstract-icon-representing-the-ecological-call-to-recycle-and-reuse-in-the-form-of-a-pond.jpg?s=1024x1024&w=is&k=20&c=qCgLki6nJ_PUS_4SEQ8Jwrot5BM4XPRUqMP8KkWjFH8=",
  },
  {
    category: "science",
    description:
      "Young woman working on laptop in the nature . Leisure activities / Remote working concept.",
    image:
      "https://media.istockphoto.com/id/1305227027/photo/woman-relaxing-in-nature-and-using-technology.jpg?s=1024x1024&w=is&k=20&c=LZ8fvDOUuminrmchMm5emL7iSFMFwgl61pnnV2-lIpU=",
  },
  {
    category: "nature",
    description:
      "Man hands holding global network and data customer connection on nature background.",
    image:
      "https://media.istockphoto.com/id/1165058709/photo/man-hands-holding-global-network-and-data-customer-connection-on-nature-background.jpg?s=1024x1024&w=is&k=20&c=kwbXH16oikt1Kf_6wE6G29F6gUrKB0WaUDgdkKwci1Q=",
  },
  {
    category: "nature",
    description: "World sustainable environment concept.",
    image:
      "https://media.istockphoto.com/id/1398025593/vector/world-sustainable-environment-concept-design.jpg?s=1024x1024&w=is&k=20&c=07Rm_FWBJKy0BiZFhc3WX3WSU8HcQwogZKiz2eLEq-A=",
  },
  {
    category: "nature",
    description: "World sustainable environment concept.",
    image:
      "https://media.istockphoto.com/id/1398025593/vector/world-sustainable-environment-concept-design.jpg?s=1024x1024&w=is&k=20&c=07Rm_FWBJKy0BiZFhc3WX3WSU8HcQwogZKiz2eLEq-A=",
  },
  {
    category: "feature",
    title: "Future Blogger",
    description:
      "A fantastic picture of the blogger of the future looking from his workplace to the beautiful view from the window.",
    image:
      "https://media.istockphoto.com/id/1030419404/photo/sci-fi-blogger-surrounded-by-nature.jpg?s=1024x1024&w=is&k=20&c=JAxAzTT5O6DVagdG9DV2_sBP9TPu1zOEfzRF7ZLxrnw=",
  },
  {
    category: "science",
    image:
      "https://media.istockphoto.com/id/1364083209/photo/technology-in-the-field-digital-tablet.jpg?s=1024x1024&w=is&k=20&c=7sBXnhiZ_GRCtuRMDX2OjBiwEM5wbAuqqkVNE5mWFKk=",
    description: "Technology in the field - digital tablet",
  },
  {
    category: "science",
    image:
      "https://media.istockphoto.com/id/1364083209/photo/technology-in-the-field-digital-tablet.jpg?s=1024x1024&w=is&k=20&c=7sBXnhiZ_GRCtuRMDX2OjBiwEM5wbAuqqkVNE5mWFKk=",
    description: "Technology in the field - digital tablet",
  },
  {
    category: "feature",
    title: "Environmental Examination",
    description:
      "Biologist environmentalist examining the condition of the forest and the trees. Environmental conservation.",
    image:
      "https://media.istockphoto.com/id/1323675815/photo/ecologist-on-fieldwork-forester-examines-trees-in-their-natural-condition-in-the-forest-and.jpg?s=1024x1024&w=is&k=20&c=x176k_DhkPkHIptWaioOnEcrbunbGXrwjX7Wg-OBrJM=",
  },
  {
    category: "feature",
    title: "Environmental Examination",
    description:
      "Biologist environmentalist examining the condition of the forest and the trees. Environmental conservation.",
    image:
      "https://media.istockphoto.com/id/1323675815/photo/ecologist-on-fieldwork-forester-examines-trees-in-their-natural-condition-in-the-forest-and.jpg?s=1024x1024&w=is&k=20&c=x176k_DhkPkHIptWaioOnEcrbunbGXrwjX7Wg-OBrJM=",
  },
  {
    category: "feature",
    title: "Environmental Examination",
    description:
      "Biologist environmentalist examining the condition of the forest and the trees. Environmental conservation.",
    image:
      "https://media.istockphoto.com/id/1323675815/photo/ecologist-on-fieldwork-forester-examines-trees-in-their-natural-condition-in-the-forest-and.jpg?s=1024x1024&w=is&k=20&c=x176k_DhkPkHIptWaioOnEcrbunbGXrwjX7Wg-OBrJM=",
  },
];

const btns = [
  { id: 1, title: "Post" },
  { id: 2, title: "Repost" },
  { id: 3, title: "Shows" },
];

export const initialProfiles = [
  {
    id: 1,
    name: "Adity Shrivastava",
    username: "srivastava",
    title: "Entrepreneur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis amet, distinctio possimus modi rem suscipit sit dignissimos cupiditate nisi.",
    image: "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg",
    isFollowing: false,
  },
  {
    id: 2,
    name: "Rupendra Vishwakarma",
    username: "rupendra_353",
    title: "Entrepreneur",
    description: "i am a normal personal ",
    image: "deposit.jpg",
    isFollowing: false,
  },
  {
    id: 3,
    name: "Akash panday",
    username: "akssh_34",
    title: "Entrepreneur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg",
    isFollowing: false,
  },
  // ... other profiles
];

const Profile = ({ scrollableContentRef }) => {
  let additional_links = [
    "https://www.linkedin.com/in/rupendr546",
    "https://www.instagram.com/rupendravish_9186/",
    // "https://www.linkedin.com/in/sjova",
    "https://www.instagram.com/sharuam/",
  ];
  console.log(additional_links.length);
  const title = "Prefect Match";
  const [selectedCategory, setSelectedCategory] = useState("feature");
  const [profiles, setProfiles] = useState(initialProfiles);
  const [expands, setExpands] = useState(false);

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);
  const { error, loading, user, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const displaylinks = expands
    ? additional_links
    : additional_links.slice(0, 2);

  return (
    <div className="container-fluid " style={{ backgroundColor: "whitesmoke" }}>
      <div className="row">
        {/* <div className="col-3">
          <div className="main-left d-flex flex-column align-items-center" style={{ marginTop: "1rem" }}>
            <TextCard />
            <NetworkCard />
          </div>
        </div> */}
        <div
          className="col-8 mt-4 scrollable-content "
          ref={scrollableContentRef}
        >
          <main className="profile-container py-2 bg-white ">
            <div className="cover-img">
              <img
                src={
                  user?.coverImage[0]?.url ||
                  "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
                }
              />
              <span>
                <IoIosSettings className="setting-icon" />
              </span>
              {/* <span className="bi bi-bi-gear-fill"></span> */}
            </div>
            <div className="row">
              <div className="col-3">
                <div className="avatar-box ms-2">
                  <div className="avatar">
                    <img
                      src={
                        user?.avatar[0]?.url ||
                        "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
                      }
                      alt=""
                    />

                    {/* <FaPlus className="plus-icons fs-4 pb-1" /> */}
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="profile-content mt-2">
                  <div className="bio ">
                    <p className=" "> {user?.bio}</p>
                    <p className="text-secondary">{user?.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div className=" ms-2">
                  <div className="d-flex justify-content-center flex-column align-items-left ms-2">
                    <div className="d-flex align-items-center gap-2 mt-1  w-100">
                      <h4
                        className="fw-bold  mt-1"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {user?.firstName} {user?.lastName}
                      </h4>
                      <VscVerifiedFilled className="fs-6 text-primary" />
                    </div>
                    <span
                      className="badge  fw-light"
                      style={{ fontSize: "0.6rem", marginRight: "70px" }}
                    >
                      {user?.email}
                    </span>
                    <span
                      className="badge  mt-2 fw-light"
                      style={{ fontSize: "0.6rem", marginRight: "50px" }}
                    >
                      {user?.username}
                    </span>
                    <div className="d-flex mt-3">
                      <NavLink
                        to="/followers"
                        className="text-decoration-none "
                      >
                        <div className="text-center fw-semibold text-black">
                          <p>{user?.followers.length}</p>
                          <p
                            className=""
                            style={{ fontSize: "0.9rem", marginTop: "-5px" }}
                          >
                            Followers
                          </p>
                        </div>
                      </NavLink>
                      <NavLink
                        to="/following"
                        className="text-decoration-none ms-3"
                      >
                        <div className="text-center ms-3 fw-semibold text-dark">
                          <p>{user?.following.length}</p>
                          <p
                            className=""
                            style={{ fontSize: "0.9rem", marginTop: "-5px" }}
                          >
                            Following
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="profile-content mt-2">
                  <div className="additional-box">
                    <h5 className="">Additional links</h5>
                    {displaylinks.map((link, index) => (
                      <p key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link}
                        </a>
                      </p>
                    ))}
                    {additional_links.length > 2 && (
                      <a
                        href="#"
                        className="text-decoration-none "
                        onClick={(e) => {
                          e.preventDefault();
                          setExpands(!expands);
                        }}
                      >
                        {expands ? "Read Less" : "Read More"}
                      </a>
                    )}
                  </div>

                  <div className="d-flex flex-row-reverse">
                    <div className="profile-btn float-end">
                      <NavLink
                        to={`/profile/info/${user?._id}`}
                        className="btn"
                        style={{
                          color: "white",
                          padding: "5px 38px",
                          backgroundColor: "#0080FF",
                          borderRadius: "4px",
                          marginRight: "19px",
                        }}
                      >
                        Info
                      </NavLink>
                      <NavLink
                        to="/me/update"
                        className="btn"
                        style={{
                          color: "white",
                          padding: "5px 14px",
                          backgroundColor: "#0080FF",
                          borderRadius: "4px",
                        }}
                      >
                        Edit Profile
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="chart mt-2 py-2 bg-white">
            <div className="chart-list">
              <h4>Reach</h4>
              <h4>72</h4>
              <h6 className="fw-medium mb-5">Accounts Reached</h6>

              <p className="d-flex justify-content-between">
                <span>Followers</span>
                <span>{user?.followers.length}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Non-Followers</span>
                <span>{user?.following.length}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Search Appearances</span>
                <span>10</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Post Impression</span>
                <span>8</span>
              </p>
            </div>
            <div className=" ms-5" style={{ width: "350px", height: "350px" }}>
              <ChartComponent />
              <div className="text-end mt-4 ">
                <button className="text-white bg-primary border-0 px-2 rounded-1">
                  More Insights
                </button>
              </div>
            </div>
          </div>

          <div className="generates_post mt-2 p-3 bg-white">
            <div className="d-flex ">
              <div>
                <img
                  src={
                    user?.coverImage[0]?.url ||
                    "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
                  }
                  className="rounded-circle"
                  width="75"
                  height="75"
                />
              </div>
              <div className="w-100">
                <form className="d-flex flex-column">
                  <div className="position-relative">
                    <input
                      type="text"
                      placeholder="Generate Post"
                      className="w-100 mt-2 ms-2 border-0 ps-3 text-dark rounded-pill"
                      style={{ height: "3rem", background: "#e5e6e6" }}
                    />
                    <img
                      src="Ai.jpg"
                      className="border-0 rounded-circle position-absolute top-0 end-0 mt-2 pt-1 me-2"
                      width="35"
                      height="35"
                    />
                    <hr
                      className="border-bottom border-3 rounded-3"
                      style={{ borderColor: "blue" }}
                    />
                  </div>
                  <div className="d-flex justify-content-around  mt-2">
                    <div>
                      <button className="border border-0 rounded-3 bg-white">
                        {" "}
                        <FaMicrophone className="text-danger fw-bolder fs-4 me-1" />{" "}
                        Go Live
                      </button>
                    </div>

                    <div>
                      <label for="formFile" class="form-label">
                        {" "}
                        <GoFileMedia className="fw-bolder fs-4 me-1" />
                        <span className="fs-6 mt-2 ms-1">Media</span>{" "}
                      </label>
                      <input
                        class="form-control d-none"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div>
                      <LuCircleDashed className="fw-bolder fs-4 me-1" /> Add
                      Story
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="feature mt-2 d-flex justify-content-left bg-white flex-column text-align-left text-left">
            {/* <div className="ms-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="feature">-Post</option>
                <option value="nature">Nature</option>
                <option value="science">Science</option>
              </select>
            </div> */}

            <h5 className="ms-3 pt-2">Featured Post</h5>
            <div className="mt-2 d-flex ms-3 align-items-center">
              <Carousel posts={featuredPosts} category={selectedCategory} />
            </div>
          </div>

          <div className="mt-3">
            <ActivitySection activities={featuredPosts} />
          </div>
        </div>
        <div className="col-4">
          <div
            className="main-left d-flex flex-column align-items-center"
            style={{ marginTop: "1rem" }}
          >
            <Spread_news />
            <MatchCard data={users.other} title="Top Search" />
            <TakeATour />
            <div>
              <Terms_Service />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
