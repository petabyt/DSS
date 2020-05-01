cmake_minimum_required(VERSION 3.1.0)

project(DeepSkyStacker)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

if(CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif()

find_package(Qt5 COMPONENTS Widgets REQUIRED)

add_executable(DeepSkyStacker
    qt/AskRegistering.ui
    qt/AskRegistering.cpp
    qt/main.cpp
#    qt/resources.qrc
)

target_link_libraries(DeepSkyStacker Qt5::Widgets)
