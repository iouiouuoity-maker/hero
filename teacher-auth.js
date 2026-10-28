import {api} from './ai.js';
const key='g360_teacher_session';export const session=()=>sessionStorage.getItem(key)||'';
export const authRequest=(path,body)=>api(path,body??{},session());
const form=document.querySelector('#login');if(form)form.addEventListener('submit',async e=>{e.preventDefault();const msg=document.querySelector('#message');msg.textContent='Проверка…';try{const data=await api('/api/login',{username:document.querySelector('#username').value,password:document.querySelector('#password').value});sessionStorage.setItem(key,data.token);location.href='teacher.html'}catch(err){msg.textContent=err.message}});
if(document.body.dataset.protected==='teacher'){document.body.style.visibility='hidden';authRequest('/api/me').then(()=>{document.body.style.visibility='visible';import('./teacher.js');import('./teacher-server.js')}).catch(()=>location.replace('teacher-login.html'))}
