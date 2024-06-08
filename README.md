# sbGal
A simple JavaScript library for image gallery 
---

```html
<html>
<head>
  <title>sb_js</title>
</head>
<body>
  <div class="sbGal" sbOpt="{
    arrows:true,
  }">
    <img src="img1path"/>
    <img src="img2path"/>
    <img src="img3path"/>
    <img src="img4path"/>
  </div>
</body 
</html>
<script src="script.js"></script>
```


### options
---
- arrows: true | false
- counter: true | false
- rightArrow: HTML element
- leftArrow: HTML element

```html
<div class="sbGal" sbOpt="{
    arrows:true,
    counter: true,
    rightArrow: <p>a</p>,
    leftArrow: <p>b</p>
  }">
    <img src="img1path"/>
    <img src="img2path"/>
    <img src="img3path"/>
    <img src="img4path"/>
  </div>
```
