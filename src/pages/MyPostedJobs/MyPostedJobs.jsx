import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const { user } = UseAuth();
    return (
        <div>
            <h2 className='text-4xl'>My Posted Jobs: </h2>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)} ></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;