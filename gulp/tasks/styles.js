'use strict';

var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();
var mqr = require( 'gulp-mq-remove' );
var configPkg = require( '../config' ).pkg;
var configBanner = require( '../config' ).banner;
var configStyles = require( '../config' ).styles;
var handleErrors = require( '../utils/handle-errors' );
var browserSync = require( 'browser-sync' );

gulp.task( 'styles:modern', function() {
  return gulp.src( configStyles.cwd + configStyles.src )
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.less( configStyles.settings ) )
    .on( 'error', handleErrors )
    .pipe( plugins.autoprefixer( {
      browsers: [ 'last 2 version' ]
    } ) )
    .pipe( plugins.header( configBanner, { pkg: configPkg } ) )
    .pipe( plugins.rename( {
      suffix: ".min"
    } ) )
    .pipe( plugins.sourcemaps.write( '.' ) )
    .pipe( gulp.dest( configStyles.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'styles:ie', function() {
  return gulp.src( configStyles.cwd + configStyles.src )
    .pipe( plugins.less( configStyles.settings ) )
    .on( 'error', handleErrors )
    .pipe( plugins.replace(
      /url\('chosen-sprite.png'\)/ig,
      'url("/static/img/chosen-sprite.png")'
    ) )
    .pipe( plugins.replace(
      /url\('chosen-sprite@2x.png'\)/ig,
      'url("/static/img/chosen-sprite@2x.png")'
    ) )
    .pipe( plugins.autoprefixer( {
      browsers: [ 'IE 7', 'IE 8' ]
    } ) )
    .pipe( mqr( {
      width: '75em'
    } ) )
    .pipe( plugins.cssmin() )
    .pipe( plugins.rename( {
      suffix:  '.ie',
      extname: '.css'
    } ) )
    .pipe( gulp.dest( configStyles.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'styles', [
  'styles:modern',
  'styles:ie'
] );
