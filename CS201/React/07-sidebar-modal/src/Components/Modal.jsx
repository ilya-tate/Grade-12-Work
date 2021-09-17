import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../util/context";

const Modal = () => {
  const {modalOpen, closeModal} = useAppContext();
  return <div className={`modal-overlay ${modalOpen && 'show-modal'}`}>
    <div className="modal-container">
      <h3>Modal Content</h3>
      <button className="close-modal-btn" onClick={closeModal}><FaTimes /></button>
    </div>
  </div>;
};

export default Modal;
