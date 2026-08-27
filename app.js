const questions=[
{cat:'WISP Foundation',q:'Do you maintain a written, customized WISP for the firm?',why:'A written plan should reflect the real business, assigned responsibilities, and current safeguards.'},
{cat:'WISP Foundation',q:'Is a specific person assigned to coordinate and review the security program?',why:'Ownership matters. Someone should be responsible for maintaining and updating the program.'},
{cat:'Administrative',q:'Do staff receive recurring security-awareness and phishing training?',why:'Employees handling taxpayer information need practical training and reinforcement.'},
{cat:'Access',q:'Is MFA enforced for email and other systems that access taxpayer information?',why:'MFA materially reduces account-takeover risk and is a core access safeguard.'},
{cat:'Technical',q:'Are firm-managed endpoints monitored, patched, and protected by managed security tools?',why:'Endpoints remain a major access path to sensitive data and need active maintenance.'},
{cat:'Technical',q:'Is sensitive data protected with encryption where appropriate, including portable devices?',why:'Lost or stolen devices should not expose readable taxpayer data.'},
{cat:'Recovery',q:'Do you maintain tested backups for critical business and client data?',why:'Backups should support actual recovery, not merely exist.'},
{cat:'Administrative',q:'Do you have documented onboarding, offboarding, and access-removal procedures?',why:'Old or excessive access creates unnecessary risk.'},
{cat:'Risk & Vendors',q:'Do you periodically assess security risks and document material findings?',why:'A security program should change when the business, technology, or threats change.'},
{cat:'Risk & Vendors',q:'Do you review key service providers that handle or can access sensitive client information?',why:'Vendor access and outsourced services are part of the firm’s security exposure.'}
];
const form=document.getElementById('assessmentForm');
questions.forEach((item,i)=>{
 const wrap=document.createElement('div'); wrap.className='question';
 wrap.innerHTML=`<span class="eyebrow">${item.cat}</span><strong>${i+1}. ${item.q}</strong><div class="choices">
 <span class="choice"><input required type="radio" id="q${i}y" name="q${i}" value="2"><label for="q${i}y">Yes</label></span>
 <span class="choice"><input type="radio" id="q${i}p" name="q${i}" value="1"><label for="q${i}p">Partly / Unsure</label></span>
 <span class="choice"><input type="radio" id="q${i}n" name="q${i}" value="0"><label for="q${i}n">No</label></span></div>`;
 form.appendChild(wrap);
});
const submit=document.createElement('button');submit.className='btn primary submit';submit.type='submit';submit.textContent='Generate My Gap Report';form.appendChild(submit);
form.addEventListener('submit',e=>{
 e.preventDefault();
 const answers=questions.map((_,i)=>Number(new FormData(form).get(`q${i}`)));
 localStorage.setItem('wispcheckResults',JSON.stringify({answers,created:new Date().toISOString()}));
 location.href='/report/';
});
document.getElementById('year').textContent=new Date().getFullYear();