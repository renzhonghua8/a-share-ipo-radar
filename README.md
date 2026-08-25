# 新股雷达

中国 A 股打新决策助手网页原型，结合当周申购日历、发行估值、历史新股表现和评分模型，展示新股热度、盈利空间与中签难度。

## 本地运行

```bash
npm ci
npm run dev
```

## 服务器部署

建议使用独立端口 `3107` 和独立 PM2 进程名，避免影响服务器上的现有服务。

```bash
git clone https://github.com/renzhonghua8/a-share-ipo-radar.git
cd a-share-ipo-radar

# 必须没有输出；如有输出，表示 3107 已被占用，请换一个空闲端口
ss -ltnp | grep ':3107 '

npm ci
npm run build
npm install -g pm2
PORT=3107 pm2 start npm --name a-share-ipo-radar -- start
pm2 save
pm2 status a-share-ipo-radar
curl -I http://127.0.0.1:3107
```

更新版本：

```bash
cd a-share-ipo-radar
git pull --ff-only
npm ci
npm run build
PORT=3107 pm2 restart a-share-ipo-radar --update-env
```

如需通过 Nginx 提供域名访问，只新增独立站点配置并反向代理到 `127.0.0.1:3107`，不要修改其他站点的配置。

> 当前版本是产品原型。页面中已明确标注的模型评分、收益预测和部分历史回测指标不能作为投资依据，正式使用前需要接入稳定的数据源并完成可复现回测。
