import requests
from bs4 import BeautifulSoup
import json
from multiprocessing import Pool, freeze_support
import urllib.request 

Majors = []
all_unis = [] 

def getMajors():
    
    links =  [
        {"l" : 4, "url":"https://www.basarisiralamalari.com/4-yillik-bolumlerin-basari-siralamalari-taban-puanlari-osym/"}, 
        {"l" : 2, "url":"https://www.basarisiralamalari.com/2-yillik-universite-onlisans-bolumleri/"} ]

    for link in links:
        print(f'-------------------------------------------------------{link["l"]}-------------------------------------------------------')
        page = requests.get(link["url"])
        soup = BeautifulSoup(page.content, "html5lib")
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
    with open("Out/Majors.json","w", encoding='utf-8') as jsonfile:
        json.dump(Majors,jsonfile,ensure_ascii=False)
    
def getMajUni():
    URLs = []
    results = []
    with open("Out/Majors.json", encoding='utf-8') as f:
        majors = json.load(f)
    
        for major in majors:
            url = major["href"]
            if url == "UNKNOWN":
                continue
            URLs.append(major)
        
    with Pool(10) as pool:
        for result in pool.map(readTable, URLs):
            if result != None:
                results.append(result)
            
    # for result in results:
    #     print(result[0]["name"])    
        
            
    with open("Out/allUnisMajors.json","w", encoding='utf-8') as jsonfile:
        json.dump(results,jsonfile,ensure_ascii=False)
    
    
    
    
    
    

def readTable(url):
    print(url)
    results = {"name":url["name"], "type":url["type"], "l":url["l"], "unis":[]} 

    page = requests.get(url["href"])
    soup = BeautifulSoup(page.content, "html5lib")
    table = soup.find("tbody",id = "basariaratable")
    if(table == None):
        return
    rows = table.find_all("tr")


    flag = False
    for row in rows:

        result = {}
        if flag == False:
            flag = True
            continue
        cols = row.find_all("td")
        print(f'cols: {cols[0].text}')
        name = cols[0].text.strip().split("\n")
        
        # print(f'name:{name}')
        
        uni = "UNKNOWN"
        department = "UNKNOWN"
        loc = "UNKNOWN"
        if(1 < len(name)): uni = name[0].strip()
        if(2 < len(name)): department = name[1].strip()
        if(3 < len(name)): loc = name[2].strip()
        # print(f'{uni} - {department} - {loc}')
        result["name"] = {"uni":uni, "department":department, "loc":loc}
        
        
        
        
        
        major = cols[1].text.strip().split("\n")
        lang = "TURKÇE" 
        if len(major) > 1:
            lang = major[1].strip()
        major = major[0].strip()
        
        # print(f'{major} - {lang}')  
        result["major"] = {"name":major, "lang":lang}
        
        t = cols[2].text.strip()
        
        _2023 = "UNKOWN"
        _2022 = "UNKOWN"
        _2021 = "UNKOWN"
        _2020 = "UNKOWN"
        
        
        cont = cols[3].text.strip().split("\n")
        # print(f'cont: {cont}')
        _2023 = cont[0].strip()
        if(1 < len(cont)): _2022 = cont[1].strip()
        if(2 < len(cont)): _2021 = cont[2].strip()
        if(3 < len(cont)): _2020 = cont[3].strip()
        result["cont"] = {"2023":_2023, "2022":_2022, "2021":_2021, "2020":_2020}
        
        
        
        enrolled_2023 = "UNKNOWN"
        enrolled_2022 = "UNKNOWN"
        enrolled_2021 = "UNKNOWN"
        enrolled_2020 = "UNKNOWN" 
        
        enrolled = cols[4].text.strip().split("\n")
        enrolled_2023 = enrolled[0].strip()
        if(1 < len(enrolled)):enrolled_2022 = enrolled[1].strip()
        if(2 < len(enrolled)):enrolled_2021 = enrolled[2].strip()
        if(3 < len(enrolled)): enrolled_2020 = enrolled[3].strip()
        result["enrolled"] = {"2023":enrolled_2023, "2022":enrolled_2022, "2021":enrolled_2021, "2020":enrolled_2020}
        
        # print(f'{enrolled_2023} - {enrolled_2022} - {enrolled_2021} - {enrolled_2020}')
        
        # print(f'{uni} - {department} - {loc} - {major} - {lang} - {_2023} - {_2022} - {_2021} - {_2020}')  
        
        rank_2023 = "UNKOWN"
        rank_2022 = "UNKOWN"
        rank_2021 = "UNKOWN"
        rank_2020 = "UNKOWN"
        
        rank = cols[5].text.strip().split("\n")
        rank_2023 = rank[0].strip()
        if(1 < len(rank)):rank_2022 = rank[1].strip()
        if(2 < len(rank)):rank_2021 = rank[2].strip()
        if(3 < len(rank)):rank_2020 = rank[3].strip()
        result["rank"] = {"2023":rank_2023, "2022":rank_2022, "2021":rank_2021, "2020":rank_2020}   
        
        # print(f'{rank_2023} - {rank_2022} - {rank_2021} - {rank_2020}')
        
        p_2023 = "UNKOWN"
        p_2022 = "UNKOWN"
        p_2021 = "UNKOWN"
        p_2020 = "UNKOWN"
        
        p = cols[6].text.strip().split("\n")
        p_2023 = p[0].strip()
        if(1 < len(p)):p_2022 = p[1].strip()
        if(2 < len(p)):p_2021 = p[2].strip()
        if(3 < len(p)):p_2020 = p[3].strip()
        result["point"] = {"2023":p_2023, "2022":p_2022, "2021":p_2021, "2020":p_2020}
        
        # print(f'{p_2023} - {p_2022} - {p_2021} - {p_2020}')
        # print(result)
        results["unis"].append(result)
    return results  


def check():
    finalJson = []
    found = 0
    nonfound = 0
    with open("Out/Majors.json",encoding='utf-8') as f1:
        majors = json.load(f1)
        with open("Out/allUnisMajors.json",encoding='utf-8') as f2:
            allUnis = json.load(f2)
            with open("Datas/Tum Universite Iletisim Bilgileri.csv",encoding='utf-8') as f3:
                yokUnis = json.load(f3)

            
                for majorlist in allUnis:
                    for uni in majorlist["unis"]:
                        print(uni)
                        isFound = False
                        for yokUni in yokUnis:
                            if(uni["name"]["uni"] == yokUni[0]):
                                found+=1
                                isFound = True
                                break
                        if isFound == False:
                            nonfound+=1

    print(f'found: {found} nonfound: {nonfound}')                    


if __name__=="__main__":
    # freeze_support()
    # getMajors()
    # getMajUni()
    check()
    
    
    