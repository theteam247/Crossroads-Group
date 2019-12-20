import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommits } from 'store/actions/commits';

const Home: React.FC = () => {

  const dispatch = useDispatch();

  const app = useSelector<State, AppState>(state => state.app)
  const commits = useSelector<State, CommitsState>(state => state.commits)

  useEffect(() => {
    dispatch(getCommits())
  }, [dispatch, app.repo])

  console.log(commits)

  return (
    <div>
      {commits?.[app.repo]?.map(commit => (
        <pre key={commit.node_id}>{commit.commit.message}</pre>
      ))}
    </div>
  );
}

export default Home;
