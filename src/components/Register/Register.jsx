import React from "react";

import { Modal } from "@material-ui/core";

const Register = ({ children, handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {children}
    </Modal>
  );
};

export default Register;
