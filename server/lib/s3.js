const debug = require('debug')('HAYUM: S3');
const mime = require('mime');
const url = require('url');
const AWS = require('aws-sdk');
const { security } = require('../utils/index');

AWS.config.loadFromPath(`${__dirname}../config/s3.config`);
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

/**
 * link will be like this:
 * http://hayum.in/item/dl/{category}/{itemId}/{encryptedRequestTime}
 */

function S3() {
  this.ttl = 5 * 60 * 60 * 1000; // time to live: 5 hrs default
  this.host = 'https://s3-us-west-2.amazonaws.com/hayum-mp3/';
}

S3.prototype.validateLink = (requestTime) => {
  const decryptedTime = security.decrypt(requestTime.toString());
  const maxTimeAllowed = parseInt(decryptedTime, 10) + this.ttl;
  const now = new Date().getTime();

  debug('Validate', requestTime, decryptedTime, maxTimeAllowed, now);

  return maxTimeAllowed > now;
};

S3.prototype.getLinkNewEncryptedRequestTime = () =>
  security.encrypt(new Date().getTime().toString());

S3.prototype.uploadFile = () => {};

S3.prototype.getInstance = () => s3;

S3.prototype.readRangeHeader = (range, totalLength) => {
  /*
   * Example of the method 'split' with regular expression.
   *
   * Input: bytes=100-200
   * Output: [null, 100, 200, null]
   *
   * Input: bytes=-200
   * Output: [null, null, 200, null]
   */

  if (range === null || range.length === 0) return null;

  const [start, end] = range.split(/bytes=([0-9]*)-([0-9]*)/);
  const result = {
    Start: Number.isNaN(start) ? 0 : start,
    End: Number.isNaN(end) ? totalLength - 1 : end,
  };

  if (!Number.isNaN(start) && Number.isNaN(end)) {
    result.Start = start;
    result.End = totalLength - 1;
  }

  if (Number.isNaN(start) && !Number.isNaN(end)) {
    result.Start = totalLength - end;
    result.End = totalLength - 1;
  }

  return result;
};

module.exports = new S3();
