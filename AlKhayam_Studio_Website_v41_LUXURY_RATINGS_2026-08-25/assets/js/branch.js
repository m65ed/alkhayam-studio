(function(){
  const root=document.documentElement;
  const btn=document.getElementById('langBtn');
  const body=document.body;
  function setLang(lang){
    const en=lang==='en';
    root.lang=en?'en':'ar'; root.dir=en?'ltr':'rtl';
    document.querySelectorAll('[data-ar][data-en]').forEach(el=>{el.textContent=en?el.dataset.en:el.dataset.ar;});
    if(body.dataset.titleAr) document.title=en?body.dataset.titleEn:body.dataset.titleAr;
    const md=document.querySelector('meta[name="description"]');
    if(md&&body.dataset.descAr) md.setAttribute('content',en?body.dataset.descEn:body.dataset.descAr);
    if(btn) btn.textContent=en?'العربية':'English';
    localStorage.setItem('ak-lang',lang);
    updateToday(lang);
  }
  function minutes(t){const [h,m]=t.split(':').map(Number);return h*60+m;}
  function updateToday(lang){
    const el=document.getElementById('todayStatus'); const hoursEl=document.getElementById('todayHours');
    if(!el||!window.BRANCH_HOURS)return;
    const now=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Riyadh'}));
    const day=now.getDay(); const nowM=now.getHours()*60+now.getMinutes(); const slots=window.BRANCH_HOURS[day]||[];
    const open=slots.some(([a,b])=>nowM>=minutes(a)&&nowM<minutes(b));
    const statusText=open?(lang==='en'?'Open now':'مفتوح الآن'):(lang==='en'?'Closed now':'مغلق الآن');
    el.textContent=statusText; el.className=open?'status-open':'status-closed';
    const mirror=document.getElementById('todayStatusMirror');
    if(mirror){mirror.textContent=statusText; mirror.className=open?'status-open':'status-closed';}
    const fmt=t=>{let [h,m]=t.split(':').map(Number);const ap=h>=12?(lang==='en'?'PM':'م'):(lang==='en'?'AM':'ص');h=h%12||12;return `${h}${m?':'+String(m).padStart(2,'0'):''} ${ap}`};
    hoursEl.textContent=slots.length?slots.map(s=>`${fmt(s[0])} – ${fmt(s[1])}`).join(lang==='en'?', ':'، '):(lang==='en'?'Closed':'مغلق');
  }
  btn?.addEventListener('click',()=>setLang(root.lang==='en'?'ar':'en'));
  setLang(localStorage.getItem('ak-lang')==='en'?'en':'ar');
})();
