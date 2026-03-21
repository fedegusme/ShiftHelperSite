const translations = {
    en: {
        page_title: "ShiftHelper - The Future of Shift Management",
        contact_nav: "Contact Me",
        hero_badge: "New Release Available",
        hero_title: "Shift planning, <br> <span class=\"text-gradient\">without compromises.</span>",
        hero_subtitle: "ShiftHelper redesigns the paradigm of corporate organization. Full visibility on shifts, absence approval, and advanced reporting, all in the palm of your hand. Designed for demanding store managers.",
        store_sub: "Available on",
        timeline_absent: "Absent (Sick)",
        badge_shifts: "Shifts Covered",
        badge_uncovered: "0 Uncovered Hours",
        trust_title: "Say goodbye to messy spreadsheets",
        trust_stat1: "Fast & Intuitive",
        trust_stat2: "Maximum Security",
        trust_stat3: "Always Synchronized",
        features_title: "Planning Engineering",
        features_subtitle: "Everything you need to scale your store operations, structured in a crystal-clear interface.",
        fb_title1: "Super-Powered Calendar",
        fb_desc1: "Navigate seamlessly through work weeks. View the exact matrix of assignments at a glance. The granularity you were looking for, without the clutter.",
        fb_title2: "Absence Management",
        fb_desc2: "Holidays, sickness, and leaves mapped and reconciled automatically. No unexpected overlaps.",
        fb_title3: "Cost and Hours Control",
        fb_desc3: "Every single hour worked calculated precisely, with automatic alerts for excess overtime.",
        fb_title4: "Smart Distribution",
        fb_desc4: "Assign shifts maximizing efficiency. The system ensures that rest days and weekly loads are balanced according to strict contract rules, providing proactive notifications in case of algorithmic or manual anomalies.",
        day_m: "M", day_t: "T", day_w: "W", day_t2: "T", day_f: "F", day_s: "S", day_s2: "S",
        process_title: "From entry to publication",
        step_title1: "Hours Entry",
        step_desc1: "Define the necessary hours for your store. Structure your requirements by organizing the hours by role and level of responsibility.",
        step_title2: "Easy Drag & Drop",
        step_desc2: "Assign, move, or clone shifts quickly, manually building your ideal organization day by day.",
        step_title3: "Confirm & Lock",
        step_desc3: "Once planning is complete, verify the assigned rest days and confirm the week to crystallize the schedule for your team.",
        cta_title: "Elevate your team's management",
        cta_desc: "Don't waste another minute on messy spreadsheets.<br>Contact me and let's start building a perfect schedule.",
        cta_btn: "Contact the Developer",
        footer_text: "© 2026 ShiftHelper. Excellence in management architecture."
    },
    it: {
        page_title: "ShiftHelper - Il Futuro della Gestione Turni",
        contact_nav: "Contattami",
        hero_badge: "Nuova Release Disponibile",
        hero_title: "La pianificazione turni, <br> <span class=\"text-gradient\">senza compromessi.</span>",
        hero_subtitle: "ShiftHelper ridisegna il paradigma dell'organizzazione aziendale. Piena visibilità sui turni, approvazione assenze e reportistica avanzata, tutto nel palmo della tua mano. Pensato per store manager esigenti.",
        store_sub: "Disponibile su",
        timeline_absent: "Assente (Malattia)",
        badge_shifts: "Turni Coperti",
        badge_uncovered: "0 Ore Scoperte",
        trust_title: "Dì addio ai fogli di calcolo disordinati",
        trust_stat1: "Veloce & Intuitivo",
        trust_stat2: "Massima Sicurezza",
        trust_stat3: "Sempre Sincronizzato",
        features_title: "Ingegneria della pianificazione",
        features_subtitle: "Tutto ciò di cui hai bisogno per scalare le operations del tuo store, strutturato in un'interfaccia cristallina.",
        fb_title1: "Calendario Super-Potenziato",
        fb_desc1: "Naviga fluidamente tra le settimane lavorative. Visualizza la matrice esatta delle assegnazioni con un colpo d'occhio. La granularità che stavi cercando, senza il disordine.",
        fb_title2: "Gestione Assenze",
        fb_desc2: "Ferie, malattie e permessi mappati e riconciliati automaticamente. Nessuna sovrapposizione inaspettata.",
        fb_title3: "Controllo Costi ed Ore",
        fb_desc3: "Ogni singola ora lavorata calcolata precisamente, con alert automatici per gli straordinari in eccesso.",
        fb_title4: "Distribuzione Smart",
        fb_desc4: "Assegna i turni massimizzando l'efficienza. Il sistema garantisce che i giorni di riposo e i carichi settimanali siano bilanciati secondo le rigide regole dei contratti, fornendo notifiche proattive in caso di anomalie algoritmiche o manuali.",
        day_m: "L", day_t: "M", day_w: "M", day_t2: "G", day_f: "V", day_s: "S", day_s2: "D",
        process_title: "Dall'inserimento alla pubblicazione",
        step_title1: "Inserimento Ore",
        step_desc1: "Definisci il monte ore necessario per il tuo store. Struttura il tuo fabbisogno organizzando le ore per ruolo e livello di responsabilità.",
        step_title2: "Drag & Drop Facile",
        step_desc2: "Assegna, sposta o clona i turni in modo estremamente rapido, costruendo manualmente la tua organizzazione ideale giorno per giorno.",
        step_title3: "Confirm & Lock",
        step_desc3: "Una volta completato il planning, verifica i giorni di riposo assegnati e conferma la settimana per cristallizzare la programmazione per il tuo team.",
        cta_title: "Eleva la gestione del tuo team",
        cta_desc: "Non sprecare un altro minuto su fogli di calcolo disordinati.<br>Contattami e iniziamo a costruire un planning perfetto.",
        cta_btn: "Contatta lo Sviluppatore",
        footer_text: "© 2026 ShiftHelper. Architettura gestionale d'eccellenza."
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'en' ? 
            "ShiftHelper is the enterprise application designed for store managers. It simplifies the management of shifts, absences, and overtime." : 
            "ShiftHelper è l'applicazione enterprise pensata per gli store manager. Semplifica la gestione dei turni, assenze e straordinari.";
    }

    document.title = translations[lang]['page_title'];
    document.getElementById('langToggle').innerText = lang === 'en' ? '🇮🇹 IT' : '🇬🇧 EN';
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('langToggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'it' : 'en');
        });
    }
});
