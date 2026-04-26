const translations = {
    en: {
        page_title: "ShiftHelper - Shift planning for stores and retail teams",
        contact_nav: "Contact Me",
        hero_badge: "Official Launch",
        hero_title: "Shift scheduling, <br> <span class=\"text-gradient\">built for your store.</span>",
        hero_subtitle: "ShiftHelper brings weekly planning, absences, statistics, exports and encrypted backups into one privacy-first mobile app for stores and retail teams.",
        store_sub: "Available on",
        timeline_absent: "Absent (Sick)",
        badge_shifts: "Shifts Covered",
        badge_uncovered: "0 Uncovered Hours",
        trust_title: "Built for real store operations",
        trust_stat1: "100% Offline",
        trust_stat2: "Encrypted Backups",
        trust_stat3: "No Account Required",
        features_title: "The operations toolkit for every week",
        features_subtitle: "From daily planning to exports, reminders and protected backups, ShiftHelper helps store managers stay in control.",
        fb_title1: "Planner & Opening Hours",
        fb_desc1: "Set opening hours in 15-minute slots, build weekly schedules and reuse preset weeks to speed up planning.",
        fb_title2: "Absences & Festivities",
        fb_desc2: "Manage sickness, holidays, permits, store closures and special opening hours without losing visibility on coverage.",
        fb_title3: "Hours, Stats & Exports",
        fb_desc3: "Track worked hours, review employee and store statistics, and export reports in PDF or CSV whenever you need to share them.",
        fb_title4: "Backup, Multi-Store & Reminders",
        fb_desc4: "Keep data local, protect it with encrypted backups, manage multiple stores and unlock revenue reminders and advanced tools as your operation grows.",
        day_m: "M", day_t: "T", day_w: "W", day_t2: "T", day_f: "F", day_s: "S", day_s2: "S",
        process_title: "From setup to weekly control",
        step_title1: "Set Rules & Availability",
        step_desc1: "Configure opening hours, role groups, contract limits, rest days and festivities so planning starts from real store rules.",
        step_title2: "Build the Week Fast",
        step_desc2: "Assign, move or clone shifts, manage absences and keep an instant view of coverage across the whole week.",
        step_title3: "Review, Export & Save",
        step_desc3: "Check hours and statistics, export files, schedule reminders and keep an encrypted backup of your data.",
        cta_title: "Bring clarity to shift management",
        cta_desc: "ShiftHelper is now live.<br>Open the store page, try it with your team, or contact me if you want help configuring it.",
        cta_btn: "Contact the Developer",
        footer_text: "© 2026 ShiftHelper. Built for retail operations."
    },
    it: {
        page_title: "ShiftHelper - Pianificazione turni per negozi e team retail",
        contact_nav: "Contattami",
        hero_badge: "Lancio ufficiale",
        hero_title: "La pianificazione turni, <br> <span class=\"text-gradient\">pensata per il tuo store.</span>",
        hero_subtitle: "ShiftHelper riunisce planner settimanale, assenze, statistiche, export e backup cifrati in un'unica app mobile privacy-first per negozi e team retail.",
        store_sub: "Disponibile su",
        timeline_absent: "Assente (Malattia)",
        badge_shifts: "Turni Coperti",
        badge_uncovered: "0 Ore Scoperte",
        trust_title: "Pensato per le operations del punto vendita",
        trust_stat1: "100% Offline",
        trust_stat2: "Backup Cifrati",
        trust_stat3: "Nessun Account Richiesto",
        features_title: "Gli strumenti operativi per ogni settimana",
        features_subtitle: "Dalla pianificazione quotidiana a export, promemoria e backup protetti, ShiftHelper aiuta gli store manager a mantenere tutto sotto controllo.",
        fb_title1: "Planner & Orari di Apertura",
        fb_desc1: "Imposta gli orari di apertura a slot di 15 minuti, costruisci i turni settimanali e riutilizza settimane preset per velocizzare il planning.",
        fb_title2: "Assenze & Festività",
        fb_desc2: "Gestisci malattie, ferie, permessi, chiusure del negozio e orari speciali senza perdere visibilità sulla copertura.",
        fb_title3: "Ore, Statistiche & Export",
        fb_desc3: "Controlla le ore lavorate, analizza statistiche del personale e del negozio ed esporta report in PDF o CSV quando devi condividerli.",
        fb_title4: "Backup, Multi-Store & Promemoria",
        fb_desc4: "Tieni i dati in locale, proteggili con backup cifrati, gestisci più negozi e sblocca promemoria sul fatturato e strumenti avanzati quando l'operatività cresce.",
        day_m: "L", day_t: "M", day_w: "M", day_t2: "G", day_f: "V", day_s: "S", day_s2: "D",
        process_title: "Dalla configurazione al controllo settimanale",
        step_title1: "Imposta regole e disponibilità",
        step_desc1: "Configura orari di apertura, gruppi di ruolo, limiti contrattuali, giorni di riposo e festività così il planning parte da regole reali di negozio.",
        step_title2: "Costruisci la settimana in fretta",
        step_desc2: "Assegna, sposta o clona i turni, gestisci le assenze e mantieni una vista immediata della copertura su tutta la settimana.",
        step_title3: "Controlla, esporta e salva",
        step_desc3: "Verifica ore e statistiche, esporta i file, pianifica i promemoria e conserva un backup cifrato dei tuoi dati.",
        cta_title: "Porta chiarezza nella gestione turni",
        cta_desc: "ShiftHelper è ora disponibile.<br>Apri la pagina dello store, provalo con il tuo team oppure contattami se vuoi aiuto nella configurazione.",
        cta_btn: "Contatta lo Sviluppatore",
        footer_text: "© 2026 ShiftHelper. Costruito per le operations retail."
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
            "ShiftHelper is a 100% offline mobile app for stores and retail teams: weekly shift planning, absences, statistics, exports and encrypted backups." : 
            "ShiftHelper è un'app mobile 100% offline per negozi e team retail: pianificazione settimanale, assenze, statistiche, export e backup cifrati.";
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
