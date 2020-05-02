<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>About</name>
    <message>
        <location filename="../qt/About.ui" line="14"/>
        <source>About DeepSkyStacker</source>
        <translation>關於DeepSkyStacker</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="36"/>
        <source>Language</source>
        <translation>語系</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="44"/>
        <source>Use the following language at next startup</source>
        <translation>下次啟動時使用此語系</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="105"/>
        <source>Check if newer version is available at startup</source>
        <translation>啟動時檢查是否有新版本</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="14"/>
        <source>DeepSkyStacker version %1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="23"/>
        <source>RAW file decoding by LibRaw (version %1)
Copyright © 1997-2019 LibRaw LLC</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="30"/>
        <source>TIFF file encoding/decoding by LibTIFF (version %1)
Copyright © 1988-1996 Sam Leffler
Copyright © 1991-1996 Silicon Graphics, Inc.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="37"/>
        <source>FITS decoding by CFitsIO (version %1)
Copyright NASA</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="45"/>
        <source>Default</source>
        <translation>預設</translation>
    </message>
</context>
<context>
    <name>AlignmentParameters</name>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="14"/>
        <source>Alignment</source>
        <translation>對齊星點</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="26"/>
        <source>Transformation used during alignment</source>
        <translation>對齊各影像中的星點時所用的轉換法</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="37"/>
        <source>Automatic</source>
        <translation>系統自動決定</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="44"/>
        <source>Bilinear</source>
        <translation>雙線性</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="51"/>
        <source>Bisquared</source>
        <translation>雙二次方</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="58"/>
        <source>Bicubic</source>
        <translation>雙三次方</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="65"/>
        <source>No alignment</source>
        <translation>不執行對齊各幅星點</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="23"/>
        <source>Automatic

The alignment method is automatically selected depending on the number of available stars.</source>
        <translation>自動

視星星數目自動決定星點對齊方式。</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="26"/>
        <source>Bilinear Alignment

The Bilinear Alignment is used in all cases.</source>
        <translation>雙線性

一律使用雙線性法對齊星點。</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="29"/>
        <source>Bisquared Alignment

The Bisquared Alignment is used when at least 25 stars are available, else the Bilinear Alignment method is used.</source>
        <translation>雙平方

在有超過25個星點時使用雙平方法，否則使用雙線性。</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="32"/>
        <source>Bicubic Alignment

The Bicubic method is used when at least 40 stars are available, then the Bisquared method is used if 25 to 39 stars are available, then the Bilinear method is used when less than 25 stars are available.</source>
        <translation>雙立方

超過40個星點時使用雙立方法，25到39個星點時使用雙平方，25以下使用雙線性。</translation>
    </message>
</context>
<context>
    <name>AskRegistering</name>
    <message>
        <location filename="../qt/AskRegistering.ui" line="14"/>
        <source>Unregistered light frame</source>
        <translation>尚未偵測星點的天體影像</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="37"/>
        <source>This light frame is not registered
(the stars have not been detected).

Do you want...</source>
        <translation>本天體影像尚未通過星點偵測

您要....</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="66"/>
        <source>to register this light frame</source>
        <translation>偵測本幅影像中的星點</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="73"/>
        <source>to register all the light frames</source>
        <translation>偵測所有影像中的星點</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="80"/>
        <source>to continue without registering the light frame</source>
        <translation>繼續處理但不偵測本幅影像中的星點</translation>
    </message>
</context>
<context>
    <name>BackgroundOptions</name>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="14"/>
        <source>Background Options</source>
        <translation>背景選項</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="20"/>
        <source>Calibration Method</source>
        <translation>校正方法</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="28"/>
        <source>Linear</source>
        <translation>線性</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="35"/>
        <source>Rational</source>
        <translation>有理數</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="60"/>
        <source>RGB Background Calibration Method</source>
        <translation>RGB背景校正方式</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="68"/>
        <source>None</source>
        <translation>無</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="75"/>
        <source>Minimum</source>
        <translation>極小值</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="82"/>
        <source>Middle</source>
        <translation>中間值</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="89"/>
        <source>Maximum</source>
        <translation>最大值</translation>
    </message>
</context>
<context>
    <name>BatchStacking</name>
    <message>
        <location filename="../qt/BatchStacking.ui" line="14"/>
        <source>Batch Stacking</source>
        <translation>批次疊合</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="20"/>
        <source>This dialog is used to launch the stacking process from existing image lists.

Add the file lists you want to stack and click OK to start the stacking processes.</source>
        <translation>本對話框可用於疊合既有的影像清單

加入您欲疊合的影像清單並按OK鍵以開始疊合</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="34"/>
        <source>Add File Lists...</source>
        <translation>增加檔案清單</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="54"/>
        <source>Clear List</source>
        <translation>清除影像清單</translation>
    </message>
</context>
<context>
    <name>CheckAbove</name>
    <message>
        <location filename="../qt/CheckAbove.ui" line="16"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DeepStackerDlg</name>
    <message>
        <location filename="../qt/DeepStackerDlg.cpp" line="9"/>
        <source>DeepSkyStacker %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DropFilesDlg</name>
    <message>
        <location filename="../qt/DropFilesDlg.ui" line="16"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExplorerBar</name>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="35"/>
        <source>Registering and Stacking</source>
        <translation>偵測星點與疊合</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="80"/>
        <source>Open picture files...</source>
        <translation>開啟影像檔...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="90"/>
        <source>dark files...</source>
        <translation>暗電流檔...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="103"/>
        <source>flat files...</source>
        <translation>平場檔案...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="113"/>
        <source>dark flat files...</source>
        <translation>平場暗電流檔...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="123"/>
        <source>offset/bias files...</source>
        <translation>偏壓檔...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="146"/>
        <source>Open a File List...</source>
        <translation>開啟檔案清單...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="153"/>
        <source>Save the FIle List...</source>
        <translation>儲存檔案清單...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="176"/>
        <source>Clear List</source>
        <translation>清除影像清單</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="207"/>
        <source>Check all</source>
        <translation>勾選全部</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="214"/>
        <source>Check above a threshold...</source>
        <translation>勾選高於某臨界值者...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="221"/>
        <source>Uncheck all</source>
        <translation>取消全部的勾選</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="252"/>
        <source>Register checked pictures...</source>
        <translation>偵測勾選影像中的星點...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="259"/>
        <source>Compute offsets...</source>
        <translation>計算位移量...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="266"/>
        <source>Stack checked pictures...</source>
        <translation>疊合勾選之影像...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="273"/>
        <source>Batch stacking...</source>
        <translation>批次疊合...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="286"/>
        <source>Processing</source>
        <translation>影像處理</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="307"/>
        <source>Open picture file...</source>
        <translation>開啟影像檔...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="314"/>
        <source>Copy current picture to clipboard</source>
        <translation>將本照片覆製至暫存區</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="321"/>
        <source>Create a Star Mask...</source>
        <translation>製作星像遮罩...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="328"/>
        <source>Save picture to file...</source>
        <translation>儲存影像...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="338"/>
        <source>Options</source>
        <translation>選項</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="359"/>
        <source>Settings...</source>
        <translation>設定...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="369"/>
        <source>Raw/FITS DDP Settings...</source>
        <translation>Raw/FITS檔數位顯像設定...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="379"/>
        <source>Load...</source>
        <translation>載入...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="389"/>
        <source>Save...</source>
        <translation>儲存...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="399"/>
        <source>Recommended...</source>
        <translation>建議值...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="406"/>
        <source>About DeepSkyStacker...</source>
        <translation>關於DeepSkyStacker...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="413"/>
        <source>DeepSkyStacker&apos;s Help...</source>
        <translation>DeepSkyStacker說明...</translation>
    </message>
</context>
<context>
    <name>FitsFilesTab</name>
    <message>
        <location filename="../qt/FitsFilesTab.ui" line="16"/>
        <source>Form</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="../qt/main.cpp" line="14"/>
        <source>Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../qt/main.cpp" line="15"/>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../qt/main.cpp" line="16"/>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../qt/main.cpp" line="17"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="../qt/main.cpp" line="13"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
</context>
</TS>
