import os
import re

html_files = []
for root, dirs, files in os.walk('workshop_booking'):
    if '.venv' in root or 'venv' in root:
        continue
    for file in files:
        if file.endswith('.html') and file != 'base.html' and file != 'cms_base.html':
            html_files.append(os.path.join(root, file))

os.makedirs('frontend/src/pages', exist_ok=True)

import_statements = "import { Link } from 'react-router-dom';\n\n"

for html_file in html_files:
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # extract content inside {% block content %} ... {% endblock %}
    match = re.search(r'{% block content %}(.*?){% endblock %}', content, re.DOTALL)
    if not match:
        continue
    
    html_content = match.group(1)

    # Convert HTML to JSX
    jsx_content = html_content
    jsx_content = re.sub(r'class=', 'className=', jsx_content)
    jsx_content = re.sub(r'for=', 'htmlFor=', jsx_content)
    jsx_content = re.sub(r'colspan=', 'colSpan=', jsx_content)
    jsx_content = re.sub(r'rowspan=', 'rowSpan=', jsx_content)
    
    # Close unclosed tags
    jsx_content = re.sub(r'<input([^>]*[^/])>', r'<input\1 />', jsx_content)
    jsx_content = re.sub(r'<br([^>]*[^/])?>', r'<br\1 />', jsx_content)
    jsx_content = re.sub(r'<hr([^>]*[^/])?>', r'<hr\1 />', jsx_content)
    jsx_content = re.sub(r'<img([^>]*[^/])>', r'<img\1 />', jsx_content)
    jsx_content = re.sub(r'<meta([^>]*[^/])>', r'<meta\1 />', jsx_content)
    jsx_content = re.sub(r'<link([^>]*[^/])>', r'<link\1 />', jsx_content)

    # Clean Django tags
    jsx_content = re.sub(r'{%\s*csrf_token\s*%}', '', jsx_content)
    jsx_content = re.sub(r'{%\s*(if|for|empty|elif|else).*?%}', '', jsx_content)
    jsx_content = re.sub(r'{%\s*(endif|endfor).*?%}', '', jsx_content)
    jsx_content = re.sub(r'{%\s*url\s+[^%]*%}', '#', jsx_content)
    jsx_content = re.sub(r'{{\s*(.*?)\s*}}', r'{" \1 "}', jsx_content)
    
    # Wrap in function
    basename = os.path.basename(html_file).replace('.html', '')
    component_name = ''.join([w.capitalize() for w in basename.split('_')])
    
    output = f"export default function {component_name}() {{\n"
    output += "  return (\n    <>{\n     /*" + html_file + "*/\n    }\n"
    output += f"      <div className='{basename}-container'>\n"
    output += f"{jsx_content}\n"
    output += "      </div>\n"
    output += "    </>\n  );\n}\n"
    
    with open(f"frontend/src/pages/{component_name}.jsx", "w", encoding='utf-8') as f:
        f.write(output)

print("Generated pages!")
