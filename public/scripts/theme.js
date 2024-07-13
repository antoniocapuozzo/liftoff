class ThemeSwitcher {
  constructor(themeRadiosSelector = '[name="themeSwitcher"]') {
    // Imposta il selettore predefinito per i radio button del tema
    this.themeRadiosSelector = themeRadiosSelector;
    // Seleziona tutti i radio button del tema
    this.themeRadios = document.querySelectorAll(themeRadiosSelector);

    // Chiama il metodo init() per inizializzare lo switch del tema
    this.init();
  }

  // Metodo per inizializzare lo switch del tema
  init() {
    // Funzione per cambiare il tema della pagina
    const changeTheme = (theme) => {
      // Imposta l'attributo 'data-theme' sull'elemento radice del documento HTML
      document.documentElement.setAttribute("data-theme", theme);
      console.log(theme); // Stampa il tema attuale nella console
    };

    // Funzione per salvare il tema selezionato nei cookie
    const saveTheme = (theme) => {
      // Ottiene la data attuale
      const d = new Date();
      // Imposta la data di scadenza dei cookie a un anno dal momento attuale
      d.setTime(d.getTime() + 365 * 86400000);
      // Imposta il cookie 'liftoff-theme' con il tema selezionato e la data di scadenza
      document.cookie = `liftoff-theme=${theme};expires=${d.toUTCString()}`;
    };

    // Funzione per gestire il cambio di tema
    const handleThemeChange = (e) => {
      // Ottiene il valore del tema selezionato
      const theme = e.target.value;
      // Cambia il tema della pagina
      changeTheme(theme);
      // Salva il tema selezionato nei cookie
      saveTheme(theme);
    };

    // Funzione per impostare il tema salvato nei cookie
    const setThemeFromCookie = () => {
      // Ottiene tutti i cookie
      const cookies = document.cookie;
      // Cerca il cookie 'liftoff-theme'
      const match = cookies.match(/liftoff-theme=([^;]+)/);
      // Imposta il tema predefinito come 'system' se il cookie non è presente
      let theme = "system";
      // Se trova il cookie, imposta il tema con il valore del cookie
      if (match) {
        theme = match[1];
      }

      // Cambia il tema della pagina con il tema salvato
      changeTheme(theme);

      // Imposta il radio button del tema corrispondente al tema salvato come selezionato
      this.themeRadios.forEach((radio) => {
        radio.checked = radio.value === theme;
        console.log(`Theme ${radio.value} checked status: ${radio.checked}`);
      });
    };

    // Aggiunge un gestore eventi per il cambio di tema quando si seleziona un radio button
    this.themeRadios.forEach((radio) =>
      radio.addEventListener("change", handleThemeChange)
    );

    // Imposta il tema della pagina in base ai cookie al momento del caricamento della finestra
    window.addEventListener("DOMContentLoaded", setThemeFromCookie);
  }
}
