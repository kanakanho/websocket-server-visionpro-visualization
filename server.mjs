import { WebSocketServer } from "ws";
import fs from "node:fs";
import path from "node:path";

const wss = new WebSocketServer({ port: process.env.PORT, host: process.env.HOST });
const clients = [];

// dataディレクトリが存在しない場合は作成
const dir = "data";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// dataディレクトリの中で一番新しいファイルを取得
let writeFilePath = fs.readdirSync(dir).sort((a, b) => b - a)[0];
if (writeFilePath) {
  writeFilePath = path.join(dir, writeFilePath);
}

wss.on("connection", function connection(ws) {
  console.log("connected");
  clients.push({ client: ws });

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    // console.log("received: %s", data);
    if (data.includes("new")) {
      writeFilePath = path.join(dir, `${Date.now()}.json`);
      return;
    }
    for (const client of clients) {
      if (client.client !== ws && client.client.readyState === ws.OPEN) {
        client.client.send(data);
      }
    }
    // ファイルに書き込み処理
    if (writeFilePath) {
      fs.appendFileSync(writeFilePath, `${data},\n`);
    } else {
      console.error("writeFilePath is undefined");
    }
  });
});
