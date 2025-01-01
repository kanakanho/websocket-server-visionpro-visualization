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
    df.sort_values(by=["time"], inplace=True)
    df.to_csv(f"data/{output_file}.csv", index=False)
