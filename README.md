---
license: mit
title: EDU ADVISOR
sdk: docker
emoji: 🚀
colorFrom: green
colorTo: blue
pinned: false
---

Bu uygulama edu advisor uygulaması için aşağıdaki bileşenleri içermektedir.
    1. RAG tabanlı dil modeli
    2. Major Recommender

Bu uygulama kütüphane görevi görmektedir. Uç noktalar ileri dışarıya açılmaktadır. Bu uç noktalara api-key ile erişilerek bu uygulamalara erişilebilir. Bu uygulama [huggingface](https://huggingface.co/spaces/aguler/edu-advisor) üzerine deploy edilmiştir. [Buradan](https://aguler-edu-advisor.hf.space/docs) ise dökümantasyon sayfasına erişilebilir.


## RAG(Retrieval Augmented Generation) tabanlı dil modeli
Türkiyede bulunuan üniversiteler ile ilgili bilgilere çekilerek pinecone üzerinde bir Vector veri tabanı oluşturuldu. Bu veri tabanı üzerinde kullanıcı girdisi aranarak anlamlı veriler ile birlikte arama yapılması sağlandı. Bu sayede modelin Türkiyede bulunan üniversiteler ile ilgili güncel verilere ulaşılması sağlandı. Aynı zamanda modelin kullanıcı için yapılan hangi bölümün ona uygun olduğuna yönelik tahminlere göre tavsiyede bulunması eklendi

![RAG Tasarımı](/Pictures/jumpstart-fm-rag.jpg)
<p>
Aşağıda görselde ise postman üzerinden çalışma örneği gösterilmektedir.
![Postman üzerinden alınmış uygulamanın çalışma örneği.](/Pictures/rag-app-example.png)


## Major Recommender
Bu uygulama hazırlanmış quiz sorularına göre kullanıcı için en uygun bölümleri belirlemektedir. Bu belirleme işlemi için ilgi alanlaarı, ekonomik refah ve çalışma şartları alanları kullanılaraks belirlenir. Ve tüm girdiler Rastgele Orman Modeli kullanılarak kullanıcıya en uygun olan bölümler belirlenir. 
<p>
Aşağıda görselde ise postman üzerinden çalışma örneği gösterilmektedir.
![Postman üzerinden alınmış uygulamanın çalışma örneği.](/Pictures/Major-recommend-example.png)



