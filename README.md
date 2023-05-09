# IAM 验证系统 IAM 子系统 IAM-DEMO

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

-   **build** 构建 artifacts
-   **dev** 运行开发服务器
-   **lint** 语法检查、在 dev 中同时也会检查语法
-   **format** 调用 prettier 全局修改代码风格
-   **dev:test** 开启测试用的开发服务器
-   **test** 单元测试
-   **test:dev** 单元测试调试
-   **test:e2e** e2e 测试

## gitlab CI/CD pipeline 配置说明`.gitlab-ci.yml`

pipeline 分为两个 stage

### build 构建

通过 shell in docker runner 使用`dockerfile`文件构建 docker 镜像。

### deploy 部署

通过 shell in docker runner 在服务器中自动停止并创建容器。
