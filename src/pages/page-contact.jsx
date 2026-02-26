import { useTranslation } from "react-i18next";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ContactInner from "../section/ContactInner";

function ContactUs() {
    const { t } = useTranslation();

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="two">
                <PageTitle pageName={t("contactUs")} />
                <ContactInner />
            </Layout>
        </div>

        </>
    )
}
export default ContactUs