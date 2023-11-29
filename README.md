# To-Do List App

## 快速启动

### 方法1、可以直接点击侧边栏的`Run & Debug`按钮启动
![image](https://code.byted.org/ide/demo-python-flask/uploads/597aac0a1aaa52bc24f80127f7c7dc64/image.png)


### 方法2、使用Terminal
安装依赖，在 `Terminal` 中输入：
``` bash
yarn install
```

运行应用
```
yarn dev
```

### 打开远程服务页面

![image](https://code.byted.org/ide/demo-python-flask/uploads/ba898fc076a261c7958c6e0ab51fa541/image.png)

打开底部 `Cloud Ports` 面板，点击 `Open in browser` 即可打开浏览器查看和调试页面。


## 编辑调试


### 1、代码生成
找到 `App.tsx` 文件，我们针对`header`部分做新增社交网站链接的功能

找到   `<HeaderTtitle>` 标签，选中代码，使用`CMD + I` 打开 inline chat，输入一下 Prompt

```
在title旁边新增三个社交网络的按钮，包含twitter、github、youtbe，按钮为白色边框白色文字透明背景，hover的时候，变为白色背景，蓝色文字，icon使用svg直接生成在当前页面中
```

![image](https://code.byted.org/ide/demo-python-flask/uploads/829fd52caff452e8228bcb43290b60db/image.png)


生成代码使用了`SVG`标签占位，可以引导 AI，生成SVG图标
```
生成大小22px的twitter svg logo icon
```
![image](https://code.byted.org/ide/demo-python-flask/uploads/ef45b5456e98e04d412be87c0131f541/image.png)


### 2、代码解释：找到有问题的代码，让AI做出诊断和修复

![image](https://code.byted.org/ide/demo-python-flask/uploads/47328cb4b626b14c232d21112cafa1a8/image.png)



### 3、代码补全：在任何地方键入部分代码时，AI会根据上下文，自动补全后续代码
![image](https://code.byted.org/ide/demo-python-flask/uploads/a1bd3a82b4e4f48a98df2526093a021a/image.png)


### 4、通用能力
尝试翻译功能，找到头部的 `AllMessage` 定义，让AI翻译
```
帮我将代码中的非英文翻译成英文
```
翻译：![image](https://code.byted.org/ide/demo-python-flask/uploads/be56ceff80ac58691841589926483303/image.png)