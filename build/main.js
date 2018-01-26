require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

exports.badRequest = function () {
  var error = new Error('Bad Request');
  error.status = 400;
  return error;
};

exports.notFound = function (message) {
  var error = new Error(message || 'Not Found');
  error.status = 404;
  return error;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserRoleType */
/* unused harmony export UserSchema */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__s3Document__ = __webpack_require__(5);
/* eslint-disable func-names */





var UserRoleType = Object.freeze({
  SUPER_USER: 'SUPER_USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  USER: 'USER'
});

var UserSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, select: false },
  otp: { type: String, select: false },
  salt: { type: String, select: false },
  isArtist: Boolean,
  profilePicture: __WEBPACK_IMPORTED_MODULE_3__s3Document__["a" /* S3DocumentSchema */],
  coverPicture: __WEBPACK_IMPORTED_MODULE_3__s3Document__["a" /* S3DocumentSchema */],
  meta: {
    role: String,
    isActivated: Boolean,
    numberOfFavorites: Number,
    numberOfItemsUploaded: Number,
    favorites: [{
      itemId: String,
      itemName: String
    }]
  },
  createdDate: { type: Date, default: Date.now },
  modifiedDate: Date,
  deletedDate: Date
});

UserSchema.virtual('password').set(function (password) {
  if (password === null || password === '') {
    throw new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Error"]('Password is empty');
  }
  this.salt = this.makeSalt();
  this.hashed_password = this.encrypt(password);
}).get(function () {
  return this.hashed_password;
});

UserSchema.methods = {
  authenticate: function authenticate(plainText) {
    return this.encrypt(plainText) === this.hashed_password;
  },
  makeSalt: function makeSalt() {
    return Math.round(new Date().valueOf() * Math.random());
  },
  encrypt: function encrypt(password) {
    if (!password) return '';
    try {
      return __WEBPACK_IMPORTED_MODULE_1_crypto___default.a.createHmac('sha1', this.salt).update(password).digest('hex');
    } catch (err) {
      return '';
    }
  }
};

UserSchema.statics = {
  getUserById: function getUserById(id) {
    var isLean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var user = this.findById(id);
    return user.lean(isLean).exec();
  },
  addFavorite: function addFavorite(user, item) {
    var data = {
      itemId: item.id,
      itemname: item.name
    };

    user.favorites.push(data);
    user.save();
  }
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3DocumentSchema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var S3DocumentSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  key: String,
  originalFilename: String,
  isDeleted: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now },
  deletedDate: Date
});

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('S3Document', S3DocumentSchema));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Created by Devajit on 22-02-2016.
 */

module.exports = {
  categories: {
    songs: 'song',
    mahabharat: 'mahabharat',
    'radio-lila': 'radio-lila',
    'sumang-lila': 'sumang-lila'
  },

  email: {
    to: 'asem.devajit@gmail.com',
    from: 'noreply.hayum@gmail.com',
    subject: '"Hayum" <noreply.hayum@gmail.com>'
  },

  collection: 'mp3',

  dbUri: 'mongodb://hayum:hayum@ds149433.mlab.com:49433/heroku_v3fk2w9h',
  dbTestUri: 'mongodb://127.0.0.1:27017/hayum-alpha',

  appLink: '/hayum.apk',
  env: 'development',
  port: 8000
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_debug__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_morgan__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_mongo_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_mongo_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config_mongo_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_hayum_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_hayum_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__config_hayum_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__errors__);










var debug = __WEBPACK_IMPORTED_MODULE_3_debug___default()("HAYUM: server");
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

app.use(__WEBPACK_IMPORTED_MODULE_5_morgan___default()("combined"));
// Serve static assets
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__dirname, "..", "build")));

app.use("/api", __WEBPACK_IMPORTED_MODULE_4__controllers__["a" /* default */]);

app.use("/", function (req, res) {
  var filePath = __WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__dirname, "..", "build", "index.html");
  res.sendFile(filePath);
});

app.use(function (req, res, next) {
  next(Object(__WEBPACK_IMPORTED_MODULE_8__errors__["notFound"])());
});

if (app.get("env") === "development") {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

app.listen(process.env.PORT || __WEBPACK_IMPORTED_MODULE_7__config_hayum_config__["port"], function (error) {
  __WEBPACK_IMPORTED_MODULE_6__config_mongo_config___default()();
  if (error) {
    debug("error", error);
  }
  debug("Listening: ", __WEBPACK_IMPORTED_MODULE_7__config_hayum_config__["port"]);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server"))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_controller__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_controller__ = __webpack_require__(18);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
var API_VERSIONS = { V1: 'v1' };

router.use('/' + API_VERSIONS.V1 + '/item', __WEBPACK_IMPORTED_MODULE_1__item_controller__["a" /* default */]);
router.use('/' + API_VERSIONS.V1 + '/user', __WEBPACK_IMPORTED_MODULE_2__user_controller__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_devasem_projects_hayum_node_modules_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_devasem_projects_hayum_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_devasem_projects_hayum_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item__ = __webpack_require__(17);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

/**
 * /item
 * create item
 */
router.post('/', function (req, res, next) {
  var item = new __WEBPACK_IMPORTED_MODULE_4__models_item__["b" /* default */](Object.assign({}, req.body));

  item.save().then(function () {
    res.json({
      itemId: item.id
    });
  }).catch(function () {
    next(Object(__WEBPACK_IMPORTED_MODULE_3__errors__["badRequest"])());
  });
});

/**
 * /item/{itemId}
 */
router.get('/:id', function (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_4__models_item__["b" /* default */].getItemById(req.params.id).then(function (item) {
    return res.json(Object.assign({}, item));
  }).catch(function () {
    return next(Object(__WEBPACK_IMPORTED_MODULE_3__errors__["notFound"])('Item Not Found'));
  });
});

/**
 * /item/status/{ItemStatus}
 */
router.get('/status/:status', function (req, res, next) {
  var STATUS = req.params.status;
  try {
    if (Object.keys(__WEBPACK_IMPORTED_MODULE_4__models_item__["a" /* ItemStatus */]).findIndex(function (status) {
      return STATUS === status;
    }) !== -1) {
      __WEBPACK_IMPORTED_MODULE_4__models_item__["b" /* default */].getItemsByStatus(STATUS).then(function (items) {
        return res.json(items);
      });
    } else {
      throw Object(__WEBPACK_IMPORTED_MODULE_3__errors__["badRequest"])();
    }
  } catch (error) {
    next(error);
  }
});

router.post('/:id/favorite', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_devasem_projects_hayum_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var itemId, userid, item, user;
    return __WEBPACK_IMPORTED_MODULE_0__Users_devasem_projects_hayum_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            itemId = req.params.id;
            userid = req.get('userid');
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__models_item__["b" /* default */].getItemById(itemId, false);

          case 5:
            item = _context.sent;
            _context.next = 8;
            return __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].getUserById(userid, false);

          case 8:
            user = _context.sent;


            __WEBPACK_IMPORTED_MODULE_4__models_item__["b" /* default */].addFavorite(item, user);
            __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].addFavorite(user, item);

            res.status(200).send();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](0);

            res.status(500).send();

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 14]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MessageSchema */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var MessageSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  senderId: String,
  message: String,
  date: Date
});

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Message', MessageSchema));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemStatus; });
/* unused harmony export ItemCategory */
/* unused harmony export ItemSchema */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__s3Document__ = __webpack_require__(5);




var ItemStatus = Object.freeze({
  PENDING: 'PENDING',
  REVIEWING: 'REVIEWING',
  APPROVED: 'APPROVED',
  DECLINED: 'DECLINED',
  DELETED: 'DELETED'
});

var ItemCategory = Object.freeze({
  SONG: 'SONG',
  SUMANG_LILA: 'SUMANG_LILA',
  RADIO_LILA: 'RADIO_LILA'
});

var ItemSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  isOldSong: { type: Boolean, default: false },
  album: String,
  category: { type: String, default: ItemCategory.SONG },
  thumbnail: { type: __WEBPACK_IMPORTED_MODULE_1__s3Document__["a" /* S3DocumentSchema */], required: true },
  status: { type: String, default: ItemStatus.PENDING },
  s3Document: __WEBPACK_IMPORTED_MODULE_1__s3Document__["a" /* S3DocumentSchema */],
  meta: {
    size: Number,
    downloads: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    plays: { type: Number, default: 0 },
    numberOfFavorites: { type: Number, default: 0 }
  },
  uploadedBy: String,
  moderatedBy: String,
  createdDate: { type: Date, default: Date.now },
  updatedDate: Date,
  deletedDate: Date
});

ItemSchema.statics = {
  /**
   * get all items by status
   * @param {string} status
   * @returns {Promise}
   */
  getItemsByStatus: function getItemsByStatus(status) {
    return this.where('status', status).lean().exec();
  },


  /**
   * get an item by id
   * @param {string} id
   * @param isLean
   * @returns {Promise}
   */
  getItemById: function getItemById(id) {
    var isLean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var item = this.findById(id);
    return item.lean(isLean).exec();
  },


  /**
   * add Favorite to list
   * @param item
   * @param user
   */
  addFavorite: function addFavorite(item, user) {
    var data = {
      userId: user.id,
      username: user.username
    };

    item.meta.favorites.push(data);
    item.save();
  }
};

/* harmony default export */ __webpack_exports__["b"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Item', ItemSchema));

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__errors__);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/**
 * /user
 * create user
 */
router.post('/', function (req, res, next) {
  var user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */](Object.assign({}, req.body));

  user.save().then(function () {
    res.json({
      userId: user.id
    });
  }).catch(function () {
    next(Object(__WEBPACK_IMPORTED_MODULE_2__errors__["badRequest"])());
  });
});

/**
 * /user/{userId}
 */
router.get('/:id', function (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */].getUserById(req.params.id).then(function (user) {
    return res.json(Object.assign({}, user));
  }).catch(function () {
    return next(Object(__WEBPACK_IMPORTED_MODULE_2__errors__["notFound"])('User Not Found'));
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(0);
var debug = __webpack_require__(3)('HAYUM: mongo.config');
var hayumConfig = __webpack_require__(6);

module.exports = function () {
  mongoose.connect(hayumConfig.dbTestUri, function (error) {
    if (error) {
      debug(error);
    }
    debug('Mongoose connection established');
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map