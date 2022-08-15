# googlemeet-chat-message-auto-register

Google Meetのチャット欄を開いてメッセージをやりとりすると、自動でメッセージ内容を記録するchrome拡張アプリです。  
ポップアップ画面にチャット履歴が一覧で表示され、クリックするとチャットのやりとりの詳細が確認できます。

##開発環境
- Node.js 16 以降

## 特徴
- Reactの採用
- sassの採用

- chrome拡張の開発に [Vite](https://ja.vitejs.dev/) の利用  
- CRXJS Vite pluginを利用  参考URL [Create a Vite-React Chrome Extension in 90 seconds](https://dev.to/jacksteamdev/create-a-vite-react-chrome-extension-in-90-seconds-3df7)

依存パッケージのインストール:

```bash
npm install
```

ローカルサーバーの起動:

```bash
npm run dev
```
