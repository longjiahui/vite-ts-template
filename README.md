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

        "dev": "vite --force -c vite.dev.config.ts",
        "build:staging": "vite build --mode staging -c vite.prod.config.ts",
        "build": "vite build -c vite.prod.config.ts",
        "preview": "vite preview",
        "dev:test": "vite --host -c vite.e2e.config.ts --port 8173",
        "test": "vitest -c vite.test.config.ts run",
        "test:dev": "vitest -c vite.test.config.ts dev",
        "playwright": "playwright test",
        "playwright:ui": "playwright test --ui",
        "test:e2e": "start-server-and-test dev:test 8173 playwright",
        "test:e2e:ui": "start-server-and-test dev:test 8173 playwright:ui",
        "test:all": "npm run lint && npm run test && npm run test:e2e",
        "lint": "vue-tsc && eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix",
        "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
        "test-and-build": "npm run test:all && npm run build"

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
