import requests
from bs4 import BeautifulSoup
import time
import csv
import os
from pathlib import Path
from datetime import datetime
import pandas as pd
import glob
import os
import browser_cookie3


cj = browser_cookie3.firefox(domain_name='hypixel.net') #Change based on your main browser. You should be logged into the hypixel site.
number = str(1)
deletefilenumer = str(1)
csvnumber = str(0)
headers = {
    'User-Agent': 'Ping-Hypixel-Scraper v.1.0',
    'From': 'sec@badping.live',
}

def createdir():
    global folder
    now = datetime.now()
    folder = now.strftime("%m-%d/%H-%M")
    path = Path(folder)
    if os.path.isdir(path):
        print('Directory already exists!') 
        quit()
    else:
        path.mkdir(parents=True)

def getmembers():
    global number
    global csvnumber
    global r
    url = 'https://hypixel.net/online/?type=member&page=' + str(number)
    URL = url
    r = requests.get(URL, headers=headers, allow_redirects=False, cookies=cj)
    print(r.status_code)
    print(r.url)
    if r.status_code == 200:
        print('The Page has loaded!')
        tempurl = URL[:-1]
        tempnumber = int(number) + int(1)
        number = tempnumber
        tempnumber = int(csvnumber) + int(1)
        csvnumber = tempnumber
        URL = tempurl + str(number)
        getsoup()
        time.sleep(1) # try and not get a cool ol 429 error
        getmembers()
    if r.status_code == 303:
        print('303 Error, found the end of members list!')
        return
    if r.status_code == 429:
        print('429 Error code! RETREAT!!') # this message is so fucking corny but im keeping it.
        exit()

def getsoup():
    soup = BeautifulSoup(r.content, 'html5lib')
    userinfo=[]
    user_info = soup.find('ol', attrs = {'class':'block-body'}) 
    
    for row in user_info.findAll('li', recursive=False):
        user1 = {}
        global temp1_1
        for row2 in row.find_all('h3',{"class":"contentRow-header"}):
            user1['username'] = row2.text
        for row3 in row.find_all('span',{"class":"userTitle"}):
            user1['status'] = row3.text
        for row4 in row.find_all('ul',{"class":"listInline listInline--bullet"}):
            user1['action'] = row4.li.text
        for row5 in row.find_all('time'):
            ts_epoch = row5.get('data-time')
            user1['time']  = datetime.fromtimestamp(int(ts_epoch)).strftime('%Y-%m-%d %H:%M:%S')
            temp1_1 = row5.text
        if user1['action'] == temp1_1:
            user1['action'] = None
        userinfo.append(user1)
    
    filename = 'users_page' +str(csvnumber)+ '.csv'
    with open(filename, mode='w', newline='', encoding="utf-8") as f:
        w = csv.DictWriter(f,['username','status','action','time'])
        w.writeheader()
        for user1 in userinfo:
            w.writerow(user1)
            
def combine():
    # setting the path for joining multiple files
    files = os.path.join(os.path.dirname(os.path.abspath(__file__)), "users_page*.csv")
    # list of merged files returned
    files = glob.glob(files)
    # joining files with concat and read_csv
    df = pd.concat(map(pd.read_csv, files), ignore_index=True)
    name = os.path.join(folder, 'users.csv')
    df.to_csv( name, index=False )

def deletefiles():
    global deletefilenumer
    filename = 'users_page'+str(deletefilenumer)+'.csv'
    if(os.path.isfile(filename)):
        os.remove(filename)
        tempnumbers = int(deletefilenumer) + int(1)
        deletefilenumer = tempnumbers
        time.sleep(1)
        deletefiles()
    else:
        print("File does not exist. Reached end of the line!")

createdir()
getmembers()
combine()
deletefiles()