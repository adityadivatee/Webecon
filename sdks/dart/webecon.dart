/**
 * Webecon Dart SDK - v17.2.1 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

class Webecon {
  String name, color, secondaryColor, theme, animation, trigger;
  int size; double stroke, secondaryOpacity;

  Webecon(this.name) : size=24, stroke=2.0, color='currentColor', secondaryColor='none', secondaryOpacity=0.35, theme='line', animation='none', trigger='infinite';
  static Webecon icon(String name) => Webecon(name);

  Webecon setSize(int s) { size = s; return this; }
  Webecon setTheme(String t) { theme = t; return this; }
  Webecon setTrigger(String t) { trigger = t; return this; }

  String build() => "<webecon-icon name='$name' size='$size' stroke='$stroke' color='$color' secondary-color='$secondaryColor' secondary-opacity='$secondaryOpacity' theme='$theme' animation='$animation' animation-mode='$trigger'></webecon-icon>";
}