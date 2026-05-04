# CoreOps / RentalOps Demo-Welten

Dieses Repository enthält eigenständige Demo- und Mockup-Welten für **CoreEngineStudio**.

Die Demos dienen als visuelle Präsentationsflächen für den späteren CoreEngineStudio-Showroom.  
Sie sind bewusst keine voll funktionsfähigen Produktivsysteme, sondern hochwertige Beispieloberflächen, mit denen gezeigt werden kann, wie Webseiten, Portale, Buchungssysteme oder interne Dashboards aussehen könnten.

---

## Enthaltene Demos

### CoreOps

**CoreOps** ist eine interne System-/Dashboard-Demo im Dark-Core-Tech-Look.

Beispielhafte Inhalte:

- Dashboard-Übersicht
- Kunden & Anfragen
- Tickets / Vorgänge
- Kalender / Follow-ups
- Automationen / Statusmails
- Admin / Rollen
- Möglichkeiten / System-Potenzial

Ziel:  
Zeigen, wie ein internes Mitarbeiterportal, CRM, Ticket-System oder Verwaltungsdashboard aussehen könnte.

---

### RentalOps

**RentalOps** ist eine öffentliche Vermietungs-/Booking-Demo.

Beispielhafte Inhalte:

- moderne Vermietungs-Startseite
- Mietflotte / Mietobjekte
- Anfrage- und Verfügbarkeitslogik
- Ablauf-Erklärung
- Portal- und Belegungs-Vorschau
- System dahinter / Automationen

Ziel:  
Zeigen, wie eine Website für Autovermietung, Anhängervermietung, Gerätevermietung oder ähnliche Mietmodelle aussehen könnte.

---

## Projektstruktur

```text
/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── ...
├── START_COREOPS_DEMO.bat
├── START_RENTALOPS_DEMO.bat
└── README.md
```

Je nach aktueller Demo-Version kann die genaue Asset-Struktur leicht abweichen.

---

## Lokal starten

### CoreOps starten

```bat
START_COREOPS_DEMO.bat
```

### RentalOps starten

```bat
START_RENTALOPS_DEMO.bat
```

Alternativ kann die `index.html` direkt im Browser geöffnet werden.

---

## Deployment

Die Demo kann über **Cloudflare Pages** veröffentlicht werden.

Wichtig:

- Wenn das Projekt per manueller Datei hochgeladen wurde, ist ein Deployment auch ohne Git-Verbindung möglich.
- Für automatische Deployments sollte Cloudflare Pages wieder mit dem GitHub-Repository verbunden sein.
- GitHub erkennt diese Datei nur als Repository-Beschreibung, wenn sie exakt `README.md` heißt.

---

## Hinweis

Diese Demos enthalten ausschließlich neutrale Beispielinhalte.  
Nicht freigegebene Kundenprojekte, private Namen oder echte Kundendaten sollen hier nicht öffentlich verwendet werden.

Beispielkontakt für Demo-Inhalte:

```text
info@core-engineeringstudio.de
```

---

## CoreEngineStudio

**CoreEngineStudio** steht für:

> Digitale Auftritte vorne. Smarte Engine dahinter.

Ziel ist es, moderne Webseiten mit durchdachten digitalen Systemen, Portalen, Dashboards und Automationen zu verbinden.
