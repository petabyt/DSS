# Search for CFITSIO headers and library
# This file is heavily inspired on BSD-licensed work of 
# Jasem Mutlaq:
# Copyright (c) 2006, Jasem Mutlaq <mutlaqja@ikarustech.com>
# Based on FindLibfacile by Carsten Niehaus, <cniehaus@gmx.de>

if(NOT CFITSIO_FOUND)

    find_path(CFITSIO_INCLUDE_DIR fitsio.h
        HINTS ${CFITSIO_ROOT_DIR} ${CMAKE_INSTALL_PREFIX}
        PATH_SUFFIXES include cfitsio include/cfitsio
    )

    find_library(CFITSIO_LIBRARIES NAMES cfitsio
        HINTS ${CFITSIO_ROOT_DIR} ${CMAKE_INSTALL_PREFIX}
        PATH_SUFFIXES lib
    )

    if(CFITSIO_INCLUDE_DIR AND CFITSIO_LIBRARIES)
        set(CFITSIO_FOUND TRUE)
    else()
        set(CFITSIO_FOUND FALSE)
    endif()

    if(CFITSIO_FOUND)
        # Find the version of the cfitsio header
        FILE(READ "${CFITSIO_INCLUDE_DIR}/fitsio.h" FITSIO_H)
        STRING(REGEX REPLACE ".*#define CFITSIO_VERSION[^0-9]*([0-9]+)\\.([0-9]+).*" "\\1.\\2" CFITSIO_VERSION_STRING "${FITSIO_H}")
        STRING(REGEX REPLACE "^([0-9]+)[.]([0-9]+)" "\\1" CFITSIO_VERSION_MAJOR ${CFITSIO_VERSION_STRING})
        STRING(REGEX REPLACE "^([0-9]+)[.]([0-9]+)" "\\2" CFITSIO_VERSION_MINOR ${CFITSIO_VERSION_STRING})
        set (CFITSIO_VERSION "${CFITSIO_VERSION_MAJOR}.${CFITSIO_VERSION_MINOR}")

        if(NOT CFITSIO_FIND_QUIETLY)
            message(STATUS "Found CFITSIO ${CFITSIO_VERSION}")
            message(STATUS "  headers: ${CFITSIO_INCLUDE_DIR}")
            message(STATUS "  lib:     ${CFITSIO_LIBRARIES}")
        endif(NOT CFITSIO_FIND_QUIETLY)

        if(CFITSIO_FIND_VERSION)
            if(CFITSIO_FIND_VERSION VERSION_LESS_EQUAL CFITSIO_VERSION)
                if(CFITSIO_FIND_VERSION VERSION_EQUAL CFITSIO_VERSION)
                    message(STATUS "This is exactly the version of CFITSIO we require")
                else(CFITSIO_FIND_VERSION VERSION_EQUAL CFITSIO_VERSION)
                    message(WARNING "This is not the same version of CFITSIO we require (${CFITSIO_FIND_VERSION}), but might be compatible. Be warned!")
                endif(CFITSIO_FIND_VERSION VERSION_EQUAL CFITSIO_VERSION)
            else(CFITSIO_FIND_VERSION VERSION_LESS_EQUAL CFITSIO_VERSION)
                message(FATAL_ERROR "This version of CFITSIO is too old! Consider upgrade to ${CFITSIO_FIND_VERSION}.")
            endif(CFITSIO_FIND_VERSION VERSION_LESS_EQUAL CFITSIO_VERSION)
        endif (CFITSIO_FIND_VERSION)
    else(CFITSIO_FOUND)
        if (CFITSIO_FIND_REQUIRED)
            message(STATUS "CFITSIO not found.")
        endif (CFITSIO_FIND_REQUIRED)
    endif (CFITSIO_FOUND)

    mark_as_advanced(CFITSIO_INCLUDE_DIR CFITSIO_LIBRARIES)

endif()

