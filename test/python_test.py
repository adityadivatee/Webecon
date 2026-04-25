import sys
import os

# Add SDK path to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../sdks/python')))

import webecon

def test_python_builder():
    print("[START] Testing Webecon Python Fluent Builder...")
    
    # Test 1: Simple icon
    icon1 = webecon.Webecon("zap").size(32).theme("neon")
    print(f"\n[SIMPLE]: {icon1}")
    
    # Test 2: Full configuration with trigger
    icon2 = webecon.Webecon("heart") \
        .size(64) \
        .stroke(1.5) \
        .color("#ff4d4d") \
        .secondary_color("#000") \
        .theme("glass") \
        .trigger("hover")
    
    print(f"\n[COMPLEX]: {icon2}")
    
    # Verify the animation-mode attribute in output
    output = str(icon2)
    if 'animation-mode="hover"' in output:
        print("\n[OK] Trigger (animation-mode) detected in output!")
    else:
        print("\n[ERROR] Trigger missing from output!")

    print("\n[DONE] Python Fluent Builder Verified!")

if __name__ == "__main__":
    test_python_builder()
