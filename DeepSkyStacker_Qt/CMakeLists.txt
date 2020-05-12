if (${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    set(CMAKE_MACOSX_BUNDLE TRUE)
    set(MACOSX_BUNDLE_ICON_FILE DeepSkyStacker.icns)
    set(MACOSX_BUNDLE_SHORT_VERSION_STRING "5.1.0")
    set(MACOSX_BUNDLE_COPYRIGHT "Copyright © 2006-2019 Luc Coiffier
Copyright © 2018-2020 David C. Partridge, Tony Cook, Mat Draper, Simon C. Smith, Vitali Pelenjow, Tomas Tatara, Michal Schulz")
    set(MACOSX_BUNDLE_GUI_IDENTIFIER "fr.free.DeepSkyStacker")
    set(ICON ${CMAKE_CURRENT_SOURCE_DIR}/icon/DeepSkyStacker.icns)
    set_source_files_properties(${ICON} PROPERTIES MACOSX_PACKAGE_LOCATION "Resources")
endif()

# Set all languages we want to make translations for
# The list will automatically create necessary resource to include the
# translations into final binary
set(TRANSLATIONS "")
set(LANGUAGES ca_ES cs_CZ de_DE en_GB es_ES fr_FR it_IT nl_NL pt_BR ro_RO ru_RU tr_TR zh_TW)

# Create resource file and a list of translations to generate
file(WRITE i18n/translations.qrc "<!DOCTYPE RCC><RCC version=\"1.0\">\n<qresource prefix=\"i18n\">\n")
foreach(LANG ${LANGUAGES})
    list(APPEND TRANSLATIONS i18n/DSS.${LANG}.ts)
    file(APPEND i18n/translations.qrc "    <file>DSS.${LANG}.qm</file>\n")
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
    ${ICON}
)

target_include_directories(DeepSkyStacker PRIVATE
    ../DeepSkyStacker/
    ${TIFF_INCLUDE_DIR}
    ${CFITSIO_INCLUDE_DIR}
)
target_link_libraries(DeepSkyStacker Qt5::Widgets)
target_link_libraries(DeepSkyStacker raw ${TIFF_LIBRARIES} ${CFITSIO_LIBRARIES})

# Retrieve the absolute path to qmake and then use that path to find
# the binaries
get_target_property(_qmake_executable Qt5::qmake IMPORTED_LOCATION)
get_filename_component(_qt_bin_dir "${_qmake_executable}" DIRECTORY)
find_program(WINDEPLOYQT_EXECUTABLE windeployqt HINTS "${_qt_bin_dir}")

if (${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    find_program(MACDEPLOYQT_EXECUTABLE macdeployqt HINTS "${_qt_bin_dir}")
    install(CODE "
        execute_process(COMMAND \"${MACDEPLOYQT_EXECUTABLE}\"
            \"${CMAKE_CURRENT_BINARY_DIR}/DeepSkyStacker.app\"
            -always-overwrite)
        execute_process(COMMAND rm -rf \"${CMAKE_CURRENT_BINARY_DIR}/DeepSkyStacker.app/Contents/Frameworks/QtVirtualKeyboard.framework\")
        execute_process(COMMAND rm -rf \"${CMAKE_CURRENT_BINARY_DIR}/DeepSkyStacker.app/Contents/Frameworks/QtQml.framework\")
        execute_process(COMMAND rm -rf \"${CMAKE_CURRENT_BINARY_DIR}/DeepSkyStacker.app/Contents/Frameworks/QtQmlModels.framework\")
        execute_process(COMMAND rm -rf \"${CMAKE_CURRENT_BINARY_DIR}/DeepSkyStacker.app/Contents/Frameworks/QtQuick.framework\")
        execute_process(COMMAND rm -rf \"${CMAKE_CURRENT_BINARY_DIR}/DeepSkyStacker.app/Contents/PlugIns/virtualkeyboard\")
        execute_process(COMMAND rm -rf \"${CMAKE_CURRENT_BINARY_DIR}/DeepSkyStacker.app/Contents/PlugIns/platforminputcontexts/libqtvirtualkeyboardplugin.dylib\")
    " COMPONENT Runtime)
endif()
