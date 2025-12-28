@echo off
cd /d %~dp0

node image-fetch.js "%1"
node auto-brain.js "%1"

cd ../hugo-site
hugo

echo ======================
echo BLOG PUBLISHED SUCCESSFULLY
echo ======================
pause
