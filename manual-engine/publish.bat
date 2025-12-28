@echo off
set /p title=Enter Title:
set /p slug=Enter Slug:

copy manual-engine\write-blog.txt hugo-site\content\posts\%slug%.md

git add .
git commit -m "Manual SEO Blog: %title%"
git push

echo BLOG PUBLISHED SUCCESSFULLY
pause
