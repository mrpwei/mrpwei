---
title: "Building a personal website"
date: "2022-05-30"
---

[React + marked + prism.js](https://codesandbox.io/s/6wnxzllymr?file=/src/index.js)

## yarn 换源

### 查询与更换

```bash
yarn config get registry

yarn config set registry https://registry.npm.taobao.org/
```

参考：[yarn 安装与换源](https://www.cnblogs.com/develon/p/13814675.html)

css modules 和 Tailwind css 混用：

```jsx
<section className={`${utilStyles.padding1px} bg-slate-100`}>...</section>
```

```bash
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
```
