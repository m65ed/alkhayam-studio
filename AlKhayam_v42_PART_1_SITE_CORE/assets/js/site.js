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
        document.querySelectorAll('[data-branch-card]').forEach(card=>{const lat=Number(card.dataset.lat),lng=Number(card.dataset.lng);const d=haversine(latitude,longitude,lat,lng);if(!best||d<best.d)best={card,d}});
        if(best){const name=best.card.querySelector('h3')?.textContent.trim()||'';const link=best.card.querySelector('h3 a')?.getAttribute('href')||'#';nearestOut.hidden=false;nearestOut.innerHTML=`${ar?'أقرب فرع حسب موقعك:':'Nearest branch based on your location:'} <strong>${name}</strong> · ${best.d.toFixed(1)} km · <a class="text-link" href="${link}">${ar?'فتح الفرع':'Open branch'}</a>`;best.card.scrollIntoView({behavior:'smooth',block:'center'})}
        resetNearest();
      },()=>{nearestOut.hidden=false;nearestOut.textContent=ar?'تعذر الوصول إلى موقعك. تقدر تختار الفرع يدويًا من القائمة.':'We could not access your location. Choose a branch manually from the list.';resetNearest()},{enableHighAccuracy:false,timeout:8000,maximumAge:300000});
    });
  }
  function resetNearest(){if(!nearestBtn)return;nearestBtn.disabled=false;nearestBtn.textContent=ar?'اعثر على أقرب فرع':'Find nearest branch'}
  function haversine(a,b,c,d){const R=6371,toRad=x=>x*Math.PI/180;const da=toRad(c-a),db=toRad(d-b);const x=Math.sin(da/2)**2+Math.cos(toRad(a))*Math.cos(toRad(c))*Math.sin(db/2)**2;return 2*R*Math.asin(Math.sqrt(x))}
})();
