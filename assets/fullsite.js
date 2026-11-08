document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.filter-row').forEach(row=>{
    const buttons=row.querySelectorAll('.filter');
    const items=document.querySelectorAll('.project-tile,.credential');
    buttons.forEach(btn=>btn.addEventListener('click',()=>{
      buttons.forEach(b=>b.classList.toggle('active',b===btn));
      items.forEach(el=>el.classList.toggle('hidden',btn.dataset.cat!=='all'&&el.dataset.filter!==btn.dataset.cat));
    }));
  });
  const dialog=document.querySelector('.project-dialog');
  if(dialog){
    document.querySelectorAll('.project-open').forEach(btn=>btn.addEventListener('click',()=>{
      const template=document.getElementById('project-data-'+btn.dataset.project);
      if(!template)return;
      const container=document.getElementById('dialog-content');container.innerHTML='';container.appendChild(template.content.cloneNode(true));dialog.showModal();
    }));
    dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  }
  const chapters=[
    ['The first prototypes','Starting with Arduino projects turned into a habit of learning by building. That curiosity later shaped practical work in water conservation, assistive technology, and IoT.','images/project_timertap.jpg','Arduino · IoT · Water conservation'],
    ['Georgia Tech: beyond the classroom','Studying Electrical Engineering with Robotics & Autonomous Systems and Circuit Technology threads, while building across embedded systems, controls, digital design, and PCB engineering.','images/project_rtl.jpg','Electrical Engineering · Robotics · Circuit Technology'],
    ['Promaxo: engineering in simulation','During a Robotics Engineering internship, I worked on modeling pneumatic actuation and motor/gear-train behavior. Over 500 parameter sweeps helped evaluate system trade-offs before hardware decisions.','images/project_presslog.jpg','Robotics internship · Modeling · 500+ sweeps'],
    ['Electronic ARTrium: interactive systems','Research through Georgia Tech’s VIP program brought together sensor inputs, depth cameras, point cloud processing, and interactive visualization for exhibit experiences.','images/project_aris.jpg','Research · Sensors · Depth imaging'],
    ['IEEE: technical community at scale','As President of IEEE Georgia Tech, I lead technical programming, partnerships, and an engineering student community while preparing events and collaborative projects.','images/project_soilhawk.jpg','Leadership · Technical events · Partnerships']
  ];
  const steps=document.querySelectorAll('.story-step');
  steps.forEach(button=>button.addEventListener('click',()=>{
    steps.forEach(b=>b.classList.toggle('active',b===button));const i=Number(button.dataset.story);const item=chapters[i];
    document.querySelector('.story-index').textContent=`CHAPTER ${String(i+1).padStart(2,'0')} / 05`;
    document.querySelector('#story-title').textContent=item[0];document.querySelector('#story-body').textContent=item[1];
    const im=document.querySelector('#story-visual img');im.src=item[2];im.alt=item[0];document.querySelector('#story-tags').textContent=item[3];
  }));
});
