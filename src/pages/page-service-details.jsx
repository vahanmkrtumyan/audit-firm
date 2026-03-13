'use client';
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import { useTranslation } from 'react-i18next';
import ServiceDetails from "../section/ServiceDetails";


function ServiceDetailPage() {
  const { t } = useTranslation();

  const path = window.location.pathname;
  const serviceName = path.split("/").pop(); // Get the last part of the URL    
    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="two">
                <PageTitle pageName={t(serviceName)} />
                <ServiceDetails service={serviceName}/>
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailPage