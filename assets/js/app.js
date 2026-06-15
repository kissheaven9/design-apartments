/* ============================================================
   Design Apartments — App-Logik (Vanilla JS, Demo ohne Backend)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Icons ---------- */
  const I = {
    check: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 13l4 4L19 7"/></svg>',
    size:  '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
    users: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    star:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 17.8 5.4 21.2 6.7 14l-5-4.8 7-.9z"/></svg>',
    pin:   '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    cleft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>',
    cright:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>',
    cal:   '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    coffee:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8h1a3 3 0 0 1 0 6h-1"/><path d="M2 8h16v5a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8z"/><path d="M6 2v2M10 2v2M14 2v2"/></svg>',
    tv:    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M8 22h8M12 6l4-3M12 6L8 3"/></svg>',
    lock:  '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    ac:    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8h18M3 13h18"/><path d="M7 18c0-1 1-1.5 1-2.5M12 18c0-1 1-1.5 1-2.5M17 18c0-1 1-1.5 1-2.5"/></svg>',
    wifi:  '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/></svg>',
    kitchen:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2v8a2 2 0 0 0 4 0V2M8 10v12M18 2c-2 0-3 2-3 5s1 4 3 4v11"/></svg>',
    washer:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M8 6h.01M11 6h.01"/></svg>',
    desk:  '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
    bed:   '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 18v-7h20v7M2 11V7M22 11v4M6 11V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M2 18v2M22 18v2"/></svg>',
    blackout:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    sound: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/></svg>',
    linen: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 2 7l10 5 10-5z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/></svg>',
  };

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const euro = (n) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 0 });
  const CLEANING_FEE = 45;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DOW = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  /* ---------- Datum-Helfer ---------- */
  const pad = (n) => String(n).padStart(2, "0");
  const toISO = (d) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const today0 = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const todayISO = () => toISO(today0());
  const nightsBetween = (a, b) => Math.round((parse(b) - parse(a)) / 86400000);
  const fmtDate = (s) => parse(s).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });
  function overlaps(inA, outA, ranges) {
    const s = parse(inA), e = parse(outA);
    return ranges.some((r) => s < parse(r.to) && e > parse(r.from));
  }
  function isAvailable(apt, inD, outD) { return (!inD || !outD) ? true : !overlaps(inD, outD, apt.booked); }
  function isNightBooked(apt, date) { return apt.booked.some((r) => date >= parse(r.from) && date < parse(r.to)); }

  /* ---------- Statische Sektionen ---------- */
  function renderStatic() {
    $$("[data-icon]").forEach((el) => { el.innerHTML = I[el.dataset.icon] || ""; });

    const sel = $("#s-city");
    CITIES.forEach((c) => { const o = document.createElement("option"); o.value = c; o.textContent = c; sel.appendChild(o); });
    $("#s-in").min = todayISO();
    $("#s-out").min = todayISO();

    const feature = ["coffee", "tv", "lock", "ac", "wifi", "kitchen", "desk", "washer"];
    const sub = {
      coffee: "Frischer Kaffee jeden Morgen", tv: "Streaming inklusive", lock: "Self-Check-in jederzeit",
      ac: "Angenehmes Klima", wifi: "Schnell & stabil", kitchen: "Selbst kochen leicht gemacht",
      desk: "Konzentriert arbeiten", washer: "Frische Wäsche vor Ort",
    };
    $("#amenitiesGrid").innerHTML = feature.map((k, i) => `
      <div class="amenity reveal" style="transition-delay:${i * 55}ms">
        <span class="ic">${I[k]}</span><b>${AMENITY_LABELS[k]}</b><span>${sub[k]}</span>
      </div>`).join("");

    const plan = [
      { y: "2025", n: 5 }, { y: "2026", n: 14 }, { y: "2027", n: 30 },
      { y: "2028", n: 52 }, { y: "2029", n: 78 }, { y: "2030", n: 100 },
    ];
    $("#planGrid").innerHTML = plan.map((p, i) => `
      <div class="plan__col reveal" style="transition-delay:${i * 55}ms">
        <div class="plan__year">${p.y}</div>
        <div class="plan__bar"><i style="height:${Math.round(p.n)}%"></i></div>
        <div class="plan__n">${p.n}<span>Apartments</span></div>
      </div>`).join("");
  }

  /* ---------- Katalog ---------- */
  function cardHTML(apt, i) {
    return `
      <article class="card reveal" style="transition-delay:${(i % 3) * 70}ms">
        <div class="card__media">
          <img src="${apt.images[0]}" alt="${apt.title}, ${apt.city}" loading="lazy" />
          <div class="card__price"><b>${euro(apt.price)}</b> / Nacht</div>
        </div>
        <div class="card__body">
          <div class="card__city">${I.pin} ${apt.city}</div>
          <h3 class="card__title">${apt.title}</h3>
          <div class="card__meta">
            <span>${apt.type}</span>
            <span>${I.size} ${apt.size} m²</span>
            <span>${I.users} bis ${apt.guests}</span>
            <button class="rating-btn" type="button" data-reviews="${apt.id}">${I.star} ${apt.rating.toLocaleString("de-DE")} <span class="cnt">(${(REVIEWS[apt.id] || []).length})</span></button>
          </div>
          <div class="card__actions">
            <button class="btn btn--secondary btn--sm" data-detail="${apt.id}">Details</button>
            <button class="btn btn--primary btn--sm" data-book="${apt.id}">Buchen</button>
          </div>
        </div>
      </article>`;
  }

  let lastQuery = null;

  function renderCatalog(list) {
    const grid = $("#catalogGrid");
    if (!list.length) {
      grid.innerHTML = `<div class="catalog__empty">${I.empty}<p>Für diese Auswahl sind leider keine Apartments verfügbar.<br>Bitte ändern Sie Stadt, Zeitraum oder Gästezahl.</p></div>`;
    } else {
      grid.innerHTML = list.map(cardHTML).join("");
    }
    requestAnimationFrame(() => $$(".reveal", grid).forEach((el) => el.classList.add("is-in")));
    observeReveal();
  }

  /* ---------- Filterleiste im Katalog ---------- */
  function renderControls() {
    const q = lastQuery || {};
    const g = q.guests || 2;
    const cityOpts = ['<option value="">Alle Städte</option>']
      .concat(CITIES.map((c) => `<option value="${c}" ${q.city === c ? "selected" : ""}>${c}</option>`)).join("");
    const guestOpts = [1, 2, 3, 4].map((n) => `<option value="${n}" ${n === g ? "selected" : ""}>${n} ${n === 1 ? "Gast" : "Gäste"}</option>`).join("");
    const active = !!(q.city || (q.checkin && q.checkout));
    $("#catalogControls").innerHTML = `
      <form class="filterbar" id="filterForm">
        <div class="field"><label for="f-city">Stadt</label><select id="f-city" name="city">${cityOpts}</select></div>
        <div class="field"><label for="f-in">Anreise</label><input type="date" id="f-in" name="checkin" min="${todayISO()}" value="${q.checkin || ""}"></div>
        <div class="field"><label for="f-out">Abreise</label><input type="date" id="f-out" name="checkout" min="${q.checkin || todayISO()}" value="${q.checkout || ""}"></div>
        <div class="field"><label for="f-guests">Gäste</label><select id="f-guests" name="guests">${guestOpts}</select></div>
        <button class="btn btn--primary btn--sm" type="submit">Aktualisieren</button>
        <button class="btn btn--ghost btn--sm" type="button" data-reset ${active ? "" : "disabled"}>Alle anzeigen</button>
      </form>`;
  }

  function applySearch(q) {
    lastQuery = q;
    let list = APARTMENTS.slice();
    if (q.city) list = list.filter((a) => a.city === q.city);
    if (q.guests) list = list.filter((a) => a.guests >= q.guests);
    if (q.checkin && q.checkout) list = list.filter((a) => isAvailable(a, q.checkin, q.checkout));

    const note = $("#catalogNote");
    if (q.city || (q.checkin && q.checkout)) {
      const parts = [q.city || "alle Städte"];
      if (q.checkin && q.checkout) parts.push(`${fmtDate(q.checkin)} – ${fmtDate(q.checkout)}`);
      parts.push(`${q.guests || 2} ${(q.guests || 2) === 1 ? "Gast" : "Gäste"}`);
      note.textContent = `${list.length} ${list.length === 1 ? "Apartment" : "Apartments"} verfügbar · ${parts.join(" · ")}`;
    } else {
      note.textContent = "Alle Apartments im Überblick. Nutzen Sie die Suche, um nach Stadt, Datum und Gästezahl zu filtern.";
    }
    renderCatalog(list);
    renderControls();
  }

  function resetSearch() {
    $("#s-city").value = ""; $("#s-in").value = ""; $("#s-out").value = ""; $("#s-guests").value = "2";
    applySearch({});
  }

  /* ---------- Modal-Steuerung ---------- */
  let openModalEl = null;
  function openModal(id) {
    const m = document.getElementById(id);
    if (openModalEl && openModalEl !== m) openModalEl.classList.remove("is-open");
    m.classList.add("is-open");
    m.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    openModalEl = m;
    const f = m.querySelector(".modal__close, input, select, button");
    if (f) setTimeout(() => f.focus(), 50);
  }
  function closeModal() {
    if (!openModalEl) return;
    openModalEl.classList.remove("is-open");
    openModalEl.setAttribute("aria-hidden", "true");
    openModalEl = null;
    document.body.classList.remove("no-scroll");
  }

  /* ============================================================
     Wiederverwendbarer Verfügbarkeitskalender
     host: Container; apt: Apartment; opts: {start,end,onChange}
     ============================================================ */
  function createCalendar(host, apt, opts) {
    opts = opts || {};
    const t = today0();
    const minMonth = new Date(t.getFullYear(), t.getMonth(), 1);
    const maxMonth = new Date(t.getFullYear(), t.getMonth() + 12, 1);
    let month = opts.start ? new Date(parse(opts.start).getFullYear(), parse(opts.start).getMonth(), 1) : new Date(minMonth);
    const state = { start: opts.start || null, end: opts.end || null };

    function draw() {
      const first = new Date(month.getFullYear(), month.getMonth(), 1);
      const offset = (first.getDay() + 6) % 7;
      const dim = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
      let cells = "";
      for (let i = 0; i < offset; i++) cells += '<span class="cal__day cal__day--empty"></span>';
      for (let d = 1; d <= dim; d++) {
        const date = new Date(month.getFullYear(), month.getMonth(), d);
        const iso = toISO(date);
        const past = date < t;
        const booked = isNightBooked(apt, date);
        const disabled = past || booked;
        let cls = "cal__day";
        if (booked) cls += " cal__day--booked";
        if (state.start && iso === state.start) cls += " cal__day--start";
        if (state.end && iso === state.end) cls += " cal__day--end";
        if (state.start && state.end && iso > state.start && iso < state.end) cls += " cal__day--inrange";
        cells += `<button type="button" class="${cls}" data-day="${iso}" ${disabled ? "disabled" : ""}>${d}</button>`;
      }
      const prevOff = month <= minMonth;
      const nextOff = month >= maxMonth;
      host.innerHTML = `
        <div class="cal__head">
          <div class="cal__title">${month.toLocaleDateString("de-DE", { month: "long", year: "numeric" })}</div>
          <div class="cal__nav">
            <button type="button" data-cal-prev aria-label="Vorheriger Monat" ${prevOff ? "disabled" : ""}>${I.cleft}</button>
            <button type="button" data-cal-next aria-label="Nächster Monat" ${nextOff ? "disabled" : ""}>${I.cright}</button>
          </div>
        </div>
        <div class="cal__dows">${DOW.map((d) => `<span>${d}</span>`).join("")}</div>
        <div class="cal__grid">${cells}</div>
        <div class="cal__legend">
          <span><i class="free"></i> frei</span>
          <span><i class="busy"></i> belegt</span>
          <span><i class="sel"></i> Ihre Auswahl</span>
        </div>`;
    }

    function pick(iso) {
      if (!state.start || (state.start && state.end)) { state.start = iso; state.end = null; }
      else if (iso > state.start) {
        if (overlaps(state.start, iso, apt.booked)) { toast("In diesem Zeitraum liegt ein belegter Tag."); state.start = iso; state.end = null; }
        else state.end = iso;
      } else { state.start = iso; state.end = null; }
      draw();
      if (opts.onChange) opts.onChange(getSel());
    }

    function getSel() { return { start: state.start, end: state.end }; }

    host.addEventListener("click", (e) => {
      const prev = e.target.closest("[data-cal-prev]");
      const next = e.target.closest("[data-cal-next]");
      const day = e.target.closest("[data-day]");
      if (prev) { month = new Date(month.getFullYear(), month.getMonth() - 1, 1); draw(); }
      else if (next) { month = new Date(month.getFullYear(), month.getMonth() + 1, 1); draw(); }
      else if (day && !day.disabled) { pick(day.dataset.day); }
    });

    draw();
    return { getSel };
  }

  /* ---------- Detail-Modal ---------- */
  function openDetail(id) {
    const apt = APARTMENTS.find((a) => a.id === id);
    if (!apt) return;
    const amen = apt.amenities.map((k) => `<li><span class="ic">${I.check}</span>${AMENITY_LABELS[k]}</li>`).join("");
    const thumbs = apt.images.map((src, i) => `<button data-thumb="${i}" class="${i === 0 ? "is-active" : ""}"><img src="${src}" alt="" loading="lazy"></button>`).join("");
    // Vorauswahl aus Suche (falls für dieses Apartment gültig)
    const q = lastQuery || {};
    const pre = (q.checkin && q.checkout && isAvailable(apt, q.checkin, q.checkout)) ? { start: q.checkin, end: q.checkout } : {};

    $("#detailContent").innerHTML = `
      <div class="detail__gallery">
        <div class="detail__main"><img id="detailMain" src="${apt.images[0]}" alt="${apt.title}"></div>
        ${apt.images.length > 1 ? `<div class="detail__thumbs">${thumbs}</div>` : ""}
      </div>
      <div class="detail__body">
        <div class="detail__city">${apt.city}</div>
        <h3 class="detail__title" id="detailTitle">${apt.title}</h3>
        <div class="detail__meta">
          <span>${apt.type}</span>
          <span>${I.size} ${apt.size} m²</span>
          <span>${I.users} bis ${apt.guests} Gäste</span>
          <button class="rating-btn" type="button" data-reviews="${apt.id}">${I.star} ${apt.rating.toLocaleString("de-DE")} <span class="cnt">· ${(REVIEWS[apt.id] || []).length} Bewertungen</span></button>
        </div>
        <p>${apt.desc}</p>
        <h4 style="font-family:var(--font-display);font-weight:500;margin:22px 0 6px">Ausstattung</h4>
        <ul class="detail__amen">${amen}</ul>
        <div class="detail__cal-wrap">
          <h4>${I.cal} Verfügbarkeit &amp; Termine</h4>
          <div class="cal" id="detailCal"></div>
          <div class="cal-summary" id="detailSummary"></div>
        </div>
      </div>`;

    $$('[data-thumb]', $("#detailContent")).forEach((b) => b.addEventListener("click", () => {
      $("#detailMain").src = apt.images[+b.dataset.thumb];
      $$('[data-thumb]').forEach((x) => x.classList.toggle("is-active", x === b));
    }));

    const cal = createCalendar($("#detailCal"), apt, { start: pre.start, end: pre.end, onChange: () => updateDetailSummary(apt, cal) });
    updateDetailSummary(apt, cal);
    openModal("modalDetail");
  }

  function updateDetailSummary(apt, cal) {
    const { start, end } = cal.getSel();
    const box = $("#detailSummary");
    if (start && end) {
      const n = nightsBetween(start, end);
      const total = n * apt.price + CLEANING_FEE;
      box.innerHTML = `
        <div class="cal-summary__info">${fmtDate(start)} – ${fmtDate(end)} · ${n} ${n === 1 ? "Nacht" : "Nächte"} · <b>${euro(total)}</b></div>
        <button class="btn btn--primary btn--sm" data-book-detail="${apt.id}" data-ci="${start}" data-co="${end}">Diese Daten buchen</button>`;
    } else if (start) {
      box.innerHTML = `<span class="cal-summary__hint">Anreise gewählt — bitte Abreisedatum im Kalender wählen.</span>`;
    } else {
      box.innerHTML = `<span class="cal-summary__hint">Wählen Sie freie Tage im Kalender, um diese Daten zu buchen.</span>
        <button class="btn btn--secondary btn--sm" data-book-detail="${apt.id}">Zur Buchung</button>`;
    }
  }

  /* ---------- Buchungs-Modal ---------- */
  let bookCal = null;
  function openBooking(id, preset) {
    const apt = APARTMENTS.find((a) => a.id === id);
    if (!apt) return;
    const q = preset || lastQuery || {};
    const ci = (q.checkin && isAvailable(apt, q.checkin, q.checkout)) ? q.checkin : "";
    const co = ci ? q.checkout : "";
    const guests = (q.guests && q.guests <= apt.guests) ? q.guests : Math.min(2, apt.guests);
    const guestOpts = Array.from({ length: apt.guests }, (_, i) =>
      `<option value="${i + 1}" ${i + 1 === guests ? "selected" : ""}>${i + 1} ${i === 0 ? "Gast" : "Gäste"}</option>`).join("");

    $("#bookContent").innerHTML = `
      <div class="book__head">
        <div class="detail__city">${apt.city}</div>
        <h3 id="bookTitle">${apt.title}</h3>
        <p class="book__sub">${apt.type} · ${apt.size} m² · ${euro(apt.price)} / Nacht</p>
      </div>
      <form class="book__form" id="bookForm" novalidate data-apt="${apt.id}">
        <div class="field"><label>${I.cal} Reisedaten wählen (nur freie Tage)</label>
          <div class="cal" id="bookCalEl"></div>
          <span class="field__error" id="bookDateErr">Bitte freie An- und Abreise im Kalender wählen.</span>
        </div>
        <div class="field"><label for="b-guests">Gäste</label><select id="b-guests" name="guests">${guestOpts}</select></div>
        <div class="book__summary" id="bookSummary"></div>
        <div class="field"><label for="b-name">Name</label><input type="text" id="b-name" name="name" autocomplete="name" placeholder="Vor- und Nachname"><span class="field__error">Bitte Namen angeben.</span></div>
        <div class="book__row">
          <div class="field"><label for="b-email">E-Mail</label><input type="email" id="b-email" name="email" autocomplete="email" placeholder="name@beispiel.de"><span class="field__error">Bitte gültige E-Mail angeben.</span></div>
          <div class="field"><label for="b-phone">Telefon</label><input type="tel" id="b-phone" name="phone" autocomplete="tel" placeholder="+49 …"><span class="field__error">Bitte Telefonnummer angeben.</span></div>
        </div>
        <div class="field"><label for="b-note">Nachricht (optional)</label><textarea id="b-note" name="note" placeholder="Besondere Wünsche?"></textarea></div>
        <button type="submit" class="btn btn--primary btn--block btn--lg">Buchungsanfrage senden</button>
      </form>`;

    const form = $("#bookForm");
    bookCal = createCalendar($("#bookCalEl"), apt, { start: ci || null, end: co || null, onChange: () => { setFieldErrorById("bookDateErr", false); updateBookSummary(apt); } });
    updateBookSummary(apt);
    $("#b-guests", form).addEventListener("change", () => updateBookSummary(apt));
    form.addEventListener("submit", (e) => onBookingSubmit(e, apt));
    $$("input, textarea", form).forEach((el) => el.addEventListener("input", () => setFieldError(el, false)));
    openModal("modalBook");
  }

  function updateBookSummary(apt) {
    const sel = bookCal ? bookCal.getSel() : {};
    const box = $("#bookSummary");
    if (!sel.start || !sel.end) { box.innerHTML = `<div class="line"><span>Bitte Reisedaten im Kalender wählen</span><span>—</span></div>`; return; }
    const n = nightsBetween(sel.start, sel.end);
    const subtot = n * apt.price;
    box.innerHTML = `
      <div class="line"><span>${fmtDate(sel.start)} – ${fmtDate(sel.end)}</span><span></span></div>
      <div class="line"><span>${euro(apt.price)} × ${n} ${n === 1 ? "Nacht" : "Nächte"}</span><span>${euro(subtot)}</span></div>
      <div class="line"><span>Endreinigung</span><span>${euro(CLEANING_FEE)}</span></div>
      <div class="line total"><span>Gesamt</span><b>${euro(subtot + CLEANING_FEE)}</b></div>`;
  }

  function setFieldError(el, on) { el.closest(".field").classList.toggle("field--invalid", !!on); }
  function setFieldErrorById(id, on) { const e = document.getElementById(id); if (e) e.closest(".field").classList.toggle("field--invalid", !!on); }

  function onBookingSubmit(e, apt) {
    e.preventDefault();
    const form = e.currentTarget;
    const sel = bookCal ? bookCal.getSel() : {};
    const name = $("#b-name", form), email = $("#b-email", form), phone = $("#b-phone", form);
    let ok = true, firstBad = null;
    const fail = (el) => { setFieldError(el, true); ok = false; firstBad = firstBad || el; };

    if (!sel.start || !sel.end) { setFieldErrorById("bookDateErr", true); ok = false; firstBad = firstBad || $("#bookCalEl"); }
    if (!name.value.trim()) fail(name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) fail(email);
    if (phone.value.replace(/[^\d]/g, "").length < 6) fail(phone);

    if (!ok) { if (firstBad && firstBad.focus) firstBad.focus(); return; }

    const ref = "DA-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    showSuccess(apt, sel.start, sel.end, $("#b-guests", form).value, name.value.trim(), ref);
  }

  function showSuccess(apt, ci, co, guests, name, ref) {
    const n = nightsBetween(ci, co);
    const total = n * apt.price + CLEANING_FEE;
    $("#successContent").innerHTML = `
      <div class="success__ic">${I.check.replace('width="20" height="20"', 'width="38" height="38"')}</div>
      <h3>Buchungsanfrage gesendet</h3>
      <p>Vielen Dank, ${name}! Wir haben Ihre Anfrage für<br><b style="color:var(--ink)">${apt.title}</b> in ${apt.city} erhalten.</p>
      <div class="success__ref">Referenz: ${ref}</div>
      <div class="book__summary" style="text-align:left;margin:0 0 22px">
        <div class="line"><span>Zeitraum</span><span>${fmtDate(ci)} – ${fmtDate(co)}</span></div>
        <div class="line"><span>Gäste</span><span>${guests}</span></div>
        <div class="line total"><span>Gesamt (${n} ${n === 1 ? "Nacht" : "Nächte"})</span><b>${euro(total)}</b></div>
      </div>
      <button class="btn btn--primary btn--block" data-close>Schließen</button>
      <p style="font-size:.8rem;margin-top:16px">Dies ist ein Demo-Projekt. Es werden keine Daten übertragen oder gespeichert.</p>`;
    openModal("modalSuccess");
  }

  /* ---------- Bewertungen-Modal ---------- */
  function starRow(r) { let s = ""; for (let i = 1; i <= 5; i++) s += i <= r ? "★" : '<span class="off">★</span>'; return s; }
  function initials(name) { return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase(); }
  function openReviews(id) {
    const apt = APARTMENTS.find((a) => a.id === id);
    if (!apt) return;
    const rv = REVIEWS[id] || [];
    const list = rv.map((r) => `
      <li class="review">
        <div class="review__top">
          <span class="review__ava">${initials(r.name)}</span>
          <div class="review__who"><b>${r.name}</b><span class="review__date">${r.date}</span></div>
          <span class="review__stars">${starRow(r.rating)}</span>
        </div>
        <p>${r.text}</p>
      </li>`).join("");
    $("#reviewsContent").innerHTML = `
      <div class="reviews">
        <div class="reviews__head">
          <div class="reviews__score">${apt.rating.toLocaleString("de-DE")}<span>★</span></div>
          <div><b id="reviewsTitle">Bewertungen</b><span class="sub">${rv.length} Bewertungen · ${apt.title}, ${apt.city}</span></div>
        </div>
        <ul class="reviews__list">${list}</ul>
      </div>`;
    openModal("modalReviews");
  }

  /* ---------- Gästestimmen-Sektion + Bewertung schreiben ---------- */
  function voiceCard(r, pending) {
    const where = r.aptTitle ? `${r.aptTitle}, ${r.city}` : "Gast in Bayern";
    return `
      <div class="voice reveal">
        <div class="voice__stars">${starRow(r.rating)}</div>
        <p class="voice__text">„${r.text}“</p>
        <div class="voice__foot">
          <span class="voice__ava">${initials(r.name)}</span>
          <div class="voice__who"><b>${r.name}</b><span>${where}</span></div>
          ${pending ? '<span class="voice__badge">In Prüfung</span>' : ""}
        </div>
      </div>`;
  }

  function renderVoices() {
    let total = 0;
    APARTMENTS.forEach((a) => { total += (REVIEWS[a.id] || []).length; });
    $("#voicesTotal").textContent = total;
    // je Apartment die erste (aktuellste) Stimme zeigen — Vielfalt über alle Objekte
    const sel = APARTMENTS.map((a) => {
      const rs = REVIEWS[a.id] || [];
      return rs.length ? Object.assign({}, rs[0], { aptTitle: a.title, city: a.city }) : null;
    }).filter(Boolean);
    $("#voicesGrid").innerHTML = sel.map((r) => voiceCard(r, false)).join("");
    observeReveal();
  }

  let voiceRating = 0;
  function paintStars(hover) {
    const n = hover || voiceRating;
    $$("#vStars .star").forEach((s) => s.classList.toggle("on", +s.dataset.val <= n));
  }
  function initVoiceForm() {
    const sel = $("#v-apt");
    APARTMENTS.forEach((a) => { const o = document.createElement("option"); o.value = a.id; o.textContent = `${a.title} (${a.city})`; sel.appendChild(o); });
    const stars = $$("#vStars .star");
    stars.forEach((s) => {
      s.addEventListener("click", () => { voiceRating = +s.dataset.val; paintStars(); setFieldError(s, false); });
      s.addEventListener("mouseenter", () => paintStars(+s.dataset.val));
    });
    $("#vStars").addEventListener("mouseleave", () => paintStars());
    $$("#voiceForm input, #voiceForm textarea").forEach((el) => el.addEventListener("input", () => setFieldError(el, false)));
    $("#voiceForm").addEventListener("submit", onVoiceSubmit);
  }
  function onVoiceSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = $("#v-name"), text = $("#v-text");
    let ok = true, firstBad = null;
    const fail = (el) => { setFieldError(el, true); ok = false; firstBad = firstBad || el; };
    if (!name.value.trim()) fail(name);
    if (voiceRating < 1) { setFieldError($("#vStars"), true); ok = false; firstBad = firstBad || $("#vStars").querySelector(".star"); }
    if (text.value.trim().length < 5) fail(text);
    if (!ok) { if (firstBad && firstBad.focus) firstBad.focus(); return; }

    const apt = APARTMENTS.find((a) => a.id === $("#v-apt").value);
    const r = { name: name.value.trim(), rating: voiceRating, text: text.value.trim(), aptTitle: apt ? apt.title : null, city: apt ? apt.city : "" };
    $("#voicesGrid").insertAdjacentHTML("afterbegin", voiceCard(r, true));
    $("#voicesGrid").firstElementChild.classList.add("is-in");
    f.reset(); voiceRating = 0; paintStars();
    toast("Vielen Dank! Ihre Bewertung wird geprüft und in Kürze veröffentlicht.");
    $("#stimmen").scrollIntoView({ behavior: "smooth" });
  }

  /* ---------- Toast ---------- */
  let toastT;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("is-show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("is-show"), 2800);
  }

  /* ---------- Reveal beim Scrollen ---------- */
  let io;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("is-in")); return; }
    if (!io) io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal:not(.is-in)").forEach((el) => io.observe(el));
  }

  /* ---------- Maus-Effekte ---------- */
  function initMouseFX() {
    if (reduceMotion) return;
    // Hero-Parallax
    const hero = $(".hero"), hm = $(".hero__media img");
    if (hero && hm) {
      hero.addEventListener("mousemove", (e) => {
        const r = hero.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        hm.style.transform = `translate(${px * 14}px, ${py * 14}px) scale(1.03)`;
      });
      hero.addEventListener("mouseleave", () => { hm.style.transform = ""; });
    }
    // Karten-Tilt zum Cursor
    const grid = $("#catalogGrid");
    let tilted = null;
    const clear = (c) => { if (c) c.style.transform = ""; };
    grid.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".card");
      if (!card) { clear(tilted); tilted = null; return; }
      if (tilted && tilted !== card) clear(tilted);
      tilted = card;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-4px) perspective(720px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
    });
    grid.addEventListener("mouseleave", () => { clear(tilted); tilted = null; });
  }

  /* ---------- Suche fokussieren ---------- */
  function focusSearch() {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#s-city").focus(), 400);
  }

  const LEGAL = {
    Impressum: "Angaben gemäß § 5 TMG — Design Apartments GmbH, Maximilianstraße 1, 80539 München. Dies ist ein Demo-Projekt im Rahmen eines Portfolios; die Angaben dienen nur zur Veranschaulichung.",
    Datenschutz: "Diese Demo-Website verarbeitet keine personenbezogenen Daten. Eingaben in das Buchungsformular werden ausschließlich lokal im Browser verarbeitet und nicht übertragen oder gespeichert.",
    AGB: "Allgemeine Geschäftsbedingungen — Platzhalter. In diesem Demo-Projekt werden keine echten Buchungen abgeschlossen.",
  };

  /* ---------- Init ---------- */
  function init() {
    // Reveal an statische Blöcke hängen
    $$(".section__head, .feature").forEach((el) => el.classList.add("reveal"));

    renderStatic();
    renderControls();
    renderCatalog(APARTMENTS);
    renderVoices();
    initVoiceForm();

    // Hero-Suche
    $("#searchForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const ci = $("#s-in").value, co = $("#s-out").value;
      if (ci && co && nightsBetween(ci, co) <= 0) { toast("Abreise muss nach der Anreise liegen."); return; }
      applySearch({ city: $("#s-city").value, checkin: ci, checkout: co, guests: +$("#s-guests").value });
      document.getElementById("apartments").scrollIntoView({ behavior: "smooth" });
    });
    $("#s-in").addEventListener("change", () => { $("#s-out").min = $("#s-in").value || todayISO(); });

    // Filterleiste (delegiert, da neu gerendert)
    document.addEventListener("submit", (e) => {
      if (e.target.id !== "filterForm") return;
      e.preventDefault();
      const f = e.target;
      const ci = f.checkin.value, co = f.checkout.value;
      if (ci && co && nightsBetween(ci, co) <= 0) { toast("Abreise muss nach der Anreise liegen."); return; }
      applySearch({ city: f.city.value, checkin: ci, checkout: co, guests: +f.guests.value });
    });
    document.addEventListener("change", (e) => {
      if (e.target.id === "f-in") { const o = $("#f-out"); if (o) o.min = e.target.value || todayISO(); }
    });

    // Globale Klicks
    document.addEventListener("click", (e) => {
      const reviews = e.target.closest("[data-reviews]");
      const detail = e.target.closest("[data-detail]");
      const bookDetail = e.target.closest("[data-book-detail]");
      const book = e.target.closest("[data-book]");
      const close = e.target.closest("[data-close]");
      const search = e.target.closest("[data-open-search]");
      const legal = e.target.closest("[data-legal]");
      const reset = e.target.closest("[data-reset]");
      if (reviews) openReviews(reviews.dataset.reviews);
      else if (detail) openDetail(detail.dataset.detail);
      else if (bookDetail) openBooking(bookDetail.dataset.bookDetail, bookDetail.dataset.ci ? { checkin: bookDetail.dataset.ci, checkout: bookDetail.dataset.co } : null);
      else if (book) openBooking(book.dataset.book, null);
      else if (close) closeModal();
      else if (search) { e.preventDefault(); closeModal(); focusSearch(); }
      else if (reset) resetSearch();
      else if (legal) { e.preventDefault(); $("#legalTitle").textContent = legal.dataset.legal; $("#legalBody").textContent = LEGAL[legal.dataset.legal]; openModal("modalLegal"); }
    });

    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    // Mobile-Navigation
    const nav = $("#nav"), tog = $("#navToggle");
    tog.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); tog.setAttribute("aria-expanded", open); });
    $$("#nav a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("is-open"); tog.setAttribute("aria-expanded", false); }));

    initMouseFX();
    observeReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
