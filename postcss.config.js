module.exports = {
  plugins: [
    'autoprefixer',
    require('postcss-pxtorem')({
      rootValue: 50,
      propList: ['*'],
      exclude: /node_modules/i //这里表示不处理node_modules文件夹下的内容
    })
  ]
}
