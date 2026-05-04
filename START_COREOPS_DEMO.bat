@echo off
setlocal
chcp 65001 >nul

title CoreOps Dashboard Demo V005
cd /d "%~dp0"

echo.
echo ===============================================
echo   CoreOps Dashboard Demo V005 starten
echo   CoreEngineStudio · eigenstaendige Mockup-Welt
echo ===============================================
echo.
echo Ordner: %CD%
echo Build : COREOPS-MOCKUP-005
echo.

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  echo Python gefunden. Starte lokalen Demo-Server auf Port 5177...
  echo Browser oeffnet gleich: http://localhost:5177
  start "" "http://localhost:5177"
  python -m http.server 5177
  goto :end
)

where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  echo Python Launcher gefunden. Starte lokalen Demo-Server auf Port 5177...
  echo Browser oeffnet gleich: http://localhost:5177
  start "" "http://localhost:5177"
  py -m http.server 5177
  goto :end
)

echo Kein Python gefunden. Oeffne index.html direkt im Browser...
start "" "%CD%\index.html"

:end
echo.
echo Demo beendet oder Browser wurde direkt geoeffnet.
pause
