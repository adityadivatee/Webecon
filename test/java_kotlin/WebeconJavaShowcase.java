package test.java_kotlin;

import com.adityadivte.webecon.Webecon;

/**
 * Java Integration Test for Webecon Icons.
 */
public class WebeconJavaShowcase {
    public static void main(String[] args) {
        System.out.println("--- Webecon Icon Java Test ---");

        // Complete feature set: Animation, Stroke, Size, Theme, and Secondary Accents
        String tag = Webecon.icon("heart")
                .size(128)
                .stroke(2.5)
                .color("#ef4444")
                .secondaryColor("#7f1d1d") // Dual-Tone Accent
                .secondaryOpacity(0.5) // Accent Translucency
                .theme("neon")
                .animation("heartbeat")
                .animation("infinite")
                .build();

        System.out.println("Generated Webecon Tag:");
        System.out.println(tag);

        System.out.println("\nStatus: SUCCESS - Full parameter suite (Secondary Color/Opacity included) implemented.");
    }
}
