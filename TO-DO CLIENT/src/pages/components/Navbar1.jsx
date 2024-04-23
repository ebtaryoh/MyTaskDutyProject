// import React from "react";
// import { Image } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/img/Group 2.png";
// import logo1 from "../../assets/img/Group 6.png";

// const Navbar = () => {
//   return (
//     <div className="bg-white ">
//       <div className="d-flex justify-content-between container  align-items-center   ">
//         <NavLink to="/">
//           <Image className="mt-4" src={logo} />
//         </NavLink>
//         <div className="d-flex justify-content-between w-25  mt-4 mb-3  align-items-center ">
//           <NavLink to="/newtask">
//             <p className="fw-bold fs-5 text-black text-decoration-line-none">
//               New Task
//             </p>
//           </NavLink>
//           <NavLink to="/mytask">
//             <p className="fw-bold fs-5 text-black text-decoration-line-none">
//               All Tasks
//             </p>
//           </NavLink>
//           <NavLink>
//             <Image src={logo1} />{" "}
//           </NavLink>
//         </div>
//       </div>
//       <hr className="" />
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import taskDutyLogo from "../../assets/img/Group 2.png"
import avatar from "../../assets/img/Group 6.png"


const Navbar1 = () => {
  return (
    <Navbar expand="lg" className="border-bottom py-4">
      <Container>
       <Link to="/" className="text-black text-decoration-none fs-4 fw-bold d-flex align-items-center gap-3">
       <img src={taskDutyLogo} alt="" />
       </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-lg-0 ms-lg-auto d-flex gap-3 align-items-center">
            <Link className="text-black text-decoration-none fw-semibold" to="/new">New Task</Link>
            <Link className="text-black text-decoration-none fw-semibold" to="/tasks">All Task</Link>
            <img src={avatar} alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navbar1;