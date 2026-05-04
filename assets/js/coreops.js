/*
  CoreOps Dashboard Mockup 005
  -------------------------------------------------------
  Fake-UI / Präsentationslogik für CoreEngineStudio Showroom.
  Keine echte Speicherung, keine echte API, keine Hauptseiten-Patches.
*/

const requestData = [
  { id: "REQ-2401", customer: "All4You Service München", type: "Service-Portal", status: "neu", statusColor: "green", priority: "hoch", owner: "CoreOps Team" },
  { id: "REQ-2398", customer: "Muster Service GmbH", type: "Website Relaunch", status: "in Prüfung", statusColor: "orange", priority: "mittel", owner: "Beratung" },
  { id: "REQ-2394", customer: "CoreShop Demo", type: "Shop-System", status: "aktiv", statusColor: "green", priority: "hoch", owner: "Dev Layer" },
  { id: "REQ-2387", customer: "Community Portal Demo", type: "Community-Webseite", status: "wartet", statusColor: "blue", priority: "normal", owner: "Design Layer" },
  { id: "REQ-2382", customer: "Vereinsportal Demo", type: "Showroom-Konzept", status: "Konzept", statusColor: "gray", priority: "normal", owner: "Demo Layer" },
];

const modeContent = {
  service: {
    label: "Dienstleister Portal",
    values: { requests: 18, tickets: 42, mails: 128, autos: 9 },
  },
  shop: {
    label: "Shop / Store System",
    values: { requests: 31, tickets: 16, mails: 214, autos: 12 },
  },
  support: {
    label: "Support CRM",
    values: { requests: 9, tickets: 67, mails: 88, autos: 15 },
  },
};

const clients = [
  { initials: "A4", name: "All4You Service München", desc: "Anfrage-Wizards, Statuslogik, Mitarbeiterportal", status: "aktiv", color: "green" },
  { initials: "MS", name: "Muster Service GmbH", desc: "Relaunch, Leistungsseiten, Anfragebereich", status: "Review", color: "orange" },
  { initials: "CS", name: "CoreShop Demo", desc: "Shop, Produkte, Rollen, Checkout-Flow", status: "System", color: "blue" },
  { initials: "CP", name: "Community Portal Demo", desc: "Community-Webseite, Regeln, Team, Status", status: "Konzept", color: "gray" },
];

const tickets = [
  { id: "TCK-781", title: "Statusmail wird nach Anfrage ausgelöst", status: "gelöst", system: "Mail Engine", eta: "abgeschlossen" },
  { id: "TCK-779", title: "Kundenportal: Ticketnummer + E-Mail prüfen", status: "in arbeit", system: "Portal Auth", eta: "heute" },
  { id: "TCK-774", title: "Dashboard Detailpanel kompakter gestalten", status: "offen", system: "UI Layer", eta: "morgen" },
  { id: "TCK-771", title: "Rollenmatrix für Mitarbeiterzugänge", status: "geplant", system: "Admin Core", eta: "diese Woche" },
  { id: "TCK-768", title: "Produktdaten aus Datenbank laden", status: "in arbeit", system: "Store Layer", eta: "heute" },
];

const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const tasks = [
  { day: "Mo", time: "10:00", type: "Follow-up", title: "Kundenfeedback prüfen" },
  { day: "Di", time: "12:30", type: "KVA", title: "Angebot vorbereiten" },
  { day: "Mi", time: "15:00", type: "Design", title: "Dashboard Screenshots" },
  { day: "Do", time: "11:15", type: "Support", title: "Ticketstatus prüfen" },
  { day: "Fr", time: "09:45", type: "Automation", title: "Statusmail Testlauf" },
];

const automations = [
  { name: "Eingangsbestätigung", desc: "Sendet nach neuer Anfrage automatisch eine kurze Bestätigung.", status: "aktiv", color: "green", runs: "128 Läufe" },
  { name: "Follow-up Erinnerung", desc: "Erstellt Aufgaben, wenn eine Anfrage länger als 48h offen ist.", status: "aktiv", color: "green", runs: "31 Läufe" },
  { name: "Statuswechsel-Mail", desc: "Informiert Kunden bei Änderung von neu zu in Bearbeitung.", status: "test", color: "orange", runs: "12 Tests" },
  { name: "Rollen-Warnung", desc: "Markiert unvollständige Mitarbeiterrechte im Adminbereich.", status: "geplant", color: "gray", runs: "0 Läufe" },
];

const roles = [
  { role: "Administrator", access: "Voller Systemzugriff", users: 1, color: "orange" },
  { role: "Manager", access: "Anfragen, Tickets, Kunden, Kalender", users: 2, color: "blue" },
  { role: "Support", access: "Tickets bearbeiten, Notizen ergänzen", users: 4, color: "green" },
  { role: "Marketing", access: "Kommunikation, Vorlagen, Kundenpflege", users: 2, color: "gray" },
];

function pill(text, color = "gray") {
  return `<span class="status-pill ${color}">${text}</span>`;
}

function renderRequests() {
  const target = document.querySelector("#requestRows");
  if (!target) return;
  target.innerHTML = requestData.map(row => `
    <tr>
      <td>${row.id}</td>
      <td>${row.customer}</td>
      <td>${row.type}</td>
      <td>${pill(row.status, row.statusColor)}</td>
      <td>${pill(row.priority, row.priority === "hoch" ? "orange" : row.priority === "mittel" ? "blue" : "gray")}</td>
      <td>${row.owner}</td>
    </tr>
  `).join("");
}

function renderClients() {
  const target = document.querySelector("#clientList");
  if (!target) return;
  target.innerHTML = clients.map(client => `
    <div class="client-row">
      <div class="client-logo">${client.initials}</div>
      <div>
        <h4>${client.name}</h4>
        <p>${client.desc}</p>
      </div>
      ${pill(client.status, client.color)}
    </div>
  `).join("");
}

function renderKanban() {
  const target = document.querySelector("#kanbanBoard");
  if (!target) return;
  const columns = ["offen", "in arbeit", "geplant", "gelöst"];
  target.innerHTML = columns.map(col => {
    const items = tickets.filter(ticket => ticket.status === col);
    return `
      <div class="kanban-col">
        <h3>${col} · ${items.length}</h3>
        ${items.length ? items.map(ticket => `
          <div class="ticket-card">
            <small>${ticket.id}</small>
            <b>${ticket.title}</b>
            <span>${ticket.system} · ${ticket.eta}</span>
          </div>
        `).join("") : `<div class="ticket-card"><span>Keine Vorgänge</span></div>`}
      </div>
    `;
  }).join("");
}

function renderWeek() {
  const target = document.querySelector("#weekBoard");
  if (!target) return;
  target.innerHTML = days.map(day => {
    const dayTasks = tasks.filter(task => task.day === day);
    return `
      <div class="day-col">
        <h4>${day}</h4>
        ${dayTasks.map(task => `
          <div class="task">
            <small>${task.time} · ${task.type}</small>
            <b>${task.title}</b>
          </div>
        `).join("")}
      </div>
    `;
  }).join("");
}

function renderAutomations() {
  const target = document.querySelector("#automationList");
  if (!target) return;
  target.innerHTML = automations.map(item => `
    <div class="automation-row">
      <div>
        <h4>${item.name} ${pill(item.status, item.color)}</h4>
        <p>${item.desc}</p>
      </div>
      <button class="ghost-btn small">${item.runs}</button>
    </div>
  `).join("");
}

function renderRoles() {
  const target = document.querySelector("#roleGrid");
  if (!target) return;
  target.innerHTML = roles.map(item => `
    <div class="role-card">
      <div class="role-top">
        <span class="brand-mark small">${item.role.slice(0, 2).toUpperCase()}</span>
        ${pill(item.users + " User", item.color)}
      </div>
      <h4>${item.role}</h4>
      <p>${item.access}</p>
    </div>
  `).join("");
}

function switchPage(page) {
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.page === page));
  document.querySelectorAll(".content-page").forEach(view => view.classList.toggle("active", view.dataset.view === page));

  const titles = {
    overview: ["CoreOps Command Center", "Dashboard / Übersicht"],
    clients: ["CRM Layer", "Kunden & Anfragen"],
    tickets: ["Workflow Board", "Tickets / Vorgänge"],
    calendar: ["Planning Layer", "Kalender & Follow-ups"],
    automation: ["Logic Engine", "Automationen / Statusmails"],
    possibilities: ["System-Potenzial", "Möglichkeiten / Erweiterungen"],
    admin: ["Access Control", "Admin / Rollen / Einstellungen"],
  };
  const [kicker, title] = titles[page] || titles.overview;
  document.querySelector("#pageKicker").textContent = kicker;
  document.querySelector("#pageTitle").textContent = title;
}

function switchMode(mode) {
  const config = modeContent[mode] || modeContent.service;
  document.querySelector("#activeModeLabel").textContent = config.label;
  document.querySelectorAll(".mode-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  Object.entries(config.values).forEach(([key, value]) => {
    const target = document.querySelector(`[data-mode-value="${key}"]`);
    if (target) target.textContent = value;
  });
}

function init() {
  renderRequests();
  renderClients();
  renderKanban();
  renderWeek();
  renderAutomations();
  renderRoles();

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => switchPage(btn.dataset.page));
  });

  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
  });

  const heroLogin = document.querySelector("#heroLogin");
  const hideHero = () => heroLogin?.classList.add("is-hidden");
  const showHero = () => {
    heroLogin?.classList.remove("is-hidden");
    heroLogin?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  document.querySelector("#enterDemoBtn")?.addEventListener("click", hideHero);
  document.querySelector("#skipHeroBtn")?.addEventListener("click", hideHero);
  document.querySelector("#accessPreviewBtn")?.addEventListener("click", showHero);
  document.querySelector("#sidebarAccessPreviewBtn")?.addEventListener("click", showHero);
  document.querySelector("#presentationBtn")?.addEventListener("click", () => {
    document.querySelector("#appShell")?.classList.toggle("presentation-mode");
  });
}

document.addEventListener("DOMContentLoaded", init);
