/*
=========================================================
ADD NEW PROJECTS HERE
=========================================================

For a new project, copy one object and change its values.
You do NOT need to edit index.html.

Example:

{
  title: "My New Website",
  category: "BUSINESS WEBSITE",
  description: "Short project description.",
  stack: ["HTML", "CSS", "JavaScript"],
  features: [
    ["Design", "Modern responsive interface"],
    ["Pages", "Home · Services · Contact"],
    ["Responsive", "Mobile + desktop"],
    ["Deployment", "Live online"]
  ],
  live: "https://your-live-site.com",
  github: "https://github.com/your-repo",
  visual: "generic"
}

=========================================================
*/

const projects = [
  {
    title: "Pizza Fire",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A responsive pizza ordering platform with customer authentication, ordering, My Orders and tracking, plus separate admin and delivery workflows.",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "FastAPI",
      "SQLite",
      "REST API",
      "Render"
    ],
    features: [
      ["Customer", "Signup · Login · Cart · Checkout · Tracking"],
      ["Admin", "Dashboard · Order management · Status updates"],
      ["Delivery", "Assigned orders · Complete orders"],
      ["Responsive", "Desktop + mobile friendly"]
    ],
    live: "https://pizza-fire-frontend.onrender.com",
    github: "https://github.com/Aditya-Vyas-11/Pizza-fire",
    visual: "pizza"
  }

  /*
  ADD YOUR GYM / SALON PROJECTS HERE LATER.

  Example:

  ,{
    title: "Gym Website",
    category: "BUSINESS WEBSITE",
    description: "Modern responsive website for a fitness business.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      ["Landing", "Modern hero section"],
      ["Services", "Programs and memberships"],
      ["Responsive", "Mobile + desktop"],
      ["Contact", "Easy enquiry flow"]
    ],
    live: "https://your-gym-site.com",
    github: "https://github.com/your-gym-repo",
    visual: "generic"
  }
  */
];

function renderProjectVisual(project) {
  if (project.visual === "pizza") {
    return `
      <div class="browser">
        <div class="browser-bar">
          <i></i><i></i><i></i>
          <span>${project.live.replace(/^https?:\/\//, "")}</span>
        </div>

        <div class="mock-nav">
          <b>🍕 PIZZA FIRE</b>
          <span>MENU</span>
          <span>MY ORDERS</span>
          <button>LOGIN</button>
        </div>

        <div class="mock-body">
          <div class="mock-title">
            Hot pizza.<br>
            <span>Fast ordering.</span>
          </div>

          <div class="pizza">🍕</div>

          <div class="mock-cards">
            <div>Customer<br><b>Orders</b></div>
            <div>Admin<br><b>Manage</b></div>
            <div>Delivery<br><b>Complete</b></div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="browser generic-preview">
      <div class="mock-body">
        <div class="generic-mark">&lt;/&gt;</div>
        <div class="generic-title">${project.title}</div>

        <div class="generic-lines">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  `;
}

function renderProjects() {
  const container = document.getElementById("projects");

  container.innerHTML = projects.map(project => `
    <article class="project">

      <div class="project-visual">
        ${renderProjectVisual(project)}
      </div>

      <div class="project-info">

        <span class="project-label">
          ${project.category}
        </span>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="features">
          ${project.features.map(([title, text]) => `
            <div>
              <b>${title}</b>
              <span>${text}</span>
            </div>
          `).join("")}
        </div>

        <div class="chips">
          ${project.stack.map(tech => `
            <span>${tech}</span>
          `).join("")}
        </div>

        <div class="project-links">

          ${
            project.live && project.live !== "#"
              ? `
                <a
                  class="live"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="${project.live}">
                  Live Demo ↗
                </a>
              `
              : ""
          }

          ${
            project.github && project.github !== "#"
              ? `
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="${project.github}">
                  View GitHub →
                </a>
              `
              : ""
          }

        </div>

      </div>
    </article>
  `).join("");
}

renderProjects();

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const open = mainNav.classList.toggle("mobile-open");

    if (open) {
      mainNav.style.display = "flex";
      mainNav.style.position = "absolute";
      mainNav.style.top = "64px";
      mainNav.style.left = "12px";
      mainNav.style.right = "12px";
      mainNav.style.padding = "14px";
      mainNav.style.flexDirection = "column";
      mainNav.style.background = "#101218";
      mainNav.style.border = "1px solid #292e39";
      mainNav.style.borderRadius = "12px";
    } else {
      mainNav.removeAttribute("style");
    }
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("mobile-open");
      mainNav.removeAttribute("style");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
