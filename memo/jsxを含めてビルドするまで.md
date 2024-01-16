### 事象

jsxファイルを含んだプロジェクトをビルドできない

### エラーメッセージ
```
Module not found: Error: Can't resolve
```

### 可能性

- パスが間違っていてファイルをうまく読み込めない
- jsxファイルをうまく読み込めてない

### 解決方法

- webpack.config.jsに以下の部分を追記

```js
module.exports = {
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //jsだけではんくjsxファイルも読み込みの対象にした
            },
        ],
    },
};
```

*resolve.extension: importにてファイルの拡張子を記載しなくていいようにする設定(これがなくてもビルドは成功する)  
*module.rules.test: module.useにて指定されたローダーが読み込むファイルの拡張子を指定する

