# 何梓奕个人作品集

这是一个无需安装依赖或构建工具的静态网站。页面共用 `assets/site.css` 与 `assets/site.js`，三个方向各自有独立入口。

## 本地启动

在项目目录运行：

```powershell
python -m http.server 8000 --directory outputs/portfolio
```

然后访问：

- 产品：<http://localhost:8000/product/>
- 运营：<http://localhost:8000/operations/>
- 数据分析：<http://localhost:8000/data/>

根路径会跳转到产品页。部署在 GitHub Pages 项目子路径时，滑动和资源链接仍按当前目录工作。预期公网分享地址（GitHub Pages 发布完成后可用）：

- 产品：<https://hh-cat1.github.io/pet-boarding-system/portfolio/product/>
- 运营：<https://hh-cat1.github.io/pet-boarding-system/portfolio/operations/>
- 数据分析：<https://hh-cat1.github.io/pet-boarding-system/portfolio/data/>

手机/平板左右滑动可切换方向；桌面端可按 Alt + ← / Alt + →。页面本身没有方向选项导航。
