using System;
using Webecon;

class CSharpTest {
    static void Main() {
        Console.WriteLine("[START] Testing Webecon C# Fluent Builder...");

        // Test 1: Simple icon (Lowercase method matching the new SDK)
        var icon1 = Webecon.Webecon.icon("zap").size(48).theme("neon");
        Console.WriteLine("\n[SIMPLE]: " + icon1.build());

        // Test 2: Full configuration
        var icon2 = Webecon.Webecon.icon("heart")
                           .size(64)
                           .stroke(1.5f)
                           .color("#ff0000")
                           .secondaryColor("#000000")
                           .secondaryOpacity(0.5f)
                           .theme("glass")
                           .animation("pulse")
                           .trigger("click");

        string output = icon2.build();
        Console.WriteLine("\n[COMPLEX]: " + output);

        if (output.Contains("animation-mode='click'")) {
            Console.WriteLine("\n[OK] Trigger (animation-mode) detected in output!");
        } else {
            Console.WriteLine("\n[ERROR] Trigger missing from output!");
        }

        Console.WriteLine("\n[DONE] C# Fluent Builder Verified!");
    }
}
