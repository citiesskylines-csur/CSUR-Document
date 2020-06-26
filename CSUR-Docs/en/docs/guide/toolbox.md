---
sidebarDepth: 3
---
# ToolBox User Guide

## 1. Overview

CSUR Toolbox contains a series of important tools for CSUR 2.0.

Main features:

1. Provides a UI panel to find CSUR roads on a lane-by-lane basis
2. Makes it much easier to select roads with offsets on the map by clicking on road models instead of clicking on their central axis.
3. Pillars will adapt to the model offsets when building elevated CSUR roads.
4. Traffic paths will follow the actual lanes as indicated in the model, regardless of whether they are parallel to the road segment.
5. Disable CSUR Shift Ramp Transition and Express Road Zone
6. Call TMPE stayinlane laneconnector for complex CSUR node

Bug fixes (as of 01/19/2020):

1. Fixed lack of available lanes when using roads larger than CSUR 8DR as outside connections.
2. Fixed cims stopping on intersections when directly connecting large two-way roads (>=8DR).
3. Fixed lack of lane connectors when using TM:PE.
4. Fix some too large junctions
5. Fix CSUR road zone align issue

## 2. How to enable CSUR ToolBox

- Find "CSURToolBox" mod in Content Manager, enable it.
- Then, you can find a toggle button on the right ![UI Toggle Button](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/Button.png) in the game windows.
- Click on the button to show / hide the UI panel and you can drag & drop it onto your favorite place.

## 3. Introductions to CSUR UI Panel

The UI panel is divided into 7 sections below:

![UI Panel](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/overview.jpg) 

|#|Section Name|Features|
|:---:|:---:|:---:|
|1|Title|Drag & drop UI position|
|2|Preview panel|Shows thumbnail of the selected road|
|3|Variation panel|Switch variation of roads with the same lane combination|
|4|Ending lanes panel| Select lanes at the end of the road|
|5|Starting lanes panel|Select lane offsets at the beginning of the road |
|6|Shortcut panel|Shortcuts to modify selections in sections 4 & 5|
|7|Close button|Hide UI Panel|

### 3.1 Title

Left click, hold & drag it to move the panel.

### 3.2 Preview panel

Shows the road thumbnail icon when there is a road available for the lane combination and variation selected, otherwise shows "Not found".

### 3.3 Styles panel

|Button|Name|Description|
|:---:|:---:|:---:|
|![one-way](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/single.png)|One-way|Makes a one-way road using the lane combination selected in the lane panels|
|![two-way](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/dual.png)|Two-way|Makes a two-way road with **mirrored** layout on the opposite direction|
|![asymmetric 1](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/asym1.png)|Asymmetrical +1 lane|Adds **one** more lane to the **forward** direction based on the two-way mode|
|![asymmetric 2](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/asym2.png)|Asymmetrical +2 lanes|Adds **two** more lanes to the **forward** direction based on the two-way mode|
|![u-turn](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/uturn.png)|U-turn lane|Add a **U-turn** lane to the *forward* direction based on the two-way mode|
|![sidewalk & bike lanes](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/bike.png)|Sidewalk & bike lanes|The road to be built contains both sidewalk and bike lanes|
|![sidewalk only](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/human.png)|Sidewalk only|The road to be built contains sidewalk only|
|![plain road only](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/nohuman.png)|Plain road only|The road to be built does not contain sidewalk or bike lanes|

### 3.4 Ending lanes panel

Select lane combinations at the end of the road segment.

### 3.5 Starting lanes panel

Select lane combinations at the beginning of the road segment.

> Each button on these two panels represents the position of a traffic lane.
>
> ![offsets](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example4.png) 
>
> **NOTE**: All the selected lanes are **one-way**. All two-way roads are derived from one-way roads on the panel.

The offset starts from `L2` on the left. The black `C` (no offset) divides the panel into the left green `L` offsets and the right blue `R `offsets.

For example, we want to select the commonly-used 6DR (6 lanes, two-way), we can select `1`, `2`, `3` on both panels.

![to select 6DR](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example3.png) 

The buttons with a `P` on the second row represents lanes 0.5-unit away from the first row. 

![offsets with an additional P](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example5.png) 

A pair of barriers separating two roadways is at least 0.5-lane wide. When laying out a local-express road or creating a ramp, you can select one roadway with whole numbers and another with the `P` to avoid overlaps.

For example:

![4R = 2R 2R4P & 4R 1R5P = 3R 2R5P](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example6.png) 

To connect a `4R` with a `2R` & `2R4P`.

From: `4R`, selects `1`, `2`, `3`, `4`;

To: `2R`, selects `1`, `2`; `2R4P`, selects `3P`, `4P`.

![4R = 2R 2R4](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example1.png) 

To connect a `4R` & `1R5P` with a `3R` & `2R5P`

From: `4R`, selects `1`, `2`, `3`, `4`; `1R5P`, selects`5P`;

To: `3R`, selects `1`, `2`, `3`; `2R5P`, selects `4P`, `5P`.

![4R 1R5P = 3R 2R5P](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/example2.png) 

### 3.6 Shortcut panel

These three buttons are shortcuts for modifying the selections in the lane panels.

|Button|Name|Description|
|:---:|:---:|:---:|
|![duplicate](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/copy.png)|Duplicate|Duplicates selections from the **From** panel at the **bottom** to the **To** panel at the **top**.|
|![swap](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/swap.png)|Swap|Swaps selections between from & to panels (reverses the module).|
|![reset](https://raw.githubusercontent.com/citiesskylines-csur/CSURToolBox/master/Wiki/clear.png)|Clear|Resets both panels and clear all the selections.|

### 3.7 Close button

You can hide CSUR UI by clicking on the close button, or you can click on the CSUR toggle button.
