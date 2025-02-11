import { Component } from "react";

export default class BlogClient extends Component{
    render(){
        return <>
               <section className="blog_section ">
        <div className="container">
          <div className="heading_container">
            <h2>
              Latest From Blog
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/b1.jpg" alt=""/>
                    <h4 className="blog_date">
                      14 <br/>
                        July
                    </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Molestiae ad reiciendis dignissimos
                  </h5>
                  <p>
                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/b2.jpg" alt=""/>
                    <h4 className="blog_date">
                      15 <br/>
                        July
                    </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Dolores vel maiores voluptatem enim
                  </h5>
                  <p>
                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Testimonial
            </h2>
          </div>
          <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            Samantha Jonas
                          </h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established fact
                          that a reader will be distracted by the readable c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            Samantha Jonas
                          </h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established fact
                          that a reader will be distracted by the readable c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            Samantha Jonas
                          </h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established fact
                          that a reader will be distracted by the readable c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
        </>
    }
}