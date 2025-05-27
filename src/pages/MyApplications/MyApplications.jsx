import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';



const MyApplications = () => {
    const { user } = UseAuth();
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'Loading Your Applications'} >
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;