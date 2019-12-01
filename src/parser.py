from bs4 import BeautifulSoup
import urllib.request
import requests

url = input("Enter the URL to extract: ")
page = requests.get(url)
contents = page.text
soup = BeautifulSoup(contents, 'html.parser')
title = soup.find("h2","wprm-recipe-name wprm-block-text-bold").string
print(title)
ingredients = soup.find_all("li","wprm-recipe-ingredient")
for x in ingredients:
    amount = x.find("span","wprm-recipe-ingredient-amount")
    unit = x.find("span","wprm-recipe-ingredient-unit")
    name = x.find("span","wprm-recipe-ingredient-name").string
    if amount:
        amount = amount.string
        print(amount,end = ' ')
    if unit:
        unit = unit.string
        print(unit,end = ' ')
    print(name)
print()

    