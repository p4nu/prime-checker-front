import React from 'react';
import PropTypes from 'prop-types';

import './Notification.css';

/**
 * Shows notification
 *
 * @typedef {Object} NotificationProps
 * @property {string} message
 * @property {string} type
 * @returns {React.ReactElement} Notification div
 */
function Notification({ message, type }) {
  if (!message) {
    return null;
  }

  return (
    <div className={`Notification Notification-${type}`}>
      {message}
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Notification;
