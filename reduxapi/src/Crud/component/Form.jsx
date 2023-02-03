import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PostApiAction } from "../Action/action";

export default function Form(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const dispatch = useDispatch();

    const nameHandler = (e) => {
        setName(e.target.value);
    };
    const emailHandler = (e) => {
        setEmail(e.target.value);
    };
    const countryHandler = (e) => {
        setCountry(e.target.value);
    };

    // For click Event

    const ClickHandler = (e) => {
        e.preventDefault();
        console.log("btn_called");
        const Finaldata = {
            name: name,
            email: email,
            country: country,
        };
        console.log(Finaldata);
        dispatch(PostApiAction(Finaldata));
    };

    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-6">
                        <form method="post">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                onChange={(e) => nameHandler(e)}
                            />
                            <br />

                            <label htmlFor="name">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                onChange={(e) => emailHandler(e)}
                            />
                            <br />
                            <label htmlFor="name">Country</label>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                className="form-control"
                                onChange={(e) => countryHandler(e)}
                            />
                            <br />

                            <button
                                className="btn btn-secondary"
                                type="submit"
                                onClick={(e) => ClickHandler(e)}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
