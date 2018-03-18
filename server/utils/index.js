import crypto from 'crypto';

const encryption = {
  algorithm: 'aes-256-ctr',
  key: 'a1b2c3d4e5Dr@gf1r3@h@yumf6g7h8i9',
};

export default {
  security: {
    encrypt(text) {
      const cipher = crypto.createCipher(encryption.algorithm, encryption.key);
      const crypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');

      return crypted;
    },

    decrypt(text) {
      const decipher = crypto.createDecipher(
        encryption.algorithm,
        encryption.key,
      );
      const decrypted =
        decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');

      return decrypted;
    },
  },

  pagination: {
    itemsPerPage: 20,
    videoItemsPerPage: 10,

    options(paramValue, query, dataCount) {
      const nPages = this.numOfPages(dataCount);
      return {
        q: query,
        totalCount: dataCount,
        numPages: nPages,
        firstPage: paramValue === 1,
        lastPage: paramValue === nPages,
        prev: paramValue > 1 ? paramValue - 1 : 1,
        next: paramValue <= nPages ? paramValue + 1 : paramValue,
      };
    },

    checkParamValid(param) {
      return param == null || param === undefined || Number.isNaN(param)
        ? 1
        : parseInt(param, 10);
    },

    numOfPages(collectionRecordsCount) {
      return (
        parseInt(collectionRecordsCount / this.itemsPerPage, 10) +
        (collectionRecordsCount % this.itemsPerPage ? 1 : 0)
      );
    },

    claculateSkipOffsetIndex(val) {
      return this.itemsPerPage * (val - 1);
    },
  },

  randomize(min, max) {
    return Math.floor((Math.random() * ((max - min) + 1)) + min);
  },
};
