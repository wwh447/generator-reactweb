// /generators/app/index.js

var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  before() {
    this.log("开始创建项目~");
  }

  create() {

    /*
    this.log("拷贝 [dist] ...");
    this.fs.copy(
      this.templatePath('dist'),
      this.destinationPath('dist')
    );
    */

    this.log("拷贝 [src] ...");
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );

    this.log("拷贝 [.babelrc] ...");
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.log("拷贝 [.eslintrc] ...");
    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.log("拷贝 [.gitignore] ...");
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.log("拷贝 [webpack.config.js] ...");
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    /*
    git.name()
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('public/index.html'),
      { title: 'Hello Templating with Yeoman' }
    );
    */

    /**
     * fs 是 mem-fs-editor 实例
     * @Link https://github.com/sboudrias/mem-fs-editor
     */
    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
      { title: 'Hello Templating with Yeoman' }
    );

  }

  install() {

    this.log("准备创建 package...");

    var rePackage = this.fs.writeJSON(
      this.templatePath('package.json'),
      {
        // 设置应用程序名称.
        "name": this.determineAppname(),
        // 设置作者使用名字.
        "author": this.git.name()
      }
    );

    this.fs.copy(
      rePackage,
      this.destinationPath('package.json')
    );

    this.log("完成创建 package...");

    this.log("准备安装 package...");

    var modules = [
      "babel-core",
      "babel-eslint",
      "babel-loader",
      "babel-preset-es2015",
      "babel-preset-react",
      "babel-preset-stage-2",
      "css-loader",
      "eslint",
      "eslint-loader",
      "eslint-plugin-react",
      "extract-text-webpack-plugin",
      "history",
      "node-sass",
      "react",
      "react-addons-css-transition-group",
      "react-dom",
      "react-router",
      "react-router-dom",
      "react-transition-group",
      "sass-loader",
      "style-loader",
      "webpack"
    ];

    this.npmInstall(modules, { 'save-dev': true }, function() {
      this.log("结束安装 package...");
    });

  }

  end() {
    this.log("项目创建完成！");
  }

};
