function createPost() {
  const page = document.getElementById('page-template').innerHTML;
  const post = document.getElementById('post-template').innerHTML;
  const comments = document.getElementById('comments-template').innerHTML;

  const pageTemplate = _.template(page);
  const postTemplate = _.template(post);
  const commentsTemplate = _.template(comments);

  const postTitle = document.getElementById("postTitle").value;
  const postAuthor = document.getElementById("postAuthor").value;
  const postBody = document.getElementById("postBody").value;

  

};

function postComment() {

};
