import time
import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options=chrome_options)

"""
요일별 페이지
- 요일별 웹툰 링크 가져오기

상세 페이지
- 작가와 설명, 연재 일자, 태그 가져오기
- 목록과 링크 가져오기
"""

# date = datetime.datetime.now()
days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
url = f'https://comic.naver.com/webtoon?tab={days[0]}'
driver.get(url)

time.sleep(2)

links = driver.find_elements(By.CLASS_NAME, 'Poster__link--sopnC')
