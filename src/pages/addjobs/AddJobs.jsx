import React from 'react';

const AddJobs = () => {
    const handleAddAJob = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
     


    }
    return (
        <div>
            <h2>Please add a job</h2>
            <form onSubmit={handleAddAJob}>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input
                        type="text"
                        name='title'
                        className="input"
                        placeholder="Job Title"
                    />

                    <label className="label">Company</label>
                    <input
                        type="text"
                        name='company'
                        className="input"
                        placeholder="Company Name"
                    />

                    <label className="label">Location</label>
                    <input
                        type="text"
                        name='location'
                        className="input"
                        placeholder="Company Location"
                    />

                    <label className="label">Company Logo</label>
                    <input
                        type="url"
                        name='company_logo'
                        className="input"
                        placeholder="Company Logo URL"
                    />
                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">

                        <input
                            className="btn filter-reset"
                            type="radio"
                            name="jobType"
                            aria-label="All"
                        />

                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="On-Site"
                        />

                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Remote"
                        />

                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Hybrid"
                        />
                    </div>

                </fieldset>

                {/* Job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select
                        defaultValue="Job Category"
                        name='category'
                        className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>

                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>
                    <input type="date" className="input" />

                </fieldset>

                {/* Salary Range */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input
                                type="text"
                                name='nin'
                                className="input"
                                placeholder="Minimum Salary"
                            />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input
                                type="text"
                                name='max'
                                className="input"
                                placeholder="Maximum salary"
                            />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select
                                defaultValue="Select a Currency"
                                name='Currency'
                                className="select">
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>

                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea
                        className="textarea"
                        name='description'
                        placeholder="Job Description">

                    </textarea>

                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea
                        className="textarea"
                        name='requirements'
                        placeholder="requirements (separate by comma)">

                    </textarea>

                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea
                        className="textarea"
                        name='responsibilities'
                        placeholder="responsibilities (separate by comma)">

                    </textarea>

                </fieldset>

                {/* HR Related Info */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input
                        type="text"
                        name='hr_name'
                        className="input"
                        placeholder="HR Name"
                    />

                    <label className="label">HR Email</label>
                    <input
                        type="email"
                        name='hr_email'
                        className="input"
                        placeholder="HR Email"
                    />

                </fieldset>
                <input type="submit" className='btn btn-primary' value="Add Job" />
            </form>
        </div>
    );
};

export default AddJobs;