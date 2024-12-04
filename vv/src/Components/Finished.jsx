import React from "react";

const Finished = ({ winnerName, winnerVoteCount }) => {
  return (
    <div className="login-container">
      <h1 className="welcome-message">Voting is Finished</h1>
      <h1>{`the winner is ${winnerName} with ${winnerVoteCount} ${
        winnerVoteCount > 1 ? "votes" : "vote"
      }`}</h1>
    </div>
  );
};

export default Finished;
