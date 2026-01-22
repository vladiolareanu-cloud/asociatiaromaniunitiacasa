import Layout from "@/layout/hu/Layout";
import PageBanner from "@/layout/hu/PageBanner";
import CazuriSociale from "@/components/HuCazuriSociale";

const HuCazuriSocialePage = () => {
  return (
    <Layout pageName="Szociális esetek">
      <PageBanner
        pageName="Szociális esetek"
        imageURL="/img/hero/head_about_background.png"
      />
      <CazuriSociale />
    </Layout>
  );
};

export default HuCazuriSocialePage;
