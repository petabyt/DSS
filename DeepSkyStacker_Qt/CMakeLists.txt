# Set all languages we want to make translations for
# The list will automatically create necessary resource to include the
# translations into final binary
set(TRANSLATIONS "")
set(LANGUAGES ca cs de en es fr it nl pt ro ru tr zh)

# Create resource file and a list of translations to generate
file(WRITE i18n/translations.qrc "<!DOCTYPE RCC><RCC version=\"1.0\">\n<qresource prefix=\"i18n\">\n")
foreach(LANG ${LANGUAGES})
    list(APPEND TRANSLATIONS i18n/DSS_${LANG}.ts)
    file(APPEND i18n/translations.qrc "    <file>DSS_${LANG}.qm</file>\n")
endforeach(LANG)
file(APPEND i18n/translations.qrc "</qresource>\n</RCC>")

# Copy resource file to target location
configure_file(i18n/translations.qrc translations.qrc COPYONLY)

# UI Files are the only ones which will be passed to the Qt Linguist tools
set(UI_FILES
    ui/About.ui
    About.cpp
    ui/AskRegistering.ui
    AskRegistering.cpp
    ui/AlignmentParameters.ui
    AlignmentParameters.cpp
    ui/BackgroundOptions.ui
    BackgroundOptions.cpp
    ui/BatchStacking.ui
    BatchStacking.cpp
    ui/CheckAbove.ui
    CheckAbove.cpp
    ui/DeepStackerDlg.ui
    DeepStackerDlg.cpp
    ui/ExplorerBar.ui
    ExplorerBar.cpp
    ui/DropFilesDlg.ui
    DropFilesDlg.cpp
    ui/FitsFilesTab.ui
    FitsFilesTab.cpp
    ui/RawFilesTab.ui
    RawFilesTab.cpp
    ui/RawDDPSettings.ui
    RawDDPSettings.cpp
    ui/ResultParameters.ui
    ResultParameters.cpp
    ui/StackSettings.ui
    StackSettings.cpp
    ui/CometStacking.ui
    CometStacking.cpp
    ui/PostCalibration.ui
    PostCalibration.cpp
    ClickLabel.cpp
    main.cpp
)

message(${TRANSLATIONS})

# Update translation files and compile translations to binary form
qt5_create_translation(QM_FILES 
    ${UI_FILES}
    ${TRANSLATIONS}
)

# Build the executable
add_executable(DeepSkyStacker
    ${UI_FILES}
    resources.qrc
    ${CMAKE_CURRENT_BINARY_DIR}/translations.qrc
    ${QM_FILES}
)

target_link_libraries(DeepSkyStacker Qt5::Widgets)
