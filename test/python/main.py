import sys
import os

# Add SDK path to sys.path relative to this script
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SDK_PATH = os.path.join(SCRIPT_DIR, '..', '..', 'sdks', 'python')
sys.path.append(SDK_PATH)

try:
    from webecon import Webecon
except ImportError:
    print(f"Error: Webecon SDK not found in {SDK_PATH}")
    sys.exit(1)

import tkinter as tk
from tkinter import messagebox
import webbrowser

def run_gui():
    engine = Webecon()
    
    root = tk.Tk()
    root.title("Webecon Icon Studio - Python Native")
    root.geometry("400x500")
    root.configure(bg="#0f172a")

    tk.Label(root, text="WEBECON ICON ENGINE", font=("Arial", 16, "bold"), fg="#6366f1", bg="#0f172a").pack(pady=20)


    # Icon Selector
    tk.Label(root, text="Icon Name:", fg="white", bg="#0f172a").pack()
    icon_entry = tk.Entry(root)
    icon_entry.insert(0, "heart")
    icon_entry.pack(pady=5)

    # Color Selector
    tk.Label(root, text="Primary Color:", fg="white", bg="#0f172a").pack()
    color_entry = tk.Entry(root)
    color_entry.insert(0, "#f43f5e")
    color_entry.pack(pady=5)

    # Theme Selector
    tk.Label(root, text="Theme:", fg="white", bg="#0f172a").pack()
    theme_var = tk.StringVar(root)
    theme_var.set("neon")
    theme_opt = tk.OptionMenu(root, theme_var, "line", "duo", "glass", "neon", "3d")
    theme_opt.pack(pady=5)

    def preview_icon():
        name = icon_entry.get()
        color = color_entry.get()
        theme = theme_var.get()
        
        # Calculate absolute paths
        base_dir = os.path.dirname(os.path.dirname(SCRIPT_DIR)) # Project root
        script_path = os.path.join(base_dir, 'dist', 'webicons.js').replace('\\', '/')
        preview_path = os.path.join(SCRIPT_DIR, 'preview.html')
        
        # Generate the Web Component SVG wrapper
        svg_html = engine.get_svg(name, size=200, color=color, theme=theme, animation="pulse")
        
        # Create a temporary preview file
        with open(preview_path, "w") as f:
            f.write(f"""
            <html>
            <body style="background:#0f172a; display:flex; align-items:center; justify-content:center; height:100vh;">
                <script src="file:///{script_path}"></script>
                {svg_html}
            </body>
            </html>
            """)
        
        webbrowser.open(f"file:///{preview_path}")

    tk.Button(root, text="PRO PREVIEW", command=preview_icon, bg="#6366f1", fg="white", font=("Arial", 10, "bold"), padx=20, pady=10).pack(pady=30)

    root.mainloop()

if __name__ == "__main__":
    run_gui()
