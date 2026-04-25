/**
 * Webecon Kotlin SDK - v17.2.5 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

package com.adityadivte.webecon

class Webecon(val name: String) {
    var size: Int = 24; var stroke: Double = 2.0; var color: String = "currentColor"
    var secondaryColor: String = "none"; var secondaryOpacity: Double = 0.35; var theme: String = "line"
    var animation: String = "none"; var trigger: String = "infinite"

    companion object {
        fun icon(name: String) = Webecon(name)
    }
    fun size(s: Int) = apply { size = s }
    fun theme(t: String) = apply { theme = t }
    fun trigger(t: String) = apply { trigger = t }
    fun build() = "<webecon-icon name='$name' size='$size' stroke='$stroke' color='$color' secondary-color='$secondaryColor' secondary-opacity='$secondaryOpacity' theme='$theme' animation='$animation' animation-mode='$trigger'></webecon-icon>"
}