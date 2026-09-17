(()=>{
  const header=document.querySelector('[data-header]');
  const menuBtn=document.querySelector('[data-menu-toggle]');
  const menu=document.querySelector('[data-mobile-menu]');
  const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>12);
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  menuBtn?.addEventListener('click',()=>{const open=menu?.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')});
  menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}));

  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  }else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));

  const HOURS={
    A:{0:[[480,1380]],1:[[480,1380]],2:[[480,1380]],3:[[480,1380]],4:[[480,1380]],5:[[960,1380]],6:[[480,1380]]},
    B:{0:[[480,780],[960,1380]],1:[[480,780],[960,1380]],2:[[480,780],[960,1380]],3:[[480,780],[960,1380]],4:[[480,780],[960,1380]],5:[[960,1380]],6:[[480,780],[960,1380]]},
    C:{0:[[480,750],[960,1350]],1:[[480,750],[960,1350]],2:[[480,750],[960,1350]],3:[[480,750],[960,1350]],4:[[480,750],[960,1350]],5:[[960,1350]],6:[[480,750],[960,1350]]}
  };
  function riyadhNow(){const parts=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Riyadh',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());const o={};parts.forEach(p=>o[p.type]=p.value);const days={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};return {day:days[o.weekday],min:Number(o.hour)*60+Number(o.minute)}}
  function isOpen(type){const n=riyadhNow();return (HOURS[type]?.[n.day]||[]).some(([s,e])=>n.min>=s&&n.min<e)}
  const ar=document.documentElement.lang==='ar';
  document.querySelectorAll('[data-branch-card]').forEach(card=>{const open=isOpen(card.dataset.hoursType);card.classList.add(open?'is-open':'is-closed');const el=card.querySelector('[data-status-text]');if(el)el.textContent=open?(ar?'مفتوح الآن':'Open now'):(ar?'مغلق الآن':'Closed now')});

  const nearestBtn=document.querySelector('[data-nearest-btn]');
  const nearestOut=document.querySelector('[data-nearest-result]');
  if(nearestBtn&&nearestOut){
    nearestBtn.addEventListener('click',()=>{
      if(!navigator.geolocation){nearestOut.hidden=false;nearestOut.textContent=ar?'المتصفح لا يدعم تحديد الموقع. اختر الفرع يدويًا من القائمة.':'Location is not supported by this browser. Choose a branch from the list.';return}
      nearestBtn.disabled=true;nearestBtn.textContent=ar?'جاري تحديد موقعك…':'Finding your location…';
      navigator.geolocation.getCurrentPosition(pos=>{
        const {latitude,longitude}=pos.coords;let best=null;
        document.querySelectorAll('[data-nearest-card]').forEach(card=>{const lat=Number(card.dataset.lat),lng=Number(card.dataset.lng);if(!Number.isFinite(lat)||!Number.isFinite(lng))return;const d=haversine(latitude,longitude,lat,lng);if(!best||d<best.d)best={card,d}});
        if(best){document.querySelectorAll('[data-nearest-card]').forEach(c=>{c.classList.remove('nearest-highlight');c.querySelector('.nearest-badge')?.remove()});const name=(best.card.querySelector('h3')||best.card.querySelector('strong'))?.textContent.trim()||'';const link=(best.card.querySelector('h3 a')||best.card.closest('a')||best.card)?.getAttribute?.('href')||'#';best.card.classList.add('nearest-highlight');const badge=document.createElement('span');badge.className='nearest-badge';badge.textContent=ar?'الأقرب إليك':'Nearest to you';best.card.appendChild(badge);nearestOut.hidden=false;nearestOut.innerHTML=`${ar?'أقرب فرع حسب موقعك:':'Nearest branch based on your location:'} <strong>${name}</strong> · ${best.d.toFixed(1)} km · <a class="text-link" href="${link}">${ar?'فتح الفرع':'Open branch'}</a>`;best.card.scrollIntoView({behavior:'smooth',block:'center'});window.setTimeout(()=>best.card.focus?.({preventScroll:true}),650)}
        resetNearest();
      },()=>{nearestOut.hidden=false;nearestOut.textContent=ar?'تعذر الوصول إلى موقعك. تقدر تختار الفرع يدويًا من القائمة.':'We could not access your location. Choose a branch manually from the list.';resetNearest()},{enableHighAccuracy:false,timeout:8000,maximumAge:300000});
    });
  }
  function resetNearest(){if(!nearestBtn)return;nearestBtn.disabled=false;nearestBtn.textContent=ar?'اعثر على أقرب فرع':'Find nearest branch'}
  function haversine(a,b,c,d){const R=6371,toRad=x=>x*Math.PI/180;const da=toRad(c-a),db=toRad(d-b);const x=Math.sin(da/2)**2+Math.cos(toRad(a))*Math.cos(toRad(c))*Math.sin(db/2)**2;return 2*R*Math.asin(Math.sqrt(x))}
})();

/* v50: verified Google review carousel; responsive 3/2/1 cards without skipped reviews. */
(()=>{
  const slider=document.querySelector('[data-review-slider]');
  if(slider){
    const isAr=document.documentElement.lang==='ar';
    const reviews=[
    {
        "name": "aDeL l",
        "stars": 5,
        "branch": "KH9",
        "originalLanguage": "EN",
        "ar": "استوديو تصوير رائع جدًا! الموظفون محترفون جدًا وودودون ومرحّبون. جودة الصور ممتازة، ويولون اهتمامًا كبيرًا بكل التفاصيل. كانت تجربتي رائعة من البداية إلى النهاية. أنصح به بشدة!",
        "en": "Absolutely amazing photography studio! The staff are very professional, friendly, and welcoming. The quality of the photos is excellent, and they pay great attention to every detail. I had a wonderful experience from start to finish. Highly recommended!"
    },
    {
        "name": "Hadeel Alhagbani",
        "stars": 5,
        "branch": "KH5",
        "originalLanguage": "AR",
        "ar": "من يوم كنت صغيره ماشاء الله و كل عائلتنا عندهم ربي يوفقهم ، ممتازين و سريعين",
        "en": "I’ve been coming to them since I was young, and my whole family goes there. God bless them—they’re excellent and fast."
    },
    {
        "name": "Umer Farooq",
        "stars": 5,
        "branch": "KH1",
        "originalLanguage": "EN",
        "ar": "فريق رائع وخدمة سريعة.",
        "en": "Amazing staff, quick service."
    },
    {
        "name": "Beshayer M",
        "stars": 5,
        "branch": "KH4",
        "originalLanguage": "AR",
        "ar": "دايم اتعامله معاه باله طويل و تصويره ممتاز 👍🏻",
        "en": "I always deal with him; he’s very patient and his photography is excellent. 👍🏻"
    },
    {
        "name": "H. Almo",
        "stars": 5,
        "branch": "KH6",
        "originalLanguage": "AR",
        "ar": "تعاملت مع المصور سونو في فرع الخيام ٦ كان جداً مهني ومتعاون وباله طويل وسريع في انجاز العمل ماشاء الله الله يبارك لكم",
        "en": "I dealt with the photographer Sonu at Al-Khayam 6. He was very professional, cooperative, patient, and quick in completing the work. God bless you."
    },
    {
        "name": "Saad Ahmad",
        "stars": 5,
        "branch": "KH10",
        "originalLanguage": "EN",
        "ar": "كانت جلسة تصوير رائعة مع LAL المحترف!",
        "en": "Was a great photoshoot with the professional LAL!"
    },
    {
        "name": "Ghala al otaibi",
        "stars": 5,
        "branch": "KH4",
        "originalLanguage": "EN",
        "ar": "استوديو رائع وتجربة سلسة. كانت Aru محترفة ومتعاونة. أنصح به بشدة!",
        "en": "Great studio and a smooth experience. Aru was professional and helpful. Highly recommended!"
    },
    {
        "name": "Muna Abuelhassan",
        "stars": 5,
        "branch": "KH7",
        "originalLanguage": "AR",
        "ar": "خدمة سريعة و ممتازة ، شكرا ل فيشاك على الخدمة",
        "en": "Fast and excellent service. Thank you Vishak for the service."
    },
    {
        "name": "Abdulrazzaq Aljafar",
        "stars": 5,
        "branch": "KH5",
        "originalLanguage": "AR",
        "ar": "استديو احترافي وموظف متعاون",
        "en": "A professional studio with a cooperative employee."
    },
    {
        "name": "Yousef A",
        "stars": 5,
        "branch": "KH8",
        "originalLanguage": "AR",
        "ar": "استديو جميل يقدم خدمه سريعه ويستاهل الزياره",
        "en": "A nice studio that provides fast service and is worth visiting."
    },
    {
        "name": "Najla",
        "stars": 5,
        "branch": "KH6",
        "originalLanguage": "AR",
        "ar": "المكان نظيف و الموظف محترم جدا ومتعاون والصور مثل ماطلبت",
        "en": "The place is clean, the employee is very respectful and cooperative, and the photos came out the way I asked."
    },
    {
        "name": "Fazil Ahmed",
        "stars": 5,
        "branch": "KH9",
        "originalLanguage": "EN",
        "ar": "خدمة رائعة من السيد Biju! للمحل أجواء جميلة وموقع ممتاز، وجودة الصور أيضًا مميزة. بشكل عام كانت تجربة رائعة، وأنصح به بشدة!",
        "en": "Great service by Mr. Biju! The shop has a wonderful ambiance and an excellent location. The quality of the photographs is also impressive. Overall, a great experience—highly recommended!"
    },
    {
        "name": "Abdullah Salwi",
        "stars": 5,
        "branch": "KH1",
        "originalLanguage": "EN",
        "ar": "تجربة جميلة جدًا، الموظفون ودودون ومتعاونون جدًا والخدمة ممتازة.",
        "en": "Very nice experience the staff are very friendly and helpful the service is excellent"
    },
    {
        "name": "Mihammed Abonayan",
        "stars": 5,
        "branch": "KH5",
        "originalLanguage": "AR",
        "ar": "ممتازين من سنين نتعامل معاهم و سريعين جدا!!! و متعاونين",
        "en": "They’ve been excellent for years; we’ve been dealing with them for a long time. They’re very fast and cooperative."
    },
    {
        "name": "Fares Z",
        "stars": 5,
        "branch": "KH10",
        "originalLanguage": "EN",
        "ar": "من الاستوديوهات التي أتعامل معها منذ أن كنت صغيرًا، ولا آتي إلا هنا لالتقاط صوري. متعاونون جدًا.",
        "en": "One of the best studios since I was a kid i only come here to take any photo very helpful"
    },
    {
        "name": "Mohammed Fahad",
        "stars": 5,
        "branch": "KH9",
        "originalLanguage": "AR",
        "ar": "ممتاز جدا واكثر ما عجبني السرعه في التصوير والاستلام",
        "en": "Excellent. What I liked most was the speed of the photography and receiving the photos."
    },
    {
        "name": "Faisal Ismail",
        "stars": 5,
        "branch": "KH6",
        "originalLanguage": "EN",
        "ar": "شكرًا على الدعم. أنصح بزيارة الاستوديو. Sandeep مصور رائع.",
        "en": "Thanks for support. I would recommend visiting the studio .sandeep is great photographer"
    },
    {
        "name": "VIVAK VELAYUDHAN",
        "stars": 5,
        "branch": "KH1",
        "originalLanguage": "EN",
        "ar": "كانت خدمة العملاء من Ales وLal ممتازة جدًا. استمروا بهذا المستوى يا شباب.",
        "en": "Ales and Lal had the best customer service Keep it up guys"
    }
];
    const cards=[...slider.querySelectorAll('[data-review-card]')];
    const track=slider.querySelector('.rotating-reviews');
    const dots=slider.querySelector('[data-review-dots]');
    let perPage=3,page=0,timer=null,touchStartX=null;

    const getPerPage=()=>window.matchMedia('(max-width: 700px)').matches?1:(window.matchMedia('(max-width: 980px)').matches?2:3);
    const pageCount=()=>Math.ceil(reviews.length/perPage);
    const reviewText=r=>isAr?r.ar:r.en;

    const stopTimer=()=>{if(timer){clearInterval(timer);timer=null}};
    const startTimer=()=>{
      stopTimer();
      if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)timer=window.setInterval(advance,5000);
    };

    const drawDots=()=>{
      if(!dots)return;
      const count=pageCount();
      dots.innerHTML=Array.from({length:count},(_,i)=>
        `<button type="button" class="${i===page?'active':''}" aria-label="${isAr?'عرض مجموعة التقييمات':'Show review group'} ${i+1} ${isAr?'من':'of'} ${count}" aria-current="${i===page?'true':'false'}"></button>`
      ).join('');
      dots.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>{page=i;render(true);startTimer()}));
    };

    const render=(animate=true)=>{
      if(animate)cards.forEach(c=>c.classList.add('swap'));
      window.setTimeout(()=>{
        const start=page*perPage;
        cards.forEach((card,idx)=>{
          const r=reviews[(start+idx)%reviews.length];
          const p=card.querySelector('p'),by=card.querySelector('span'),stars=card.querySelector('.stars');
          if(p)p.textContent='“'+reviewText(r)+'”';
          if(by)by.textContent=(isAr?'تعليق من ':'Review by ')+r.name;
          card.dataset.branch=r.branch;
          card.dataset.originalLanguage=r.originalLanguage;
          if(stars)stars.setAttribute('aria-label',isAr?`${r.stars} من 5`:`${r.stars} out of 5`);
        });
        cards.forEach(c=>c.classList.remove('swap'));
        drawDots();
      },animate?260:0);
    };

    const equalizeHeight=()=>{
      if(!track||!cards.length)return;
      cards.forEach(c=>c.style.minHeight='');
      const width=cards[0].getBoundingClientRect().width;
      if(!width)return;
      const probe=cards[0].cloneNode(true);
      probe.classList.remove('swap');
      Object.assign(probe.style,{position:'fixed',visibility:'hidden',pointerEvents:'none',inset:'-10000px auto auto -10000px',width:width+'px',height:'auto',minHeight:'0',display:'flex'});
      document.body.appendChild(probe);
      let max=220;
      reviews.forEach(r=>{
        const p=probe.querySelector('p'),by=probe.querySelector('span');
        if(p)p.textContent='“'+reviewText(r)+'”';
        if(by)by.textContent=(isAr?'تعليق من ':'Review by ')+r.name;
        max=Math.max(max,probe.scrollHeight);
      });
      probe.remove();
      cards.forEach(c=>c.style.minHeight=Math.ceil(max)+'px');
    };

    function advance(){page=(page+1)%pageCount();render(true)}
    const syncBreakpoint=()=>{
      const next=getPerPage();
      if(next!==perPage){
        const firstIndex=page*perPage;
        perPage=next;
        page=Math.min(Math.floor(firstIndex/perPage),pageCount()-1);
        render(false);
      }
      equalizeHeight();
    };

    perPage=getPerPage();
    render(false);
    const fontsReady=document.fonts?.ready||Promise.resolve();
    fontsReady.then(equalizeHeight);
    startTimer();

    slider.addEventListener('mouseenter',stopTimer);
    slider.addEventListener('mouseleave',startTimer);
    slider.addEventListener('focusin',stopTimer);
    slider.addEventListener('focusout',e=>{if(!slider.contains(e.relatedTarget))startTimer()});
    if(track){
      track.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0]?.clientX??null},{passive:true});
      track.addEventListener('touchend',e=>{
        if(touchStartX===null)return;
        const dx=(e.changedTouches[0]?.clientX??touchStartX)-touchStartX;
        touchStartX=null;
        if(Math.abs(dx)<45)return;
        page=(page+(dx<0?1:-1)+pageCount())%pageCount();
        render(true);startTimer();
      },{passive:true});
    }
    let resizeTimer=null;
    window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(syncBreakpoint,120)},{passive:true});
  }

  const floating=document.querySelector('[data-floating-contact]');
  const toggle=floating?.querySelector('[data-floating-toggle]');
  const menu=floating?.querySelector('[data-floating-menu]');
  if(floating&&toggle&&menu){
    const setFloating=open=>{floating.classList.toggle('open',open);toggle.setAttribute('aria-expanded',open?'true':'false')};
    toggle.addEventListener('click',e=>{e.stopPropagation();setFloating(!floating.classList.contains('open'))});
    document.addEventListener('click',e=>{if(!floating.contains(e.target))setFloating(false)});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setFloating(false)});
    document.querySelectorAll('[data-open-branch-contact]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();setFloating(true);toggle.focus({preventScroll:true})}));
  }
})();
