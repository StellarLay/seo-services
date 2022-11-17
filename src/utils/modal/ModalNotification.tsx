import React from 'react';
import './modal.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ModalNotification = (props: any) => {
  return (
    <motion.div
      key='modal'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={props.color + ' modal-notification show'}>
        <span className='modal-notification__text'>{props.modalText}</span>
        <FontAwesomeIcon
          icon={faXmark}
          className='close-icon'
          onClick={() => props.updateModal(false)}
        />
      </div>
    </motion.div>
  );
};

export default ModalNotification;
