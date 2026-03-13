'use client';
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import { useTranslation } from 'react-i18next';
import ServiceDetails from "../section/ServiceDetails";
import { useLocation} from 'react-router-dom';



function ServiceDetailPage() {
const { pathname } = useLocation();

  const { t } = useTranslation();

  console.log(pathname)

  const serviceName = pathname.split("/").pop(); // Get the last part of the URL    


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