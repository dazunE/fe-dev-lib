'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpCached = require('gulp-cached');

var _gulpCached2 = _interopRequireDefault(_gulpCached);

var _config = require('../utils/config');

var _TaskHelper = require('../classes/TaskHelper');

var _TaskHelper2 = _interopRequireDefault(_TaskHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_config.tasks.copy) {
	var task = new _TaskHelper2.default({
		name: 'copy',
		requiredPaths: ['src', 'dest'],
		config: _config.tasks.copy
	});

	_gulp2.default.task(task.name, function (done) {
		if (!task.isValid()) {
			done();
		}

		return task.start().pipe((0, _gulpIf2.default)(_config.isDev, (0, _gulpCached2.default)(task.cacheName, { optimizeMemory: false }))).pipe(task.end());
	});
}