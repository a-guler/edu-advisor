import requests
from bs4 import BeautifulSoup
import json

Majors = []

def getMajors():
    
    links =  [
        {"l" : 4, "url":"https://www.basarisiralamalari.com/4-yillik-bolumlerin-basari-siralamalari-taban-puanlari-osym/"}, 
        {"l" : 2, "url":"https://www.basarisiralamalari.com/2-yillik-universite-onlisans-bolumleri/"} ]

    for link in links:
        print(f'-------------------------------------------------------{link["l"]}-------------------------------------------------------')
        page = requests.get(link["url"])
        soup = BeautifulSoup(page.content, "html.parser")
        result = soup.find(id = "singleContent")
        result = result.find_all("li")
        
        for major in result:
            m = {}
            t = "UNKNOWN"
            href = "UNKNOWN"
            l = link["l"]
            text = major.text.strip()  
            
            if "SAY" in text:
                t = "SAY"
            elif "SÖZ" in text:
                t = "SÖZ"
            elif "EA" in text:
                t = "EA"     
            elif "DİL" in text:
                t = "DİL"    
            
            name = text.split("Taban Puanları")[0]
            name = name.split("(4 Yıllık)")[0]
            name = name.split("4 Yıllık")[0]
            name = name.split("(2 Yıllık)")[0]
            name = name.split("2 Yıllık")[0]
            name = name.split("2024")[0]
            name = name.strip()
            
            a = major.find("a", href=True)
            if a != None:
                href = a["href"]
            print(href)
            
            m["name"] = name
            m["type"] = t
            m["href"] = href 
            m["l"] = l
            Majors.append(m)
    with open("../Out/Majors.json","w", encoding='utf-8') as jsonfile:
        json.dump(Majors,jsonfile,ensure_ascii=False)
    
def main():
    getMajors()
    
    
    
    
main()        