import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommits } from "store/actions/commit";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const app = useSelector<State, AppState>(state => state.app);
  const commits = useSelector<State, CommitsState>(state => state.commits);

  useEffect(() => {
    dispatch(getCommits());
  }, [dispatch, app.repo, app.branch]);

  return (
    <ul className="list-group">
      {commits?.[app.repo]?.map(commit => (
        <li
          key={commit.sha}
          className="list-group-item list-group-item-action list-group-item-light text-dark"
        >
          <div className="d-flex align-items-center">
            <div className="flex-fill">
              <h5>
                <a
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-reset"
                >
                  {commit.commit.message}
                </a>
              </h5>
              <div className="d-flex align-items-center">
                <a
                  href={commit.author?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={commit.author?.avatar_url}
                    alt={commit.author?.displayName}
                    width={20}
                    className="rounded"
                  />
                </a>
                <span className="font-weight-normal mx-2">
                  {commit.commit.author.name}
                </span>
                <span className="font-weight-light">
                  {new Date(commit.commit.author.date).toLocaleString()}
                </span>
              </div>
            </div>
            {commit.commit.verification.verified && (
              <span className="badge badge-info mx-2">Verified</span>
            )}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  navigator.clipboard.writeText(commit.sha);
                }}
              >
                Copy
              </button>
              <a
                href={commit.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {commit.sha.slice(0, 7)}
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Home;
