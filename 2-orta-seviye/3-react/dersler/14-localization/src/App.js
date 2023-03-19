import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya!",
    description: "3 yeni mesajınız var.",
  },
  "en-US": {
    title: "Hello World!",
    description: "You have 3 messages.",
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
          <FormattedMessage id="description" />
        </p>
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
