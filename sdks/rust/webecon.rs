/**
 * Webecon Rust SDK - v17.2.6 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

pub struct Webecon {
    pub name: String, pub size: u32, pub stroke: f32, pub color: String,
    pub secondary_color: String, pub secondary_opacity: f32, pub theme: String,
    pub animation: String, pub trigger: String,
}

impl Webecon {
    pub fn icon(name: &str) -> Self {
        Self {
            name: name.to_string(), size: 24, stroke: 2.0, color: "currentColor".to_string(),
            secondary_color: "none".to_string(), secondary_opacity: 0.35, theme: "line".to_string(),
            animation: "none".to_string(), trigger: "infinite".to_string(),
        }
    }
    pub fn size(mut self, s: u32) -> Self { self.size = s; self }
    pub fn stroke(mut self, s: f32) -> Self { self.stroke = s; self }
    pub fn color(mut self, c: &str) -> Self { self.color = c.to_string(); self }
    pub fn theme(mut self, t: &str) -> Self { self.theme = t.to_string(); self }
    pub fn trigger(mut self, t: &str) -> Self { self.trigger = t.to_string(); self }
    pub fn build(&self) -> String {
        format!("<webecon-icon name='{}' size='{}' stroke='{:.2}' color='{}' secondary-color='{}' secondary-opacity='{:.2}' theme='{}' animation='{}' animation-mode='{}'></webecon-icon>", self.name, self.size, self.stroke, self.color, self.secondary_color, self.secondary_opacity, self.theme, self.animation, self.trigger)
    }
}