import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import CazuriSociale from "@/components/CazuriSociale";
import { t } from "@/lib/i18n";

const CazuriSocialePage = () => {
  return (
    <Layout pageName={t("cases.title")}>
      <PageBanner
        pageName={t("cases.title")}
        imageURL="/img/hero/head_about_background.png"
      />
      <CazuriSociale />
    </Layout>
  );
};

export default CazuriSocialePage;
