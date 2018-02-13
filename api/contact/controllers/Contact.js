'use strict';

const model = 'contact';

/**
 * A set of functions called "actions" for `Contact`
 */

module.exports = {

  /**
   * Get Contact entries.
   *
   * @return {Object|Array}
   */

  find: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.find(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Get a specific Contact.
   *
   * @return {Object|Array}
   */

  findOne: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.findOne(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Create a Contact entry.
   *
   * @return {Object}
   */

  create: function * () {
    this.model = model;
    strapi.log.info(this.request.body.client);
    const email = this.request.body.client;
    const message = this.request.body.message;
    const orderId = this.request.body.orderId;
    try {
      let entry = yield strapi.hooks.blueprints.create(this);
      this.body = entry;
      try {
      yield strapi.api.email.services.email.send({
       from: email,
       subject: 'Order ' + orderId,
       text: "Message: " + message,
       html: "<b> Message: </b>" + message,
     });
   } catch (err) {
   strapi.log.info(err);
   }
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Update a Contact entry.
   *
   * @return {Object}
   */

  update: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.update(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Destroy a Contact entry.
   *
   * @return {Object}
   */

  destroy: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.destroy(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Add an entry to a specific Contact.
   *
   * @return {Object}
   */

  add: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.add(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Remove a specific entry from a specific Contact.
   *
   * @return {Object}
   */

  remove: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.remove(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  }
};
