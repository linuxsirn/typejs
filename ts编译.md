# 编译
可以在目录下创建一个tsconfig.json,然后执行tsc 或 tsc -w 来自动编译全部文件
## include 
用来指定那些文件需要编译,
``` javascript
{
        include:[
        "./src/**/*" //** 任意文件夹，* 任意文件
    ],
    exclude:[
        //排出不需要编译的文件  node_xxx 是默认就排出的
    ]
    ,compilerOptions:{
        target:'ES3'//
        //指定使用模块化规范 es6，commonJS,amd，system
        ,module:'es6' 
    }
    //一般在前端的是不需要修lib的，除非在node下
    ,'lib':['dom']
    //输出路径 
    ,outDir: "./dist" 
    //讲代码合成一个文件,只有amd 和 system 模块规范才支持 模块文件合并
    ,outFile:'./dist/app.js'
    //是否编译JS文件
    ,allowJs:true
    //是在JS文件内TS语法
    ,checkJs:false
    //是否移除注释
    ,removeComments:true
    //是否不生成编译文件
    ,noEmit:false
    //所有严格检查总开关
    strict:true
    //是否出错的时候不生产编译文件
    
    ,noEmitOnError:true
    //是否开启严格模式
    ,alwaysStrict : true
    //不允许隐式any类型
    ,noImplicitAny:true,
    //不允许不明确类型的this
    ,noImplicitThis:true,
    //严格检查空值
    StrictNULLChecks:true
    
}

```
