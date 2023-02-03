import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApiAction, DeleteApiAction } from "../Action/action";
export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch]);
    const responsedata = useSelector((state) => state.reducer.details);
    const isDELETEdata = useSelector((state) => state.reducer.isDELETEdata);

    console.log(responsedata);
    if (isDELETEdata) {
        window.location.reload();
    }

    const xyz = responsedata
        ? responsedata.map((data, key) => {
              return (
                  <tr key={key}>
                      <th>{data.id}</th>
                      <th>{data.name}</th>
                      <th>{data.email}</th>
                      <th>{data.country}</th>
                      <th>
                          <button
                              className="btn btn-success"
                              onClick={() => {
                                  dispatch(DeleteApiAction(data.id));
                              }}
                          >
                              Delete
                          </button>
                      </th>
                  </tr>
              );
          })
        : null;

    return (
        <>
            <div className="container">
                <h2>Redux Crud</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>{xyz}</tbody>
                </table>
            </div>
        </>
    );
}
