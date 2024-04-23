// import React from "react";
// import { Image } from "react-bootstrap";

// const MyTask = () => {
//   return (
//     <div>
//       <div className="d-flex justify-content-between container">
//         <h1>My Tasks</h1>
//         <div className="d-flex gap-3">
//           {/* <Image src={}/> */}
//           <p>logo</p>
//           <p className="main-color fw-medium">Add New Task</p>
//         </div>
//       </div>
//       <div className="container border rounded-2 ">
//         <div className="d-flex justify-content-between  mt-3 ">
//           <p>Urgent</p>

//           <div className=" d-flex gap-4">
//             <div className="d-flex  btn bg-button text-white border-colour ">
//               <p className=" pt-2 fs-5  px-3 ">logo</p>
//               <p className=" pt-2 fs-5 px-3 ">Edit</p>
//             </div>
//             <div className="d-flex btn   border-colour main-color">
//               <p className=" pt-2 fs-5 px-3 ">logo</p>
//               <p className=" pt-2 fs-5 px-3 ">Delete</p>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className=" mb-5">
//           <h2>FinTech Website Update</h2>
//           <p className="fs-5 fw-medium">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
//             incidunt quisquam temporibus optio, eveniet architecto quia maxime,
//             consequatur beatae amet officiis reiciendis ab quo quod nesciunt
//             aliquam dignissimos, explicabo quibusdam!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyTask;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import AuthContext from "../context/AuthContext";

const AllTask = () => {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    if (!token) {
      return setShowLogInModal(true);
    }

    const getData = async () => {
      try {
        const { data } = await axiosInstance.get("/api/task", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(data);
        setTasks(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token]);

  const deleteTask = async (id) => {
    const { data } = await axiosInstance.delete(`/api/task/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
  };

  return (
    <div className="container">
      <LoginModal
        show={showLogInModal}
        onHide={() => setShowLogInModal(false)}
        onSwap={() => setShowSignUpModal(true)}
      />
      <SignUpModal
        show={showSignUpModal}
        onHide={() => setShowSignUpModal(false)}
        onSwap={() => setShowLogInModal(true)}
      />
      <div className="d-flex justify-content-between py-5">
        <p className="fs-4 fw-bold">My Task</p>
        <Link
          to="/new"
          className="text-decoration-none  fs-5 fw-semibold"
        >
          + Add New Task
        </Link>
      </div>
      <div className="d-flex flex-column gap-3 ">
        {tasks.map((task) => {
          return (
            <div key={task._id} className="border p-3 rounded-3 text-start">
              <div className="d-flex justify-content-between border-bottom mb-3">
                <p className="text-danger">{task.tags}</p>
                <div className="d-flex gap-3 mb-4">
                  <div className="edit px-3 rounded-3 bg-button">
                    
                    <Link className="btn text-white d-flex gap-2 align-items-center" to={`/edit/${task._id}`}>
                    <FaRegEdit />Edit
                    </Link>
                  </div>
                  <div className="delete px-3 rounded-3 border  border-colour">
                    <button
                      className="btn text-#974FD0 "
                      onClick={() => {
                        deleteTask(task._id);
                      }}
                    >
                     <div className="d-flex align-items-center gap-2">
                     <RiDeleteBinLine className="main-color" />
                      <p className="m-auto main-color fw-medium"> Delete</p>
                     </div>
                    </button>
                  </div>
                </div>
              </div>
              <p className="fs-3 fw-semibold">{task.title}</p>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
