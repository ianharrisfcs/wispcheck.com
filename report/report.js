const questions=[
{cat:'WISP Foundation',q:'Written, customized WISP',why:'Maintain a current written plan tied to the real firm and its safeguards.'},
{cat:'WISP Foundation',q:'Assigned security coordinator',why:'Assign clear ownership for maintaining and reviewing the program.'},
{cat:'Administrative',q:'Security-awareness training',why:'Train staff regularly on phishing, sensitive data handling, and security procedures.'},
{cat:'Access',q:'MFA enforced',why:'Require MFA for email and systems that access taxpayer information.'},
{cat:'Technical',q:'Managed endpoint security',why:'Keep endpoints patched, monitored, and protected with managed security controls.'},
{cat:'Technical',q:'Encryption',why:'Protect sensitive data on portable devices and other applicable systems.'},
{cat:'Recovery',q:'Tested backups',why:'Maintain backups that can actually restore critical data and operations.'},
{cat:'Administrative',q:'Onboarding and offboarding',why:'Remove old access and control new access through repeatable procedures.'},
{cat:'Risk & Vendors',q:'Documented risk assessment',why:'Periodically reassess risks and record material findings and decisions.'},
{cat:'Risk & Vendors',q:'Vendor oversight',why:'Review key providers that handle or can access sensitive client information.'}
];
const raw=localStorage.getItem('wispcheckResults');
if(!raw){location.href='/';}
const data=JSON.parse(raw||'{"answers":[]}');
const answers=data.answers||[];
const total=answers.reduce((a,b)=>a+b,0), max=questions.length*2, pct=Math.round((total/max)*100);
document.getElementById('score').textContent=`${pct}%`;
const headline=document.getElementById('headline');
headline.textContent=pct>=85?'Strong baseline. Verify the details.':pct>=65?'Several safeguards need attention.':'Material gaps deserve priority.';
const results=document.getElementById('results');
questions.forEach((item,i)=>{
 const v=answers[i]??0; const cls=v===2?'good':v===1?'mid':'bad'; const label=v===2?'In place':v===1?'Partial / unsure':'Gap';
 const row=document.createElement('div'); row.className='result';
 row.innerHTML=`<div><span class="eyebrow">${item.cat}</span><h3>${item.q}</h3></div><p>${v===2?'Keep the control current and verify it periodically.':item.why}</p><span class="pill ${cls}">${label}</span>`;
 results.appendChild(row);
});
const missing=answers.filter(v=>v===0).length, partial=answers.filter(v=>v===1).length;
document.getElementById('recommendation').textContent=missing?`You reported ${missing} clear gap${missing===1?'':'s'} and ${partial} partial or uncertain control${partial===1?'':'s'}. Address missing safeguards first, then verify anything marked partial.`:partial?`No safeguards were marked fully missing, but ${partial} control${partial===1?'':'s'} should be verified or completed before treating the program as mature.`:'Your answers indicate a strong baseline. The next step is to verify evidence, review the written program, and confirm the controls remain current.';
document.getElementById('year').textContent=new Date().getFullYear();