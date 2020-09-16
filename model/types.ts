export interface IBlogPost {
  id: string;
  title: string;
  content: string;
}

export type ContextValue = {
  data: IBlogPost[];
  addBlogPost: () => void;
};

interface IAction {
  type: string;
}

interface DeleteBlogPostAction extends IAction {
  payload: string;
}

interface UpdateBlogPostAction extends IAction {
  payload: IBlogPost;
}

interface GetBlogPostsAction extends IAction {
  payload: IBlogPost[];
}

export type BlogPostActionTypes =
  | GetBlogPostsAction
  | DeleteBlogPostAction
  | UpdateBlogPostAction;
