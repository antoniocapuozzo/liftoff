class CookieBar {
  constructor({
    // Definizione dei valori predefiniti per l'ID della barra dei cookie, il selettore del pulsante di chiusura,
    // l'abilitazione dello scrolling, l'abilitazione dei link, il nome del cookie, il valore predefinito del cookie
    // e la durata del cookie in giorni
    cookieBarId = "cookie-bar",
    closeBtnSelector = ".cookie-bar-close",
    scrollEnabled = true,
    linkEnabled = true,
    cookieName = "liqueedo-privacy",
    cookieValue = "true",
    cookieDays = 365,
  } = {}) {
    // Assegna i valori dei parametri alle proprietà della classe
    this.cookieBarId = cookieBarId;
    this.closeBtnSelector = closeBtnSelector;
    this.scrollEnabled = scrollEnabled;
    this.linkEnabled = linkEnabled;
    this.cookieName = cookieName;
    this.cookieValue = cookieValue;
    this.cookieDays = cookieDays;

    // Seleziona l'elemento della barra dei cookie e il pulsante di chiusura
    this.cookieBar = document.getElementById(this.cookieBarId);
    this.closeBtn = this.cookieBar.querySelector(this.closeBtnSelector);

    // Chiama il metodo init() per inizializzare la barra dei cookie
    this.init();
  }

  // Metodo per inizializzare la barra dei cookie
  init() {
    // Funzione per impostare un cookie solo se non esiste già
    const setCookieOnce = (name, value, days) => {
      if (!getCookie(name)) {
        // Controlla se il cookie non esiste già
        let expires = "";
        if (days) {
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ""}${expires}; path=/`;
      }
    };

    // Funzione per ottenere il valore di un cookie
    const getCookie = (name) => {
      const cookieValue = document.cookie.match(
        "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
      );
      return cookieValue ? cookieValue.pop() : "";
    };

    // Funzione per nascondere la barra dei cookie e impostare il cookie solo se non esiste già
    const hideCookieBar = () => {
      console.log("Applying is-hidden class");
      this.cookieBar.classList.add("is-hidden");
      console.log("Setting cookie...");
      setCookieOnce(this.cookieName, this.cookieValue, this.cookieDays); // Utilizza setCookieOnce() al posto di setCookie()
    };

    // Funzione per controllare se il cookie è già impostato e nascondere la barra dei cookie di conseguenza
    const checkCookie = () => {
      const cookieExists = getCookie(this.cookieName) === this.cookieValue;
      if (!cookieExists) {
        console.log("Cookie is not set, showing cookie bar...");
        return;
      }

      console.log("Cookie is set, hiding cookie bar...");
      hideCookieBar(); // Nasconde la barra dei cookie solo se il cookie non è già impostato
    };

    // Gestore evento per il clic sul pulsante di chiusura della barra dei cookie
    this.closeBtn.addEventListener("click", () => {
      hideCookieBar(); // Nasconde la barra dei cookie quando viene cliccato il pulsante di chiusura
    });

    // Aggiunge un gestore evento per lo scrolling della finestra per nascondere la barra dei cookie
    if (this.scrollEnabled) {
      const scrollHandler = () => {
        if (window.scrollY >= 400) {
          hideCookieBar(); // Nasconde la barra dei cookie quando si effettua lo scrolling verso il basso
          window.removeEventListener("scroll", scrollHandler); // Rimuove il gestore evento dopo aver nascosto la barra dei cookie
        }
      };
      window.addEventListener("scroll", scrollHandler);
    }

    // Aggiunge un gestore evento per il clic sui link per nascondere la barra dei cookie
    if (this.linkEnabled) {
      document.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          hideCookieBar(); // Nasconde la barra dei cookie quando viene cliccato un link
        }
      });
    }

    // Controlla se il cookie è già impostato al momento dell'inizializzazione della barra dei cookie
    checkCookie();
  }
}
