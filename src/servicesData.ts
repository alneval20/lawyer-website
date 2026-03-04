export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  scope: string[];
  process: string[];
  faqs: FAQ[];
  image: string;
}

export const servicesData: ServiceDetailData[] = [
  {
    id: "ceza",
    slug: "izmir-ceza-avukati",
    title: "İzmir Ceza Avukatı",
    seoTitle: "İzmir Ceza Avukatı - Ağır Ceza ve Asliye Ceza Davaları",
    metaDescription: "İzmir ceza avukatı olarak ağır ceza, asliye ceza ve soruşturma aşamalarında profesyonel hukuki destek sağlıyoruz. Haklarınızı korumak için yanınızdayız.",
    intro: "Ceza hukuku süreçleri, bireylerin özgürlükleri ve hakları üzerinde doğrudan etkisi olan en hassas hukuk alanlarından biridir. İzmir ceza avukatı olarak, soruşturma aşamasından kovuşturma aşamasına kadar müvekkillerimizin haklarını en üst düzeyde savunuyoruz.",
    scope: [
      "Ağır Ceza Mahkemesi Davaları",
      "Asliye Ceza Mahkemesi Davaları",
      "Soruşturma ve İfade Süreçleri",
      "Tutukluluğa İtiraz ve Adli Kontrol Süreçleri",
      "İstinaf ve Yargıtay Başvuruları"
    ],
    process: [
      "Dosya incelemesi ve hukuki durum analizi",
      "Savunma stratejisinin belirlenmesi",
      "Delillerin toplanması ve sunulması",
      "Duruşma temsili ve hukuki takip"
    ],
    faqs: [
      {
        question: "Ceza davasında avukat tutmak zorunlu mu?",
        answer: "Bazı suç tiplerinde ve yaş küçüklüğü gibi durumlarda zorunlu müdafilik olsa da, hak kaybına uğramamak için her türlü ceza davasında bir uzman İzmir ceza avukatı ile çalışmak hayati önem taşır."
      },
      {
        question: "Soruşturma aşamasında avukatın rolü nedir?",
        answer: "Soruşturma aşaması, davanın temelinin atıldığı yerdir. İfade sırasında hazır bulunmak, delillere erişmek ve hukuka aykırı işlemleri engellemek avukatın öncelikli görevidir."
      },
      {
        question: "Tutuklama kararına karşı ne zaman itiraz edilebilir?",
        answer: "Tutuklama kararı yüze karşı okunduğu andan itibaren 7 gün içinde yetkili mahkemeye itiraz dilekçesi verilmelidir."
      }
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "bosanma",
    slug: "izmir-bosanma-avukati",
    title: "İzmir Boşanma Avukatı",
    seoTitle: "İzmir Boşanma Avukatı - Anlaşmalı ve Çekişmeli Boşanma",
    metaDescription: "İzmir boşanma avukatı arayışınızda velayet, nafaka ve mal paylaşımı konularında uzman danışmanlık. Profesyonel ve gizlilik odaklı hizmet.",
    intro: "Aile hukuku, duygusal yoğunluğun en yüksek olduğu alanlardan biridir. İzmir boşanma avukatı olarak, bu süreci müvekkillerimiz için en az yıpratıcı ve en adil şekilde sonuçlandırmayı hedefliyoruz.",
    scope: [
      "Anlaşmalı Boşanma Davaları",
      "Çekişmeli Boşanma Davaları",
      "Velayet ve Kişisel İlişki Tesisi",
      "Nafaka (İştirak, Yoksulluk, Tedbir) Talepleri",
      "Maddi ve Manevi Tazminat",
      "Mal Rejiminin Tasfiyesi"
    ],
    process: [
      "Ön görüşme ve taleplerin belirlenmesi",
      "Dava dilekçesinin veya protokolün hazırlanması",
      "Dava açılması ve tensip zaptı takibi",
      "Duruşmalar ve ara kararların uygulanması"
    ],
    faqs: [
      {
        question: "Anlaşmalı boşanma ne kadar sürer?",
        answer: "Gerekli şartlar sağlandığında ve protokol hazır olduğunda, İzmir'deki mahkemelerin yoğunluğuna göre genellikle 1-3 ay içinde sonuçlanmaktadır."
      },
      {
        question: "Boşanma davasında kusur neden önemlidir?",
        answer: "Çekişmeli boşanmalarda tazminat ve nafaka miktarları, tarafların kusur oranlarına göre belirlenir. Bu nedenle delillerin doğru sunulması kritiktir."
      },
      {
        question: "Velayet neye göre belirlenir?",
        answer: "Mahkeme, velayet konusunda karar verirken her zaman 'çocuğun üstün yararını' gözetir. Çocuğun yaşı, eğitim durumu ve ebeveynlerin yaşam koşulları incelenir."
      }
    ],
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "saglik",
    slug: "izmir-saglik-hukuku-avukati",
    title: "İzmir Sağlık Hukuku Avukatı",
    seoTitle: "İzmir Sağlık Hukuku Avukatı - Malpraktis ve Hasta Hakları",
    metaDescription: "İzmir sağlık hukuku avukatı olarak tıbbi uygulama hataları (malpraktis) ve tazminat davalarında uzman hukuki destek sunuyoruz.",
    intro: "Tıbbi müdahaleler sonucunda meydana gelen zararlar, hem hasta hem de hekim için ciddi hukuki sonuçlar doğurur. İzmir sağlık hukuku avukatı olarak, hak ihlallerinin tespiti ve tazmini noktasında yanınızdayız.",
    scope: [
      "Malpraktis (Tıbbi Uygulama Hatası) Davaları",
      "Hasta Hakları İhlalleri",
      "Hekim ve Hastane Sorumluluğu",
      "İlaç Hukuku ve Eczacılık Uyuşmazlıkları",
      "Sağlık Personeli Disiplin Süreçleri"
    ],
    process: [
      "Tıbbi kayıtların toplanması ve uzman görüşü alınması",
      "Hizmet kusuru veya kişisel kusur tespiti",
      "Maddi ve manevi tazminat davası açılması",
      "Adli Tıp Kurumu raporlarının takibi"
    ],
    faqs: [
      {
        question: "Malpraktis davası açma süresi nedir?",
        answer: "Zararın ve failin öğrenilmesinden itibaren 2 yıl ve her halükarda 10 yıllık zamanaşımı süreleri mevcuttur. Ancak idari davalarda bu süreler daha kısadır."
      },
      {
        question: "Komplikasyon ve malpraktis farkı nedir?",
        answer: "Komplikasyon, tıbbi müdahalenin doğasında olan ve her türlü özene rağmen oluşabilen risktir. Malpraktis ise hekimin kusuru veya ihmali sonucu oluşan hatadır."
      }
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "bilisim",
    slug: "izmir-bilisim-suclari-ve-hukuku-avukati",
    title: "İzmir Bilişim Suçları ve Hukuku Avukatı",
    seoTitle: "İzmir Bilişim Suçları Avukatı - Siber Suçlar ve KVKK",
    metaDescription: "İzmir bilişim suçları avukatı olarak siber suçlar, veri ihlalleri ve KVKK uyum süreçlerinde profesyonel danışmanlık sağlıyoruz.",
    intro: "Teknolojinin gelişimiyle birlikte dijital dünyada işlenen suçlar ve hak ihlalleri artmıştır. İzmir bilişim hukuku avukatı olarak, dijital varlıklarınızın korunması ve siber suçlarla mücadelede uzman kadromuzla hizmet veriyoruz.",
    scope: [
      "Bilişim Sistemine Girme ve Engelleme Suçları",
      "Banka ve Kredi Kartı Kötüye Kullanımı",
      "Kişisel Verilerin Korunması (KVKK) Danışmanlığı",
      "E-Ticaret Hukuku ve Sözleşmeleri",
      "Dijital Delil Analizi ve Tespiti"
    ],
    process: [
      "Dijital delillerin hukuka uygun tespiti",
      "İlgili platformlara erişim engelleme başvuruları",
      "Suç duyurusu ve ceza davası takibi",
      "Tazminat süreçlerinin yönetimi"
    ],
    faqs: [
      {
        question: "İnternet üzerinden dolandırıldım, ne yapmalıyım?",
        answer: "Vakit kaybetmeden banka hesaplarınızı dondurmalı ve bir İzmir bilişim avukatı aracılığıyla savcılığa suç duyurusunda bulunmalısınız."
      },
      {
        question: "KVKK kapsamında şirketlerin yükümlülükleri nelerdir?",
        answer: "Şirketler veri envanteri hazırlamak, aydınlatma metinleri oluşturmak ve gerekli teknik/idari tedbirleri almakla yükümlüdür."
      }
    ],
    image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "internet",
    slug: "izmir-internet-hukuku-ve-internet-suclari",
    title: "İzmir İnternet Hukuku ve İnternet Suçları",
    seoTitle: "İzmir İnternet Hukuku - İçerik Kaldırma ve Erişim Engelleme",
    metaDescription: "İzmir internet hukuku avukatı olarak sosyal medya hakaretleri, içerik kaldırma ve erişim engelleme taleplerinizde hızlı çözümler sunuyoruz.",
    intro: "İnternet ortamında kişilik haklarına saldırı veya hukuka aykırı içerik paylaşımı durumunda hızlı müdahale kritiktir. İzmir internet suçları avukatı olarak, itibarınızın korunması için yasal yolları etkin şekilde kullanıyoruz.",
    scope: [
      "İçerik Kaldırma ve Erişim Engelleme (5651 Sayılı Kanun)",
      "Sosyal Medya Hakaret ve Tehdit Suçları",
      "Unutulma Hakkı Başvuruları",
      "Telif Hakları İhlalleri",
      "İnternet Yoluyla Marka İhlalleri"
    ],
    process: [
      "Hukuka aykırı içeriğin tespiti ve noter onayı",
      "Sulh Ceza Hakimliğine erişim engelleme başvurusu",
      "İçerik sağlayıcıya ihtarname gönderilmesi",
      "Tazminat davası süreçleri"
    ],
    faqs: [
      {
        question: "Hakkımdaki asılsız bir haber ne kadar sürede kaldırılır?",
        answer: "Mahkemeden alınan erişim engelleme kararı, Erişim Sağlayıcıları Birliği'ne iletildikten sonra genellikle 24 saat içinde uygulanır."
      },
      {
        question: "Sahte hesaplar üzerinden yapılan paylaşımlar bulunabilir mi?",
        answer: "IP tespiti ve adli bilişim incelemeleriyle faillerin belirlenmesi mümkündür, ancak platformun işbirliği ve teknik detaylar önemlidir."
      }
    ],
    image: "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "tazminat",
    slug: "izmir-tazminat-avukati",
    title: "İzmir Tazminat Avukatı",
    seoTitle: "İzmir Tazminat Avukatı - Maddi ve Manevi Tazminat Davaları",
    metaDescription: "İzmir tazminat avukatı olarak trafik kazası, iş kazası ve haksız fiillerden doğan tazminat haklarınızın takibini yapıyoruz.",
    intro: "Haksız bir fiil veya sözleşmeye aykırılık sonucu uğranılan zararların giderilmesi anayasal bir haktır. İzmir tazminat avukatı olarak, kayıplarınızın en adil şekilde karşılanması için hukuki mücadele veriyoruz.",
    scope: [
      "Trafik Kazası Tazminat Davaları",
      "İş Kazası Maddi ve Manevi Tazminat",
      "Haksız Fiilden Doğan Tazminat",
      "Destekten Yoksun Kalma Tazminatı",
      "Mesleki Sorumluluk Tazminatları"
    ],
    process: [
      "Kusur oranlarının tespiti ve raporlanması",
      "Aktüerya hesabı ile zarar miktarının belirlenmesi",
      "Arabuluculuk veya dava yoluna başvurulması",
      "Tahsilat süreçlerinin takibi"
    ],
    faqs: [
      {
        question: "Manevi tazminat miktarı neye göre belirlenir?",
        answer: "Tarafların sosyal ve ekonomik durumu, olayın ağırlığı ve zenginleşme yasağı gibi kriterler mahkemece göz önünde bulundurulur."
      },
      {
        question: "Trafik kazasında tazminat davası kime açılır?",
        answer: "Kusurlu araç sürücüsüne, araç sahibine ve ilgili sigorta şirketine karşı dava açılabilir."
      }
    ],
    image: "https://i.pinimg.com/736x/ee/19/53/ee19534ce12a1debc0f2e8eaebcd29cd.jpg"
  },
  {
    id: "is",
    slug: "izmir-is-avukati",
    title: "İzmir İş Avukatı",
    seoTitle: "İzmir İş Avukatı - Kıdem Tazminatı ve İşe İade Davaları",
    metaDescription: "İzmir iş avukatı olarak işçi ve işveren hakları, tazminat hesaplamaları ve işe iade davalarında uzman hukuki danışmanlık sunuyoruz.",
    intro: "İşçi ve işveren arasındaki dengenin korunması, çalışma barışının temelidir. İzmir iş avukatı olarak, iş kanunundan doğan tüm haklarınızın korunması ve uyuşmazlıkların çözümü için yanınızdayız.",
    scope: [
      "Kıdem ve İhbar Tazminatı Alacakları",
      "İşe İade Davaları",
      "Fazla Mesai, UBGT ve İzin Ücretleri",
      "Mobbing ve Kötüniyet Tazminatı",
      "İş Kazası ve Meslek Hastalığı Davaları"
    ],
    process: [
      "İş sözleşmesinin incelenmesi",
      "Zorunlu arabuluculuk sürecinin yönetilmesi",
      "İş mahkemesinde dava açılması",
      "Bilirkişi raporlarına beyan sunulması"
    ],
    faqs: [
      {
        question: "İşe iade davası açma süresi nedir?",
        answer: "İş sözleşmesinin feshinden itibaren 1 ay içinde arabulucuya başvurulması zorunludur."
      },
      {
        question: "Kıdem tazminatı alabilmek için ne kadar çalışmak gerekir?",
        answer: "Aynı işverene bağlı olarak en az 1 yıl çalışmış olmak ve haklı bir nedenle işten ayrılmış veya işveren tarafından haksız çıkarılmış olmak gerekir."
      }
    ],
    image: "https://i.pinimg.com/736x/41/27/e8/4127e8c4eefe822cebff201ea85a2bb8.jpg"
  },
  {
    id: "miras",
    slug: "izmir-miras-avukati",
    title: "İzmir Miras Avukatı",
    seoTitle: "İzmir Miras Avukatı - Veraset ve Miras Paylaşımı",
    metaDescription: "İzmir miras avukatı olarak veraset ilamı, mirasın reddi ve ortaklığın giderilmesi davalarında uzman danışmanlık sağlıyoruz.",
    intro: "Miras paylaşımı, aile içi uyuşmazlıkların en sık yaşandığı alanlardan biridir. İzmir miras avukatı olarak, mirasçıların haklarını korumak ve paylaşımı adil bir şekilde gerçekleştirmek için hizmet veriyoruz.",
    scope: [
      "Veraset İlamı (Mirasçılık Belgesi) Alınması",
      "Mirasın Reddi (Redd-i Miras) Davaları",
      "Muris Muvazaası (Mal Kaçırma) Davaları",
      "Ortaklığın Giderilmesi (İzale-i Şuyu)",
      "Vasiyetname Hazırlanması ve İptali"
    ],
    process: [
      "Terekenin (mirasın) tespiti",
      "Mirasçıların ve pay oranlarının belirlenmesi",
      "Anlaşmalı paylaşım veya dava yolunun seçilmesi",
      "Tapu tescil ve intikal işlemlerinin takibi"
    ],
    faqs: [
      {
        question: "Mirasın reddi için süre ne kadardır?",
        answer: "Mirasçılar, mirasın kendilerine geçtiğini öğrendikleri tarihten itibaren 3 ay içinde mirası reddedebilirler."
      },
      {
        question: "Saklı pay nedir?",
        answer: "Miras bırakanın vasiyetname ile üzerinde tasarruf edemediği, mirasçıların kanunen korunan asgari payıdır."
      }
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "gayrimenkul",
    slug: "izmir-gayrimenkul-avukati",
    title: "İzmir Gayrimenkul Avukatı",
    seoTitle: "İzmir Gayrimenkul Avukatı - Tapu ve Kira Davaları",
    metaDescription: "İzmir gayrimenkul avukatı olarak tapu iptal tescil, tahliye ve kira uyuşmazlıklarında profesyonel hukuki destek sunuyoruz.",
    intro: "Gayrimenkul yatırımları ve mülkiyet hakları, titiz bir hukuki takip gerektirir. İzmir gayrimenkul avukatı olarak, taşınmazlarla ilgili her türlü uyuşmazlığın çözümünde uzmanlığımızı sunuyoruz.",
    scope: [
      "Tapu İptal ve Tescil Davaları",
      "Kira Tespit ve Tahliye Davaları",
      "Gayrimenkul Satış Vaadi Sözleşmeleri",
      "Kat Karşılığı İnşaat Sözleşmeleri",
      "Kamulaştırma ve El Atmanın Önlenmesi"
    ],
    process: [
      "Tapu kayıtlarının ve imar durumunun incelenmesi",
      "Sözleşmelerin hazırlanması ve risk analizi",
      "Dava veya icra takibi süreçlerinin başlatılması",
      "Keşif ve bilirkişi incelemelerinin takibi"
    ],
    faqs: [
      {
        question: "Kira ödemeyen kiracı ne kadar sürede tahliye edilir?",
        answer: "İcra takibi veya tahliye davası süreçlerine göre değişmekle birlikte, yasal prosedürlerin doğru işletilmesiyle 6-12 ay sürebilmektedir."
      },
      {
        question: "Tapu iptal davası hangi durumlarda açılır?",
        answer: "Yolsuz tescil, vekalet görevinin kötüye kullanılması veya ehliyetsizlik gibi hukuka aykırı durumlarda açılabilir."
      }
    ],
    image: "https://i.pinimg.com/1200x/c2/45/b3/c245b313ade20821bfa1915bed7f27bb.jpg"
  },
  {
    id: "icra",
    slug: "izmir-icra-avukati",
    title: "İzmir İcra Avukatı",
    seoTitle: "İzmir İcra Avukatı - Alacak Takibi ve Haciz İşlemleri",
    metaDescription: "İzmir icra avukatı olarak alacak takibi, çek-senet tahsili ve borca itiraz süreçlerinde hızlı ve etkin çözümler üretiyoruz.",
    intro: "Alacakların tahsili veya haksız icra takiplerine karşı savunma, teknik bilgi gerektiren bir süreçtir. İzmir icra avukatı olarak, müvekkillerimizin mali haklarını korumak için profesyonel takip yapıyoruz.",
    scope: [
      "İlamsız ve İlamlı İcra Takipleri",
      "Çek, Senet ve Poliçe Tahsili",
      "İhtiyati Haciz Kararları",
      "Menfi Tespit ve İstirdat Davaları",
      "İstihkak Davaları"
    ],
    process: [
      "Takip öncesi borçlu sorgulaması",
      "İcra takibinin başlatılması ve ödeme emri gönderimi",
      "Haciz ve satış işlemlerinin yönetimi",
      "Tahsilatın müvekkile aktarılması"
    ],
    faqs: [
      {
        question: "İcra takibine itiraz süresi nedir?",
        answer: "İlamsız takiplerde ödeme emrinin tebliğinden itibaren 7 gün içinde ilgili icra dairesine itiraz edilmelidir."
      },
      {
        question: "İhtiyati haciz nedir?",
        answer: "Alacağın tahsilini güvence altına almak için mahkemeden alınan geçici bir el koyma kararıdır."
      }
    ],
    image: "https://i.pinimg.com/736x/e3/3c/51/e33c51c96b3fb8d632f3355960c706b6.jpg"
  },
  {
    id: "idare",
    slug: "izmir-idare-hukuku-avukati",
    title: "İzmir İdare Hukuku Avukatı",
    seoTitle: "İzmir İdare Hukuku Avukatı - İptal ve Tam Yargı Davaları",
    metaDescription: "İzmir idare hukuku avukatı olarak idari işlemlerin iptali, tam yargı davaları ve memur uyuşmazlıklarında uzman destek sağlıyoruz.",
    intro: "İdarenin her türlü eylem ve işlemi yargı denetimine tabidir. İzmir idare hukuku avukatı olarak, kamu gücü karşısında bireylerin haklarını savunuyor ve hukuka aykırı işlemlerin iptalini sağlıyoruz.",
    scope: [
      "İdari İşlemlerin İptali Davaları",
      "Tam Yargı (Tazminat) Davaları",
      "Memur Atama, Disiplin ve Nakil Uyuşmazlıkları",
      "İmar Planı İptali Davaları",
      "İhale Hukuku Uyuşmazlıkları"
    ],
    process: [
      "İdari işlemin hukuka uygunluk denetimi",
      "Dava açma sürelerinin (genellikle 60 gün) kontrolü",
      "Yürütmenin durdurulması talepli dava açılması",
      "Savunmaya cevap ve duruşma süreçleri"
    ],
    faqs: [
      {
        question: "İdari davada yürütmenin durdurulması nedir?",
        answer: "İdari işlemin uygulanması halinde telafisi güç zararlar doğacaksa, mahkemenin işlemin uygulanmasını dava sonuna kadar askıya almasıdır."
      },
      {
        question: "İdari dava açma süresi kaçırılırsa ne olur?",
        answer: "Süreler hak düşürücüdür; kaçırılması durumunda dava usulden reddedilir. Bu nedenle bir İzmir idare avukatı ile çalışmak kritiktir."
      }
    ],
    image: "https://i.pinimg.com/736x/74/e9/0e/74e90eab1a2ccdea6bc6360411bf5dbc.jpg"
  }
];
