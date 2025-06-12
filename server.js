const express = require('express');
const path = require('path');
const app = express();

// 環境変数からポート番号を取得（デフォルトは8080）
const port = process.env.PORT || 8080;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'web-build')));

// すべてのルートをindex.htmlにリダイレクト（SPA対応）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web-build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 