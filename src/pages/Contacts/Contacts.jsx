import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import phoneIcon from "/assets/icons/telephone.png";
import emailIcon from "/assets/icons/mail.png";
import pinIcon from "/assets/icons/pin.png";
import "./Contacts.scss";

const Contacts = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("contacts_title")} | Prozubik`;
    }, [t]);

    useEffect(() => {
        const contactsLabels = document.querySelectorAll(
            ".contacts-form__label"
        );

        document
            .querySelectorAll(".js-contacts-form__input")
            .forEach((el, index) => {
                el.addEventListener("input", () => {
                    if (el.value) {
                        contactsLabels[index].classList.add(
                            "contacts-form__label--active"
                        );
                    } else {
                        contactsLabels[index].classList.remove(
                            "contacts-form__label--active"
                        );
                    }
                });
            });

        // Listener for multiple custom selectors

        document.querySelectorAll(".custom-select").forEach((select) => {
            const selectBtn = select.querySelector(".custom-select__btn");
            const selectList = select.querySelector(".custom-select__list");
            const selectOptions = selectList.querySelectorAll(
                ".custom-select__option"
            );
            const selectOption = document.querySelector(
                ".custom-select__input"
            );

            selectBtn.addEventListener("click", (e) => {
                e.preventDefault();
                selectList.classList.toggle("custom-select__list--visible");
                selectBtn.classList.add("custom-select__btn--active");
            });

            selectOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    // TODO:

                    e.stopPropagation();
                    selectBtn.textContent = option.textContent;
                    selectBtn.focus();
                    selectOption.value = option.dataset.value;
                    selectList.classList.remove("custom-select__list--visible");
                });
            });

            document.addEventListener("click", (e) => {
                if (e.target !== selectBtn) {
                    selectBtn.classList.remove("custom-select__btn--active");
                    selectList.classList.remove("custom-select__list--visible");
                }
            });
        });
    }, []);

    const dateNow = dayjs();
    const formatDate = dateNow.format("YYYY-MM-DD");

    const hourNow = dateNow.hour();
    const formatHour = hourNow < 10 ? "0" + hourNow : hourNow;

    const minuteNow = dateNow.minute();
    const formatMinute = minuteNow < 10 ? "0" + minuteNow : minuteNow;

    return (
        <section className="contacts">
            <PageTitle title={t("contacts_title")} />
            <section className="contacts-wrapper">
                <p className="contacts__secondary-info">
                    {t("contacts.details_title")}
                </p>
                <div className="contacts-details">
                    <div>
                        <img
                            className="contacts__email-img"
                            src={phoneIcon}
                            alt="Phone"
                        />
                        <p className="contacts__phone">{t("contacts.phone")}</p>
                        <a
                            className="contacts__phone-link"
                            href="tel:+420773802166"
                        >
                            +420 773 802 166
                        </a>
                    </div>
                    <div>
                        <img
                            className="contacts__email-img"
                            src={emailIcon}
                            alt="E-mail"
                        />
                        <p className="contacts__email">{t("contacts.mail")}</p>
                        <a
                            className="contacts__email-link"
                            href="mailto:novozubcz@gmail.com"
                        >
                            novozubcz@gmail.com
                        </a>
                    </div>
                    <div>
                        <img
                            className="contacts__email-img"
                            src={pinIcon}
                            alt="Address"
                        />
                        <p className="contacts__address">
                            {t("contacts.address")}
                        </p>
                        <a className="contacts__email-link" href="">
                            Pod Hroby 271 Kolín IV
                        </a>
                        <a className="contacts-details__address-btn" href="">
                            {t("contacts.address_btn_title")}
                        </a>
                    </div>
                </div>
                <h2 className="contacts__appointment-title">
                    {t("appointment_title")}
                </h2>
                <form
                    className="contacts-form"
                    action="mailto:novozubcz@gmail.com"
                    method="post"
                    encType="text/plain"
                >
                    <div className="contacts-form__inputs">
                        <div className="contacts-form__input-wrapper">
                            <label className="contacts-form__label">
                                {t("contacts.first_name")}
                            </label>
                            <input
                                className="contacts-form__input  js-contacts-form__input"
                                type="text"
                                name="First name"
                            />
                        </div>
                        <div className="contacts-form__input-wrapper">
                            <label className="contacts-form__label">
                                {t("contacts.last_name")}
                            </label>
                            <input
                                className="contacts-form__input  js-contacts-form__input"
                                type="text"
                                name="Last name"
                            />
                        </div>
                    </div>
                    <div className="contacts-form__inputs">
                        <div className="contacts-form__input-wrapper">
                            <label className="contacts-form__label">
                                {t("contacts.mail")}
                            </label>
                            <input
                                className="contacts-form__input js-contacts-form__input"
                                type="email"
                                name="Email"
                            />
                        </div>
                        <div className="contacts-form__input-wrapper">
                            <label className="contacts-form__label">
                                {t("contacts.phone")}
                            </label>
                            <input
                                className="contacts-form__input  js-contacts-form__input"
                                type="tel"
                                name="Phone number"
                            />
                        </div>
                    </div>
                    <div className="custom-select">
                        <button className="custom-select__btn">
                            {t("contacts.choose_service")}
                        </button>
                        <ul className="custom-select__list">
                            <li
                                className="custom-select__option"
                                data-value="Not selected"
                            >
                                {t("contacts.choose_service")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_1")}
                            >
                                {t("service_1")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_2")}
                            >
                                {t("service_2")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_3")}
                            >
                                {t("service_3")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_4")}
                            >
                                {t("service_4")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_5")}
                            >
                                {t("service_5")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_6")}
                            >
                                {t("service_6")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_7")}
                            >
                                {t("service_7")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_8")}
                            >
                                {t("service_8")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_9")}
                            >
                                {t("service_9")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_10")}
                            >
                                {t("service_10")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_11")}
                            >
                                {t("service_11")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_12")}
                            >
                                {t("service_12")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_13")}
                            >
                                {t("service_13")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_14")}
                            >
                                {t("service_14")}
                            </li>
                            <li
                                className="custom-select__option"
                                data-value={t("service_15")}
                            >
                                {t("service_15")}
                            </li>
                        </ul>
                        <input
                            className="custom-select__input"
                            type="text"
                            name="Service"
                            defaultValue=""
                        />
                    </div>
                    <input type="date" defaultValue={formatDate} name="Date" />
                    <input
                        type="time"
                        defaultValue={formatHour + ":" + formatMinute}
                        name="Time"
                    />
                    <button className="contacts-form__btn" type="submit">
                        {t("contacts.submit_btn_title")}
                    </button>
                </form>
                <iframe
                    className="contacts__google-map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5126.647298667424!2d15.214303!3d50.024031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c153bee9daf87%3A0xc91ccf8d204d4cb!2sPod%20Hroby%20271%2F271%2C%20280%2002%20Kol%C3%ADn%20IV!5e0!3m2!1scs!2scz!4v1738164855741!5m2!1scs!2scz"
                    loading="lazy"
                ></iframe>
            </section>
        </section>
    );
};

export default Contacts;
