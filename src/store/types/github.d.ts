interface GithubResource {
  url: string;
}

interface GithubTree extends GithubResource {
  sha: string;
}

interface GithubNode extends GithubResource {
  node_id: string;
  html_url: string;
}

interface Verification {
  verified: boolean;
  reason: string;
  signature?: string;
  payload?: string;
}

interface CommitResource extends GithubResource {
  author: {
    name: string;
    email: string;
    date: Date;
  };
  committer: {
    name: string;
    email: string;
    date: Date;
  };
  message: string;
  tree: Tree;
  comment_count: number;
  verification: Verification
}

interface Account extends GithubNode {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean
}

interface Repo extends GithubTree, GithubNode {
  name: string;
  full_name: string;
  private: boolean;
  owner: Account;
}

interface Branch {
  name: string;
}

interface Commit extends GithubTree, GithubNode {
  commit: CommitResource;
  comments_url: string;
  author: Account;
  committer: Account;
}