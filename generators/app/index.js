// /generators/app/index.js

'use strict';

var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var generators = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');

var Reactpackage = generators.extend({
  info: function() {
      this.log(chalk.green(
          '我要创建自己的 React WEB APP !'
      ));
  },
  /** 按照自己的templates目录自定义 */
  generateBasic: function() {

      /* 拷贝目录 */
      this.directory('dist', 'dist');
      this.directory('public', 'public');
      this.directory('src', 'src');

      /* 拷贝文件 */
      this.copy('.babelrc', '.babelrc');
      this.copy('.eslintrc', '.eslintrc');
      this.copy('.gitignore', '.gitignore');
      this.copy('package.json', 'package.json');
      this.copy('webpack.config.js', 'webpack.config.js');
  },
  /** 生成客户端 */
  generateClient: function() {
      this.sourceRoot(path.join(__dirname, 'templates'));
      this.destinationPath('./');
  },
  /** 安装 */
  install: function() {      //安装依赖
      this.installDependencies({
          skipInstall: this.options['skip-install']
      });
  },
  /** 结束 */
  end: function() {
      this.log( yosay('棒棒哒了！应用已成功创建!') );
  },
});

module.exports = Reactpackage;
