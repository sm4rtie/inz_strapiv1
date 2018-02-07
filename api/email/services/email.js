'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _ = require('lodash');
const nodemailer = require('nodemailer');
const mailgun = require('mailgun-js')({apiKey: 'key-62c44e32fab3bc91c0aa3a98519efaa0', domain: 'sandbox8141963361f44deb916d5c1ee0d23cd0.mailgun.org'});

/**
 * Email service.
 */

module.exports = {

  /**
   * Send an e-mail
   *
   * @param {Object} options
   * @param {Function} cb
   *
   * @return {Promise}
   */

   send: function * (options, cb) {
     var data = {
    from: options.from || '"Administration Panel" <no-reply@strapi.io>',
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html
  };
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    strapi.log.info(error);

  });
   }

  /*send: function * (options, cb) {
    return new Promise(function *(resolve, reject) {
      try {

        // Format transport config.
        let transportConfig;
        if (strapi.api.email.config.smtp && strapi.api.email.config.smtp.service && strapi.api.email.config.smtp.service.name) {
          transportConfig = {
            service: strapi.api.email.config.smtp.service.name,
            auth: {
              user: strapi.api.email.config.smtp.service.user,
              pass: strapi.api.email.config.smtp.service.pass
            }
          };
        }

        // Init the transporter.
        const transporter = nodemailer.createTransport(transportConfig);

        // Init `variable` email.
        let email;

        // Check the callback type.
        cb = _.isFunction(cb) ? cb : _.noop;

        // Default values.
        options = _.isObject(options) ? options : {};
        options.from = strapi.api.email.config.smtp.from || '';
        options.text = options.text || options.html;
        options.html = options.html || options.text;

        // Register the `email` object in the database.
        email = yield Email.create(_.assign({
          sent: false
        }, options));

        // Send the email.
        transporter.sendMail({
          from: options.from,
          to: options.to,
          subject: options.subject,
          text: options.text,
          html: options.html
        }, function (err) {
          if (err) {
            cb(err);
            reject(err);
          } else {
            Email.update(email.id, {
              sent: true
            }).exec(function (err, emailUpdated) {
              email = emailUpdated[0] || email;
              cb(null, email);
              resolve(email);
            });
          }
        });

      } catch (err) {
        reject(err);
      }
    });
  }*/
};
