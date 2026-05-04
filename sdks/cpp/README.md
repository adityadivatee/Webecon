# Webecon C++ SDK (v17.2.9 PRO)

## 🚀 Installation

Because Webecon is a **header-only** library, it's incredibly easy to integrate into any C++ project!

### Option 1: Direct Include (Simplest)
Copy `webecon.hpp` into your project's source or `include` directory and simply include it:
```cpp
#include "webecon.hpp"
```

### Option 2: CMake (FetchContent / add_subdirectory)
We provide full CMake support.
```cmake
add_subdirectory(path/to/webecon/sdks/cpp)
target_link_libraries(your_target PRIVATE webecon::webecon)
```

### Option 3: Conan Package Manager
You can build and export the package to your local Conan cache:
```bash
conan create . -pr default
```
Then require `webecon/17.2.9` in your `conanfile.txt`.

## 🛠️ Quick Usage
```cpp+
auto tag = webecon::Webecon::icon("zap").size(64).build();
```

## ⚖️ Licensing
- ✅ **Commercial Use Allowed**
- ❌ **Standalone Resale Forbidden**
- ❌ **Branding Removal Forbidden**

Produced by **Aditya Divte Production** (adityadivte.com)