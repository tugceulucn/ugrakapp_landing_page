import React, { useState } from "react";

const navItems = ["Home", "Product", "FAQ", "Blog", "About Us"];

const benefits = [
  "Kâğıt kartlar unutulur. Dijital puan sistemi ile müşterin seni hatırlar.",
  "Kampanya duyurularını otomatik ilet. Happy hour hatırlatmalarını yap.",
  "Müşteri takibi yapılmazsa geri dönüş düşer. Otomatik geri dönüş teşviki.",
  "Sadakat arttıkça seket ortalaması büyür. Puan sistemi ile ödüllendir.",
  "İşletme paneli ile tek yerden takip. Masa, kampanya ve personel yönetimi."
];

const aiGalleryItems = [
  {
    title: "Product Lifestyle",
    src: "/images/ai_images1.jpg",
  },
  {
    title: "Animated Ad Creative",
    src: "/images/ai_images2.jpg",
  },
  {
    title: "Mockup Shot",
    src: "/images/ai_images3.jpg",
  },
  {
    title: "AI Motion Visual",
    src: "/images/ai_images4.jpg",
  },
  {
    title: "Social Carousel",
    src: "/images/ai_images5.jpg",
  },
  {
    title: "Loop Story Format",
    src: "/images/ai_images6.jpg",
  },
  {
    title: "Hero Banner",
    src: "/images/ai_images7.jpg",
  },
  {
    title: "UGC Style Clip",
    src: "/images/ai_images8.jpg",
  },
];

const whyCards = [
  {
    step: 1,
    title: "Kampanyanı ayarla",
    text: "Saat, indirim oranı ve hedef kitleni seç. Uğrak, happy hour kampanyanı saniyeler içinde yayına alır."
  },
  {
    step: 2,
    title: "Puan sistemini başlat",
    text: "Müşterilerin QR okutarak puan toplasın. Sen de tekrar gelişleri ve sepet tutarlarını panelden izle."
  },
  {
    step: 3,
    title: "Müşterinle temas et",
    text: "Sadakat verilerine göre otomatik hatırlatma, doğum günü mesajı ve özel davetler gönder."
  },
  {
    step: 4,
    title: "Performansı ölç & büyüt",
    text: "Hangi kampanya ne kadar çalışmış, hangi saat aralığı daha verimli, hepsini grafiklerle gör ve optimizasyon yap."
  }
];

const featureCards = [
  {
    title: "İşletmeni Kaydet",
    text: "Şubelerini, kategorilerini ve çalışma saatlerini dakikalar içinde tanımla."
  },
  {
    title: "QR ile Puan Ver",
    text: "Müşterilerin masadan kalkmadan puanlarını alsın, sen de veriyi kaybetme."
  },
  {
    title: "Gönderilerini Hazırla",
    text: "Happy hour görsellerini ve metinlerini hazır şablonlarla oluştur."
  }
];

const pricingPlans = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "1 Şube",
      "Temel kampanya oluşturma",
      "Sınırlı puan sistemi",
      "E-posta destek"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 29,
    priceYearly: 24,
    popular: true,
    features: [
      "3 Şubeye kadar",
      "Sınırsız kampanya",
      "Gelişmiş raporlama",
      "Öncelikli destek"
    ]
  },
  {
    id: "business",
    name: "Business",
    priceMonthly: 59,
    priceYearly: 49,
    features: [
      "Sınırsız şube",
      "Rol & ekip yönetimi",
      "Özel entegrasyonlar",
      "Strateji danışmanlığı"
    ]
  }
];

const supportColumns = [
  {
    title: "Publishing",
    text: "Kampanyalarını planla, yayınla ve hem uygulamada hem sosyal medyada duyur."
  },
  {
    title: "Analytics",
    text: "Saat, şube ve kampanya bazlı performansını raporlarla gör."
  },
  {
    title: "Engagement",
    text: "Sadakat puanları, geri dönüş oranı ve yorumlarla müşteri bağlılığını ölç."
  }
];

const testimonials = [
  {
    name: "Selin Arslan",
    role: "Kafe Sahibi",
    text: "Uğrak ile happy hour kampanyalarını düzene oturttuk. Akşam saatlerindeki doluluk ciddi arttı."
  },
  {
    name: "Mert Yıldız",
    role: "Bar İşletmecisi",
    text: "Dijital puan sistemi sayesinde misafirlerimiz düzenli gelmeye başladı. Paneli kullanmak da çok kolay."
  }
];

function App() {
  const [billing, setBilling] = useState("monthly"); // 'monthly' | 'yearly'

  const formatPrice = (plan) => {
    const price =
      billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
    if (price === 0) return "0";
    return `$${price}`;
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="top-nav">
        <div className="container nav-inner animate-fade-down">
          <div className="logo">
            <span className="logo-mark">hl</span>
            <span className="logo-text">hourloop</span>
          </div>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <button className="btn ghost">Login</button>
            <button className="btn primary">Sign Up</button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-left animate-fade-up">
              <h1>
                Happy hour kampanyaları + dijital puan sistemi + işletme paneli.
                <span className="hero-highlight">
                  {" "}
                  Hepsi tek uygulamada.
                </span>
              </h1>
              <p className="hero-subtitle">
                Happy hour kampanyalarını takip et, müşterilerinin sadakatini
                kazandır ve sosyal medya için gönderiler üret. Hem zaman hem
                müşteri kazan. Uğrak ile hepsi tek panelde.
              </p>
              <div className="hero-actions">
                <button className="btn primary hero-main-btn">
                  İşletmem için Başlat
                </button>
                <button className="btn outline">Demo İzle</button>
              </div>
              <p className="hero-small">
                Sadece sana özel! İlk 30 gün ücretsiz dene, dilediğin an iptal
                et.
              </p>
            </div>

            <div className="hero-right animate-fade-up delay-1">
              <div className="hero-card">
                <div className="hero-illustration">
                  <img
                    src="/images/ugrak-hero.jpg"
                    alt="Uğrak dashboard"
                  />
                  <div className="hero-graph-line" />
                </div>

                <div className="hero-tag hero-tag-top">Happy Hour Boost</div>
                <div className="hero-tag hero-tag-right">Loyalty Points</div>

                <div className="hero-floating-card">
                  <p className="hero-floating-label">Toplam Kazanç</p>
                  <p className="hero-floating-value">$245.00</p>
                  <span className="hero-floating-chip">+18% bu ay</span>
                </div>

                <div className="hero-floating-card hero-card-small">
                  <p>Yeni üye</p>
                  <strong>36</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEDEN UĞRAK? */}
        <section className="section">
          <div className="container animate-fade-up">
            <h2 className="section-title center">Neden Uğrak?</h2>
            <p className="section-subtitle center-sub">
              İşletmeyi uğrak bir mekâna dönüştürmek için tasarlanmış net bir
              akış. Saatleri sen seç, geri kalanını Uğrak halletsin.
            </p>
            <div className="why-grid">
              {whyCards.map((item) => (
                <div key={item.title} className="why-card">
                  <div className="why-step-circle">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI GALLERY */}
        <section className="section section-gallery">
          <div className="container animate-fade-up">
            <div className="gallery-header">
              <h2 className="section-title center">
                Yapay zeka ile işletmen için en iyi görselleri üret
              </h2>
              <p className="section-subtitle center-sub">
                1000+ üretilmiş görsel ve loop videodan küçük bir seçki.
                Aşağıda image + gif + image + gif şeklinde örnek içerikler yer alıyor.
              </p>
              <div className="gallery-underline" />
            </div>

            <div className="gallery-grid">
              {aiGalleryItems.map((item) => (
                <div key={item.title} className="ai-card">
                  <div className="ai-card-inner">
                    <img src={item.src} alt={item.title} />
                    <div className="ai-card-label">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAYDA + GÖRSEL */}
        <section className="section section-muted">
          <div className="container benefit-grid">
            <div className="animate-fade-up">
              <h2 className="section-title">
                İşletmenize sağlayacağı 5 fayda
              </h2>
              <ul className="benefit-list">
                {benefits.map((b) => (
                  <li key={b}>
                    <span className="check-icon">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="benefit-visual animate-fade-up delay-1">
              <div className="benefit-photo">
                <img src="/images/images1.jpg" alt="Happy hour visual" />
              </div>
              <div className="benefit-label-card">
                <span className="avatar-circle">A</span>
                <div>
                  <p className="benefit-label-title">Amanda Young</p>
                  <p className="benefit-label-text">Coffee Shop Owner</p>
                </div>
                <span className="benefit-pill">Toplam Kazanç $245.00</span>
              </div>
              <div className="benefit-badge">Money Transfer Successful</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section">
          <div className="container animate-fade-up">
            <div className="features-header">
              <div>
                <h2 className="section-title">Our Features you can get</h2>
                <p className="section-subtitle">
                  İşletmen için verimliliğini artıracak ve müşterinle olan
                  ilişkini güçlendirecek çeşitli özellikler sunuyoruz.
                </p>
              </div>
              <button className="btn primary">Get Started</button>
            </div>

            <div className="features-grid">
              {featureCards.map((f, idx) => (
                <article
                  key={f.title}
                  className={`feature-card animate-fade-up delay-${idx}`}
                >
                  <div className="feature-illustration" />
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section section-muted">
          <div className="container">
            <div className="pricing-header animate-fade-up">
              <h2 className="section-title">Choose Plan That’s Right For You</h2>
              <p className="section-subtitle">
                İşletmenin büyüklüğüne ve ihtiyacına göre en uygun paketi
                seçebilirsin. İhtiyacın değişirse planını dilediğin zaman
                güncelle.
              </p>
            </div>

            <div className="billing-toggle animate-fade-up delay-1">
              <button
                className={
                  billing === "monthly" ? "toggle-btn active" : "toggle-btn"
                }
                onClick={() => setBilling("monthly")}
              >
                Bill Monthly
              </button>
              <button
                className={
                  billing === "yearly" ? "toggle-btn active" : "toggle-btn"
                }
                onClick={() => setBilling("yearly")}
              >
                Bill Yearly
                <span className="toggle-badge">Save up to 20%</span>
              </button>
            </div>

            <div className="pricing-grid">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={plan.id}
                  className={
                    "pricing-card animate-fade-up delay-" +
                    (idx + 1) +
                    (plan.popular ? " pricing-card-popular" : "")
                  }
                >
                  <div className="pricing-ribbon-wrapper">
                    {plan.popular && <span className="pricing-ribbon">Most Popular</span>}
                  </div>
                  <p className="pricing-name">{plan.name}</p>
                  <p className="pricing-price">
                    {formatPrice(plan)}
                    <span className="pricing-period">
                      {plan.priceMonthly === 0
                        ? "/forever"
                        : billing === "monthly"
                        ? "/month"
                        : "/month (billed yearly)"}
                    </span>
                  </p>
                  <ul className="pricing-features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <span className="check-icon small">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn primary pricing-btn">
                    {plan.id === "free"
                      ? "Signup for free"
                      : plan.id === "pro"
                      ? "Go to pro"
                      : "Go to Business"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT / METRICS */}
        <section className="section">
          <div className="container support-grid">
            <div className="animate-fade-up">
              <h2 className="section-title">
                How we support our partners all over the world
              </h2>
              <p className="section-subtitle">
                SaaS modelimizle tüm lokal işletmelerin kampanya yönetimini
                dijitalleştiriyoruz. Hem gelirlerini hem de müşteri
                memnuniyetini artırmayı hedefliyoruz.
              </p>
              <div className="rating-row">
                <div>
                  <strong>4.9 / 5</strong>
                  <span> rating</span>
                  <p>Local Cafes</p>
                </div>
                <div>
                  <strong>4.8 / 5</strong>
                  <span> rating</span>
                  <p>Restaurant Chains</p>
                </div>
              </div>
            </div>
            <div className="support-cols animate-fade-up delay-1">
              {supportColumns.map((col) => (
                <div key={col.title} className="support-card">
                  <h3>{col.title}</h3>
                  <p>{col.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL + CONTACT DARK BLOCK */}
        <section className="section section-dark">
          <div className="container dark-grid">
            <div className="dark-left animate-fade-up">
              <h2>People are saying about Hourloop</h2>
              <p className="dark-subtitle">
                İşletme sahiplerinin günlük operasyonlarını basitleştirmek ve
                gelirlerini artırmak için buradayız. Kullanıcılarımız ne diyor?
              </p>
              <div className="dark-quotes">
                {testimonials.map((t) => (
                  <div key={t.name} className="quote-card">
                    <p className="quote-text">“{t.text}”</p>
                    <p className="quote-author">
                      — {t.name}, <span>{t.role}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-right animate-fade-up delay-1">
              <h3>Get Started</h3>
              <p className="dark-form-subtitle">
                E-posta bırak, ekibimiz işletmen için kısa bir demo planlasın.
              </p>
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <label>
                  Email
                  <input type="email" placeholder="you@cafe.com" required />
                </label>
                <label>
                  Message
                  <textarea placeholder="İşletmen hakkında kısaca bahset..." />
                </label>
                <button type="submit" className="btn primary dark-btn">
                  Request Demo
                </button>
                <p className="dark-note">or Start Free Trial</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="logo">
              <span className="logo-mark">hl</span>
              <span className="logo-text">hourloop</span>
            </div>
            <p className="footer-text">
              Happy hour kampanyaları ve dijital sadakat çözümlerini
              birleştiren modern işletme paneli.
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Support</h4>
              <a href="#">Help centre</a>
              <a href="#">Account information</a>
              <a href="#">Contact us</a>
            </div>
            <div>
              <h4>Help and Solution</h4>
              <a href="#">System status</a>
              <a href="#">Docs</a>
              <a href="#">Pricing</a>
            </div>
            <div>
              <h4>Product</h4>
              <a href="#">Update</a>
              <a href="#">Security</a>
              <a href="#">Beta test</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>
              © {new Date().getFullYear()} Hourloop Inc. All rights reserved.
            </span>
            <div className="footer-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
