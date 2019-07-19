---
layout: page
title: 'element properties study'
---

#### scrollHeight clientHeight offsetHeight的异同

#### source
[资源链接](https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight)

####scrollHeight: 
ENTIRE  content & padding (visible or not)
<br>
Height of all content + paddings, despite of height of the element.
<br>
####clientHeight: 
VISIBLE content & padding
<br>
Only visible height: content portion limited by explicitly defined height of the element.
<br>
####offsetHeight: 
VISIBLE content & padding + border + scrollbar
<br>
Height occupied by the element on document.

![scrollHeight](https://i.stack.imgur.com/NANud.png)
![clientHeight&offsetHeight](https://i.stack.imgur.com/RFxSh.png)