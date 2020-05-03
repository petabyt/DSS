cmake_minimum_required(VERSION 3.1.0)

project(DeepSkyStacker)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

# C++ standard we want to use
set(CMAKE_CXX_STANDARD 17)

if(CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif()

find_package(Qt5 COMPONENTS Widgets LinguistTools REQUIRED)

add_subdirectory(LibRaw)
#add_subdirectory(LibTiff)
add_subdirectory(DeepSkyStacker_Qt)
