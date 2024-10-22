# JEBY 設計工作室網站

歡迎來到 JEBY 設計工作室的官方網站專案。這個網站展示了我們的創意設計服務，並提供了一個互動的平台來展示我們的作品和與客戶溝通。

## 功能特點

- 響應式設計，適配各種設備
- 多語言支持（中文和英文）
- 視差滾動效果，提供獨特的視覺體驗
- 作品集展示
- 聯絡表單，支持直接郵件發送
- 羽毛球場地預訂系統

## 技術棧

- [Nuxt 3](https://nuxt.com/) - Vue.js 框架
- [Tailwind CSS](https://tailwindcss.com/) - 用於樣式設計
- [i18n](https://i18n.nuxtjs.org/) - 用於多語言支持
- [Nodemailer](https://nodemailer.com/) - 用於發送郵件

## 開始使用

確保您已安裝 [Node.js](https://nodejs.org/)（版本 14.x 或更高）。

1. 克隆此倉庫：
   ```
   git clone https://github.com/您的用戶名/jeby-design-website.git
   cd jeby-design-website
   ```

2. 安裝依賴：
   ```
   npm install
   ```

3. 創建 `.env` 文件並設置必要的環境變量：
   ```
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

4. 啟動開發服務器：
   ```
   npm run dev
   ```

5. 打開瀏覽器訪問 `http://localhost:3000`

## 部署

要構建生產版本：

```
npm run build
```

關於部署的更多信息，請查看 [Nuxt 部署文檔](https://nuxt.com/docs/getting-started/deployment)。

## 貢獻

我們歡迎任何形式的貢獻。如果您發現了 bug 或有改進建議，請開啟一個 issue 或提交一個 pull request。

## 許可證

[MIT License](LICENSE)

## 聯繫我們

如果您有任何問題或建議，請通過我們網站上的聯絡表單與我們聯繫。

感謝您對 JEBY 設計工作室的關注！
