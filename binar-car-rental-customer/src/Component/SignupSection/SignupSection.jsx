import React from "react";
import "./SignupSection.css";
import * as Yup from 'yup'
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function SignupSection() {
    const navigate = useNavigate();

    const handleSubmit = async(values, actions) => {
        try {
            const response = await axios({
                    method: "POST",
                    url: "https://bootcamp-rent-car.herokuapp.com/customer/auth/register",
                    data: values,
            })
            actions.setSubmitting(false);
            actions.resetForm();
            navigate('/login');
        } catch (error) {
            actions.setSubmitting(false);
        }
    }

    const signupSchema = Yup.object().shape({
        name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be 3 characters at minimum")
        .max(15, "Name must be 15 characters at maximum"),
        email: Yup.string()
        .email("Invalid email adress format")
        .required("Password is required"),
        password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be 6 characters at minimum"),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: signupSchema,
        onSubmit: (values, actions) => {
            handleSubmit(values, actions)
        },
    })
    
    return (
        <section id="signupSection" className="mb-0">
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="leftside col-lg-6 d-flex flex-column justify-content-sm-center align-items-center">
                    <form className="mx-3" onSubmit={formik.handleSubmit}>
                        <div className="rectangle"></div>
                        <h1 className="w-100 my-4">Sign Up</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input  
                                className="form-control" 
                                aria-describedby="name" 
                                placeholder="Full Name"
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name} 
                            />
                            {formik.touched.name && formik.errors.name ? <div className="text-danger mt-1">{formik.errors.name}</div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input 
                                className="form-control" 
                                placeholder="Contoh: johndoe@gmail.com"
                                id="email" 
                                name="email"
                                type="email" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <div className="text-danger mt-1">{formik.errors.email}</div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Create Password*</label>
                            <input 
                                placeholder="6+ Karakter"
                                className="form-control" 
                                id="password" 
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? <div className="text-danger mt-1">{formik.errors.password}</div> : null}
                        </div>
                        <button type="submit" className="btn mt-3">Sign Up</button>
                        <p className="mt-4 d-flex justify-content-center">Already have an account?<a href="/login">Sign In here</a></p>
                    </form>
                    </div>
                    <div className="rightside col-lg-6 d-none d-lg-flex">
                        <h1>Binar Car Rental</h1>
                        <div className="image border">
                            <img src="/Assets/landing-page.png" alt="landing-page" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupSection;