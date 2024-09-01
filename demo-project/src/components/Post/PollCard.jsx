import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdWhereToVote } from "react-icons/md";
import './PollCard.css';

const PollCard = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = (optionId) => {
    setSelectedOption(optionId);
    
  };

  const calculateTimeRemaining = (duration) => {
    const now = new Date();
    const endTime = new Date(now.getTime() + duration.days * 24 * 60 * 60 * 1000
     + duration.hours * 60 * 60 * 1000 + duration.minutes * 60 * 1000);
    const timeDiff = endTime - now;
  
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  
    return `${days}d ${hours}h ${minutes}m`;
  };
  

  return (
    <div className="poll-card">
      <h5 className="poll-question">{poll.question}</h5>
      <div className="poll-options">
        {poll.options.map((option) => (
          <div
            key={option._id}
            className={`poll-option ${selectedOption === option._id ? 'selected' : ''}`}
            onClick={() => handleVote(option._id)}
          >
            {option.option} 
            {selectedOption === option._id && (
              <span className="poll-vote-indicator">
                 < MdWhereToVote size={22}/>
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="poll-duration">
  Time left: 
  <span className='text-danger'>{calculateTimeRemaining(poll.duration)}</span>
</div>
    </div>
  );
};

PollCard.propTypes = {
  poll: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired, 
      })
    ).isRequired,
    duration: PropTypes.object, 
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PollCard;
