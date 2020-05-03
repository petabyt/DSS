cmake_minimum_required(VERSION 3.0.0)
project(libraw VERSION 0.1.2)
set(CMAKE_CXX_STANDARD 11)

add_library(raw SHARED
    internal/dcraw_common.cpp
    internal/dcraw_fileio.cpp
    internal/demosaic_packs.cpp
    src/libraw_c_api.cpp
    src/libraw_cxx.cpp
    src/libraw_datastream.cpp
)

target_include_directories(raw PUBLIC ${PROJECT_SOURCE_DIR})
