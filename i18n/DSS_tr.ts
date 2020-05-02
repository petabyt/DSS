<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="tr_TR">
<context>
    <name>About</name>
    <message>
        <location filename="../qt/About.ui" line="14"/>
        <source>About DeepSkyStacker</source>
        <translation>DerinUzayİstifleyicsi hakkında</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="36"/>
        <source>Language</source>
        <translation>Dil</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="44"/>
        <source>Use the following language at next startup</source>
        <translation>Bir dahaki başlatmada bu dili kullan</translation>
    </message>
    <message>
        <location filename="../qt/About.ui" line="105"/>
        <source>Check if newer version is available at startup</source>
        <translation>Başlangıçta yeni bir sürümün olup olmadığını sorgula</translation>
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
        <translation>RAW files decoding by DCRAW (version %1)
Copyright © 1997-2016 Dave Coffin</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="30"/>
        <source>TIFF file encoding/decoding by LibTIFF (version %1)
Copyright © 1988-1996 Sam Leffler
Copyright © 1991-1996 Silicon Graphics, Inc.</source>
        <translation>TIFF dosyalrın kodlaması LibTIFF (sürüm %1) ile
Telif Hakkı © 1988-1996 Sam Leffler
Telif Hakkı © 1991-1996 Silicon Graphics, Inc.</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="37"/>
        <source>FITS decoding by CFitsIO (version %1)
Copyright NASA</source>
        <translation>FITS kod çözümü CFitsIO (sürümü %1) ile
Telif Hakkı: NASA</translation>
    </message>
    <message>
        <location filename="../qt/About.cpp" line="45"/>
        <source>Default</source>
        <translation>Varsayılan</translation>
    </message>
</context>
<context>
    <name>AlignmentParameters</name>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="14"/>
        <source>Alignment</source>
        <translation>Hizalama</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="26"/>
        <source>Transformation used during alignment</source>
        <translation>Hizalama sırasında kullanılan dönüşüm</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="37"/>
        <source>Automatic</source>
        <translation>Otomatik</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="44"/>
        <source>Bilinear</source>
        <translation>Çift çizgili</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="51"/>
        <source>Bisquared</source>
        <translation>Çift kareli</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="58"/>
        <source>Bicubic</source>
        <translation>Çift küplü</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.ui" line="65"/>
        <source>No alignment</source>
        <translation>Hizalama yok</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="23"/>
        <source>Automatic

The alignment method is automatically selected depending on the number of available stars.</source>
        <translation>Otamatik

Hizalama yöntemi yıldızların sayısına bağlı olarak otamatik olarak seçilir.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="26"/>
        <source>Bilinear Alignment

The Bilinear Alignment is used in all cases.</source>
        <translation>İki Çizgili Hizalama

İki Çizgili Hizalama her koşulda kullanılır.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="29"/>
        <source>Bisquared Alignment

The Bisquared Alignment is used when at least 25 stars are available, else the Bilinear Alignment method is used.</source>
        <translation>İki Kareli Hizalama

İki Kareli Hizalama en az 25 yıldızın olduğu durumda yapılabilir, aksi takdirde İki Çizgili Hizalama yöntemi kullanılır.</translation>
    </message>
    <message>
        <location filename="../qt/AlignmentParameters.cpp" line="32"/>
        <source>Bicubic Alignment

The Bicubic method is used when at least 40 stars are available, then the Bisquared method is used if 25 to 39 stars are available, then the Bilinear method is used when less than 25 stars are available.</source>
        <translation>İki Küplüi Hizalama

İki Küplü Hizalama en az 40 yıldızın olduğu durumda yapılabilir, 25-39 yıldız varsa İki kareli Yöntem, aksi takdirde İki Çizgili Hizalama yöntemi kullanılır.</translation>
    </message>
</context>
<context>
    <name>AskRegistering</name>
    <message>
        <location filename="../qt/AskRegistering.ui" line="14"/>
        <source>Unregistered light frame</source>
        <translation>Hizalanmamış görüntü karesi</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="37"/>
        <source>This light frame is not registered
(the stars have not been detected).

Do you want...</source>
        <translation>Bu görüntü hizalanmamış
(yıldızlar tespit edilemedi). 

Hangisini yapmak istersiniz?</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="66"/>
        <source>to register this light frame</source>
        <translation>bu görüntü karesini hizala</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="73"/>
        <source>to register all the light frames</source>
        <translation>bütün görüntü karelerini hizala</translation>
    </message>
    <message>
        <location filename="../qt/AskRegistering.ui" line="80"/>
        <source>to continue without registering the light frame</source>
        <translation>görüntü karelerini hizalamadan devam et</translation>
    </message>
</context>
<context>
    <name>BackgroundOptions</name>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="14"/>
        <source>Background Options</source>
        <translation>Arkaplan Seçenekleri</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="20"/>
        <source>Calibration Method</source>
        <translation>Kalibrasyon Yöntemi</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="28"/>
        <source>Linear</source>
        <translation>Doğrusal</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="35"/>
        <source>Rational</source>
        <translation>Kesirli</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="60"/>
        <source>RGB Background Calibration Method</source>
        <translation>KYM Arkaplan Kalibrasyon Yöntemi</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="68"/>
        <source>None</source>
        <translation>Yok</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="75"/>
        <source>Minimum</source>
        <translation>Minimum</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="82"/>
        <source>Middle</source>
        <translation>Orta</translation>
    </message>
    <message>
        <location filename="../qt/BackgroundOptions.ui" line="89"/>
        <source>Maximum</source>
        <translation>En yüksek değer</translation>
    </message>
</context>
<context>
    <name>BatchStacking</name>
    <message>
        <location filename="../qt/BatchStacking.ui" line="14"/>
        <source>Batch Stacking</source>
        <translation>Toplu istifleme</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="20"/>
        <source>This dialog is used to launch the stacking process from existing image lists.

Add the file lists you want to stack and click OK to start the stacking processes.</source>
        <translation>Bu diyalog var olan görüntü listesinden istifleme işlemini başlatmak için kullanılır.
İstiflemek istediğin görüntü listesini ekleyin ve istifleme işlemini başlatmak için Tamam&apos;a basın.</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="34"/>
        <source>Add File Lists...</source>
        <translation>Dosya Listesini ekle...</translation>
    </message>
    <message>
        <location filename="../qt/BatchStacking.ui" line="54"/>
        <source>Clear List</source>
        <translation>Listeyi temizle</translation>
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
        <translation>Hizalıyor ve İstifliyor</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="80"/>
        <source>Open picture files...</source>
        <translation>Resim dosyalarını aç...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="90"/>
        <source>dark files...</source>
        <translation>siyah kereler...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="103"/>
        <source>flat files...</source>
        <translation>düz dosyalar...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="113"/>
        <source>dark flat files...</source>
        <translation>siyah düz kareler...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="123"/>
        <source>offset/bias files...</source>
        <translation>ofset dosyalar...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="146"/>
        <source>Open a File List...</source>
        <translation>Bir dosya listesi aç...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="153"/>
        <source>Save the FIle List...</source>
        <translation>Dosya Listesini kaydet...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="176"/>
        <source>Clear List</source>
        <translation>Listeyi temizle</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="207"/>
        <source>Check all</source>
        <translation>Hepsini işaretle</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="214"/>
        <source>Check above a threshold...</source>
        <translation>Eşik değerinin üzerindekileri işaretle...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="221"/>
        <source>Uncheck all</source>
        <translation>İşaretleri kaldır</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="252"/>
        <source>Register checked pictures...</source>
        <translation>Seçilen resimleri hizala...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="259"/>
        <source>Compute offsets...</source>
        <translation>Ofsetleri hesapla...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="266"/>
        <source>Stack checked pictures...</source>
        <translation>İşaretlenen dosyaları istifle...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="273"/>
        <source>Batch stacking...</source>
        <translation>Toplu istifleme...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="286"/>
        <source>Processing</source>
        <translation>İşliyor</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="307"/>
        <source>Open picture file...</source>
        <translation>Görüntü dosyasını aç...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="314"/>
        <source>Copy current picture to clipboard</source>
        <translation>Şu anki resmi panoya kopyala</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="321"/>
        <source>Create a Star Mask...</source>
        <translation>Yıldız maskesi yarat...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="328"/>
        <source>Save picture to file...</source>
        <translation>Görüntüyü dosyaya kaydet...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="338"/>
        <source>Options</source>
        <translation>Seçenekler</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="359"/>
        <source>Settings...</source>
        <translation>Ayarlar...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="369"/>
        <source>Raw/FITS DDP Settings...</source>
        <translation>Ham/FITS DDP ayarları...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="379"/>
        <source>Load...</source>
        <translation>Aç...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="389"/>
        <source>Save...</source>
        <translation>Kaydet...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="399"/>
        <source>Recommended...</source>
        <translation>Önerilen...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="406"/>
        <source>About DeepSkyStacker...</source>
        <translation>DeepSkyStacker hakkında...</translation>
    </message>
    <message>
        <location filename="../qt/ExplorerBar.ui" line="413"/>
        <source>DeepSkyStacker&apos;s Help...</source>
        <translation>DeepSkyStacker&apos;nin yardımı...</translation>
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
        <translation>İptal</translation>
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
        <translation>Tamam</translation>
    </message>
</context>
</TS>
