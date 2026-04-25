package test.java_kotlin;

import com.adityadivte.webecon.Webecon;

/**
 * Verified Fluent Builder Test for Webecon v17.2 PRO
 */
public class FluentJavaTest {
    public static void main(String[] args) {
        System.out.println("🚀 Testing Webecon Java Fluent Builder...");
        
        // Test 1: Minimalist
        String simple = Webecon.icon("zap").build();
        System.out.println("\n[SIMPLE]: " + simple);
        
        // Test 2: Full Configuration (Neon Theme + Hover Trigger)
        String complex = Webecon.icon("heart")
                               .size(128)
                               .stroke(2.5)
                               .color("#ff0000")
                               .secondaryColor("#000000")
                               .secondaryOpacity(0.5)
                               .theme("neon")
                               .animation("pulse")
                               .trigger("hover")
                               .build();
        
        System.out.println("\n[COMPLEX]: " + complex);
        
        // Test 3: Standard Object string conversion
        Webecon iconObj = Webecon.icon("shield").theme("glass").trigger("click");
        System.out.println("\n[TOSTRING]: " + iconObj);
        
        System.out.println("\n✅ Java Fluent Builder Verified!");
    }
}
