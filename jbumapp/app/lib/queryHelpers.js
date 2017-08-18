
views = {};


// client & server
views.latestPosts = function (terms) {
  return {
    find: {},
    sort: {sort: {createdAt: -1}, limit: terms.limit}
  };
}

views.mostPopularPosts = function (terms) {
  return {
    find: {},
    sort: {sort: {post_comments: -1}, limit: terms.limit}
  };
}


export function queryConstructor(terms) {

  var viewFunction = views[terms.viewName]
  var parameters = viewFunction(terms);

  if (parameters.limit > 100) {
    parameters.limit = 100;
  }


  return parameters;

}
