const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ClearWebpackPlugin, CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports={
    //指定入口文件
    entry:'./src/index.ts',
    //输出位置
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    module:{
        //配置loader规则
        rules:[
            {
                //test 指定的是规则生效文件
                test:/\.ts$/,
                use:[
                    {
                      loader:"babel-loader",
                      options:{
                          //设置预定义环境
                          presets:[
                              [
                                  //指定环境插件
                                  "@babel/preset-env",
                                  {
                                      targets:{
                                          "chrome":88
                                      },
                                      "corejs":'3',
                                      useBuiltIns:"usage"
                                  }
                              ]
                          ]
                      }

                    },
                    'ts-loader'
                ],
                exclude:/node_module/,

            },
         
          
        ]
  
    },
       //配置插件
    plugins:[
         new HtmlWebpackPlugin({
             title:'app',
            //  template:'./src/index.htm'//可以实在魔板
         }), 
        new CleanWebpackPlugin()       
    ],
    //用来设置引用的模块
    resolve:{
        extensions:['.ts','.js']
    }
}