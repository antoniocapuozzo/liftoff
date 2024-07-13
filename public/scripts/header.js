class ScrollTrigger {
  constructor(
    triggerSelector = '[data-trigger="scroll"]',
    targetSelector = '[data-trigger="target"]',
    className = "is-scrolled"
  ) {
    // Selettore predefinito per il trigger
    this.triggerSelector = triggerSelector;
    // Selettore predefinito per il target
    this.targetSelector = targetSelector;
    this.trigger = document.querySelector(triggerSelector);
    this.target = document.querySelector(targetSelector);
    this.scrollPosition = 60;
    this.className = className; // Imposta il nome della classe da applicare o rimuovere
    this.init();
  }

  init() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const triggerPosition = this.trigger.getBoundingClientRect().top;
    if (triggerPosition <= this.scrollPosition) {
      this.target.classList.add(this.className); // Aggiunge la classe specificata al target
    } else {
      this.target.classList.remove(this.className); // Rimuove la classe specificata dal target
    }
  };
}

// // Utilizzo dell'oggetto senza specificare i selettori personalizzati
// const scrollTrigger = new ScrollTrigger();

// // Utilizzo dell'oggetto specificando solo la classe personalizzata
// const scrollTriggerCustomClass = new ScrollTrigger(
//   null,
//   null,
//   "classe-personalizzata"
// );

// // Utilizzo dell'oggetto specificando sia il trigger che il target personalizzati
// const scrollTriggerCustomSelectors = new ScrollTrigger(
//   "[data-custom-trigger]",
//   "[data-custom-target]",
//   "classe-personalizzata"
// );
