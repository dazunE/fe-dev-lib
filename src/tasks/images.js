import gulp from 'gulp';
import gulpIf from 'gulp-if';
import cache from 'gulp-cached';
import imagemin from 'gulp-imagemin';
import { tasks, isDev } from '../utils/get-config';
import TaskHelper from '../utils/TaskHelper';

const task = new TaskHelper( {
	name: 'images',
	requiredPaths: [ 'src', 'dest' ],
	config: tasks
} );

gulp.task( task.name, () => {
	if ( ! task.isValid() ) {
		return null;
	}

	return task.start()
		.pipe( gulpIf( isDev, cache( task.cacheName, { optimizeMemory: false } ) ) )
		.pipe( imagemin() )
		.pipe( task.end() );
} );