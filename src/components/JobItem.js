import React from 'react';

class JobItem extends React.Component {

    render() {
        var { job } = this.props;
        return (
            <li className="table-view-cell media">
                <a href={job.url}>
                  <img 
                    src={job.company_logo} 
                    className="media-object small pull-left" 
                    alt="{job.description}" />
                  {job.title}
                  <p>{job.type}</p>
                  <div className="job-info">
                    {job.company}
                    <p>{job.location}</p>
                  </div>
                </a>
            </li>
        );
    }
};

export default JobItem;