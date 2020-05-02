<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>About</name>
    <message>
        <location filename="../qt/About.ui" line="14"/>
        <source>About DeepSkyStacker</source>
        <translation>О DeepSkyStacker</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="36"/>
        <source>Language</source>
        <translation>Язык</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="44"/>
        <source>Use the following language at next startup</source>
        <translation>Выбрать язык для следующего запуска</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="105"/>
        <source>Check if newer version is available at startup</source>
        <translation>Проверить доступность последней версии при старте</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="14"/>
        <source>DeepSkyStacker version %1</source>
        <translation>DeepSkyStacker версия %1</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="23"/>
        <source>RAW file decoding by LibRaw (version %1)
Copyright © 1997-2019 LibRaw LLC</source>
        <translation>Декодирование RAW файлов DCRAW (версия %1)
Copyright © 1997-2016 Dave Coffin</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="30"/>
        <source>TIFF file encoding/decoding by LibTIFF (version %1)
Copyright © 1988-1996 Sam Leffler
Copyright © 1991-1996 Silicon Graphics, Inc.</source>
        <translation>Кодирование/декодирование TIFF файлов LibTIFF (версия %1)
Copyright © 1988-1996 Sam Leffler
Copyright © 1991-1996 Silicon Graphics, Inc.</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="37"/>
        <source>FITS decoding by CFitsIO (version %1)
Copyright NASA</source>
        <translation>FITS декодирование CFitsIO (версия %1)
Copyright NASA</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="45"/>
        <source>Default</source>
        <translation>По умолчанию</translation>
    </message>
</context>
<context>
    <name>AlignmentParameters</name>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="14"/>
        <source>Alignment</source>
        <translation>Выравнивание</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="26"/>
        <source>Transformation used during alignment</source>
        <translation>Преобразования, используемые при выравнивании</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="37"/>
        <source>Automatic</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="44"/>
        <source>Bilinear</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="51"/>
        <source>Bisquared</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="58"/>
        <source>Bicubic</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="65"/>
        <source>No alignment</source>
        <translation>Нет выравнивания</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="23"/>
        <source>Automatic

The alignment method is automatically selected depending on the number of available stars.</source>
        <translation>Автоматически

Метод выравнивания выбирается автоматически, исходя из доступного количества звёзд.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="26"/>
        <source>Bilinear Alignment

The Bilinear Alignment is used in all cases.</source>
        <translation>Bilinear выравнивание

Bilinear выравнивание используется во всех остальных случаях.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="29"/>
        <source>Bisquared Alignment

The Bisquared Alignment is used when at least 25 stars are available, else the Bilinear Alignment method is used.</source>
        <translation>Bisquared выравнивание

Bisquared выравнивание используется, когда найдено меньше 25 звёзд, иначе используется метод выравнивания Bilinear.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="32"/>
        <source>Bicubic Alignment

The Bicubic method is used when at least 40 stars are available, then the Bisquared method is used if 25 to 39 stars are available, then the Bilinear method is used when less than 25 stars are available.</source>
        <translation>Bicubic выравнивание

Метод Bicubic используется, когда доступно меньше 40 звёзд, Bisquared метод используется при количестве найденных звёзд от 25 до 39, Bilinear метод - когда найдено меньше 25 звёзд.</translation>
    </message>
</context>
<context>
    <name>AskRegistering</name>
    <message>
        <location filename="../qt/AskRegistering.ui" line="14"/>
        <source>Unregistered light frame</source>
        <translation>Незарегистрированные кадры изображений</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="37"/>
        <source>This light frame is not registered
(the stars have not been detected).

Do you want...</source>
        <translation>Этот кадр изображения не зарегистрирован
(звёзды не обнаружены).

Вы хотите...</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="66"/>
        <source>to register this light frame</source>
        <translation>зарегистрировать этот кадр изображения</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="73"/>
        <source>to register all the light frames</source>
        <translation>зарегистрировать все кадры изображения</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="80"/>
        <source>to continue without registering the light frame</source>
        <translation>продолжить без регистрации этого кадра</translation>
    </message>
</context>
<context>
    <name>BackgroundOptions</name>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="14"/>
        <source>Background Options</source>
        <translation>Настройки фона</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="20"/>
        <source>Calibration Method</source>
        <translation>Метод калибровки</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="28"/>
        <source>Linear</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="35"/>
        <source>Rational</source>
        <translation>Дробные</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="60"/>
        <source>RGB Background Calibration Method</source>
        <translation>Метод RGB калибровки фона</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="68"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="75"/>
        <source>Minimum</source>
        <translation>Минимальный</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="82"/>
        <source>Middle</source>
        <translation>Средний</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="89"/>
        <source>Maximum</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>BatchStacking</name>
    <message>
        <location filename="../qt/BatchStacking.ui" line="14"/>
        <source>Batch Stacking</source>
        <translation>Серийное сложение</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="20"/>
        <source>This dialog is used to launch the stacking process from existing image lists.

Add the file lists you want to stack and click OK to start the stacking processes.</source>
        <translation>Этот диалог используется для запуска процесса сложения из существующего списка изображений.
Добавьте список файлов, которые хотете сложить и нажмите ОК для начала сложения.</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="34"/>
        <source>Add File Lists...</source>
        <translation>Добавить списки файлов...</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="54"/>
        <source>Clear List</source>
        <translation>Очистить список</translation>
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
        <translation>Регистрация и сложение</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="80"/>
        <source>Open picture files...</source>
        <translation>Открыть кадры изображения...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="90"/>
        <source>dark files...</source>
        <translation>dark файлы...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="103"/>
        <source>flat files...</source>
        <translation>flat файлы...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="113"/>
        <source>dark flat files...</source>
        <translation>dark flat файлы...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="123"/>
        <source>offset/bias files...</source>
        <translation>offset/bias файлы...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="146"/>
        <source>Open a File List...</source>
        <translation>Открыть список файлов...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="153"/>
        <source>Save the FIle List...</source>
        <translation>Сохранить список файлов...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="176"/>
        <source>Clear List</source>
        <translation>Очистить список</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="207"/>
        <source>Check all</source>
        <translation>Выбрать все</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="214"/>
        <source>Check above a threshold...</source>
        <translation>Выбрать значения выше...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="221"/>
        <source>Uncheck all</source>
        <translation>Убрать отметку со всех</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="252"/>
        <source>Register checked pictures...</source>
        <translation>Регистрация выбранных кадров...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="259"/>
        <source>Compute offsets...</source>
        <translation>Подсчёт смещений...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="266"/>
        <source>Stack checked pictures...</source>
        <translation>Сложить выбранные кадры...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="273"/>
        <source>Batch stacking...</source>
        <translation>Серийное сложение...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="286"/>
        <source>Processing</source>
        <translation>Процессинг</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="307"/>
        <source>Open picture file...</source>
        <translation>Открыть изображение...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="314"/>
        <source>Copy current picture to clipboard</source>
        <translation>Скопировать эту картинку в буфер</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="321"/>
        <source>Create a Star Mask...</source>
        <translation>Создать маску звёзд...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="328"/>
        <source>Save picture to file...</source>
        <translation>Сохранить изображение...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="338"/>
        <source>Options</source>
        <translation>Опции</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="359"/>
        <source>Settings...</source>
        <translation>Настройки...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="369"/>
        <source>Raw/FITS DDP Settings...</source>
        <translation>Установки RAW/FITS DDP...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="379"/>
        <source>Load...</source>
        <translation>Загрузка...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="389"/>
        <source>Save...</source>
        <translation>Сохранение...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="399"/>
        <source>Recommended...</source>
        <translation>Рекомендованное...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="406"/>
        <source>About DeepSkyStacker...</source>
        <translation>О DeepSkyStacker...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="413"/>
        <source>DeepSkyStacker&apos;s Help...</source>
        <translation>Помощь DeepSkyStacker...</translation>
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
        <location filename="../qt/main.cpp" line="13"/>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
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
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
