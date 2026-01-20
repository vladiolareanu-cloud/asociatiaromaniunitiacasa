import Layout from "@/layout/en/Layout";
import PageBanner from "@/layout/en/PageBanner";
import CazuriSociale from "@/components/EnCazuriSociale";

const EnCazuriSocialePage = () => {
  return (
    <Layout pageName="Socia Cases">
      <PageBanner
        pageName="Social Cases"
        imageURL="/img/hero/head_about_background.png"
      />
      <CazuriSociale />
    </Layout>
  );
};

export default EnCazuriSocialePage;
