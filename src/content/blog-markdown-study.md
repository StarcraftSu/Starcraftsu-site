---
layout: page
title: 'Markdown study'
---

#### 一般性应用

换行还是用br标签<br>
也可以使用一般的p标签
<ul>
  <li>列表标签</li>
  <li>ul</li>
  <li>li</li>
  <li>ol</li>
</ul>

#h1
```jsx
  #h1
```
##h2
```jsx
  ##h2
```
**bold text**
```jsx
  **bold text**
```

~~Cross-off~~
```jsx
  ~~Cross-off~~
```

>世界之大，无奇不有（引用）
```jsx
  >世界之大，无奇不有
```
***

#### 表格 基本纯靠画
|Column 1|Column 2|Column 3|
|:-------|:-------|:-------|
|Value 1|Value 2|Value 3|
```jsx
  |Column 1|Column 2|Column 3|
  |:-------|:-------|:-------|
  |Value 1|Value 2|Value 3|
```
#### 连接
[Long way back home](/)

```jsx
  [Long way back home](/)
```

####图片
  ![干杯🍻](https://mdx-logo.now.sh)
  ```jsx
   ![干杯🍻](https://mdx-logo.now.sh)
  ```
####代码块儿

```jsx
const code = () => (
  <Code>
      I am a code block
      ``` jsx
        <Code>
          I am a code block
        </Code>
      ```
  </Code>
)
```