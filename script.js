/*
  ADD NEW PROJECTS HERE ONLY.
  Copy one object, change the values, and save.
  No HTML editing is required.
*/
const projects = [
  {
    title: "Pizza Fire",
    category: "FULL-STACK WEB APPLICATION",
    description: "A complete responsive pizza ordering platform with customer authentication, ordering, My Orders and tracking, plus separate admin and delivery workflows.",
    stack: ["JavaScript","HTML","CSS","Python","FastAPI","SQLite","REST API","Render"],
    features: [
      ["Customer", "Signup · Login · Cart · Checkout · Orders · Tracking"],
      ["Admin", "Dashboard · Order management · Status updates"],
      ["Delivery", "Assigned orders · Order completion"],
      ["Responsive", "Works across desktop and mobile"]
    ],
    live: "https://pizza-fire-frontend.onrender.com",
    github: "https://github.com/Aditya-Vyas-11/Pizza-fire",
    visual: "pizza"
  }
];

function projectVisual(project){
  if(project.visual === "pizza"){
    return `<div class="browser">
      <div class="browser-bar"><i></i><i></i><i></i><span>${project.live.replace(/^https?:\/\//,"")}</span></div>
      <div class="mock-nav"><b>🍕 PIZZA FIRE</b><span>MENU</span><span>MY ORDERS</span><button>LOGIN</button></div>
      <div class="mock-body">
        <div class="mock-title">Hot pizza.<br><span>Fast ordering.</span></div>
        <div class="pizza">🍕</div>
        <div class="mock-cards"><div>Customer<br><b>Orders</b></div><div>Admin<br><b>Manage</b></div><div>Delivery<br><b>Complete</b></div></div>
      </div>
    </div>`;
  }
  return `<div class="browser generic-preview"><div class="mock-body"><div class="mock-title">${project.title}</div><div class="generic-mark">&lt;/&gt;</div></div></div>`;
}

function renderProjects(){
  const container=document.getElementById("projects");
  container.innerHTML=projects.map((p,i)=>`
    <article class="project">
      <div class="project-visual">${projectVisual(p)}</div>
      <div class="project-info">
        <span class="project-label">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="features">${p.features.map(([a,b])=>`<div><b>${a}</b><span>${b}</span></div>`).join("")}</div>
        <div class="chips">${p.stack.map(x=>`<span>${x}</span>`).join("")}</div>
        <div class="project-links">
          ${p.live?`<a class="live" target="_blank" rel="noopener" href="${p.live}">Live Demo ↗</a>`:""}
          ${p.github?`<a target="_blank" rel="noopener" href="${p.github}">View GitHub →</a>`:""}
        </div>
      </div>
    </article>`).join("");
}
renderProjects();

const menu=document.getElementById("menu"),nav=document.getElementById("nav");
if(menu&&nav){
  menu.addEventListener("click",()=>{
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
      nav.style.display="flex";nav.style.position="absolute";nav.style.top="64px";nav.style.left="12px";nav.style.right="12px";
      nav.style.padding="14px";nav.style.flexDirection="column";nav.style.background="#101218";nav.style.border="1px solid #292e39";nav.style.borderRadius="12px";
    }else nav.removeAttribute("style");
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");nav.removeAttribute("style")}));
}
document.getElementById("year").textContent=new Date().getFullYear();
