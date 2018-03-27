'use strict';

const model = 'user';

/**
 * A set of functions called "actions" for `user`
 */
   function getClients (callback){
   var clients = {};
  User.find()
  .populate('roles', {id:'3'}, function(err,users){
    if (err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });

    //console.log(users);
   /// .then(undefined, function(err){
          //Handle error
   //     });
    //console.log(users);
 /*   users.forEach(function(entry) {
    //console.log(entry.roles);
    (entry.roles).forEach(function(role){
      if(role){
        clients.push(entry);
      //console.log(entry);
    }
    });
  });*/
  //clients = users;
  // return users;


  /*.exec(function (err, users) {
  if (err) {
    console.log(err);
  }
  //console.log(users);
  users.forEach(function(entry) {
  //console.log(entry.roles);
  (entry.roles).forEach(function(role){
    if(role){
      clients.push(entry);
    //console.log(entry);
  }
});
 });
 });*/

 }
module.exports = {

  /**
   * Get user entries.
   *
   * @return {Object|Array}
   */

  find: function * () {
    this.model = model;
    try {
      const entry = yield strapi.hooks.blueprints.find(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Get a specific user.
   *
   * @return {Object|Array}
   */

  findOne: function * () {
    this.model = model;
    try {
      const entry = yield strapi.hooks.blueprints.findOne(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Create a user entry.
   *
   * @return {Object}
   */

  create: function * () {
    this.model = model;


    try {
      const entry = yield strapi.hooks.blueprints.create(this);
      this.body = entry;

    } catch (err) {
      this.body = err;
      console.log(err);
    }
  },

  /**
   * Update a user entry.
   *
   * @return {Object}
   */

  update: function * () {
    this.model = model;
    try {
    //        strapi.log.info(this);
      const entry = yield strapi.hooks.blueprints.update(this);
      this.body = entry;

    } catch (err) {
      this.body = err;
      strapi.log.info("model: "+ err);

    }
  },

  /**
   * Destroy a user entry.
   *
   * @return {Object}
   */

  destroy: function * () {
    this.model = model;
    try {
      const entry = yield strapi.hooks.blueprints.destroy(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Add an entry to a specific user.
   *
   * @return {Object}
   */

  add: function * () {
    this.model = model;
    try {
      const entry = yield strapi.hooks.blueprints.add(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Remove a specific entry from a specific user.
   *
   * @return {Object}
   */

  remove: function * () {
    this.model = model;
    try {
      const entry = yield strapi.hooks.blueprints.remove(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },
  profile: function * () {

   yield this.render('profile.ejs');
  },
  index: function * () {

   yield this.render('index.ejs');
  },
  manageUsers: function * () {

   yield this.render('manage/users.ejs');

  },
  login: function * () {

  yield this.render('login.ejs');
  },
  editUser: function * () {

  yield this.render('editUser.ejs');
  }
};
