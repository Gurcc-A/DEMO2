(function(){
var nav=document.querySelector('nav'),b=document.querySelector('.burger');
if(b)b.addEventListener('click',function(){var o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
var tabs=document.querySelectorAll('.tabs[data-filter] button');
tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(x){x.classList.remove('on')});t.classList.add('on');var k=t.dataset.k;document.querySelectorAll('.slot').forEach(function(s){s.classList.toggle('hide',k!=='all'&&s.dataset.t!==k)})})});
var tg=document.querySelectorAll('.tabs[data-price] button');
tg.forEach(function(t){t.addEventListener('click',function(){tg.forEach(function(x){x.classList.remove('on')});t.classList.add('on');var m=t.dataset.m;document.querySelectorAll('[data-p]').forEach(function(p){var v=p.dataset.p.split(',');p.textContent=v[m]})})});
var f=document.getElementById('lead');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var ok=true,n=f.name,p=f.phone,m=document.getElementById('msg');
n.nextElementSibling.textContent=n.value.trim().length<2?(ok=false,"Вкажіть ім'я"):'';
p.nextElementSibling.textContent=/^[\d\s+()-]{10,}$/.test(p.value.trim())?'':(ok=false,'Введіть номер телефону');
if(ok){m.textContent='Дякуємо, '+n.value.trim()+'! Це демо-форма: заявку не надіслано.';m.className='ok';f.reset()}else{m.textContent=''}});
var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
})();
