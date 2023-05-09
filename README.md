## 安装依赖

```bash
npm ci
```

## `package.json` 脚本说明

脚本调用命令

```bash
npm run $(script)
```

### scripts

-   **dev** 运行开发服务器
-   **build:staging** 构建 测试环境 artifacts
-   **build** 构建 artifacts
-   **lint** 语法检查、在 dev 中同时也会检查语法
-   **format** 调用 prettier 全局修改代码风格
-   **dev:test** 开启测试用的开发服务器
-   **test** 单元测试
-   **test:dev** 单元测试调试
-   **test:e2e** e2e 测试
-   **test:e2e:ui** 可视化 e2e 测试
-   **test-and-build** 测试后构建
