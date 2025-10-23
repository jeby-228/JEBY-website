# JEBY 設計工作室網站

歡迎來到 JEBY 設計工作室的官方網站專案。本網站展示我們的創意設計服務，並提供一個互動平台來展示我們的作品和與客戶溝通。

## 功能特點

- 響應式設計，適配各種設備尺寸
- 多語言支援（繁體中文和英文）
- 視差滾動效果，提供獨特的視覺體驗
- 精選作品集展示

## 技術架構

- [Nuxt 3](https://nuxt.com/) - 基於 Vue.js 的框架
- [Tailwind CSS](https://tailwindcss.com/) - 用於快速樣式設計
- [i18n](https://i18n.nuxtjs.org/) - 實現多語言支援
- [Nodemailer](https://nodemailer.com/) - 處理郵件發送功能

## 開始使用

請確保您已安裝 [Node.js](https://nodejs.org/)（版本 14.x 或更高）。

1. 克隆此儲存庫：
   ```
   git clone https://github.com/jeby-228/JEBY-website.git
   ```

2. 安裝相依套件：
   ```
   npm install
   ```

3. 建立 `.env` 檔案並設置必要的環境變數：
   ```
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

4. 啟動開發伺服器：
   ```
   npm run dev
   ```

5. 在瀏覽器中訪問 `http://localhost:3000`

## 部署

若要建立生產版本：

```
npm run build
```

關於部署的詳細資訊，請參考 [Nuxt 部署文件](https://nuxt.com/docs/getting-started/deployment)。

## 貢獻

我們歡迎各種形式的貢獻。如果您發現任何錯誤或有改進建議，請開啟一個 issue 或提交一個 pull request。

## 授權條款

本專案採用 [MIT 授權條款](LICENSE)。

## 聯絡我們

如有任何問題或建議，請透過我們網站上的聯絡表單與我們聯繫。





感謝您對 JEBY 設計工作室的支持與關注！




```mermaid

gantt
    title 底片攝影網站開發時程規劃
    dateFormat  YYYY-MM-DD
    axisFormat  %m/%d
    
    section 第一階段：基礎建設
    專案初始化與環境設定    :setup, 2024-06-24, 2d
    基礎 UI 框架建立        :ui-base, after setup, 3d
    照片管理 API 開發       :api-photo, 2024-06-25, 4d
    照片展示頁面開發        :photo-display, after ui-base, 3d
    
    section 第二階段：核心功能
    無酸袋 API 開發         :api-bag, after api-photo, 3d
    無酸袋 UI 組件開發      :ui-bag, after photo-display, 4d
    選片功能整合           :selection, after ui-bag, 2d
    Session 管理系統       :session, after api-bag, 2d
    
    section 第三階段：沖洗體驗
    沖洗 API 開發          :api-develop, after session, 4d
    沖洗動畫效果開發        :develop-animation, after selection, 5d
    負片轉正片濾鏡         :filter-effects, after develop-animation, 3d
    暗房 UI 介面           :darkroom-ui, after develop-animation, 3d
    
    section 第四階段：視覺優化
    摩登風格 CSS 設計      :modern-style, after filter-effects, 4d
    音效和互動回饋         :audio-feedback, after darkroom-ui, 3d
    載入動畫和過場效果      :loading-effects, after modern-style, 2d
    響應式設計優化         :responsive, after audio-feedback, 3d
    
    section 第五階段：社交功能
    分享功能 API 開發      :api-share, after loading-effects, 3d
    分享頁面開發           :share-page, after responsive, 3d
    留言系統開發           :comment-system, after api-share, 4d
    
    section 第六階段：系統整合
    完整功能測試           :integration-test, after comment-system, 4d
    效能優化              :performance, after integration-test, 3d
    安全性檢測            :security, after performance, 2d
    部署和上線準備         :deployment, after security, 3d
    
    section 第七階段：上線維護
    正式上線              :launch, after deployment, 1d
    使用者回饋收集         :feedback, after launch, 7d
    問題修復和調整         :bugfix, after feedback, 5d
    功能迭代規劃          :iteration, after bugfix, 3d
```
