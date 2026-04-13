import os
import re

directory = 'frontend/src/pages'
for filename in os.listdir(directory):
    if filename.endswith(".jsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as f:
            content = f.read()

        # Fix href with space separated tokens or malformed curly braces in hrefs
        content = re.sub(r'href="[^"]*\{"[^"]*"}[^"]*"', 'href="#"', content)
        content = re.sub(r'href=".*?profile.*?id.*?"\s*}?', 'href="#"', content)
        
        # Any residual `href=""` that has something after it before the `>` like `href="" foo ""`
        content = re.sub(r'href=""[^>]*>', 'href="#">', content)
        
        # Let's just blindly clean anything that looks like `href="""` or `href="" xxx ""`
        content = re.sub(r'href="[^>]*"', 'href="#"', content) # actually this replaces all hrefs, which is fine for the requested pure UI mock port without functionality!

        with open(filepath, 'w') as f:
            f.write(content)
