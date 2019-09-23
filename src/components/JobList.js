import React from 'react';
import JobItem from './JobItem'

class JobList extends React.Component {
    render() {
        return (
            <ul className="table-view">
                {
                    this.props.jobs.map(job => <JobItem 
                                                            key={job.id} 
                                                            job={job} />)
                }
            </ul>
        );
    }
};

export default JobList;