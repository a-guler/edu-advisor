const interest_questions = [
  {
    question:
      "İnsanlarla çalışmayı severim ve güçlü sözlü iletişim becerilerim var.",
    question_num: "1.",
  },
  {
    question: "Sanata ilgi ve/veya yeteneğim var.",
    question_num: "2.",
  },
  {
    question: "Grafik ve/veya Web tasarımıyla ilgileniyorum.",
    question_num: "3.",
  },
  {
    question:
      "İnsanlarla çalışmayı seviyorum ve işimde çeşitlilikten hoşlanırım.",
    question_num: "4.",
  },
  {
    question:
      "Güçlü sözlü yeteneğim var ve başka kültürleri ve medeniyetleri dil ve edebiyat aracılığıyla öğrenmekten hoşlanıyorum.",
    question_num: "5.",
  },
  {
    question: "Bilime ilgi duyuyorum ve mantıklı düşünme yeteneğine sahibim.",
    question_num: "6.",
  },
  {
    question: "Veri analizi, karşılaştırma ve yorumlama konusunda iyiyim.",
    question_num: "7.",
  },
  {
    question: "Bilim ve matematikten hoşlanıyorum ve mekanik yeteneğim var.",
    question_num: "8.",
  },
  {
    question:
      "Projelerde çok dikkatli ve özenli bir şekilde, sabırlı ve kararlı bir şekilde çalışabilirim.",
    question_num: "9.",
  },
  {
    question: "Hukuk, tartışma, devlet ve siyasetle ilgileniyorum.",
    question_num: "10.",
  },
  {
    question:
      "Güçlü ahlak değerlerim var ve insanlara yardım etmekten hoşlanıyorum.",
    question_num: "11.",
  },
  {
    question:
      "Analitik ve sistematik bir zihnim var. Ayrıca organizasyon ve sorumlulukları delegede etme konusunda iyiyim.",
    question_num: "12.",
  },
  {
    question:
      "Hastalarla çalışmaktan ilgileniyorum ve güçlü bir sorumluluk duygum ve sağlam bir değerlendirme yeteneğim var.",
    question_num: "13.",
  },
  {
    question:
      "Bilime ilgi duyuyorum, insanlara yardım etmekten hoşlanıyorum ve çok güçlü ahlaki değerlere sahibim.",
    question_num: "14.",
  },
  {
    question:
      "Çok hırslıyım, son derece organize olmuşum ve kendi fikirlerimi bulmayı seviyorum.",
    question_num: "15.",
  },
];

const risk_questions = [
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp: "Hayatım boyunca farklı iş türlerini deneyimlemek istiyorum.",
    statementn: "Kariyerimde daima iş garantisi sağlamak istiyorum.",
    question_num: "16.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp: "Sabit bir maaş yerine sadece komisyonla çalışmaya rahatım.",
    statementn:
      "Belirli koşullar yerine getirildiğinde önceden belirlenmiş bir maaş artışı takvimim olsun istiyorum.",
    question_num: "17.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp:
      "İlgi alanlarımı mükemmel şekilde uyum sağlayan fırsatlar verilse bile, dengesiz bir endüstride bile sözleşmeli olarak çalışmayı tercih ederim.",
    statementn:
      "İlgimi çekmeyen bir işte bile yüksek iş güvenliği sağlayan tam zamanlı bir iş istiyorum.",
    question_num: "18.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp:
      "Esnek zaman, uzaktan çalışma veya aile dostu politikaları içeren bir iş istiyorum.",
    statementn: "Hemen hemen her gün aynı olan bir program istiyorum.",
    question_num: "19.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp:
      "Kariyer başarısı için kişisel yaşamımda fedakarlık yapmaya hazırım (örneğin, arkadaşlar/aile ile daha az zaman geçirmek).",
    statementn:
      "Her gün düzenli saatlerde çalışma şansı istiyorum ve her gün makul bir saatte evde olmak istiyorum.",
    question_num: "20.",
  },
];

const income_desire_questions = [
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp:
      "Başkan, CEO, Departman Başkanı gibi saygın bir unvana sahip bir işte çalışmak benim için önemli.",
    statementn:
      "Kariyerimde insanlara yardım edebileceğim veya dünyayı daha iyi bir yer yapabileceğim konulara odaklanarak seçim yaparım.",
    question_num: "21.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp:
      "Düzenli ve önemli maaş artışları veya diğer finansal ödüller istiyorum.",
    statementn:
      "İnsanlık/iyilik için hiçbir şey yapmayan bir işte çalışmak beni tatmin etmez.",
    question_num: "22.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp: "Maaş kariyer kararlarımda en önemli faktörlerden biridir.",
    statementn: "İşimi keyifle yapmam gerekir ki tatmin olabileyim.",
    question_num: "23.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp:
      "Özel jet erişimi, tatiller veya spor maçlarının sezonluk biletleri gibi lüks ödüller kazanmak istiyorum.",
    statementn:
      "İşim sadece bir gelir kaynağı olmasın - yapacağım işin anlamlı olmasını isterim.",
    question_num: "24.",
  },
  {
    statement: "Seçenekler arasında daha çok hangisiyle hemfikirsiniz:",
    statementp:
      "Şirket kar paylaşımına, hisse opsiyonlarına veya diğer potansiyel mali kazanç fırsatlarına katılmak istiyorum.",
    statementn: "Topluma bir şekilde geri hizmet verme fırsatı istiyorum.",
    question_num: "25.",
  },
];
module.exports = {
  interest_questions: interest_questions,
  risk_questions: risk_questions,
  income_desire_questions: income_desire_questions,
};
