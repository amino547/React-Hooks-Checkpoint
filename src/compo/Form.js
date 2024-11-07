import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ addMovie }) => {
  const [title, setTitle] = useState();
  const [vote_avg, setVote_avg] = useState();
  const [overview, setOverview] = useState();
  const [poster_path, setPoster_path] = useState();

  const add = () => {
    addMovie({
      id: uuidv4(),
      title: title,
      vote_avg: vote_avg,
      overview: overview,
      poster_path: poster_path,
    });
  };

  return (
    <div className="form">
      <div id="signup">
        <h1>Add Movie</h1>

        <form>
          <div className="top-row">
            <div className="field-wrap">
              <label>
                Movie title<span className="req">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label>
                Post Image<span className="req">*</span>
              </label>
              <input
                type="text"
                value={poster_path}
                onChange={(e) => setPoster_path(e.target.value)}
              />
            </div>
          </div>

          <div className="field-wrap">
            <label>
              Overview <span className="req">*</span>
            </label>
            <input
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </div>

          <div className="field-wrap">
            <label>
              Vote<span className="req">*</span>
            </label>
            <input
              type="text"
              value={vote_avg}
              onChange={(e) => setVote_avg(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="button button-block"
            onClick={() => add()}
          >
            Add movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

