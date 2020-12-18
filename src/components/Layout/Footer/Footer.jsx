import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {Button, Col, Row} from "react-bootstrap";

class FooterComponent extends Component {

    render() {
        return(

            <Container className="footer">
                <Row className="footer__signup-social-mobile-row-wrapper">
                    <Col>
                        <Row>
                            <Col>
                                <input type="text" placeholder="Save 10% off* your first order" />
                            </Col>
                            <Col>
                                <Button color="tertiary" fill="outline">Sign Up</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className="footer__social-icons">
                            FOLLOW US
                            <a href="https://www.facebook.com/whoslaundry09" target="_blank">
                                <i className="fab fa-facebook-f fa-3x"></i>
                            </a>
                            <a href="https://twitter.com/getvrom09" target="_blank">
                                <i className="fab fa-twitter fa-3x"></i>
                            </a>
                            <a href="https://www.instagram.com/getvrom09/" target="_blank">
                                <i className="fab fa-instagram fa-3x"></i>
                            </a>
                            <a>
                                <i className="fab fa-pinterest-p fa-3x"></i>
                            </a>
                            <a>
                                <i className="fab fa-youtube fa-3x"></i>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <a href="/mobile-app">
                        <i class="fal fa-mobile-alt"></i> Mobile apps
                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <ion-item-divider>
                                <input-label>About This Site</input-label>
                            </ion-item-divider>
                            <ion-item lines="none"><a href="/about">About This Site Name</a></ion-item>
                            <ion-item lines="none">
                                <a href="/history">Our History</a>
                            </ion-item>
                            <ion-item lines="none"><a href="/covid">COVID-19 Update</a></ion-item>
                            <ion-item lines="none"><a href="/location">Location</a></ion-item>
                            <ion-item lines="none"><a href="/testimonials">Testimonials</a></ion-item>

                    </div>
                    </Col>
                    <Col>
                        <div>
                            <ion-item-divider>
                                <ion-label>
                                    Customer Service
                                </ion-label>
                            </ion-item-divider>

                            <ion-item lines="none"><a href="/delivery">Delivery</a></ion-item>
                            <ion-item lines="none"><a href="/faq">FAQ</a></ion-item>
                            <ion-item lines="none"><a href="/returns">Returns</a></ion-item>
                            <ion-item lines="none"><a href="/products">Products</a></ion-item>
                            <ion-item lines="none"><a href="/price">Price Match</a></ion-item>
                            <ion-item lines="none"><a href="/warranty">Warranty Information</a></ion-item>
                    </div>
                    </Col>
                    <Col>
                        <div>
                            <ion-item-divider>
                                <ion-label>
                                    Got Questions?
                                </ion-label>
                            </ion-item-divider>
                            <div className="footer__wrapper__nav-subdiv__subdiv-3">
                                <ion-item lines="none">
                                    <ion-label>
                                        How can we help you sleep at night.
                                    </ion-label>
                                </ion-item>
                                <ion-item lines="none">
                                    <Button className="footer__wrapper__nav-subdiv__btn">Contact</Button>
                            </ion-item>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="footer__site-info__content-1">
                            &copy;  <a href="/welcome"></a>
                        All Rights Reserved.
                        </div>
                    </Col>
                    <Col>
                        <div className="footer__site-info__content-2">
                            <a href="/terms-conditions">Terms & Conditions |</a>
                        <a href="/privacy"> Privacy Policy |</a>
                        <a href="/sitemap"> Sitemap</a>
                    </div></Col>
                </Row>

            </Container>
        )
    }
}

export default FooterComponent
