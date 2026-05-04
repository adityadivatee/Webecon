from conan import ConanFile
from conan.tools.files import copy
import os

class WebeconConan(ConanFile):
    name = "webecon"
    version = "17.2.9"
    description = "Webecon SDK for C++ - Universal Icon Engine"
    homepage = "https://webecon.adityadivte.com"
    license = "Proprietary/Commercial"
    author = "Aditya Divte Production"
    topics = ("icons", "svg", "webecon", "header-only")
    package_type = "header-library"
    settings = "os", "arch", "compiler", "build_type"
    no_copy_source = True

    # Use export_sources to package the local files when running `conan create`
    exports_sources = "webecon.hpp", "CMakeLists.txt"

    def package(self):
        copy(self, "webecon.hpp", self.source_folder, os.path.join(self.package_folder, "include"))

    def package_info(self):
        # It's a header-only library, so no libdirs or bindirs
        self.cpp_info.bindirs = []
        self.cpp_info.libdirs = []
