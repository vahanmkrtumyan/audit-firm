import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const serviceListData = [
	{
		title: "audit",
		linkurl: "/services/audit"
	},
	{
		title: "accounting",
		linkurl: "/services/accounting"
	},
	{
		title: "financial",
		linkurl: "/services/financial"
	},
	{
		title: "business-consulting",
		linkurl: "/services/business-consulting"
	},
	{
		title: "legal",
		linkurl: "/services/legal"
	},
	{
		title: "training",
		linkurl: "/services/training"
	},
];


const serviceSubDirections = {
	audit: ["audit1", "audit2", "audit3", "audit4", "audit5", "audit6", "audit7"],
	accounting: ["accounting1", "accounting2", "accounting3", "accounting4", "accounting5", "accounting6", "accounting7", "accounting8"],
	financial: ["financial1", "financial2", "financial3", "financial4", "financial5", "financial6", "financial7", "financial8", "financial9"],
	'business-consulting': ["business-consulting1", "business-consulting2", "business-consulting3", "business-consulting4", "business-consulting5", "business-consulting6"],
	legal: ["legal1", "legal2", "legal3", "legal4", "legal5", "legal6", "legal7", "legal8", "legal9", "legal10"],
	training: [],
}



function ServiceDetails({service}) {	

	const { t } = useTranslation();

	return (
		<>
		<section className="services-details pt-120 pb-120">
			<div className="container">
				<div className="row align-items-lg-center">
					<div className="col-lg-6">
						<div className="sec-title mb-40">
							<h2 className="title mb-30 wow splt-txt" data-splitting>{t(service)}<br className="d-none d-lg-block"/></h2>
						</div>
					</div>
					
				</div>
				<div className="row">
					<div className="col-lg-6">
					<div className="section-title"></div>
					</div>
					<div className="col-lg-6">
					<div className="section-title"></div>
					</div>
					<div className="col-lg-12">
					</div>
					<div className="col-xl-8 col-lg-8">
						<div className="services-details__content">
							<h3>{t('description')}</h3>
							<p className="mb-30">{t(`${service}Text`)}</p>
							<div className="service-nr-list">
								{serviceSubDirections[service].length > 0 && (
									<h3 className="mb-5">{t('subDirections')}</h3>
								)}
								<div className="row">
									{serviceSubDirections[service].map((eachitem, index) => (
										<div className="col-lg-6">
											<div className="nr-list mb-5">
												<h4 className="title d-flex align-items-center mb-4"><span>{index + 1}</span> {t(eachitem)}</h4>
												{/* <p>Creative analysis is important. It is common for marketers to measure campaign performance at a superficial level. But to fully understand it</p> */}
											</div>
										</div>
									))}
									{/* <div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>01</span> Creative Analysis</h4>
										<p>Creative analysis is important. It is common for marketers to measure campaign performance at a superficial level. But to fully understand it</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>02</span> Design & Scatches</h4>
										<p>A design sketch is a graphical sketched representation of a design plan. A design sketch, see example figure, is a visualization</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>03</span> Prototype & Wireframing</h4>
										<p>A prototype is a barebones, relatively simple working model of an app or webpage. They are typically the next step in the product design.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>04</span> Delivery & Deploy</h4>
										<p>Continuous delivery is an extension of continuous integration since it automatically deploys all to a testing and/or production</p>
									</div>
									</div> */}
								</div>
							</div>
							{/* <div className="content mt-40">
								<div className="text">
									<h3 className="mb-4">Service Outcome</h3>
									<ul className="outcome-list mb-5">
									<li><i className="fal fa-check"></i> Excepteur sint occaecat cupidatat a deserunt mollit anim id est laborum.</li>
									<li><i className="fal fa-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
									<li><i className="fal fa-check"></i> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</li>
									<li><i className="fal fa-check"></i> inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </li>
									</ul>
								</div>
							</div> */}
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-sidebar mt-5 mt-lg-0">
							<div className="sidebar-widget service-sidebar-single">
							<div className="sidebar-service-list mb-30">
								<h4 className="title">{t('moreServices')}</h4>
								<ul>
									{serviceListData.map((eachitem, index) => (
									<li key={index}><Link className={(index === 0) ? 'current': ''} to={eachitem.linkurl}><i className="far fa-arrow-right" /><span>{t(eachitem.title)}</span></Link></li>
									))}
								</ul>
							</div>
							<div className="sidebar-service-list mb-30">
								<h4 className="title">{t('contactUs')}</h4>
								<ul className="address">
								<li>{t('locationText')}</li>
								<li><Link to="#">info@tvs.am</Link></li>
								<li><Link to="#">012 210 001</Link></li>
								</ul>
							</div>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
};

export default ServiceDetails;