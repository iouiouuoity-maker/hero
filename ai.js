// После публикации Worker измените ТОЛЬКО эту строку.
export const AI_API_URL = "ЖАҢА_CLOUDFLARE_WORKER_URL";
export async function api(path,body,token=''){
 if(AI_API_URL.includes('ЖАҢА_'))throw Error('Cloudflare Worker ещё не подключён');
 const r=await fetch(AI_API_URL.replace(/\/$/,'')+path,{method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
 const data=await r.json();if(!r.ok)throw Error(data.error||'Ошибка сервера');return data;
}
export async function askAI(payload){const d=await api('/api/chat',payload);return d.reply}
