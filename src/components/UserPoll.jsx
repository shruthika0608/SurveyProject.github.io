import React, { useState } from 'react';
import '../poll.css'; // Import CSS file

function UserPolls() {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  const handleVote = (vote) => {
    if (vote === 'yes') {
      setYesVotes(yesVotes + 1);
    } else if (vote === 'no') {
      setNoVotes(noVotes + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="poll-question">Do you like programming?</h1>
      <form
        className="poll-form"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const userVote = formData.get('vote');
          handleVote(userVote);
        }}
      >
        <label>
          <input type="radio" name="vote" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="vote" value="no" /> No
        </label>
        <button type="submit" className="vote-button">
          Vote
        </button>
      </form>
      <div className="results">
        <h2 className="results-title">Results</h2>
        <div className="results-count">
          <p>
            Yes: <span id="yes-count" className="count">{yesVotes}</span>
          </p>
          <p>
            No: <span id="no-count" className="count">{noVotes}</span>
          </p>
        </div>
      </div>
    </div>
 
    );
}

export default UserPolls;