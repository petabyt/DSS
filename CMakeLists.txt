cmake_minimum_required(VERSION 3.1.0)

project(DeepSkyStacker)

# Some notes:
# sudo apt install qttools5-dev libtiff5-dev qt5-default qtbase5-dev-tools
# DSS/DeepSkyStacker_Qt/ClickLabel.cpp:1:10
# QFont.h -> qfont.h

set(CFITSIO_INCLUDE_DIR cfitsio/)
set(CFITSIO_LIBRARIES cfitsio/)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

# C++ standard we want to use
set(CMAKE_CXX_STANDARD 17)

if(CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif()

list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_LIST_DIR}/CMakeModules")

find_package(TIFF 4.1.0 EXACT REQUIRED)
find_package(CFITSIO 3.47 EXACT REQUIRED)
find_package(Qt5 COMPONENTS Widgets LinguistTools REQUIRED)

add_subdirectory(LibRaw)
add_subdirectory(DeepSkyStacker_Qt)
