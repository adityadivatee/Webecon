/**
 * Webecon Go SDK - v17.2.7 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

package webecon

import "fmt"

type Webecon struct {
    Name             string
    Size             int
    Stroke           float64
    Color            string
    SecondaryColor   string
    SecondaryOpacity float64
    Theme            string
    Animation        string
    Trigger          string
}

func Icon(name string) *Webecon {
    return &Webecon{
        Name:             name,
        Size:             24,
        Stroke:           2.0,
        Color:            "currentColor",
        SecondaryColor:   "none",
        SecondaryOpacity: 0.35,
        Theme:            "line",
        Animation:        "none",
        Trigger:          "infinite",
    }
}

func (w *Webecon) SetSize(s int) *Webecon { w.Size = s; return w }
func (w *Webecon) SetStroke(s float64) *Webecon { w.Stroke = s; return w }
func (w *Webecon) SetColor(c string) *Webecon { w.Color = c; return w }
func (w *Webecon) SetSecondaryColor(c string) *Webecon { w.SecondaryColor = c; return w }
func (w *Webecon) SetSecondaryOpacity(o float64) *Webecon { w.SecondaryOpacity = o; return w }
func (w *Webecon) SetTheme(t string) *Webecon { w.Theme = t; return w }
func (w *Webecon) SetAnimation(a string) *Webecon { w.Animation = a; return w }
func (w *Webecon) SetTrigger(t string) *Webecon { w.Trigger = t; return w }

func (w *Webecon) Build() string {
    return fmt.Sprintf(
        "<webecon-icon name='%s' size='%d' stroke='%.2f' color='%s' secondary-color='%s' secondary-opacity='%.2f' theme='%s' animation='%s' animation-mode='%s'></webecon-icon>",
        w.Name, w.Size, w.Stroke, w.Color, w.SecondaryColor, w.SecondaryOpacity, w.Theme, w.Animation, w.Trigger,
    )
}