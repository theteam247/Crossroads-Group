import React, { FC, useEffect, useState } from "react";
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

  const [user, setUser] = useState(app.user)

  useEffect(() => {
    (async () => {
      const repos: Repo[] = await dispatch(getRepos()) as any
      if(repos.length && !repos.find(repo => repo.full_name === app.repo)) {
        dispatch(updateApp({
          repo: repos[0].full_name
        }))
      }
    })()
  }, [dispatch, app.user, app.repo])

  useEffect(() => {
    (async () => {
      const branches: Branch[] = await dispatch(getBranches()) as any
      if(branches.length && !branches.find(branch => branch.name === app.branch)) {
        dispatch(updateApp({
          branch: branches[0].name
        }))
      }
    })()
  }, [dispatch, app.repo, app.branch])

  return (
    <main className="container">
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="User" value={user} onChange={event => setUser(event.target.value)} />
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
          <button className="btn btn-primary" type="button" onClick={() => {
            dispatch(updateApp({
              user
            }))
          }}>Refresh</button>
        </div>
      </div>
      {children}
    </main>
  );
};

Body.defaultProps = {};

export default Body;
