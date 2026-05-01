/**
 * Webecon C++ SDK - v17.2.6 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

#include <string>
#include <sstream>

namespace webecon {
    class Webecon {
    private:
        std::string _name, _color, _secondaryColor, _theme, _animation, _trigger;
        int _size; float _stroke, _secondaryOpacity;
    public:
        Webecon(std::string name) : _name(name), _size(24), _stroke(2.0f), _color("currentColor"), _secondaryColor("none"), _secondaryOpacity(0.35f), _theme("line"), _animation("none"), _trigger("infinite") {}
        static Webecon icon(std::string name) { return Webecon(name); }
        Webecon& size(int s) { _size = s; return *this; }
        Webecon& color(std::string c) { _color = c; return *this; }
        Webecon& theme(std::string t) { _theme = t; return *this; }
        Webecon& trigger(std::string t) { _trigger = t; return *this; }
        std::string build() {
            std::ostringstream oss;
            oss << "<webecon-icon name='" << _name << "' size='" << _size << "' stroke='" << _stroke << "' color='" << _color << "' secondary-color='" << _secondaryColor << "' secondary-opacity='" << _secondaryOpacity << "' theme='" << _theme << "' animation='" << _animation << "' animation-mode='" << _trigger << "'></webecon-icon>";
            return oss.str();
        }
    };
}