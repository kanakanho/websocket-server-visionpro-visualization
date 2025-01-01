import os
import pandas as pd
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

"""
つながりは以下の通り
wrist
├─ thumbKnuckle ─ thumbIntermediateBase ─ thumbIntermediateTip ─ thumbTip
├─ indexFingerMetacarpal ─ indexFingerKnuckle ─ indexFingerIntermediateBase ─ indexFingerIntermediateTip ─ indexFingerTip
├─ middleFingerMetacarpal ─ middleFingerKnuckle ─ middleFingerIntermediateBase ─ middleFingerIntermediateTip ─ middleFingerTip
├─ ringFingerMetacarpal ─ ringFingerKnuckle ─ ringFingerIntermediateBase ─ ringFingerIntermediateTip ─ ringFingerTip
└─ littleFingerMetacarpal ─ littleFingerKnuckle ─ littleFingerIntermediateBase ─ littleFingerIntermediateTip ─ littleFingerTip
"""


def plot_savefig(df: pd.Series, latest_file: str):
    # 関節同士のつながりをプロット
    fig = plt.figure(figsize=(8, 8))
    ax = fig.add_subplot(111, projection="3d")

    # 関節同士のつながりをプロット

    ax.plot(
        [df["wrist_3_0"], df["thumbKnuckle_3_0"]],
        [df["wrist_3_1"], df["thumbKnuckle_3_1"]],
        [df["wrist_3_2"], df["thumbKnuckle_3_2"]],
        color="black",
    )
    ax.plot(
        [df["thumbKnuckle_3_0"], df["thumbIntermediateBase_3_0"]],
        [df["thumbKnuckle_3_1"], df["thumbIntermediateBase_3_1"]],
        [df["thumbKnuckle_3_2"], df["thumbIntermediateBase_3_2"]],
        color="black",
    )
    ax.plot(
        [
            df["thumbIntermediateBase_3_0"],
            df["thumbIntermediateTip_3_0"],
        ],
        [
            df["thumbIntermediateBase_3_1"],
            df["thumbIntermediateTip_3_1"],
        ],
        [
            df["thumbIntermediateBase_3_2"],
            df["thumbIntermediateTip_3_2"],
        ],
        color="black",
    )
    ax.plot(
        [df["thumbIntermediateTip_3_0"], df["thumbTip_3_0"]],
        [df["thumbIntermediateTip_3_1"], df["thumbTip_3_1"]],
        [df["thumbIntermediateTip_3_2"], df["thumbTip_3_2"]],
        color="black",
    )

    ax.plot(
        [df["wrist_3_0"], df["indexFingerMetacarpal_3_0"]],
        [df["wrist_3_1"], df["indexFingerMetacarpal_3_1"]],
        [df["wrist_3_2"], df["indexFingerMetacarpal_3_2"]],
        color="orange",
    )
    ax.plot(
        [df["indexFingerMetacarpal_3_0"], df["indexFingerKnuckle_3_0"]],
        [df["indexFingerMetacarpal_3_1"], df["indexFingerKnuckle_3_1"]],
        [df["indexFingerMetacarpal_3_2"], df["indexFingerKnuckle_3_2"]],
        color="orange",
    )
    ax.plot(
        [
            df["indexFingerKnuckle_3_0"],
            df["indexFingerIntermediateBase_3_0"],
        ],
        [
            df["indexFingerKnuckle_3_1"],
            df["indexFingerIntermediateBase_3_1"],
        ],
        [
            df["indexFingerKnuckle_3_2"],
            df["indexFingerIntermediateBase_3_2"],
        ],
        color="orange",
    )
    ax.plot(
        [
            df["indexFingerIntermediateBase_3_0"],
            df["indexFingerIntermediateTip_3_0"],
        ],
        [
            df["indexFingerIntermediateBase_3_1"],
            df["indexFingerIntermediateTip_3_1"],
        ],
        [
            df["indexFingerIntermediateBase_3_2"],
            df["indexFingerIntermediateTip_3_2"],
        ],
        color="orange",
    )
    ax.plot(
        [
            df["indexFingerIntermediateTip_3_0"],
            df["indexFingerTip_3_0"],
        ],
        [
            df["indexFingerIntermediateTip_3_1"],
            df["indexFingerTip_3_1"],
        ],
        [
            df["indexFingerIntermediateTip_3_2"],
            df["indexFingerTip_3_2"],
        ],
        color="orange",
    )

    ax.plot(
        [df["wrist_3_0"], df["middleFingerMetacarpal_3_0"]],
        [df["wrist_3_1"], df["middleFingerMetacarpal_3_1"]],
        [df["wrist_3_2"], df["middleFingerMetacarpal_3_2"]],
        color="green",
    )
    ax.plot(
        [
            df["middleFingerMetacarpal_3_0"],
            df["middleFingerKnuckle_3_0"],
        ],
        [
            df["middleFingerMetacarpal_3_1"],
            df["middleFingerKnuckle_3_1"],
        ],
        [
            df["middleFingerMetacarpal_3_2"],
            df["middleFingerKnuckle_3_2"],
        ],
        color="green",
    )
    ax.plot(
        [
            df["middleFingerKnuckle_3_0"],
            df["middleFingerIntermediateBase_3_0"],
        ],
        [
            df["middleFingerKnuckle_3_1"],
            df["middleFingerIntermediateBase_3_1"],
        ],
        [
            df["middleFingerKnuckle_3_2"],
            df["middleFingerIntermediateBase_3_2"],
        ],
        color="green",
    )
    ax.plot(
        [
            df["middleFingerIntermediateBase_3_0"],
            df["middleFingerIntermediateTip_3_0"],
        ],
        [
            df["middleFingerIntermediateBase_3_1"],
            df["middleFingerIntermediateTip_3_1"],
        ],
        [
            df["middleFingerIntermediateBase_3_2"],
            df["middleFingerIntermediateTip_3_2"],
        ],
        color="green",
    )
    ax.plot(
        [
            df["middleFingerIntermediateTip_3_0"],
            df["middleFingerTip_3_0"],
        ],
        [
            df["middleFingerIntermediateTip_3_1"],
            df["middleFingerTip_3_1"],
        ],
        [
            df["middleFingerIntermediateTip_3_2"],
            df["middleFingerTip_3_2"],
        ],
        color="green",
    )

    ax.plot(
        [df["wrist_3_0"], df["ringFingerMetacarpal_3_0"]],
        [df["wrist_3_1"], df["ringFingerMetacarpal_3_1"]],
        [df["wrist_3_2"], df["ringFingerMetacarpal_3_2"]],
        color="blue",
    )
    ax.plot(
        [df["ringFingerMetacarpal_3_0"], df["ringFingerKnuckle_3_0"]],
        [df["ringFingerMetacarpal_3_1"], df["ringFingerKnuckle_3_1"]],
        [df["ringFingerMetacarpal_3_2"], df["ringFingerKnuckle_3_2"]],
        color="blue",
    )
    ax.plot(
        [
            df["ringFingerKnuckle_3_0"],
            df["ringFingerIntermediateBase_3_0"],
        ],
        [
            df["ringFingerKnuckle_3_1"],
            df["ringFingerIntermediateBase_3_1"],
        ],
        [
            df["ringFingerKnuckle_3_2"],
            df["ringFingerIntermediateBase_3_2"],
        ],
        color="blue",
    )
    ax.plot(
        [
            df["ringFingerIntermediateBase_3_0"],
            df["ringFingerIntermediateTip_3_0"],
        ],
        [
            df["ringFingerIntermediateBase_3_1"],
            df["ringFingerIntermediateTip_3_1"],
        ],
        [
            df["ringFingerIntermediateBase_3_2"],
            df["ringFingerIntermediateTip_3_2"],
        ],
        color="blue",
    )
    ax.plot(
        [df["ringFingerIntermediateTip_3_0"], df["ringFingerTip_3_0"]],
        [df["ringFingerIntermediateTip_3_1"], df["ringFingerTip_3_1"]],
        [df["ringFingerIntermediateTip_3_2"], df["ringFingerTip_3_2"]],
        color="blue",
    )

    ax.plot(
        [df["wrist_3_0"], df["littleFingerMetacarpal_3_0"]],
        [df["wrist_3_1"], df["littleFingerMetacarpal_3_1"]],
        [df["wrist_3_2"], df["littleFingerMetacarpal_3_2"]],
        color="red",
    )
    ax.plot(
        [
            df["littleFingerMetacarpal_3_0"],
            df["littleFingerKnuckle_3_0"],
        ],
        [
            df["littleFingerMetacarpal_3_1"],
            df["littleFingerKnuckle_3_1"],
        ],
        [
            df["littleFingerMetacarpal_3_2"],
            df["littleFingerKnuckle_3_2"],
        ],
        color="red",
    )
    ax.plot(
        [
            df["littleFingerKnuckle_3_0"],
            df["littleFingerIntermediateBase_3_0"],
        ],
        [
            df["littleFingerKnuckle_3_1"],
            df["littleFingerIntermediateBase_3_1"],
        ],
        [
            df["littleFingerKnuckle_3_2"],
            df["littleFingerIntermediateBase_3_2"],
        ],
        color="red",
    )
    ax.plot(
        [
            df["littleFingerIntermediateBase_3_0"],
            df["littleFingerIntermediateTip_3_0"],
        ],
        [
            df["littleFingerIntermediateBase_3_1"],
            df["littleFingerIntermediateTip_3_1"],
        ],
        [
            df["littleFingerIntermediateBase_3_2"],
            df["littleFingerIntermediateTip_3_2"],
        ],
        color="red",
    )
    ax.plot(
        [
            df["littleFingerIntermediateTip_3_0"],
            df["littleFingerTip_3_0"],
        ],
        [
            df["littleFingerIntermediateTip_3_1"],
            df["littleFingerTip_3_1"],
        ],
        [
            df["littleFingerIntermediateTip_3_2"],
            df["littleFingerTip_3_2"],
        ],
        color="red",
    )

    ax.set_xlabel("X")
    ax.set_xlim(0.02, 0.25)
    ax.set_ylabel("Y")
    ax.set_ylim(0.6, 0.8)
    ax.set_zlabel("Z")
    ax.set_zlim(-0.3, -0.6)

    ax.grid(True)

    ax.view_init(elev=-20, azim=120)

    plt.title(f"Time: {df['time']}")

    # 保存
    plt.savefig(f"img/{latest_file}/{df['time']}.png")

    # 表示
    # plt.show()
    plt.close()


def make_png():
    # 1番最初のデータをプロット
    files = os.listdir("data")
    files = [f for f in files if f.endswith(".json")]
    files = sorted(files)
    latest_file = files[-1].removesuffix(".json")
    df = pd.read_csv(f"data/{latest_file}.csv")

    if not os.path.exists("img"):
        os.makedirs("img")

    if not os.path.exists(f"img/{latest_file}"):
        os.makedirs(f"img/{latest_file}")

    # 単体でプロット
    # df_cp = df.groupby("time").get_group(df["time"].unique()[500])
    # plot_savefig(df_cp)

    # 全体をプロット
    df.sort_values("time", inplace=True)
    for i in range(len(df)):
        if i % 2 == 0 or i % 3 == 0:
            continue
        plot_savefig(df.iloc[i], latest_file)
