interface AppState {
  user: string;
  repo: string;
}

interface ReposState {
  [user: string]: Repo[]
}

interface CommitsState {
  [repo: string]: Commit[];
}

interface State {
  app: AppState;
  repos: ReposState;
  commits: CommitsState
}
