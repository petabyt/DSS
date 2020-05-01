cmake_minimum_required(VERSION 3.1.0)

project(DeepSkyStacker)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

set(CMAKE_CXX_STANDARD 11)

if(CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif()

find_package(Qt5 COMPONENTS Widgets LinguistTools REQUIRED)

qt5_create_translation(QM_FILES 
    ${CMAKE_SOURCE_DIR}/qt 
    ${CMAKE_SOURCE_DIR}/i18n/DSS_ca.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_cs.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_de.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_en.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_es.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_fr.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_it.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_nl.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_pt.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_ro.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_ru.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_tr.ts
    ${CMAKE_SOURCE_DIR}/i18n/DSS_zh.ts
)

configure_file(qt/translations.qrc ${CMAKE_BINARY_DIR} COPYONLY)

add_executable(DeepSkyStacker
    qt/About.ui
    qt/About.cpp
    qt/AskRegistering.ui
    qt/AskRegistering.cpp
    qt/AlignmentParameters.ui
    qt/AlignmentParameters.cpp
    qt/BackgroundOptions.ui
    qt/BackgroundOptions.cpp
    qt/main.cpp
    qt/resources.qrc
    ${CMAKE_BINARY_DIR}/translations.qrc
    ${QM_FILES}
)

target_link_libraries(DeepSkyStacker Qt5::Widgets)
