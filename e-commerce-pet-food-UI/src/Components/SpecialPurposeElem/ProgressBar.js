import React from 'react';
import PropTypes from 'prop-types';
import '../../CSS/SpecialPurposeElem/ProgressBar.css'; // Import CSS file for styling

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;

