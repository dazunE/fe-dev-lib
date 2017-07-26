'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpCached = require('gulp-cached');

var _gulpCached2 = _interopRequireDefault(_gulpCached);

var _getConfig = require('../utils/get-config');

var _gulpEslint = require('gulp-eslint');

var _gulpEslint2 = _interopRequireDefault(_gulpEslint);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _TaskHelper = require('../utils/TaskHelper');

var _TaskHelper2 = _interopRequireDefault(_TaskHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = new _TaskHelper2.default({
	name: 'js-lint',
	requiredPaths: ['src'],
	config: _getConfig.tasks
});

if (undefined !== task.config) {
	_gulp2.default.task(task.name, function () {
		if (!task.isValid()) {
			return null;
		}

		return task.start().pipe((0, _gulpIf2.default)(_getConfig.isDev, (0, _gulpCached2.default)(task.cacheName))).pipe((0, _gulpEslint2.default)()).pipe((0, _gulpIf2.default)(_getConfig.isProd, _gulpEslint2.default.format())).pipe((0, _gulpIf2.default)(_getConfig.isProd, _gulpEslint2.default.failAfterError()));
	});
}