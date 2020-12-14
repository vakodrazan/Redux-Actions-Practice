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

function ModalTemplate(props) {
  return (
    <Modal
      isOpen={props.displayModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Button
        variant="contained"
        size="small"
        onClick={()=>{props.toggleModal(false)}}>close</Button>
      <div>I am a modal!</div>

    </Modal>
  );
}
export default ModalTemplate;