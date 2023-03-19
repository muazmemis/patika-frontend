import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya!",
    description: "{count} yeni mesajınız var.",
  },
  "en-US": {
    title: "Hello World!",
    description: "You have {count} messages.",
  },
};

function App() {
  const isLocal = localStorage.getItem("locale");
  const defaultLocale = isLocal ? isLocal : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <br />
        <p>
          <FormattedMessage id="description" values={{ count: 2 }} />
        </p>
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
