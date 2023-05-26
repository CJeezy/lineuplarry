import React, { useState } from 'react';

const YouTubePopup = ({ buttonLabel, videoUrl }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>{buttonLabel}</button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>&times;</span>
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubePopup;