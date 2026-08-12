const branches=[{"id": "KH1", "ar": "الخبر – قرية الدغيثر", "en": "Al Khobar – Al Dughaither Village", "addr_ar": "طريق الملك فهد، الخبر", "addr_en": "King Fahd Road, Al Khobar", "rating": 4.4, "count": 425, "map": "https://maps.app.goo.gl/MbPe4qZFhnmk1Pys9", "wa": "966532771684", "img": "k1-card.jpg"}, {"id": "KH4", "ar": "الخبر – العزيزية", "en": "Al Khobar – Al Aziziyah", "addr_ar": "حي الخزامى، الخبر", "addr_en": "Al Khuzama District, Al Khobar", "rating": 4.5, "count": 157, "map": "https://maps.app.goo.gl/Wic91HMrsnJNdBEv6", "wa": "966532936227", "img": "k4-card.jpg"}, {"id": "KH5", "ar": "الدوحة الجنوبية", "en": "South Doha", "addr_ar": "مجمع سوق المزرعة 5", "addr_en": "Farm Superstore 5 Complex", "rating": 4.8, "count": 516, "map": "https://maps.app.goo.gl/GaCiD84q5r3yiJ418", "wa": "966532941716", "img": "k5-card.jpg"}, {"id": "KH6", "ar": "الدوحة الجنوبية", "en": "South Doha", "addr_ar": "شارع عبدالله بن عباس", "addr_en": "Abdullah Ibn Abbas Street", "rating": 4.3, "count": 220, "map": "https://maps.app.goo.gl/13PcJ5m22NtEXidc6", "wa": "966502663472", "img": "k6-card.jpg"}, {"id": "KH7", "ar": "الدمام – حي العنود", "en": "Dammam – Al Anud", "addr_ar": "شارع الملك عبدالعزيز", "addr_en": "King Abdulaziz Street", "rating": 4.3, "count": 366, "map": "https://maps.app.goo.gl/ZJyHybBgExnKodct6", "wa": "966551003052", "img": "k7-card.jpg"}, {"id": "KH8", "ar": "الدمام – حي 91", "en": "Dammam – District 91", "addr_ar": "شارع أبي بكر", "addr_en": "Abu Bakr Street", "rating": 4.2, "count": 30, "map": "https://maps.app.goo.gl/gkzPE3Y8Qnacztwm6", "wa": "966532943469", "img": "k8-card.jpg"}, {"id": "KH9", "ar": "الخبر – العقربية", "en": "Al Khobar – Al Aqrabiyah", "addr_ar": "شارع 22", "addr_en": "22nd Street", "rating": 4.3, "count": 291, "map": "https://maps.app.goo.gl/nFS88TGNnEzW6oao7", "wa": "966532794199", "img": "k9-card.jpg"}, {"id": "KH10", "ar": "الظهران", "en": "Dhahran", "addr_ar": "شارع ابن بطوطة", "addr_en": "Ibn Battuta Street", "rating": 4.4, "count": 230, "map": "https://maps.app.goo.gl/nPQWY3yhCsxa9irj7", "wa": "966532776114", "img": "k10-card.jpg"};
branches.forEach(b=>{const c={"KH1": [26.2785, 50.2162], "KH4": [26.205, 50.1985], "KH5": [26.31, 50.151], "KH6": [26.303, 50.129], "KH7": [26.42, 50.111], "KH8": [26.4, 50.152], "KH9": [26.287, 50.189], "KH10": [26.291, 50.134]}[b.id]; if(c){b.lat=c[0]; b.lng=c[1];}});
const reviews=[
  {name:"Rayan AlMajed",ar:"تصوير ممتاز وسرعة في التعامل واستلام الصور.",en:"Excellent photography, fast service, and quick photo collection."},
  {name:"Abdulaziz",ar:"جيت صورنا للفيزا، والأخلاق حلوة والأسعار ممتازة وأنصحكم فيه.",en:"We came for visa photos; the service was friendly, prices were excellent, and I recommend them."},
  {name:"Anja Bizjak-Johnson",ar:"خدمة ودودة واحترافية وسريعة، وجودة الصور والخدمة ممتازة. أنصح به بشدة.",en:"Friendly, professional, quick and excellent quality of photos and service. Highly recommended."},
  {name:"Heba Jad",ar:"جودة جيدة والخدمة متعاونة.",en:"Good quality and helpful service."},
  {name:"Shatha O",ar:"أنصح به بشدة، خدمة جيدة.",en:"Highly recommended. Good service."},
  {name:"Samim Tariq",ar:"خدمة سريعة جدًا وتعامل ودود.",en:"Very fast and friendly service."},
  {name:"Lawal Ademola",ar:"حصلت على صور جميلة جدًا، والخدمة احترافية وسريعة.",en:"I got lovely pictures. Very professional and fast."},
  {name:"Mohammad Abuhmoud",ar:"خدمة ممتازة واحترافية.",en:"Excellent and professional service."},
  {name:"Dima Abuhmoud",ar:"خدمة ممتازة!",en:"Excellent service!"},
  {name:"Mohamed Azzouz",ar:"خدمة رائعة وسريعة.",en:"Great fast service."},
  {name:"Mahmoud Od",ar:"الخدمة سريعة واحترافية.",en:"Pretty quick and professional."},
  {name:"Kamal Hamad",ar:"سرعة واضحة في الإنجاز وتعامل احترافي.",en:"Quick and professional service."},
  {name:"Mustah Mat Daud",ar:"خدمة سريعة وأسعار مناسبة.",en:"Fast and affordable."},
  {name:"Hashim Mahmoud",ar:"مكان جيد لالتقاط صور جميلة، والخدمة متعاونة وسأعود مرة أخرى بالتأكيد.",en:"Good place to take nice photos. Helpful service and I will come back for sure."},
  {name:"Aseel Alhamoud",ar:"مكان رائع جدًا وأنصح به.",en:"A great place. Highly recommended."},
  {name:"Zeyad Alhrbi",ar:"تصويرهم ممتاز وهذه ثالث مرة أجيهم.",en:"Excellent photography. This is my third visit."},
  {name:"Rayan AlMajed",ar:"سرعة في التعامل وجودة جميلة في التصوير.",en:"Fast service with great photo quality."},
  {name:"Anja Bizjak-Johnson",ar:"تجربة مريحة من البداية للنهاية، والخدمة سريعة واحترافية.",en:"A smooth experience from start to finish with fast, professional service."}
];
let currentLang="ar";

const header=document.querySelector(".header");
const nav=document.querySelector("nav");
const menu=document.querySelector(".menu-btn");
const langBtn=document.getElementById("langBtn");
const slides=document.querySelectorAll(".hero-img");

window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>15));
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
 if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target);}
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

let heroIndex=0;
setInterval(()=>{
 slides[heroIndex].classList.remove("active");
 heroIndex=(heroIndex+1)%slides.length;
 slides[heroIndex].classList.add("active");
},5000);

function yearsSince1991(){
 const y=new Date().getFullYear()-1991;
 document.getElementById("experienceYears").textContent=y;
}
yearsSince1991();

function renderBranches(){
 const grid=document.getElementById("branchGrid");
 grid.innerHTML=branches.map((b,i)=>`
 <article class="branch-card reveal ${i%2?"delay1":""}">
   <div class="branch-image"><img src="assets/${b.img}" alt="${b.id}"></div>
   <div class="branch-body">
     <div class="branch-top"><span class="kh">${b.id}</span><span class="rating">★ ${b.rating} <small>(${b.count})</small></span></div>
     <h3>${currentLang==="ar"?b.ar:b.en}</h3>
     <p>${currentLang==="ar"?b.addr_ar:b.addr_en}</p>
     <div class="branch-actions">
       <a class="map-btn" target="_blank" rel="noopener" href="${b.map}">${currentLang==="ar"?"الموقع على الخريطة":"Google Maps"}</a>
       <a class="wa-btn" target="_blank" rel="noopener" href="https://wa.me/${b.wa}">${currentLang==="ar"?"واتساب الفرع":"Branch WhatsApp"}</a>
     </div>
   </div>
 </article>`).join("");
 document.querySelectorAll("#branchGrid .reveal").forEach(el=>observer.observe(el));
}
renderBranches();

function updateStats(){
 const total=branches.reduce((s,b)=>s+b.count,0);
 const avg=branches.reduce((s,b)=>s+b.rating*b.count,0)/total;
 const best=[...branches].sort((a,b)=>b.rating-a.rating||b.count-a.count)[0];
 document.getElementById("totalReviews").textContent=total.toLocaleString("en-US")+"+";
 document.getElementById("hero-total").textContent=total.toLocaleString("en-US")+"+";
 document.getElementById("avgRating").textContent=avg.toFixed(2)+" / 5";
 document.getElementById("bestBranch").textContent=best.id+" — "+best.rating;
}
updateStats();

let reviewPage=0;
const cards=[...document.querySelectorAll(".review-card")];
const dots=document.getElementById("reviewDots");
const pages=Math.ceil(reviews.length/3);
dots.innerHTML=Array.from({length:pages},(_,i)=>`<i class="${i===0?"active":""}"></i>`).join("");

function renderReviewPage(immediate=false){
 const start=(reviewPage*3)%reviews.length;
 if(!immediate) cards.forEach(c=>c.classList.add("swap"));
 setTimeout(()=>{
   cards.forEach((card,idx)=>{
     const r=reviews[(start+idx)%reviews.length];
     card.querySelector("p").textContent="“"+(currentLang==="ar"?r.ar:r.en)+"”";
     const byline=card.querySelector("span");
     byline.removeAttribute("data-ar");
     byline.removeAttribute("data-en");
     byline.textContent=currentLang==="ar" ? `تعليق من ${r.name}` : `Review by ${r.name}`;
   });
   document.querySelectorAll(".review-dots i").forEach((d,i)=>d.classList.toggle("active",i===reviewPage%pages));
   cards.forEach(c=>c.classList.remove("swap"));
 },immediate?0:350);
}
renderReviewPage(true);
setInterval(()=>{reviewPage=(reviewPage+1)%pages;renderReviewPage();},5000);

function setLanguage(lang){
 currentLang=lang;
 const isAr=lang==="ar";
 document.documentElement.lang=lang;
 document.documentElement.dir=isAr?"rtl":"ltr";
 langBtn.textContent=isAr?"English":"العربية";
 document.querySelectorAll("[data-ar][data-en]").forEach(el=>{
   const val=el.dataset[lang];
   if(val.includes("<br>")) el.innerHTML=val; else el.textContent=val;
 });
 renderBranches();
 renderReviewPage(true);
 renderGallery();
 renderBranchDetails();
 renderFAQ();
 renderFloatingBranches();
}

const galleryItems = branches.map(b=>({id:b.id,img:b.img,ar:b.ar,en:b.en}));

const faqItems = [
  {
    q_ar:"هل أحتاج موعد قبل زيارة الفرع؟",
    a_ar:"في أغلب الخدمات لا تحتاج موعدًا مسبقًا. يمكنك زيارة الفرع مباشرة، ولأي استفسار خاص تواصل مع الفرع عبر واتساب.",
    q_en:"Do I need an appointment?",
    a_en:"For most services, no appointment is required. You can visit the branch directly or contact the branch on WhatsApp for specific requests."
  },
  {
    q_ar:"هل توفرون صور الجواز والتأشيرات؟",
    a_ar:"نعم، تتوفر خدمات الصور الرسمية بمقاسات ومتطلبات متعددة حسب نوع المعاملة.",
    q_en:"Do you provide passport and visa photos?",
    a_en:"Yes. Official photos are available in multiple sizes and formats depending on the requirement."
  },
  {
    q_ar:"كم تستغرق الخدمة؟",
    a_ar:"مدة الإنجاز تختلف حسب نوع الخدمة والفرع، لكننا نحرص على أن تكون الخدمة سريعة وواضحة قدر الإمكان.",
    q_en:"How long does the service take?",
    a_en:"Turnaround time depends on the service and branch, but we aim to keep the process fast and clear."
  },
  {
    q_ar:"هل يمكن استلام الصور إلكترونيًا؟",
    a_ar:"يعتمد ذلك على نوع الخدمة والفرع. تواصل مع الفرع مباشرة للتأكد من خيارات التسليم المتاحة.",
    q_en:"Can I receive my photos digitally?",
    a_en:"It depends on the service and branch. Contact the branch directly to confirm available delivery options."
  },
  {
    q_ar:"هل تتوفر طباعة بمقاسات مختلفة؟",
    a_ar:"نعم، تتوفر خدمات طباعة بمقاسات مختلفة حسب الخدمة وجودة الملف الأصلي.",
    q_en:"Do you print different photo sizes?",
    a_en:"Yes. Multiple print sizes are available depending on the service and original file quality."
  },
  {
    q_ar:"كيف أرسل شكوى أو اقتراح؟",
    a_ar:"يمكنك التواصل مباشرة مع إدارة ستوديو الخيام عبر واتساب الشكاوى والاقتراحات على الرقم 053 801 6000.",
    q_en:"How can I send a complaint or suggestion?",
    a_en:"You can contact Al Khayam Studio management directly on WhatsApp at 053 801 6000."
  }
];

function renderGallery(){
  const grid=document.getElementById("galleryGrid");
  if(!grid) return;
  grid.innerHTML=galleryItems.map(g=>`
    <button class="gallery-item reveal" type="button" data-branch="${g.id}">
      <img src="assets/${g.img}" alt="${g.id}">
      <span>${g.id}</span>
      <strong>${currentLang==="ar"?g.ar:g.en}</strong>
    </button>
  `).join("");
  document.querySelectorAll(".gallery-item").forEach(el=>{
    observer.observe(el);
    el.addEventListener("click",()=>{
      document.getElementById("details-"+el.dataset.branch)?.scrollIntoView({behavior:"smooth",block:"center"});
    });
  });
}

function renderBranchDetails(){
  const wrap=document.getElementById("branchDetailsList");
  if(!wrap) return;
  wrap.innerHTML=branches.map((b,i)=>`
    <article class="branch-detail reveal ${i%2?"reverse":""}" id="details-${b.id}">
      <div class="detail-photo"><img src="assets/${b.img}" alt="${b.id}"></div>
      <div class="detail-copy">
        <div class="detail-top"><span class="kh">${b.id}</span><span class="rating">★ ${b.rating} <small>(${b.count})</small></span></div>
        <h3>${currentLang==="ar"?b.ar:b.en}</h3>
        <p>${currentLang==="ar"?b.addr_ar:b.addr_en}</p>
        <ul>
          <li>${currentLang==="ar"?"موقع مباشر على Google Maps":"Direct Google Maps location"}</li>
          <li>${currentLang==="ar"?"واتساب مخصص للفرع":"Dedicated branch WhatsApp"}</li>
          <li>${currentLang==="ar"?"خدمات تصوير وصور رسمية بحسب المتاح":"Photography and official photo services depending on availability"}</li>
        </ul>
        <div class="branch-actions">
          <a class="map-btn" target="_blank" rel="noopener" href="${b.map}">${currentLang==="ar"?"فتح الموقع":"Open Maps"}</a>
          <a class="wa-btn" target="_blank" rel="noopener" href="https://wa.me/${b.wa}">${currentLang==="ar"?"واتساب الفرع":"Branch WhatsApp"}</a>
        </div>
      </div>
    </article>
  `).join("");
  document.querySelectorAll(".branch-detail.reveal").forEach(el=>observer.observe(el));
}

function renderFAQ(){
  const list=document.getElementById("faqList");
  if(!list) return;
  list.innerHTML=faqItems.map((f,i)=>`
    <article class="faq-item">
      <button type="button" aria-expanded="false">
        <span>${currentLang==="ar"?f.q_ar:f.q_en}</span>
        <b>+</b>
      </button>
      <div class="faq-answer"><p>${currentLang==="ar"?f.a_ar:f.a_en}</p></div>
    </article>
  `).join("");
  document.querySelectorAll(".faq-item button").forEach(btn=>btn.addEventListener("click",()=>{
    const item=btn.closest(".faq-item");
    const open=item.classList.toggle("open");
    btn.setAttribute("aria-expanded",open);
    btn.querySelector("b").textContent=open?"−":"+";
  }));
}

function renderFloatingBranches(){
  const wrap=document.getElementById("floatingBranches");
  if(!wrap) return;
  wrap.innerHTML=branches.map(b=>`
    <a target="_blank" rel="noopener" href="https://wa.me/${b.wa}">
      <span>${b.id}</span>
      <small>${currentLang==="ar"?b.ar:b.en}</small>
    </a>
  `).join("");
}

const floatingMain=document.getElementById("floatingMain");
const floatingMenu=document.getElementById("floatingMenu");
floatingMain?.addEventListener("click",()=>floatingMenu.classList.toggle("open"));
document.addEventListener("click",e=>{
  if(!e.target.closest(".floating-contact")) floatingMenu?.classList.remove("open");
});

function toRad(v){return v*Math.PI/180;}
function distanceKm(lat1,lon1,lat2,lon2){
  const R=6371;
  const dLat=toRad(lat2-lat1), dLon=toRad(lon2-lon1);
  const a=Math.sin(dLat/2)**2+Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.sqrt(a));
}
const findNearestBtn=document.getElementById("findNearestBtn");
findNearestBtn?.addEventListener("click",()=>{
  if(!navigator.geolocation){
    findNearestBtn.textContent=currentLang==="ar"?"الموقع غير مدعوم":"Location unavailable";
    return;
  }
  findNearestBtn.disabled=true;
  findNearestBtn.textContent=currentLang==="ar"?"جاري تحديد موقعك...":"Locating...";
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude,longitude}=pos.coords;
    const ranked=branches
      .filter(b=>typeof b.lat==="number")
      .map(b=>({...b,dist:distanceKm(latitude,longitude,b.lat,b.lng)}))
      .sort((a,b)=>a.dist-b.dist);
    if(ranked.length){
      const nearest=ranked[0];
      const card=[...document.querySelectorAll(".branch-card")].find(c=>c.querySelector(".kh")?.textContent===nearest.id);
      card?.classList.add("nearest-highlight");
      card?.scrollIntoView({behavior:"smooth",block:"center"});
      findNearestBtn.textContent=(currentLang==="ar"?"الأقرب: ":"Nearest: ")+nearest.id+" • "+nearest.dist.toFixed(1)+" km";
    }
    findNearestBtn.disabled=false;
  },()=>{
    findNearestBtn.disabled=false;
    findNearestBtn.textContent=currentLang==="ar"?"تعذر تحديد الموقع":"Could not access location";
  },{enableHighAccuracy:false,timeout:8000,maximumAge:600000});
});

renderGallery();
renderBranchDetails();
renderFAQ();
renderFloatingBranches();

langBtn.addEventListener("click",()=>setLanguage(currentLang==="ar"?"en":"ar"));
