from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="webecon",
    version="17.2.6",
    author="Aditya Divte",
    author_email="contact@adityadivte.com",
    description="Premium Universal Animated Icon Engine for Python Applications.",
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
