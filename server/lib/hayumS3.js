import debugLogger from 'debug';
import S3 from 'aws-sdk/clients/s3';

import hayumConfig from '../config/hayum.config';
import utils from '../utils';

const debug = debugLogger('HAYUM: S3');

const s3 = new S3({
  "accessKeyId": "AKIAIQ5KZJWOHKKFFW4A",
  "secretAccessKey": "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",
  "region": "us-west-2"
});

/**
 * link will be like this:
 * http://hayum.in/item/dl/{itemId}/{encryptedRequestTime}
 */
class HayumS3 {
  constructor() {
    this.ttl = 5 * 60 * 60 * 1000; // time to live: 5 hrs default
    this.host = 'https://s3-us-west-2.amazonaws.com/hayum-v4/';
  }

  validateLink = (requestTime) => {
    const decryptedTime = utils.security.decrypt(requestTime.toString());
    const maxTimeAllowed = parseInt(decryptedTime, 10) + this.ttl;
    const now = new Date().getTime();

    debug('Validate', requestTime, decryptedTime, maxTimeAllowed, now);

    return maxTimeAllowed > now;
  };

  getLinkNewEncryptedRequestTime = () =>
    utils.security.encrypt(new Date().getTime().toString());

  uploadFile = (multipartFile) => {
    const managedUpload = s3.ManagedUpload({
      partSize: hayumConfig.s3.partSize,
      queueSize: hayumConfig.s3.queueSize,
      params: {Bucket: 'bucket', Key: 'key', Body: multipartFile}
    });

    managedUpload.send((err, data) => {
      if (err) {
        console.error('Error:', err);
        return;
      }
      console.info('Uploaded:', data);
    });
  };

  getInstance = () => s3;

  readRangeHeader = (range, totalLength) => {
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
}

export default new HayumS3();
