import { BsCheckCircleFill } from "react-icons/bs";
import TopBar from "./TopBar";
import "./Modules.css";
import ModulesControls from "./ModulesControl"; 

export default function Modules() {
  return (
    <div className="p-3">
      <TopBar courseName="CS5610 SUM 25"/>
      <ModulesControls />
      <ul className="list-unstyled" id="wd-modules">
        <li className="wd-module border mb-4">
          <div className="d-flex align-items-center justify-content-between bg-light p-2 fw-bold border-bottom">
            <span>Week 1</span>
            <span>
              <BsCheckCircleFill className="text-success me-2" />
              <span className="btn btn-sm btn-outline-secondary">+</span>
            </span>
          </div>
          <ul className="list-unstyled m-0">
            <li className="border-bottom">
              <div className="p-2 bg-white fw-semibold">LEARNING OBJECTIVES</div>
              <ul className="list-unstyled m-0 ps-3">
                <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
                  Introduction to the course
                  <BsCheckCircleFill className="text-success" />
                </li>
                <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
                  Learn what is Web Development
                  <BsCheckCircleFill className="text-success" />
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module border mb-4">
          <div className="d-flex align-items-center justify-content-between bg-light p-2 fw-bold border-bottom">
            <span>Week 2</span>
            <span>
              <BsCheckCircleFill className="text-success me-2" />
              <span className="btn btn-sm btn-outline-secondary">+</span>
            </span>
          </div>
          <ul className="list-unstyled m-0">
            <li className="border-bottom">
              <div className="p-2 bg-white fw-semibold">LEARNING OBJECTIVES</div>
              <ul className="list-unstyled m-0 ps-3">
                <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
                  Setting up the Development Environment
                  <BsCheckCircleFill className="text-success" />
                </li>
                <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
                  Creating a React Web Application
                  <BsCheckCircleFill className="text-success" />
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module border mb-4">
          <div className="d-flex align-items-center justify-content-between bg-light p-2 fw-bold border-bottom">
            <span>Week 3</span>
            <span>
              <BsCheckCircleFill className="text-success me-2" />
              <span className="btn btn-sm btn-outline-secondary">+</span>
            </span>
          </div>
          <ul className="list-unstyled m-0">
            <li className="border-bottom">
              <div className="p-2 bg-white fw-semibold">LEARNING OBJECTIVES</div>
              <ul className="list-unstyled m-0 ps-3">
                <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
                  Getting started with the Assignment 1
                  <BsCheckCircleFill className="text-success" />
                </li>
                <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
                  Learn how to create user interfaces with HTML
                  <BsCheckCircleFill className="text-success" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
