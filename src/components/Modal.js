import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function ModalTemplate({ displayModal, toggleModal }) {
  return (
    <Modal
      isOpen={displayModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Button
        variant="contained"
        size="small"
        onClick={()=>{if(toggleModal) {toggleModal(false) }}}>close</Button>
      <div>I am a modal!</div>

    </Modal>
  );
}
export default ModalTemplate;