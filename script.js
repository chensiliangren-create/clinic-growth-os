document.getElementById('leadForm').addEventListener('submit',function(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const clinic=encodeURIComponent(f.get('clinic')||'');
  const name=encodeURIComponent(f.get('name')||'');
  const email=encodeURIComponent(f.get('email')||'');
  const monthly=encodeURIComponent(f.get('monthly_new')||'');
  const subject=encodeURIComponent('市場調査参加申込み：'+clinic);
  const body=encodeURIComponent(`院名:${clinic}%0D%0A担当:${name}%0D%0Aemail:${email}%0D%0A患者数目安:${monthly}`);
  window.location.href=`mailto:hello@clinic-growth.example?subject=${subject}&body=${body}`;
});
