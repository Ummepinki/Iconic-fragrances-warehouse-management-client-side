import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='text-center mt-5'>
            <section className="footer">

                <hr className="footer-seperator" />
                <section className="footer-info">
                    <section className="footer-info-left">
                        <section className="footer-info__name">
                            Software Engineer Umme
                        </section>
                        <section className="footer-info__returns">
                            Returns Policy
                            <br />
                            Delivery
                        </section>
                    </section>
                    <section className="footer-info-center">
                        <section className="footer-info__email">
                            umme.info@gmail.com
                        </section>
                        <section className="footer-info__terms">
                            Terms and Conditions
                            <br />
                            Copyright
                        </section>
                    </section>
                    <section className="footer-info-right">
                        <section className="footer-info__number">
                            +0019999988990
                        </section>
                        <section className="footer-info__contact">
                            Product
                            <br />
                            Contact Us
                        </section>
                    </section>
                </section>
                <p><small>copyright @ {year} </small></p>
                <hr className="footer-seperator" />

            </section>

        </footer>

    );
};




export default Footer;