const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');

const cfg_ts = ts.createProject('tsconfig.json');

gulp.task('default', function() {
    
});

gulp.task('clean-tsc', function(cb) {
  del([
    'build/tsc-temp'
  ], cb);
});

gulp.task('dev', function() {
    const watcher = gulp.watch('./src/**/*.ts');
    watcher.on('change', function(event) {
        gulp.src(event.path).pipe(cfg_ts()).pipe(gulp.dest('build/tsc-temp'));
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

