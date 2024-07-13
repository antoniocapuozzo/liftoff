class AsyncNavigation {
  constructor({
    // Definizione dei selettori predefiniti per il menu, il logo, il contenuto e le classi di caricamento, caricato e attivo
    menuSelector = "nav ul li a",
    logoSelector = "h1.site-header-logo a",
    contentSelector = "#contenuto",
    loadingClass = "is-loading",
    loadedClass = "is-loaded",
    activeClass = "is-active",
  } = {}) {
    // Assegna i valori dei selettori e delle classi alle proprietà della classe
    this.menuSelector = menuSelector;
    this.logoSelector = logoSelector;
    this.contentSelector = contentSelector;
    this.loadingClass = loadingClass;
    this.loadedClass = loadedClass;
    this.activeClass = activeClass;

    // Chiama il metodo init() per inizializzare la navigazione asincrona
    this.init();
  }

  // Metodo per inizializzare la navigazione asincrona
  init() {
    // Seleziona tutti i link del menu e il logo che hanno l'attributo 'data-async'
    const links = document.querySelectorAll(
      `${this.menuSelector}[data-async], ${this.logoSelector}`
    );

    // Seleziona l'elemento del contenuto principale della pagina
    this.contentDiv = document.querySelector(this.contentSelector);

    // Oggetto per memorizzare la cache del contenuto
    this.cache = {};

    // Funzione per caricare il contenuto in modo asincrono da un URL
    const loadContent = async (url) => {
      // Controlla se il contenuto è già presente nella cache
      if (this.cache[url]) {
        this.setContent(this.cache[url]); // Imposta il contenuto dalla cache
        history.pushState(null, "", url); // Modifica l'URL nella barra degli indirizzi
        return;
      }

      // Aggiunge la classe di caricamento al contenitore del contenuto
      this.contentDiv.classList.add(this.loadingClass);

      try {
        // Effettua una richiesta HTTP per ottenere il contenuto dall'URL
        const response = await fetch(url);

        // Controlla se la risposta è stata ricevuta con successo
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Ottiene il testo dalla risposta
        const text = await response.text();

        // Salva il testo nella cache
        this.cache[url] = text;

        // Imposta il contenuto ottenuto
        this.setContent(text);

        // Modifica l'URL nella barra degli indirizzi
        history.pushState(null, "", url);
      } catch (error) {
        // Gestisce gli errori di caricamento del contenuto
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      } finally {
        // Rimuove la classe di caricamento e aggiunge la classe di caricamento completato al contenitore del contenuto
        this.contentDiv.classList.remove(this.loadingClass);
        this.contentDiv.classList.add(this.loadedClass);
      }
    };

    // Metodo per impostare il contenuto nella pagina
    this.setContent = (response) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = response;
      const newContent = tempDiv.querySelector(this.contentSelector).innerHTML;
      const newTitle = tempDiv.querySelector("title").innerText;
      this.contentDiv.innerHTML = newContent;
      document.title = newTitle;
    };

    // Rimuove la classe attiva da tutti i link
    const removeActiveClass = () => {
      links.forEach((link) => {
        link.classList.remove(this.activeClass);
      });
    };

    // Imposta il link attivo sulla base dell'URL corrente
    const setActiveLink = () => {
      const currentURL = window.location.pathname;
      links.forEach((link) => {
        if (link.getAttribute("href") === currentURL) {
          link.classList.add(this.activeClass);
        }
      });
    };

    // Aggiunge un gestore eventi per il clic su ciascun link
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Impedisce l'azione predefinita del link
        const url = link.getAttribute("href");
        loadContent(url); // Carica il contenuto dell'URL cliccato
        removeActiveClass(); // Rimuove la classe attiva da tutti i link
        link.classList.add(this.activeClass); // Aggiunge la classe attiva al link cliccato
      });
    });

    // Carica il contenuto per l'URL corrente e imposta il link attivo
    loadContent(window.location.pathname);
    setActiveLink();
  }
}
