# YN-Node 学习项目

这是一个 Node.js 学习项目，包含了 Node.js 和 Express.js 的基础知识和实践代码。

## 项目结构

```
YN-Node/
├── README.md                 # 项目说明文档
├── package.json             # 项目依赖配置
├── index.js                 # 客户端 JavaScript 入口
├── express.js               # Express 服务器主文件
├── mongoose.js              # MongoDB 数据库连接
├── buffer.js                # Buffer 操作学习代码
├── file.js                  # 文件操作学习代码
├── http.js                  # HTTP 服务器学习代码
├── routes/                  # 路由文件夹
│   └── homeRouter.js        # 首页路由
├── express-generator/       # Express Generator 生成的项目
│   ├── app.js              # Express 应用入口
│   ├── package.json        # 子项目依赖
│   ├── bin/www             # 启动脚本
│   ├── routes/             # 路由文件
│   ├── views/              # EJS 模板文件
│   └── public/             # 静态资源
└── .cursor/rules/          # Cursor AI 规则文件
```

## 学习模块

### 1. 基础模块
- **buffer.js** - Buffer 对象的创建和操作
- **file.js** - 文件系统操作
- **http.js** - HTTP 服务器创建和请求处理

### 2. Express 框架
- **express.js** - Express 服务器搭建
- **routes/homeRouter.js** - 路由模块化
- 中间件使用
- 静态文件服务
- 请求体解析 (body-parser)

### 3. 数据库操作
- **mongoose.js** - MongoDB 连接和操作

### 4. Express Generator 项目
- **express-generator/** - 标准的 Express 项目结构
- EJS 模板引擎
- 完整的 MVC 架构

## 安装和运行

### 1. 安装依赖
```bash
npm install
```

### 2. 运行主项目
```bash
node express.js
```
访问 `http://localhost:9000`

### 3. 运行 Express Generator 项目
```bash
cd express-generator
npm install
npm start
```
访问 `http://localhost:3000`

## 主要功能

### Express 服务器功能
- 静态文件服务
- 路由处理
- 中间件记录请求日志
- 表单数据处理
- 防盗链检查

### 学习重点
1. **Node.js 基础**
   - Buffer 操作
   - 文件系统
   - HTTP 模块

2. **Express 框架**
   - 路由设置
   - 中间件使用
   - 静态资源服务
   - 请求处理

3. **数据库操作**
   - MongoDB 连接
   - Mongoose ODM

4. **项目结构**
   - 模块化开发
   - MVC 架构
   - 模板引擎

## 依赖包说明

### 主项目依赖
- `express` - Web 应用框架
- `body-parser` - 请求体解析中间件
- `mongoose` - MongoDB 对象建模工具

### Express Generator 项目依赖
- `express` - Web 应用框架
- `ejs` - 嵌入式 JavaScript 模板引擎
- `cookie-parser` - Cookie 解析中间件
- `morgan` - HTTP 请求日志中间件
- `formidable` - 表单数据解析

## 学习建议

1. 先学习基础模块 (`buffer.js`, `file.js`, `http.js`)
2. 再学习 Express 框架 (`express.js`, `routes/homeRouter.js`)
3. 然后学习数据库操作 (`mongoose.js`)
4. 最后学习完整项目结构 (`express-generator/`)

## 注意事项

- 确保 MongoDB 服务已启动（如果要测试数据库功能）
- 项目使用了不同的端口：主项目 9000，Express Generator 项目 3000
- 记得查看 `.cursor/rules/` 目录中的 AI 辅助规则

## 联系方式

如有问题，请查看代码注释或参考官方文档。 