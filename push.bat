@echo off
set /p var=Please input the committed changes:
echo Push your changed.
git add . && git commit -m "%var%" && git push
