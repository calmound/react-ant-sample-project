# react + antd 简易项目
![photo](https://raw.githubusercontent.com/calmound/react-ant-sample-project/master/public/a.gif)

# 使用手册
1. 进入到根目录，执行 npm install
2. 运行npm start
3. 访问 http://localhost:3000/
4. 主要为了实现react+antd的功能，所以css比较简陋，都写在了App.css
5. 学习文件入口看index.tsx，然后看 App.tsx
6. routes是左侧导航栏列表


# 目录结构
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── App.css
    │   ├── App.test.tsx
    │   ├── App.tsx 
    │   ├── index.css
    │   ├── index.tsx          入口文件
    │   ├── logo.svg
    │   ├── pages              页面文件
    │   │   ├── Content        内容
    │   │   │   └── index.tsx 
    │   │   ├── Detail         详情
    │   │   │   └── index.tsx
    │   │   ├── Form           表单
    │   │   │   └── index.tsx
    │   │   ├── Index          首页
    │   │   │   └── index.tsx
    │   │   └── Table          表格
    │   │       └── index.tsx
    │   ├── routes.js          路由
    └── tsconfig.json