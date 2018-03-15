'use strict';

/**
 * isAuthorized policy.
 */

exports.isAuthorized = function * (next) {

  // Use the `user` service.
  const isAuthorized = yield strapi.api.user.services.user.isUserAuthorized(this);
  strapi.log.info(isAuthorized + " checking");
  if (isAuthorized) {
    yield next;
  } else {
    this.status = 401;
    this.body = {
      message: 'You are not allowed to perform this action.'
    };
  }
};
