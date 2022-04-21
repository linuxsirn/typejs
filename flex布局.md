# Flex
### 父级别常用属性
1. flex-direction:设置主轴的方向
   1. row 默认值是从左到右
   2. row-reverse 从右到左
   3. column 从上到下
   4. column-reverse 从下到上

2. justify-content 设置主轴的子元素排列方式
   1. flex-start:默认值从头部开始，如果主轴是X，则从左到右。
   2. flex-end 从尾部开始排列
   3. center 在主轴居中对齐（如果主轴是X轴，则水平居中）
   4. space-around 平分剩余空间
   5. space-between 先两边贴边，再平分剩余空间
3. flex-warp 设置子元素是否换行，默认是不换行的，装不开，会自动缩小子元素的宽度
   1. nowarp 不换行
   2. warp 换行
4. algin-items 设置侧轴的子元素排列方式
   1. flex-start 默认 从上到下
   2. flex-end  从小到上
   3. center 挤到一起居中（垂直居中）
   4. stretch 拉伸
5. algin-content 设置侧轴的子元素的排列方式（多行）
   1. flex-start 默认是在侧轴的头部开始排列
   2. flex-end   在侧轴的尾部开始排列
   3. center 在侧轴的中间显示
   4. space-around 子项在侧轴平分剩余空间
   5. spance-between 子项在侧轴先分布两头，再平分剩余空间
   6. stretch 设置子项高度平分父元素 高度
6. flex-flow 等于 设置设置主轴+换行
   ### flex子项常用属性
1. flex 定义子项分配剩余空间，用flex来表示占多数份 默认是0
   1. flex：数字 默认是
2. align-self 控制子项自己在侧轴上的排列方式
3. order 属性定义项目的排列顺序
   1. 数值越小，越靠前，默认为0 。注意和zidnex 不一样