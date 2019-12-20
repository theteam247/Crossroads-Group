import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRepos } from "store/actions/repo";
import { updateApp } from "store/actions/app";
import { getBranches } from "store/actions/branch";

export interface BodyProps {}

const Body: FC<BodyProps> = ({
  children
}) => {

  const dispatch = useDispatch()
  
  const app = useSelector<State, AppState>(state => state.app)
  const repos = useSelector<State, ReposState>(state => state.repos)
  const branches = useSelector<State, BranchesState>(state => state.branches)

  console.log(branches)

  useEffect(() => {
    dispatch(getRepos())
  }, [dispatch, app.user])

  useEffect(() => {
    dispatch(getBranches())
  }, [dispatch, app.repo])

  return (
    <main className="container">
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="User" value={app.user} onChange={event => {
          dispatch(updateApp({
            user: event.target.value
          }))
        }} />
        <select className="form-control" placeholder="Repo" value={app.repo} onChange={event => {
          dispatch(updateApp({
            repo: event.target.value
          }))
        }}>
          {repos?.[app.user]?.map(repo => (
            <option key={repo.node_id} value={repo.full_name}>{repo.name}</option>
          ))}
        </select>
        <select className="form-control" placeholder="Branch" value={app.branch} onChange={event => {
          dispatch(updateApp({
            branch: event.target.value
          }))
        }}>
          {branches?.[app.repo]?.map(branch => (
            <option key={branch.name} value={branch.name}>{branch.name}</option>
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
