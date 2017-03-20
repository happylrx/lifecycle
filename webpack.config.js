module.exports={
  entry:"./src/index.js",//入口
  output:{
    path:"build",//创建一个叫build的文件夹
    filename:"bundle.js",//创建一个叫bundle的原生JS文件
    publicPath:'build/'
  },
  devtool: "eval",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {test: /\.css$/,use: ['style-loader','css-loader']},
      {test: /\.(jpe?g|png)$/,loader: 'file-loader'}
    ]
  }
}
