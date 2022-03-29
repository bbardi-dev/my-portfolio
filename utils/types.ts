export interface Project {
  __typename: string;
  id: string;
  name: string;
  description: string;
  url: string;
  repositoryTopics: RepositoryTopics;
  homepageUrl: string;
}

export interface RepositoryTopics {
  __typename: string;
  edges: Edge[];
}

export interface Edge {
  __typename: string;
  node: Node;
}

export interface Node {
  __typename: string;
  topic: Topic;
}

export interface Topic {
  __typename: string;
  name: string;
}

export type Sections = "Hero" | "About" | "Projects" | "Contact";
