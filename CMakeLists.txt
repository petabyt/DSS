cmake_minimum_required(VERSION 3.1.0)

project(DeepSkyStacker)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

# C++ standard we want to use
set(CMAKE_CXX_STANDARD 11)

if(CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif()

find_package(Qt5 COMPONENTS Widgets LinguistTools REQUIRED)

# Set all languages we want to make translations for
# The list will automatically create necessary resource to include the
# translations into final binary
set(TRANSLATIONS "")
set(LANGUAGES ca cs de en es fr it nl pt ro ru tr zh)

# Create temporary resource file and a list of translations to generate
file(WRITE ${CMAKE_BINARY_DIR}/translations.qrc "<!DOCTYPE RCC><RCC version=\"1.0\">\n<qresource prefix=\"i18n\">\n")
foreach(LANG ${LANGUAGES})
    list(APPEND TRANSLATIONS ${CMAKE_SOURCE_DIR}/i18n/DSS_${LANG}.ts "\n")
    file(APPEND ${CMAKE_BINARY_DIR}/translations.qrc "    <file>DSS_${LANG}.qm</file>\n")
endforeach(LANG)
file(APPEND ${CMAKE_BINARY_DIR}/translations.qrc "</qresource>\n</RCC>")

# UI Files are the only ones which will be passed to the Qt Linguist tools
set(UI_FILES
    qt/About.ui
    qt/About.cpp
    qt/AskRegistering.ui
    qt/AskRegistering.cpp
    qt/AlignmentParameters.ui
    qt/AlignmentParameters.cpp
    qt/BackgroundOptions.ui
    qt/BackgroundOptions.cpp
    qt/main.cpp
)

# Update translation files and compile translations to binary form
qt5_create_translation(QM_FILES 
    ${UI_FILES}
    ${TRANSLATIONS}
)

# Build the executable
add_executable(DeepSkyStacker
    ${UI_FILES}
    qt/resources.qrc
    ${CMAKE_BINARY_DIR}/translations.qrc
    ${QM_FILES}
)

target_link_libraries(DeepSkyStacker Qt5::Widgets)
