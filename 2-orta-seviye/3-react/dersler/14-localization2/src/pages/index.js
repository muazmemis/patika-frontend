import en from "@/locales/en";
import tr from "@/locales/tr";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const t = locale === "tr" ? tr : en;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.pathname, { locale });
  };

  return (
    <div className="container mx-auto mt-5">
      <div>{locale}</div>
      <div>{locales}</div>
      <div>{defaultLocale}</div>

      <select defaultValue={defaultLocale} onChange={changeLanguage}>
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>

      <h1>{t.hello}</h1>
      <h1>{t.description}</h1>
      <h1>{t.title}</h1>
      <h1>{t.welcome}</h1>
    </div>
  );
}
