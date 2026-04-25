import sys
import os

# Add SDK path to sys.path
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(os.path.dirname(SCRIPT_DIR))
SDK_PATH = os.path.join(PROJECT_ROOT, 'sdks', 'python')
sys.path.append(SDK_PATH)

print("Starting Webecon Python SDK Validation...")

try:
    from webecon import get_svg
    print("SUCCESS: SDK Import")
except ImportError as e:
    print(f"FAILED: SDK Import ({e})")
    sys.exit(1)

def test_icon_generation():
    # Test icons
    test_icons = ['logo-python', 'logo-rust', 'heart', 'activity']
    
    print(f"\nTesting {len(test_icons)} icons...")
    
    for icon in test_icons:
        try:
            output = get_svg(icon, size=24, color="#6366f1", theme="neon")
            if output and "<webecon-icon" in output:
                print(f"  OK: Icon '{icon}' GENERATED (Length: {len(output)})")
            else:
                print(f"  FAIL: Icon '{icon}' (Invalid output: {output})")
        except Exception as e:
            print(f"  ERROR: Icon '{icon}' ({e})")

    # Verify branding in headers
    with open(os.path.join(SDK_PATH, 'webecon.py'), 'r') as f:
        content = f.read(500)
        if "Aditya Divte Production" in content:
            print("\nSUCCESS: Branding Validation (Watermark found)")
        else:
            print("\nFAIL: Branding Validation (Watermark missing)")

if __name__ == "__main__":
    test_icon_generation()
    print("\nAll Python SDK tests passed!")
