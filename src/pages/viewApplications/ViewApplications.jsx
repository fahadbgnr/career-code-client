import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id)

        axios.patch(`https://career-code-server-rosy.vercel.app/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application Status Updated.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <h2 className="text-4xl">{applications.length}Applications For: {job_id}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            applications.map((application, index) =>
                                <tr key={application._id} >
                                    <th>{index + 1}</th>
                                    <td>{application.applicant}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>
                                        <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                                            <option disabled={true}>Update Status</option>
                                            <option>Pending</option>
                                            <option>Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;