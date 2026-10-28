export const stages=[{name:'Поступок',icon:'⚡',question:'Что произошло?',task:'Назови конкретный поступок героя. Отдели факт от оценки.'},{name:'Эмоции',icon:'♡',question:'Что он чувствовал?',task:'Выбери 1–3 эмоции и объясни, какая деталь текста на них указывает.'},{name:'Мотив',icon:'◎',question:'Почему он так сделал?',task:'Объясни возможную причину поступка. Причина не всегда оправдывает действие.'},{name:'Доказательство',icon:'⌕',question:'Что говорит текст?',task:'Найди в произведении точное подтверждение своей версии и объясни его.'},{name:'Другая позиция',icon:'⇄',question:'Как видит это другой?',task:'Посмотри на ситуацию глазами другого персонажа. Чем отличаются позиции?'},{name:'Альтернатива',icon:'✧',question:'Что можно изменить?',task:'Предложи иной поступок, два возможных последствия и свою рефлексию.'}];
export const criteria=['Объяснение эмоций','Мотив поступка','Текстовое доказательство','Другая позиция','Альтернатива с последствиями'];
export const get=(k,f)=>{try{return JSON.parse(localStorage.getItem('g360_'+k))??f}catch{return f}};
export const put=(k,v)=>localStorage.setItem('g360_'+k,JSON.stringify(v));
export const defaultLesson={title:'Понять — не значит оправдать',work:'В. П. Астафьев «Конь с розовой гривой»',fragment:'',due:'',active:[0,1,2,3,4,5]};
export const lesson=()=>get('lesson',defaultLesson);
export const code=()=>get('student','У01');
export const answers=(c=code())=>get('answers_'+c,Array(6).fill(''));
export const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
