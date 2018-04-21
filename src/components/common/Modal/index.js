import React from "react";
import ReactModal from 'react-modal';
// import PropTypes from "prop-types";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    border: '1px solid rgba(0,0,0,0.6)',
    borderRadius: 'none',
    width: 600,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 64,
  },
};

const closeStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.8)',
  width: 32,
  height: 32,
  borderRadius: '50%',
  color: 'white',
  outline: 'none',
};

ReactModal.setAppElement('#root');

export default function Modal({
  showModal,
  onOpenModal,
  onCloseModal,
  children,
}) {
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      {children}
      <button style={closeStyle} onClick={onCloseModal}>X</button>
    </ReactModal>
  )
}