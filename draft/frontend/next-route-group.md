在 Next.js（特别是 App Router 模式下）中，**用圆括号 `()` 包裹的文件夹名**（比如 (`marketing`)、(`dashboard`)）是一种叫做 **路由组（Route Groups）** 的功能。

## 核心作用是

> 🧩 对项目中的页面进行逻辑分组，但不会影响最终的 URL 路径。

假设你有这样一个目录结构：

```
app/
├── (marketing)/
│   ├── layout.tsx
│   ├── about/page.tsx
│   └── pricing/page.tsx
└── (dashboard)/
    ├── layout.tsx
    └── settings/page.tsx
```

- 访问 `/about` → 实际渲染的是 `(marketing)/about/page.tsx`
- 访问 `/settings` → 实际渲染的是 `(dashboard)/settings/page.tsx`

✅ 注意：URL 里 没有 `(marketing)` 或 `(dashboard)`！
括号里的名字 **只在代码组织时有用，对用户完全透明**。

## 常见用途

**1. 为不同页面组设置独立布局**
  - 比如营销页（About、Pricing）用一套简洁布局；
  - 后台页（Dashboard、Settings）用带侧边栏的布局。
  - 只需在 `(marketing)/layout.tsx` 和 `(dashboard)/layout.tsx` 中分别定义即可。
**2. 隔离样式、状态或中间件**
  - 比如 `(auth)/middleware.ts` 只对登录相关页面生效；
  - `(public)/` 下的页面不需要鉴权。
**3. 避免全局污染**
  - 营销页不加载后台才用的重型组件，提升性能。
**4. 大型项目模块化管理**
  - 按团队、功能、产品线拆分，代码更清晰。

## 注意事项

- 不要让不同路由组生成相同 URL：比如 `(a)/user/page.tsx` 和 `(b)/user/page.tsx` 都会变成 `/user`，Next.js 会报错！
- 路由组可以嵌套：`(dashboard)/(settings)/profile/page.tsx` → URL 仍是 `/profile`
- 路由组和动态路由 [id] 可以共存：`(blog)/[slug]/page.tsx` → 匹配 `/hello-world`，同时享受 blog 组的 layout。

## 提示

| 写法 | 作用 | 是否影响 URL |
|------|------|---------------|
| `[slug]` | 动态路由（捕获参数） | ✅ 会影响（如 `/post/123`） |
| `(...slug)` | 捕获多段路径 | ✅ 会影响 |
| `(group)` | 路由组（逻辑分组） | ❌ 完全不影响 URL |

如果你正在开发一个既有前台又有后台的项目，或者想按功能模块拆分布局，路由组就是你的最佳拍档！😄
