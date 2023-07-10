from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in jfs_asset_customization/__init__.py
from jfs_asset_customization import __version__ as version

setup(
	name="jfs_asset_customization",
	version=version,
	description="jfs asset customizations",
	author="guruprasad",
	author_email="guru@nomial.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
