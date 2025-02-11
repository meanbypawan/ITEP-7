import { Component } from "react";

export default class Offer extends Component {
    render() {
        return <>
            <section className="offer_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 px-0">
                            <div className="box offer-box1">
                                <img src="images/o1.jpg" alt=""/>
                                    <div className="detail-box">
                                        <h2>
                                            Upto 15% Off
                                        </h2>
                                        <a href="">
                                            Shop Now
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-5 px-0">
                            <div className="box offer-box2">
                                <img src="images/o2.jpg" alt=""/>
                                    <div className="detail-box">
                                        <h2>
                                            Upto 10% Off
                                        </h2>
                                        <a href="">
                                            Shop Now
                                        </a>
                                    </div>
                            </div>
                            <div className="box offer-box3">
                                <img src="images/o3.jpg" alt=""/>
                                    <div className="detail-box">
                                        <h2>
                                            Upto 20% Off
                                        </h2>
                                        <a href="">
                                            Shop Now
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    }
}