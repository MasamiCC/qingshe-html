'use strict';

var gulp = require('gulp'),    //gulp基础库
    del = require('del'),    //删除  
    fileinclude = require('gulp-file-include'),    //合并模块化html
    browserSync = require('browser-sync').create(),    //打开浏览器
    connect = require('gulp-connect'),    //自动刷新
    concat=require('gulp-concat'),    //合并文件
    rename = require('gulp-rename'),    //文件重命名
    minifycss = require('gulp-minify-css'),    //css压缩
    uglify = require('gulp-uglify'),   //js压缩
    minifyhtml  = require('gulp-htmlmin'),//压缩html
    rev = require('gulp-rev'),    //更改版本名 md5后缀
    autoFx = require('gulp-autoprefixer'),    //加浏览器前缀
    revCollector = require('gulp-rev-collector'),  //gulp-rev 的插件，用于html模板更改引用路径
    notify=require('gulp-notify');    //提示


//清除dist文件夹
gulp.task('cleanDist',function(){
  return del.sync('dist');
})

//清除connect文件夹
gulp.task('cleanConnect',function(){
  return del.sync('connect');
})


// 配置服务器
gulp.task('serve', function () {
    browserSync.init({
        server: {
          baseDir: ['connect']
        },
        port: 8000,
    });

    gulp.watch("html/*.html", ['html']);
    gulp.watch("css/*.css", ['css']);
});

//html 整合
gulp.task('html',function(){
  gulp.src('html/*')
  .pipe(gulp.dest('connect/html'));
  gulp.src('index.html')
  .pipe(gulp.dest('connect'));
})

//css 整合
gulp.task('css',function(){
  gulp.src('css/*.css')
    .pipe(gulp.dest('connect/css'));
})

//js 整合
gulp.task('js',function(){
  gulp.src('js/*.js')
    .pipe(gulp.dest('connect/js'));
})

//static 整合
gulp.task('static',function(){
  gulp.src(['static/**/*'])
    .pipe(gulp.dest('connect/static'));
})


/*
 *  单文件压缩生成种子哈希
 */

//css压缩
gulp.task('minifycss',function(){
    return gulp.src('css/*.css')  //设置css
       .pipe(minifycss())  //压缩文件
       .pipe(rev())
       .pipe(gulp.dest('dist/css'))  //输出文件目录
       .pipe(rev.manifest())
       .pipe(gulp.dest('dist/rev/css'))
       .pipe(notify({message:'css task ok'}));  //提示成功
})

//js压缩
gulp.task('minifyjs',function(){
    return gulp.src('js/*.js')  //设置js
       .pipe(uglify())  //压缩文件
       .pipe(rev())
       .pipe(gulp.dest('dist/js'))  //输出文件目录
       .pipe(rev.manifest())
       .pipe(gulp.dest('dist/rev/js'))
       .pipe(notify({message:'js task ok'}));  //提示成功
})



//html压缩
gulp.task('rev', ['minifycss', 'minifyjs'], function(){
  return gulp.src(['dist/rev/**/*.json','html/*.html'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(gulp.dest('dist/html'))
    .pipe(notify({message:'html task ok'}));  //提示成功
})

//index html压缩
gulp.task('revIndex', ['minifycss', 'minifyjs'], function(){
  var options = {
    removeComments: true,    //清除HTML注释
    collapseWhitespace: false,//压缩HTML
    removeStyleLinkTypeAttributes: true,   //删除<style>和<link>的type="text/css"  
    minifyJS: true,    //压缩页面JS  
    minifyCSS: true    //压缩页面CSS 
  }
  return gulp.src(['dist/rev/**/*.json','index.html'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(fileinclude())
    .pipe(minifyhtml(options))
    .pipe(gulp.dest('dist'))
    .pipe(notify({message:'index_html task ok'}));  //提示成功
})



// 将非js、非css移动到目标目录
gulp.task('mvNotDealAsset', function () {
    gulp.src(['static/**/*'])
    .pipe(gulp.dest('dist/static'));

    //公共html移入
    gulp.src(['html/components/*'])
    .pipe(gulp.dest('dist/html/components'));
});



//启动项目
gulp.task('dev',['cleanConnect', 'css', 'html', 'js', 'static', 'serve']);

//打包项目
gulp.task('build', ['cleanDist', 'rev','revIndex', 'mvNotDealAsset']);