interface AppState {
  user: string;
  repo: string;
  branch: string;
}

interface ReposState {
  [user: string]: Repo[]
}

interface BranchesState {
  [repo: string]: Branch[];
}

interface CommitsState {
  [repo: string]: Commit[];
}

interface State {
  app: AppState;
  repos: ReposState;
  branches: BranchesState
  commits: CommitsState
}
