const { Router } = require('express');
const AWSS3 = require('../lib/s3');
// const { S3Document } = require('../models/s3Document');
// const { badRequest, notFound } = require('../errors');

const router = Router();

/**
 * /s3/upload
 * upload file
 */
router.post('/upload', (req, res) => {
  res.status(200).send();
});

router.get('/dl/', (req, res, next) => {
  const {
    itemId,
    itemName,
    category,
    storageKey,
    encryptedRequestTime,
  } = req.params;
  const {
    cookie,
    range,
  } = req.headers;
  const params = {
    Bucket: 'hayum-mp3',
    Key: key,
  };
  const s3 = AWSS3.getInstance();

  s3.headObject(params, (err, data) => {
    if (err) {
      // an error occurred
      debug(err);
      return next();
    }
    let total = data.ContentLength;
    if (!!range === true) {
      let rangeRequest = readRangeHeader(range, total);
      let start = rangeRequest.Start;
      let end = rangeRequest.End;

      // If the range can't be fulfilled.
      if (start >= total || end >= total) {
        // Indicate the acceptable range.
        res.set('Content-Range', 'bytes */' + total); // File size.

        // Return the 416 'Requested Range Not Satisfiable'.
        res.status(416);
        return res.send('<h1>Requested Range Not Satisfiable</h1>');
      }
      params.Range = 'bytes=' + start + '-' + end;
      res.set('Content-Length', start == end ? 0 : end - start + 1);
      res.set('Content-Range', 'bytes ' + start + '-' + end + '/' + total);
      res.set('Accept-Ranges', 'bytes');
      res.status(206);
    } else {
      res.set('Content-Length', total);
      res.status(200);
    }

    res.attachment(itemName);
    res.set('Content-Type', mime.lookup(itemName));
    res.set('Last-Modified', data.LastModified);
    res.set('Cache-Control', 'no-cache');
    res.set('ETag', data.ETag);

    const stream = s3.getObject(params).createReadStream();
    // forward errors
    stream.on('error', function error(err) {
      // continue to the next middlewares
      debug(err);
      next();
    });

    stream.on('end', () => {
      debug('Served by Amazon S3: ' + itemName);
    });
    // Pipe the s3 object to the response
    stream.pipe(res);
  });
})

module.exports = router;
