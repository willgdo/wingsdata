import { useTranslation } from "react-i18next";

export const Result = () => {
  const { t } = useTranslation();

  return (
    <section id="result">
      <div>Digite uma matrícula para ver o resultado</div>
    </section>
  );
};
