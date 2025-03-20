// 受け取るデータ
const sampleData = [
  {
    jointCodables: [
      {
        jointName: "wrist",
        anchorFromJointTransform: [
          [0.1335959, -0.42845932, 0.89363, 0],
          [0.021000292, -0.90028685, -0.4347904, 0],
          [0.9908133, 0.076852754, -0.111276895, 0],
          [0.059512258, 0.84531045, -0.32675913, 1],
        ],
      },
      {
        jointName: "thumbKnuckle",
        anchorFromJointTransform: [
          [-0.016897885, -0.92577577, 0.37769538, 0],
          [0.9997197, -0.021906426, -0.008968383, 0],
          [0.016576692, 0.37743798, 0.9258863, 0],
          [0.07430172, 0.86474043, -0.3449229, 1],
        ],
      },
      {
        jointName: "thumbIntermediateBase",
        anchorFromJointTransform: [
          [0.04118018, -0.91303647, 0.40579388, 0],
          [0.99898183, 0.030133706, -0.033576418, 0],
          [0.018428463, 0.40676323, 0.9133477, 0],
          [0.07501513, 0.9069128, -0.36217934, 1],
        ],
      },
      {
        jointName: "thumbIntermediateTip",
        anchorFromJointTransform: [
          [-0.015828485, -0.8949827, 0.44581997, 0],
          [0.99976206, -0.020862501, -0.0063857827, 0],
          [0.015016084, 0.44561276, 0.8950998, 0],
          [0.073779926, 0.93318987, -0.37386537, 1],
        ],
      },
      {
        anchorFromJointTransform: [
          [-0.01582838, -0.8949825, 0.4458199, 0],
          [0.99976194, -0.020862421, -0.006385792, 0],
          [0.01501608, 0.4456127, 0.8950997, 0],
          [0.07419125, 0.95679986, -0.3858275, 0.9999999],
        ],
        jointName: "thumbTip",
      },
      {
        anchorFromJointTransform: [
          [0.036109686, -0.43411982, 0.90013105, 0],
          [0.0319916, -0.8997547, -0.4352216, 0],
          [0.99883556, 0.044512343, -0.018601665, 0],
          [0.07221859, 0.85555464, -0.35083628, 1],
        ],
        jointName: "indexFingerMetacarpal",
      },
      {
        anchorFromJointTransform: [
          [0.33941293, -0.7834306, 0.52061033, 0],
          [-0.01923129, -0.5591293, -0.8288571, 0],
          [0.9404407, 0.2713129, -0.2048421, 0],
          [0.07025629, 0.8821042, -0.4100196, 0.99999994],
        ],
        jointName: "indexFingerKnuckle",
      },
      {
        jointName: "indexFingerIntermediateBase",
        anchorFromJointTransform: [
          [-0.08602915, -0.45054117, -0.8886009, 0],
          [-0.3451352, 0.8501574, -0.39763552, 0],
          [0.9346018, 0.27247918, -0.22863586, 0],
          [0.056211434, 0.9144618, -0.4312731, 0.99999994],
        ],
      },
      {
        jointName: "indexFingerIntermediateTip",
        anchorFromJointTransform: [
          [-0.3138654, 0.517918, -0.7957696, 0],
          [-0.11376957, 0.8115685, 0.57307327, 0],
          [0.94262636, 0.2704023, -0.19580002, 0],
          [0.057932585, 0.9249475, -0.41004154, 0.9999998],
        ],
      },
      {
        anchorFromJointTransform: [
          [-0.31386563, 0.51791805, -0.7957696, 0],
          [-0.11376954, 0.8115685, 0.57307327, 0],
          [0.9426264, 0.2704024, -0.19580017, 0],
          [0.064163096, 0.9147104, -0.39379534, 0.9999998],
        ],
        jointName: "indexFingerTip",
      },
      {
        jointName: "middleFingerMetacarpal",
        anchorFromJointTransform: [
          [0.14795655, -0.42629725, 0.892401, 0],
          [0.03239758, -0.89975876, -0.43518332, 0],
          [0.9884629, 0.09329988, -0.11931418, 0],
          [0.060045775, 0.85583794, -0.35039854, 1],
        ],
      },
      {
        jointName: "middleFingerKnuckle",
        anchorFromJointTransform: [
          [0.35876793, -0.6539082, 0.66610056, 0],
          [-0.11877309, -0.7397878, -0.66227424, 0],
          [0.9258394, 0.15848804, -0.34307873, 0],
          [0.051669106, 0.8800194, -0.40427536, 0.99999994],
        ],
      },
      {
        jointName: "middleFingerIntermediateBase",
        anchorFromJointTransform: [
          [-0.2385295, -0.5301385, -0.81366867, 0],
          [-0.35161877, 0.8281516, -0.4364963, 0],
          [0.90524447, 0.18198405, -0.38394517, 0],
          [0.035497632, 0.9095102, -0.4347026, 0.99999994],
        ],
      },
      {
        jointName: "middleFingerIntermediateTip",
        anchorFromJointTransform: [
          [-0.38704583, 0.62854284, -0.6746329, 0],
          [0.09631822, 0.75521576, 0.64836115, 0],
          [0.9170159, 0.18596609, -0.3528432, 0],
          [0.04161395, 0.92392725, -0.41179165, 0.99999994],
        ],
      },
      {
        jointName: "middleFingerTip",
        anchorFromJointTransform: [
          [-0.38704583, 0.6285428, -0.67463285, 0],
          [0.09631818, 0.7552157, 0.64836115, 0],
          [0.9170158, 0.1859662, -0.35284323, 0],
          [0.049780346, 0.9106682, -0.39742136, 0.99999994],
        ],
      },
      {
        jointName: "ringFingerMetacarpal",
        anchorFromJointTransform: [
          [0.20102447, -0.42158303, 0.8842266, 0],
          [0.032389887, -0.899299, -0.43613282, 0],
          [0.97905046, 0.11631344, -0.16712615, 0],
          [0.04797583, 0.85674524, -0.34775475, 1],
        ],
      },
      {
        anchorFromJointTransform: [
          [0.32918185, -0.6222427, 0.710249, 0],
          [0.03355821, -0.7439858, -0.6673524, 0],
          [0.94367015, 0.243515, -0.22402522, 0],
          [0.036628745, 0.8804291, -0.40043402, 1],
        ],
        jointName: "ringFingerKnuckle",
      },
      {
        jointName: "ringFingerIntermediateBase",
        anchorFromJointTransform: [
          [-0.07521395, -0.54361886, -0.83595526, 0],
          [-0.31111673, 0.80927545, -0.49827677, 0],
          [0.9473907, 0.22260246, -0.22999781, 0],
          [0.024055097, 0.9042064, -0.42822418, 0.9999999],
        ],
      },
      {
        anchorFromJointTransform: [
          [-0.29983205, 0.55259997, -0.7776468, 0],
          [-0.059603263, 0.8027065, 0.5933882, 0],
          [0.9521282, 0.2242671, -0.2077403, 0],
          [0.025752768, 0.9184104, -0.4055614, 0.9999999],
        ],
        jointName: "ringFingerIntermediateTip",
      },
      {
        anchorFromJointTransform: [
          [-0.29983214, 0.55259997, -0.77764684, 0],
          [-0.059603225, 0.80270666, 0.5933884, 0],
          [0.9521282, 0.22426708, -0.20774037, 0],
          [0.03158372, 0.9076842, -0.38991463, 0.9999999],
        ],
        jointName: "ringFingerTip",
      },
      {
        jointName: "littleFingerMetacarpal",
        anchorFromJointTransform: [
          [0.23737566, -0.4168468, 0.87743473, 0],
          [0.032504924, -0.8993374, -0.43604574, 0],
          [0.97087395, 0.13202766, -0.19993123, 0],
          [0.0342737, 0.8572266, -0.3438434, 1],
        ],
      },
      {
        jointName: "littleFingerKnuckle",
        anchorFromJointTransform: [
          [0.26467088, -0.67820895, 0.6855523, 0],
          [-0.03877025, -0.7178128, -0.69515586, 0],
          [0.9635591, 0.15740854, -0.21627848, 0],
          [0.022628967, 0.8775338, -0.3890788, 1],
        ],
      },
      {
        jointName: "littleFingerIntermediateBase",
        anchorFromJointTransform: [
          [-0.039179984, -0.79234457, -0.60881466, 0],
          [-0.27897725, 0.5937285, -0.75475717, 0],
          [0.9594981, 0.14027406, -0.24430831, 0],
          [0.013973635, 0.89975286, -0.41212195, 1],
        ],
      },
      {
        anchorFromJointTransform: [
          [-0.27605355, 0.250326, -0.92797166, 0],
          [-0.098025285, 0.9531214, 0.28627086, 0],
          [0.9561305, 0.16999078, -0.2385742, 0],
          [0.014561497, 0.9142282, -0.40021542, 1],
        ],
        jointName: "littleFingerIntermediateTip",
      },
      {
        jointName: "littleFingerTip",
        anchorFromJointTransform: [
          [-0.27605346, 0.25032595, -0.92797166, 0],
          [-0.09802531, 0.9531214, 0.28627074, 0],
          [0.9561306, 0.16999081, -0.23857412, 0],
          [0.019219909, 0.9101453, -0.3835953, 0.99999994],
        ],
      },
      {
        jointName: "forearmWrist",
        anchorFromJointTransform: [
          [-0.30550262, 0.39150497, -0.86798155, 0],
          [0.036055107, -0.9061523, -0.42141226, 0],
          [-0.9515084, -0.1600378, 0.26271626, 0],
          [0.059512254, 0.84531045, -0.3267591, 1],
        ],
      },
      {
        jointName: "forearmArm",
        anchorFromJointTransform: [
          [-0.30550262, 0.39150497, -0.86798155, 0],
          [0.036055125, -0.90615237, -0.42141223, 0],
          [-0.9515084, -0.1600378, 0.26271626, 0],
          [0.15048179, 0.71540004, -0.1498654, 1],
        ],
      },
    ],
    time: "1736154810.15306",
  },
];

/* ------------------------------------------------------------------------------------ */

// const socket = new WebSocket("ws://192.168.11.1:8000");
const socket = new WebSocket("ws://192.168.10.2:8909");

socket.addEventListener("open", (event) => {
  // pタグを追加
  const p = document.createElement("p");
  p.innerText = "Connected to server";
  document.getElementById("message").appendChild(p);
});

socket.addEventListener("message", (event) => {
  // pタグを追加
  const p = document.createElement("p");
  p.innerText = `Received: ${event.data}`;
  document.getElementById("message").appendChild(p);

  // "new"が含まれている場合は無視
  if (typeof event.data === "string" && event.data.includes("new")) {
    return;
  }

  // 受け取ったデータがBlobの場合、JSONに変換
  if (event.data instanceof Blob) {
    const reader = new FileReader();
    reader.onload = function () {
      const data = JSON.parse(reader.result);
      drawHand(data[0]);
      updateChart(data[0]);
      animate();
    };
    reader.readAsText(event.data);
  } else {
    // 受け取ったデータを描画
    const data = JSON.parse(event.data);
    drawHand(data[0]);
    updateChart(data[0]);
    animate();
  }
});

socket.addEventListener("error", (event) => {
  // エラーメッセージを表示
  const p = document.createElement("p");
  p.innerText = `WebSocket connection failed: ${event.message}`;
  document.getElementById("message").appendChild(p);
});

socket.addEventListener("close", (event) => {
  // 接続が閉じられたことを表示
  const p = document.createElement("p");
  p.innerText = "WebSocket connection closed";
  document.getElementById("message").appendChild(p);
});

/* ------------------------------------------------------------------------------------ */

// import { InfluxDB, Point } from "@influxdata/influxdb-client";

// const influxDB = new InfluxDB({ url: INFLUX_URL, token: INFLUX_TOKEN });

// function pushHandAnchor(joint) {
//   const point = new Point("handAnchor").tag("jointName", joint.jointName).floatField("x", joint.anchorFromJointTransform[3][0]).floatField("y", joint.anchorFromJointTransform[3][1]).floatField("z", joint.anchorFromJointTransform[3][2]);

//   const writeApi = influxDB.getWriteApi("docs", "volume");
//   writeApi.writePoint(point);
//   writeApi.close();
// }

/* ------------------------------------------------------------------------------------ */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// 背景を白に
renderer.setClearColor(0xffffff);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// マウスでカメラを操作
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

let handPositionCenter = new THREE.Vector3(0, 0, 0);

let handLines = {}; // 指ごとのラインを管理
let handSpheres = []; // 手の関節の球体を管理

function drawHand(data) {
  const joints = data.jointCodables.map((joint) => {
    const anchor = joint.anchorFromJointTransform;
    return new THREE.Vector3(anchor[3][0], anchor[3][1], anchor[3][3]);
  });

  const fingers = {
    thumb: ["wrist", "thumbKnuckle", "thumbIntermediateBase", "thumbIntermediateTip", "thumbTip"],
    index: [
      "wrist",
      "indexFingerMetacarpal",
      "indexFingerKnuckle",
      "indexFingerIntermediateBase",
      "indexFingerIntermediateTip",
      "indexFingerTip",
    ],
    middle: [
      "wrist",
      "middleFingerMetacarpal",
      "middleFingerKnuckle",
      "middleFingerIntermediateBase",
      "middleFingerIntermediateTip",
      "middleFingerTip",
    ],
    ring: [
      "wrist",
      "ringFingerMetacarpal",
      "ringFingerKnuckle",
      "ringFingerIntermediateBase",
      "ringFingerIntermediateTip",
      "ringFingerTip",
    ],
    little: [
      "wrist",
      "littleFingerMetacarpal",
      "littleFingerKnuckle",
      "littleFingerIntermediateBase",
      "littleFingerIntermediateTip",
      "littleFingerTip",
    ],
  };

  const colors = {
    thumb: "black",
    index: "orange",
    middle: "green",
    ring: "blue",
    little: "red",
  };

  // 指ごとのライン更新
  Object.keys(fingers).forEach((finger) => {
    const points = data.jointCodables
      .filter((joint) => fingers[finger].includes(joint.jointName))
      .map((joint) => {
        const anchor = joint.anchorFromJointTransform;
        return new THREE.Vector3(anchor[3][0], anchor[3][1], anchor[3][3]);
      });

    if (!handLines[finger]) {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: colors[finger] });
      handLines[finger] = new THREE.Line(geometry, material);
      scene.add(handLines[finger]);
    } else {
      handLines[finger].geometry.setFromPoints(points);
    }
  });

  // 関節の球体を更新
  if (handSpheres.length === 0) {
    joints.forEach((joint) => {
      const sphereGeometry = new THREE.SphereGeometry(0.001, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: "skyblue", linewidth: 2 });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.copy(joint);
      scene.add(sphere);
      handSpheres.push(sphere);
    });
  } else {
    handSpheres.forEach((sphere, index) => {
      if (joints[index]) {
        sphere.position.copy(joints[index]);
      }
    });
  }

  // 手の中心を計算
  handPositionCenter = joints.reduce((acc, joint) => acc.add(joint), new THREE.Vector3()).divideScalar(joints.length);
  camera.position.set(handPositionCenter.x, handPositionCenter.y + 0.2, handPositionCenter.z + 0.2);
  controls.update();
}

// drawHand(sampleData[0]);

function animate() {
  renderer.render(scene, camera);
}

/* ------------------------------------------------------------------------------------ */

import Chart from "chart.js/auto";

const ctx = document.getElementById("myLineChart").getContext("2d");
const myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Wrist X",
        data: [],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Wrist Y",
        data: [],
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Wrist Z",
        data: [],
        borderColor: "rgb(192, 75, 174)",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
});

const jointCodablesWrist = [];

// updateChart(sampleData[0]);

function updateChart(data) {
  const time = data.time;
  const wristData = data.jointCodables.filter((joint) => joint.jointName === "wrist")[0].anchorFromJointTransform;
  
  jointCodablesWrist.push({
    time: time,
    x: wristData[0][0],
    y: wristData[1][1],
    z: wristData[2][2],
  });

  // 配列が10の倍率のとき描画
  if (jointCodablesWrist.length % 10 !== 0) {
    return;
  }

  myLineChart.data.labels = jointCodablesWrist.map((joint) => joint.time);
  myLineChart.data.datasets[0].data = jointCodablesWrist.map((joint) => joint.x);
  myLineChart.data.datasets[1].data = jointCodablesWrist.map((joint) => joint.y);
  myLineChart.data.datasets[2].data = jointCodablesWrist.map((joint) => joint.z);

  myLineChart.update();
}