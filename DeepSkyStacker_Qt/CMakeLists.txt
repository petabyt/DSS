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
    ui/AskRegistering.ui
    ui/AlignmentParameters.ui
    ui/BackgroundOptions.ui
    ui/BatchStacking.ui
    ui/CheckAbove.ui
    ui/DeepStackerDlg.ui
    ui/ExplorerBar.ui
    ui/DropFilesDlg.ui
    ui/FitsFilesTab.ui
    ui/RawFilesTab.ui
    ui/RawDDPSettings.ui
    ui/ResultParameters.ui
    ui/StackSettings.ui
    ui/CometStacking.ui
    ui/PostCalibration.ui
    ui/OutputTab.ui
    ui/IntermediateFiles.ui
    ui/StackingParameters.ui
    About.cpp
    AskRegistering.cpp
    AlignmentParameters.cpp
    BackgroundOptions.cpp
    BatchStacking.cpp
    CheckAbove.cpp
    DeepStackerDlg.cpp
    ExplorerBar.cpp
    DropFilesDlg.cpp
    FitsFilesTab.cpp
    RawFilesTab.cpp
    RawDDPSettings.cpp
    ResultParameters.cpp
    StackSettings.cpp
    CometStacking.cpp
    PostCalibration.cpp
    ClickLabel.cpp
    OutputTab.cpp
    IntermediateFiles.cpp
    StackingParameters.cpp
)

set(CORE_FILES
    DeepSkyStacker.cpp
)

# Update translation files and compile translations to binary form
qt5_add_translation(QM_FILES ${TRANSLATIONS})

# Build the executable
add_executable(DeepSkyStacker
    ${CORE_FILES}
    ${UI_FILES}
    resources.qrc
    ${CMAKE_CURRENT_BINARY_DIR}/translations.qrc
    ${QM_FILES}
)

target_include_directories(DeepSkyStacker PRIVATE ../DeepSkyStacker/)
target_link_libraries(DeepSkyStacker Qt5::Widgets)
