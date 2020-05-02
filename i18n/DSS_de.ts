<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de_DE">
<context>
    <name>About</name>
    <message>
        <location filename="../qt/About.ui" line="14"/>
        <source>About DeepSkyStacker</source>
        <translation>Über DeepSkyStacker</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="36"/>
        <source>Language</source>
        <translation>Sprache</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="44"/>
        <source>Use the following language at next startup</source>
        <translation>Beim nächsten Start folgende Sprache übernehmen</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="105"/>
        <source>Check if newer version is available at startup</source>
        <translation>Beim Start überprüfen ob eine neue Version verfügbar ist</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="14"/>
        <source>DeepSkyStacker version %1</source>
        <translation>DeepSkyStacker version %1</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="23"/>
        <source>RAW file decoding by LibRaw (version %1)
Copyright © 1997-2019 LibRaw LLC</source>
        <translation>RAW-Dateien Dekodierung von LibRaw (Version %1)
Copyright © 1997-2019 LibRaw LLC</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="30"/>
        <source>TIFF file encoding/decoding by LibTIFF (version %1)
Copyright © 1988-1996 Sam Leffler
Copyright © 1991-1996 Silicon Graphics, Inc.</source>
        <translation>TIFF Dateien Kodierung/Dekodierung von LibTIFF (Version %1)
Copyright © 1988-1996 Sam Leffler
Copyright © 1991-1996 Silicon Graphics, Inc.</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="37"/>
        <source>FITS decoding by CFitsIO (version %1)
Copyright NASA</source>
        <translation>FITS Dekodierung von CFitsIO (Version %1)
Copyright NASA</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="45"/>
        <source>Default</source>
        <translation>Voreinstellung</translation>
    </message>
</context>
<context>
    <name>AlignmentParameters</name>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="14"/>
        <source>Alignment</source>
        <translation>Ausrichtung</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="26"/>
        <source>Transformation used during alignment</source>
        <translation>Verwendete Methode während der Ausrichtung</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="37"/>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="44"/>
        <source>Bilinear</source>
        <translation>Bilinear</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="51"/>
        <source>Bisquared</source>
        <translation>Bisquared</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="58"/>
        <source>Bicubic</source>
        <translation>Bikubisch</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="65"/>
        <source>No alignment</source>
        <translation>Keine Ausrichtung</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="23"/>
        <source>Automatic

The alignment method is automatically selected depending on the number of available stars.</source>
        <translation>Automatisch

Diese Einstellung wählt automatisch die Ausrichtungsmethode, abhängig von der Anzahl der zur Verfügung stehenden Sternen.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="26"/>
        <source>Bilinear Alignment

The Bilinear Alignment is used in all cases.</source>
        <translation>Bilineare Ausrichtung

Die Bilineare Ausrichtung kann in allen Fällen verwendet werden. Es können weniger als 25 Sterne zur Verfügung stehen.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="29"/>
        <source>Bisquared Alignment

The Bisquared Alignment is used when at least 25 stars are available, else the Bilinear Alignment method is used.</source>
        <translation>Bisquared Ausrichtung

Für die Bisquared Ausrichtungmethode müssen wenigsten 25 Sterne zur Verfügung stehen, sonst bitte die Bilineare Ausrichtung verwenden.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="32"/>
        <source>Bicubic Alignment

The Bicubic method is used when at least 40 stars are available, then the Bisquared method is used if 25 to 39 stars are available, then the Bilinear method is used when less than 25 stars are available.</source>
        <translation>Bikubische Ausrichtung

Für die Bikubische Ausrichtungsmethode müssen mindestens 40 Sterne zur Verfügung stehen. Bei 25 bis 39 Sternen bitte die Bisquared Methode verwenden. Bei noch weniger Sternen ist nur die Bilineare Methode möglich.</translation>
    </message>
</context>
<context>
    <name>AskRegistering</name>
    <message>
        <location filename="../qt/AskRegistering.ui" line="14"/>
        <source>Unregistered light frame</source>
        <translation>Unregistriertes Lightframe</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="37"/>
        <source>This light frame is not registered
(the stars have not been detected).

Do you want...</source>
        <translation>Dieses Lightframe ist noch nicht registriert
(Die Sterne wurden noch nicht erfasst).

Möchten Sie...</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="66"/>
        <source>to register this light frame</source>
        <translation>dieses Lightframe registrieren</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="73"/>
        <source>to register all the light frames</source>
        <translation>alle Lightframes registrieren</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="80"/>
        <source>to continue without registering the light frame</source>
        <translation>fortfahren, ohne Registrierung des Lightframe</translation>
    </message>
</context>
<context>
    <name>BackgroundOptions</name>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="14"/>
        <source>Background Options</source>
        <translation>Hintergrund Optionen</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="20"/>
        <source>Calibration Method</source>
        <translation>Kalibrierungs-Methode</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="28"/>
        <source>Linear</source>
        <translation>Linear</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="35"/>
        <source>Rational</source>
        <translation>Rational</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="60"/>
        <source>RGB Background Calibration Method</source>
        <translation>RGB Hintergrund Kalibrierungs-Methode</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="68"/>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="75"/>
        <source>Minimum</source>
        <translation>Minimum</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="82"/>
        <source>Middle</source>
        <translation>Mittel</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="89"/>
        <source>Maximum</source>
        <translation>Maximum</translation>
    </message>
</context>
<context>
    <name>BatchStacking</name>
    <message>
        <location filename="../qt/BatchStacking.ui" line="14"/>
        <source>Batch Stacking</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="20"/>
        <source>This dialog is used to launch the stacking process from existing image lists.

Add the file lists you want to stack and click OK to start the stacking processes.</source>
        <translation>In diesem Dialog können Sie einen Stacking-Prozess aus bestehenden Bilderlisten starten
Fügen Sie die zu stackenden Bilderlisten im Auswahlfeld hinzu und klicken Sie auf OK um den Prozess zu starten.</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="34"/>
        <source>Add File Lists...</source>
        <translation>Bilderlisten hinzufügen...</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="54"/>
        <source>Clear List</source>
        <translation>Liste Löschen</translation>
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
        <translation>Registrieren und Stacken</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="80"/>
        <source>Open picture files...</source>
        <translation>Lightframes öffnen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="90"/>
        <source>dark files...</source>
        <translation>Darkframes...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="103"/>
        <source>flat files...</source>
        <translation>Flatframes...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="113"/>
        <source>dark flat files...</source>
        <translation>Dark/Flatframes...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="123"/>
        <source>offset/bias files...</source>
        <translation>Offset/Biasframes...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="146"/>
        <source>Open a File List...</source>
        <translation>Dateiliste öffnen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="153"/>
        <source>Save the FIle List...</source>
        <translation>Dateiliste speichern...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="176"/>
        <source>Clear List</source>
        <translation>Liste Löschen</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="207"/>
        <source>Check all</source>
        <translation>Alle auswählen</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="214"/>
        <source>Check above a threshold...</source>
        <translation>Auswahl ab einem Wert...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="221"/>
        <source>Uncheck all</source>
        <translation>Auswahl aufheben</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="252"/>
        <source>Register checked pictures...</source>
        <translation>Ausgewählte Bilder registrieren...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="259"/>
        <source>Compute offsets...</source>
        <translation>Offsets berechnen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="266"/>
        <source>Stack checked pictures...</source>
        <translation>Ausgewählte Bilder stacken...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="273"/>
        <source>Batch stacking...</source>
        <translation>Stapelverarbeitung...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="286"/>
        <source>Processing</source>
        <translation>Bearbeitung</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="307"/>
        <source>Open picture file...</source>
        <translation>Bilddatei öffnen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="314"/>
        <source>Copy current picture to clipboard</source>
        <translation>Bild in die Zwischenablage kopieren</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="321"/>
        <source>Create a Star Mask...</source>
        <translation>Sternmaske erstellen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="328"/>
        <source>Save picture to file...</source>
        <translation>Bild speichern unter...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="338"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="359"/>
        <source>Settings...</source>
        <translation>Einstellungen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="369"/>
        <source>Raw/FITS DDP Settings...</source>
        <translation>Raw/FITS DDP Einstellungen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="379"/>
        <source>Load...</source>
        <translation>Laden...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="389"/>
        <source>Save...</source>
        <translation>Speichern...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="399"/>
        <source>Recommended...</source>
        <translation>Empfehlung...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="406"/>
        <source>About DeepSkyStacker...</source>
        <translation>Über DeepSkyStacker...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="413"/>
        <source>DeepSkyStacker&apos;s Help...</source>
        <translation>DeepSkyStacker&apos;s Hilfe...</translation>
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
        <translation>Abbrechen</translation>
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
        <translation>OK</translation>
    </message>
</context>
</TS>
