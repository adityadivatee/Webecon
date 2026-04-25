/**
 * Webecon PHP SDK - v17.2.1 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

<?php
namespace Webecon;

class Webecon {
    private $name, $size=24, $stroke=2.0, $color="currentColor", $secondaryColor="none", $secondaryOpacity=0.35, $theme="line", $animation="none", $trigger="infinite";

    public function __construct($name) { $this->name = $name; }
    public static function icon($name) { return new self($name); }
    public function size($s) { $this->size = $s; return $this; }
    public function theme($t) { $this->theme = $t; return $this; }
    public function trigger($t) { $this->trigger = $t; return $this; }
    public function build() {
        return "<webecon-icon name='{$this->name}' size='{$this->size}' stroke='{$this->stroke}' color='{$this->color}' secondary-color='{$this->secondaryColor}' secondary-opacity='{$this->secondaryOpacity}' theme='{$this->theme}' animation='{$this->animation}' animation-mode='{$this->trigger}'></webecon-icon>";
    }
}