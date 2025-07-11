import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useParams, NavLink } from "react-router-dom";
import prevIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";
import "./ServicePage.scss";

const ServicePage = ({ servicesData }) => {
	const { t } = useTranslation();

	const { id } = useParams();

	const service = servicesData.find((service) => service.id === id);

	const currentIndex = servicesData.findIndex((service) => service.id === id);

	const nextService = servicesData[(currentIndex + 1) % servicesData.length];
	const prevService =
		currentIndex - 1 !== -1
			? servicesData[currentIndex - 1]
			: servicesData[servicesData.length - 1];

	return (
		<>
			<Helmet>
				<meta name="description" content={t(service.desc)} />
				<title>{t(service.name)} / Prozubik</title>
				<link rel="canonical" href={`https://prozubik.cz/service-page/${id}`} />
			</Helmet>
			<main className="service-page">
				<PageTitle title={t(service.name)} previousPath={t("services_title")} />
				<p className="coming-soon">{t("coming_soon")}</p>
				<div className="service-page__links">
					<NavLink
						className={"service-page__link"}
						to={`/service-page/${prevService.id}`}
					>
						<span>
							<img width={20} height={20} src={prevIcon} alt="" />
							<span>Previous</span>
						</span>
						<span>{t(prevService.name)}</span>
					</NavLink>
					<NavLink
						className={"service-page__link"}
						to={`/service-page/${nextService.id}`}
					>
						<span>
							<span>Next</span>
							<img width={20} height={20} src={nextIcon} alt="" />
						</span>
						<span>{t(nextService.name)}</span>
					</NavLink>
				</div>
			</main>
		</>
	);
};

export default ServicePage;
