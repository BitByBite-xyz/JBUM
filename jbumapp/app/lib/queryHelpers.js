import Meteor from 'react-native-meteor';

views = {};

// client & server
views.answerPosts = function (terms) {
  return {
    find: {post_flags: [], post_visibility: { "$in" : ["Student"]} },
    sort: {sort: {post_comments: 1,createdAt:-1}, limit: terms.limit}
  };
}

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

views.inboxPosts = function (terms) {
  return {
    find: { user_id: Meteor.userId(), isArchived: false, post_comments: {$gt:0}},
    sort: {sort: { createdAt: -1 }, limit: terms.limit}
  };
}

views.repliedPosts = function (terms) {
  return {
    find: { $and: [{'post_comments.user_id': Meteor.userId()}, {'user_id': {$ne: Meteor.userId()}}] },
    sort: {sort: { createdAt: -1 }, limit: terms.limit}
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
