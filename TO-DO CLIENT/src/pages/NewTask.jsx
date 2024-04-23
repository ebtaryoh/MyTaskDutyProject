import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LoginModal from "./components/LoginModal";
import axiosInstance from "../utils/axiosInstance";
import SignUpModal from "./components/SignUpModal";
import { FaLessThan } from "react-icons/fa6";

const NewTask = () => {
  const { name, token } = useContext(AuthContext);

  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      return setShowLogInModal(true);
    }
    const { data } = await axiosInstance.post(
      "/api/task/",
      { title, description, tags },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(data);
  };

  return (
    <div className="container text-start">
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
      <div className="d-flex py-4 align-items-center gap-2">
        <FaLessThan className="m-0" />
        <h2 className="m-0">New Task</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-5 py-3"
        action=""
      >
        <div className="position-relative">
          <label
            className="label1 position-absolute bg-white px-2 text-secondary fw-semibold fs-4"
            htmlFor=""
          >
            Title
          </label>
          <input
            className="w-100 border py-3 rounded-2 px-4"
            placeholder="E.g My Daily Routine..."
            type="text"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="position-relative">
          <label
            className="label2 position-absolute bg-white px-2 text-secondary fw-semibold fs-4"
            htmlFor="description"
          >
            Drescription
          </label>

          <textarea
            className="w-100 border rounded-2 px-4 py-3"
            placeholder="Briefly describe your task..."
            name=""
            id="description"
            cols="30"
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="position-relative">
          <label
            className="label3 position-absolute bg-white px-2 text-secondary fw-semibold fs-4"
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            className="w-100 border py-3 rounded-2 px-4"
            placeholder="Urgent Important"
            type="text"
            id="tags"
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>
        <button className="w-100 py-3 border-0 rounded-3 text-white bg-button">
          Done
        </button>
        <a href="#" className="text-center">
          Back To Top
        </a>
      </form>
    </div>
  );
};

export default NewTask;
