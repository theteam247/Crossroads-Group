import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRepos } from "store/actions/repos";

export interface BodyProps {}

const Body: FC<BodyProps> = ({
  children
}) => {

  const dispatch = useDispatch()
  
  const app = useSelector<State, AppState>(state => state.app)
  const repos = useSelector<State, ReposState>(state => state.repos)

  useEffect(() => {
    dispatch(getRepos())
  }, [dispatch, app.user])

  return (
    <main className="container">
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Owner" value={app.user} />
        <select className="form-control" value={app.repo}>
          <option selected>Choose Repo...</option>
          {repos?.[app.user]?.map(repo => (
            <option key={repo.node_id} value={repo.full_name}>{repo.name}</option>
          ))}
        </select>
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Refresh</button>
        </div>
      </div>
      {children}
    </main>
  );
};

Body.defaultProps = {};

export default Body;
