import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const VideoModal = ({ buttonClass, iconClass }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="KuTOO28tRI4" onClose={() => setOpen(false)} />

      <button onClick={() => setOpen(true)} className={buttonClass}>
        {/* Conditionally render icon and text */}
        <span className={iconClass}>
          <i className="fa-solid fa-play"></i>
        </span>
        {iconClass && <span className="text">Play Now</span>}
      </button>
    </>
  );
};

export default VideoModal;
