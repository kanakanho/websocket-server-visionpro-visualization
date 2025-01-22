import os
import json
import pandas as pd


def make_csv():
    files = os.listdir("data")
    files = [f for f in files if f.endswith(".json")]
    files = sorted(files)
    latest_file = files[-1]
    output_file = latest_file.removesuffix(".json")
    data = None
    with open(f"data/{latest_file}") as f:
        text = f.read()
        # 最後の1文字が , か
        if text.endswith(",\n"):
            text = text[:-2]
        data = json.loads(f"[{text}]")

    rows = []
    for d_list in data:
        for d in d_list:
            parent_row = {
                "time": d["time"],
            }
            for joint in d["jointCodables"]:
                child_row = {f'{joint["jointName"]}_0_0': joint["anchorFromJointTransform"][0][0],f'{joint["jointName"]}_0_1': joint["anchorFromJointTransform"][0][1],f'{joint["jointName"]}_0_2': joint["anchorFromJointTransform"][0][2],f'{joint["jointName"]}_0_3': joint["anchorFromJointTransform"][0][3],f'{joint["jointName"]}_1_0': joint["anchorFromJointTransform"][1][0],f'{joint["jointName"]}_1_1': joint["anchorFromJointTransform"][1][1],f'{joint["jointName"]}_1_2': joint["anchorFromJointTransform"][1][2],f'{joint["jointName"]}_1_3': joint["anchorFromJointTransform"][1][3],f'{joint["jointName"]}_2_0': joint["anchorFromJointTransform"][2][0],f'{joint["jointName"]}_2_1': joint["anchorFromJointTransform"][2][1],f'{joint["jointName"]}_2_2': joint["anchorFromJointTransform"][2][2],f'{joint["jointName"]}_2_3': joint["anchorFromJointTransform"][2][3],f'{joint["jointName"]}_3_0': joint["anchorFromJointTransform"][3][0],f'{joint["jointName"]}_3_1': joint["anchorFromJointTransform"][3][1],f'{joint["jointName"]}_3_2': joint["anchorFromJointTransform"][3][2],f'{joint["jointName"]}_3_3': joint["anchorFromJointTransform"][3][3]}
                parent_row = {**parent_row, **child_row}
            rows.append(parent_row)

    df = pd.DataFrame(rows)
    # wrist と thumbTip, indexFingerTip, middleFingerTip, ringFingerTip, littleFingerTip の距離を計算
    df['distance_wrist_thumbTip'] = ((df['wrist_3_0'] - df['thumbTip_3_0'])**2 + (df['wrist_3_1'] - df['thumbTip_3_1'])**2 + (df['wrist_3_2'] - df['thumbTip_3_2'])**2)**0.5
    df['distance_wrist_indexFingerTip'] = ((df['wrist_3_0'] - df['indexFingerTip_3_0'])**2 + (df['wrist_3_1'] - df['indexFingerTip_3_1'])**2 + (df['wrist_3_2'] - df['indexFingerTip_3_2'])**2)**0.5
    df['distance_wrist_middleFingerTip'] = ((df['wrist_3_0'] - df['middleFingerTip_3_0'])**2 + (df['wrist_3_1'] - df['middleFingerTip_3_1'])**2 + (df['wrist_3_2'] - df['middleFingerTip_3_2'])**2)**0.5
    df['distance_wrist_ringFingerTip'] = ((df['wrist_3_0'] - df['ringFingerTip_3_0'])**2 + (df['wrist_3_1'] - df['ringFingerTip_3_1'])**2 + (df['wrist_3_2'] - df['ringFingerTip_3_2'])**2)**0.5
    df['distance_wrist_littleFingerTip'] = ((df['wrist_3_0'] - df['littleFingerTip_3_0'])**2 + (df['wrist_3_1'] - df['littleFingerTip_3_1'])**2 + (df['wrist_3_2'] - df['littleFingerTip_3_2'])**2)**0.5

    df['distance_sum'] = df['distance_wrist_thumbTip'] + df['distance_wrist_indexFingerTip'] + df['distance_wrist_middleFingerTip'] + df['distance_wrist_ringFingerTip'] + df['distance_wrist_littleFingerTip']
    df.sort_values(by=["time"], inplace=True)
    df.to_csv(f"data/{output_file}.csv", index=False)
