cmake_minimum_required(VERSION 3.14)
project(webecon VERSION 17.2.9 LANGUAGES CXX)

add_library(webecon INTERFACE)
add_library(webecon::webecon ALIAS webecon)

target_include_directories(webecon INTERFACE
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}>
    $<INSTALL_INTERFACE:include>
)

include(GNUInstallDirs)

# Install rules for system-wide installation or packaging
install(TARGETS webecon EXPORT webecon-config)
install(FILES webecon.hpp DESTINATION ${CMAKE_INSTALL_INCLUDEDIR})
install(EXPORT webecon-config
    NAMESPACE webecon::
    DESTINATION ${CMAKE_INSTALL_DATADIR}/webecon/cmake
)
