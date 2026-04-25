from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="webecon",
    version="17.2.7",
    author="Aditya Divte Production",
    author_email="contact@adityadivte.com",
    description="Webecon Developed by Aditya Divte Production. Visit webecon.adityadivte.com to support this package.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://webecon.adityadivte.com",
    project_urls={
        "Bug Tracker": "https://github.com/adityadivatee/Webecon/issues",
        "Source Code": "https://github.com/adityadivatee/Webecon",
    },
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Topic :: Multimedia :: Graphics",
        "Development Status :: 5 - Production/Stable",
    ],
    python_requires=">=3.7",
    install_requires=[],
)
