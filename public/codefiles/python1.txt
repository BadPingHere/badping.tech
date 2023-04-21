import time
from pywinauto import application
import pywinauto.keyboard
import pywinauto.mouse
import pywinauto.base_wrapper
import pywinauto.timings
import win32gui, win32con

app = application.Application()
try:    app.start('C:\\Program Files\\KeePassXC\\KeePassXC.exe')
except: # Failed
    a = "KeePassXC failed to open!"
else:  # Success

    time.sleep(1)
    hwnd = win32gui.GetForegroundWindow()
    win32gui.ShowWindow(hwnd, win32con.SW_MAXIMIZE) 
    pywinauto.mouse.click(button='left', coords=(700, 430))
    time.sleep(1)
    pywinauto.keyboard.send_keys("password") # type password ; side note future me you can remove push's with `git reset --hard hash` and `git push --force`
    pywinauto.mouse.click(button='left', coords=(1100, 590))
    
try:    app.start('C:\\Program Files\\Mozilla Firefox\\firefox.exe youtube.com twitter.com')
except: # Failed
    a = "Firefox failed to open!"
else:  # Success
    a = ""

try:    app.start('C:\\Users\\davon\\AppData\\Roaming\\Spotify\\Spotify.exe')
except: # Failed
    a = ""
else:  # Success
    a = ""
    
try:    app.start('C:\\Users\\davon\\AppData\\Local\\Discord\\Update.exe --processStart Discord.exe')
except: # Failed
    a = ""
else:  # Success
    a = ""