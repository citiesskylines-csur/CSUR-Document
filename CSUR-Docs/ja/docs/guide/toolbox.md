---
sidebarDepth: 3
---
# ToolBox取扱説明書

## 1.概要

CSUR ToolBoxはCSUR 2.0の重要な支援ツールの集合である。主に次の6つの機能があります。

1. CSUR道路を素早く選択できる補助UIを提供します。
2. ゲームにCSURのオフセットを加えて、道を選ぶのに便利です。（実際の路面モジュールを選んで、CSURオフセット道路を選択します。）
3. CSURオフセット道路橋脚自動オフセット整列
4. 車線のスムージングオフセット
5. CSUR Shift Ramp TransitionとExpress道路のZoneを除去します。
6. TMPE laneconnectorを呼び出して複雑なCSUR交差点を車線接続します。

残りのバグの修復（01/19/2020）：

1. CSUR 8DR以上の道路が地図の出入り口として使われる場合、一部の出入り口は1車線しか使えません。
2. CSURの大きな道路が直接につながっている時、市民は直接交差点に止まります。
3. TMPEは車線接続時、一部のCSUR路の車道接続点を読み取ることができません。
4. 大きな交差点を修復しました。
5. CSUR道路zoneが揃わない問題

CSUR UIの具体的な使い方を紹介します。

## 2.UI入口

メインインターフェースに入ると、コンテンツマネージャ内で、Modインターフェースの下にCSURToolBoxを見つけ、それを有効にすると効果があります。

ゲームに入ると、画面の右側にUIボタンがあります、右の図に示すように: ![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/Button.png) 

マウスの左ボタンを押して、このボタンをドラッグして好きな場所に移動できます。
マウスの左ボタンをクリックしてUI画面を呼び出すことができます。


## 3.UIインタフェース

呼出されるUIインターフェースは、図のように左から右に、上から下まで7つの部分に分かれています。
![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/overview.jpg) 

|番号付け|名前|作用|
|:---:|:---:|:---:|
|1|タイトルバー|UIの位置をドラッグします|
|2|プレビュー画面|選択した道路の状況を表示|
|3|ステータスパネル|同じタイプの道路の異なるスタイルを切り替えます。|
|4|目標車線パネル|道の終点車線のインターフェイスを選択します。|
|5|スタート車線パネル|道の首端の車線のインターフェイスを選択します。|
|6|調整パネル|4,5の中で選択された車線を調整します。|
|7|閉じる|UIを閉じる|

### 3.1 タイトルバー

左ボタンを押しながら画面の位置をドラッグします。

### 3.2 プレビュー画面

当選ボタンに対応する道路があると、道路のアイコンが表示されます。そうでないとNot foundが表示されます。

### 3.3 ステータスパネル

|ボタンのスタイル|名前|作用|
|:---:|:---:|:---:|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/single.png)|一方向|車線パネルの**まま**一方通行の道路を生成します|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/dual.png)|双方向|車線パネルのままで双方向の道路を生成します(対向は**ミラー**です)|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/asym1.png)|非対称+1|**双方向**に発生し、前進方向に**1**車線を増やすタイプです|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/asym2.png)|非対称+2|**双方向**に発生し、前進方向に**2**車線を増やすタイプです|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/uturn.png)|Uターン車線|**双方向**に発生し、前進方向に**Uターン**車線を増やすタイプです|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/bike.png)|歩道と自転車道|自動車道と歩道があります|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/human.png)|歩道だけ|歩道しかない|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/nohuman.png)|純路面|歩道と自転車道がありません|

### 3.4 目標車線パネル、道の終点車線のインターフェイスを選択します

### 3.5 スタート車線パネル道の首端の車線のインターフェイスを選択します

この2つのパネルはUIの中核である。上には複数のボタンがあり、それぞれCSUR道路の各車線に対応しています。

![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example4.png)

**注意：このパネルの選び方の車道はすべてシングル方向で、すべての双方向タイプはパネルのボタンから派生します**

本UIは左側のL 2から始まります。したがって、パネル左側の緑の4つのボタンはL部分、黒いCは分離線、右側の青いボタンはR部分です。
例えば、よく使われている6 DRはパネルの中で123車線を選択して、双方向ボタンを選ぶで呼び出すことができます。
![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example3.png) 

第二列のPボタンは標準位置で右に半車線の位置がずれていますが、ゲーム内で左に走るオプションが設定されていたら、実際に左にシフトします。
![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example5.png)
道路の柵の関係で、バンドPのタイプを選択すると、モデルが衝突することなく、普通のタイプとちょうど並んでいることができます。

実例：
![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example6.png) 
4Rを2R 2R4Pと接続する必要がある場合：
開始端：4R，1234を選択；
終点端：2R，12を選択； 2R4P，3P 4Pを選択。
![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example1.png) 

4R 1R5Pを3R 2R5Pと接続する必要がある場合：
開始端：4R，1234を選択	；1R5P，5Pを選択
終点端：3R，123を選択	；2R5P，4P 5Pを選択。
![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example2.png) 

### 3.6 調整パネル

調整パネルには3つのボタンがあり、車道パネルの内容を調整する役割があります。

|ボタンのスタイル|名前|作用|
|:---:|:---:|:---:|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/copy.png)|コピー|**下の**スタート車線パネルで選択したボタンを**上の**目標車線パネルにコピーします。|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/swap.png)|交換|スタート車線パネルと目標車線パネルの選択ボタンを入れ替えると、リバースビルドに相当します。|
|![](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/clear.png)|クリア|二つのパネルを初期状態に戻し、選択したボタンをすべてキャンセルします。|

### 3.7 閉じるボタン

クリックしてUIを閉じることができます。また、アイコンを再度クリックしても、UIをオフにすることができます。