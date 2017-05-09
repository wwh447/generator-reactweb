// /generators/app/index.js

var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);

    // 增加对 --eslint 的支持.
    this.option('eslint');
  }

  install() {

    this.log('用户当前路径：' + this.contextRoot);

  }

  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  create() {

    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
      { title: 'Hello Templating with Yeoman' }
    );

  }

};
