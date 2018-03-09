/**
 * Created by Devajit on 22-02-2016.
 */

module.exports = {
  categories: {
    songs: 'song',
    mahabharat: 'mahabharat',
    'radio-lila': 'radio-lila',
    'sumang-lila': 'sumang-lila',
  },

  email: {
    to: 'asem.devajit@gmail.com',
    from: 'noreply.hayum@gmail.com',
    subject: '"Hayum" <noreply.hayum@gmail.com>',
  },

  s3: {
    partSize: 7 * 1024 * 1024,
    queueSize: 2,
  },

  collection: 'mp3',

  dbUri: 'mongodb://hayum:hayum@ds149433.mlab.com:49433/heroku_v3fk2w9h',
  dbTestUri: 'mongodb://127.0.0.1:27017/hayum-alpha',

  appLink: '/hayum.apk',
  env: 'development',
  port: 8000,
};
