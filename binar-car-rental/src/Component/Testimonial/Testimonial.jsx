import React from "react";


function Testimonial() {
    return (
        <section id="testimonial">
                <div className="container d-flex flex-column align-items-center">
                    <h3>Testimonial</h3>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="card d-flex p-3 border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                        <div className="row align-items-center border" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Assets/img_photo.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                                <div className="star my-3">
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3 d-flex border" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                        <div className="row d-flex align-items-center border" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Assets/img_photo.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                            <div className="star my-3">
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3 d-flex" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF'}}>
                        <div className="row d-flex align-items-center border" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center border">
                                <img src="./Assets/img_photo.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                            <div className="star my-3">
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="control container d-flex justify-content-center">
                    <button className="btn btn-light my-3 mr-3" style={{border: 'gray solid 1px', borderRadius: '50%'}}>&#60;</button>
                    <button className="btn my-3" style={{backgroundColor: '#5CB85F', borderRadius: '50%', color: 'white'}}>&#62;</button>
                </div>
        </section>
    )
}


export default Testimonial;