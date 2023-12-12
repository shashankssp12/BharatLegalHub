import React, { useEffect, useContext } from 'react'
import stateContext from '../context/StateContext'
import "./styles/Home.css"
import ChatBot from './ChatBot'
import Card from './Card'
import Banner from './Banner'
import EmblemBadge from './EmblemBadge'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'
import "./styles/Faq.css"


const Home = () => {
    const navigate = useNavigate();
    const context = useContext(stateContext);
    const { getBadges, badges } = context;
    useEffect(() => {
        getBadges();
    }, [])

    return (
        <>
            <div className="container">
                <div className="bannerBox ">
                    <Banner />
                </div>
                <div className="platformServices">
                    <div className="cardSection">
                        <div className="serviceCard ourService">
                            <img src="/images/ourservice.jpg" alt="" />
                            <h3>Legal</h3>
                            <h3>Services</h3>
                        </div>
                        <div className="serviceCard">
                            <div className="imgSection">
                                <img src="/images/consultation.jpg" alt="" />
                            </div>
                            <div className="contentArea">
                                <h4>Legal Consultation</h4>

                            </div>
                            <button onClick={() => { navigate("/lawyers") }} className="explore">Explore</button>
                        </div>
                        <div className="serviceCard">
                            <div className="imgSection">
                                <img src="/images/doc writers.jpg" alt="" />
                            </div>
                            <div className="contentArea">
                                <h4>Document Writers</h4>

                            </div>
                            <button onClick={() => { navigate("/doc-writers") }} className="explore">Explore</button>
                        </div>
                        <div className="serviceCard">
                            <div className="imgSection">
                                <img src="/images/notar.png" alt="" />
                            </div>
                            <div className="contentArea">
                                <h4>Notaries</h4>

                            </div>
                            <button className="explore">Explore</button>
                        </div>
                        <div className="serviceCard">
                            <div className="imgSection">
                                <img src="/images/arb.png" alt="" />
                            </div>
                            <div className="contentArea">
                                <h4>Arbitrators</h4>

                            </div>
                            <button className="explore">Explore</button>
                        </div>
                        <div className="serviceCard">
                            <div className="imgSection">
                                <img src="/images/med.png" alt="" />
                            </div>
                            <div className="contentArea">
                                <h4>Mediators</h4>

                            </div>
                            <button className="explore">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="lawData">
                    <h3>Bare Acts</h3>
                    <h4>On the basis of Indian Law</h4>
                    <Swiper loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper" slidesPerView={8} autoplay spaceBetween={50}>
                        {
                            badges && Object.keys(badges).map((item, index) => {
                                return <SwiperSlide key={index}>
                                    <EmblemBadge link={badges[item].link} title={item} desc={badges[item].desc} color={badges[item].color} />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
                <div className="legalkart-faq mt-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-100p-md">
                                <h2 className="common-title m-0 m-b-30 font-40 font-weight-semibold color-white lh-56">
                                    Questions?
                                    <br />
                                    We’re here to help
                                </h2>
                                <p className="m-0 font-20 lh-28 color13 common-title-para">
                                    Visit our FAQs or get in touch with a live customer service representative through via email, chat, or phone.
                                </p>
                            </div>
                            <div className="col-8 col-100p-md">
                                <div className="accordion-sec content-card m-b-30">
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            WHAT IS ONLINE LEGAL CONSULTATION?
                                        </h2>
                                        <div className="panel m-b-20" style={{ display: "block" }}>
                                            <p className="text-light m-b-10">
                                                Online legal consultation, often known as online lawyer consultation, is a way to remotely link users and attorneys. Using the LegalKart app is a practical and straightforward method to acquire legal assistance online.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            ARE YOUR ONLINE LAWYERS QUALIFIED?
                                        </h2>
                                        <div className="panel m-b-20">
                                            <p className="text-light m-b-20">
                                                For each lawyer offering online legal consultation services on LegalKart, we have a stringent verification process in place. For each lawyer, a member of our staff manually examines the required paperwork, licenses, and certificates.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            WHAT HAPPENS IF I DON’T GET A RESPONSE FROM A LAWYER?
                                        </h2>
                                        <div className="panel m-b-20">
                                            <p className="text-light m-b-20">
                                                You are eligible for a 100% refund if, in the odd case, an online lawyer doesn't answer.                                </p>
                                        </div>
                                    </div>
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            HOW DO I BEGIN A LEGALKART ONLINE CONSULTATION WITH A LAWYER?
                                        </h2>
                                        <div className="panel m-b-20">
                                            <p className="text-light m-b-20">
                                                Starting an online Lawyer consultation is very simple on LegalKart:
                                            </p>
                                            <p className="text-light m-b-20" style={{ marginBottom: "10px !important" }}>
                                                Follow these 4 simple steps:
                                            </p>
                                            <ul className="m-t-0 text">
                                                <li className="text-light">Choose your Legal concern</li>
                                                <li className="text-light">Add LegalKart credits to your LegalKart wallet</li>
                                                <li className="text-light"><b>Choose the expert</b> of your choice and connect with them within 2 minutes</li>
                                                <li className="text-light">Discuss your legal queries with the Lawyer via audio or video call</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            IS LEGALKART'S ONLINE ATTORNEY CONSULTATION SAFE AND SECURE?
                                        </h2>
                                        <div className="panel m-b-20">
                                            <p className="text-light m-b-20">
                                                Protecting the privacy of our users is very important to us, thus we abide by all privacy and confidentiality laws. Knowing that your online consultation with a lawyer is entirely secure and secured utilizing 256-bit encryption will give you great peace of mind.                                </p>
                                        </div>
                                    </div>
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            WHAT ARE NOTARIES?
                                        </h2>
                                        <div className="panel m-b-20" style={{ display: "block" }}>
                                            <p className="text-light m-b-10">
                                                A person authorized to perform certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            WHAT ARE DOCUMENT WRITERS?
                                        </h2>
                                        <div className="panel m-b-20" style={{ display: "block" }}>
                                            <p className="text-light m-b-10">
                                                Document-writer means and includes one who is engaged in the profession of preparing and writing of document to be presented for registration having a valid licence issued by a competent authority.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion">
                                        <h2 className="accordion-header closed">
                                            WHAT ARE MEDIATORS?
                                        </h2>
                                        <div className="panel m-b-20" style={{ display: "block" }}>
                                            <p className="text-light m-b-10">
                                                The role of the mediator is to facilitate discussions between parties in order to negotiate a resolution to a dispute.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ChatBot/> */}
            </div>
        </>
    )
}

export default Home