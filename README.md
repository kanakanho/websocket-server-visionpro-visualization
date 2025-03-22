# websocket-server-visionpro-visualization

# setup

## node

依存関係のダウンロード

```sh
$ yarn
```

## websocket server

visionpro からハンドトラッキングのデータをリアルタイムてで PC に同期するための websocket サーバ

```sh
$ yarn start
```

## client （web サイト）

ハンドトラッキングの様子を可視化するためのクライアント

```sh
$ yarn vite
```

## visionpro

以下のレポジトリを参考にしてください（必要に応じて websocket サーバーの URL を変更する必要があります）

Immersive View を起動すると自動的に左手のハンドトラッキングのデータが送信されます
（なお PC に負担がかかるので注意）

https://github.com/kanakanho/spatial-painting

## python

### 1. 仮想環境の構築

```sh
$ python -m venv .venv
```

### 2. 仮想環境の有効化

```sh
$ . .venv/bin/activate
```

### 3. 依存パッケージのインストール

```sh
$ pip install -r requirements.txt
```

# visualization

`main.ipynb` の中で全て行える
(Python で描画を行う)

> [!WARNING]
> データが既に蓄積されていないと動きません

## Jupyter の拡張機能を入れる

拡張機能のタブで `ms-toolsai.jupyter` を検索してインストール

## `main.ipynb` の操作

1. `すべてを実行`を押す

2. ランタイムの決定

`.venv` の記述があるものを選ぶ

3. 自由にグラフをプロットする

## 可視化の例

### 手の動きの可視化

※ 以下の画像をクリックすると YouTube の動画が閲覧できます

[![手の動きの可視化](http://img.youtube.com/vi/k7RMapjjvxY/0.jpg)](https://www.youtube.com/watch?v=k7RMapjjvxY)

### 手首と指先の距離の変化の可視化

![](docs/jupyter-notebookでの可視化例.png)
