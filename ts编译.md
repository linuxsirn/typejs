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
}

```
