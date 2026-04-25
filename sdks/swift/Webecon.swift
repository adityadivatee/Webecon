/**
 * Webecon Swift SDK - v17.2.5 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

import SwiftUI

public class Webecon {
    var name, color, secondaryColor, theme, animation, trigger: String
    var size: Int; var stroke, secondaryOpacity: Double

    public init(_ name: String) {
        self.name = name; self.size = 24; self.stroke = 2.0; self.color = "currentColor";
        self.secondaryColor = "none"; self.secondaryOpacity = 0.35; self.theme = "line";
        self.animation = "none"; self.trigger = "infinite"
    }
    public static func icon(_ name: String) -> Webecon { return Webecon(name) }
    public func size(_ s: Int) -> Webecon { self.size = s; return self }
    public func theme(_ t: String) -> Webecon { self.theme = t; return self }
    public func trigger(_ t: String) -> Webecon { self.trigger = t; return self }
    public func build() -> String {
        return "<webecon-icon name='\(name)' size='\(size)' stroke='\(stroke)' color='\(color)' secondary-color='\(secondaryColor)' secondary-opacity='\(secondaryOpacity)' theme='\(theme)' animation='\(animation)' animation-mode='\(trigger)'></webecon-icon>"
    }
}