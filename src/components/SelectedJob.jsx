import Button from '../components/Button';
import './SelectedJob.css'

export default function SelectedJob({ job }) {
    return (
        <>
            <div className='container job-container'>
                <div className='company-header'>
                    <div className='logo-bg' style={{backgroundColor: job.logoBackground}}>
                        <img className='inner-logo' src={job.logo}/>
                    </div>
                    <div className='company-site'>
                        <div>
                            <h3>{job.company}</h3>
                            <a>{job.website}</a>
                        </div>
                        <div className='company-btn'>
                            <Button href={job.website}>Company Site</Button>
                        </div>
                    </div>
                </div>

                <div className='job-details grid gap-4'>
                    <div>
                        <div className='flex post'>
                            <p className='post-aded'>{job.postedAt}</p>
                            <p className='contract-type'>{job.contract}</p>
                        </div>
                        <div className='header_selected-job'>
                            <div className='job-position-wrapper'>
                                <h1 className='job_position'>{job.position}</h1>
                                <p className='company-location location_job_dscription'>United Kingdom</p>
                            </div>
                            <div className='button-wrapper'>
                                <Button href={job.apply} primary>Apply now</Button>
                            </div>
                        </div>

                        <p className='job-description'>{job.description}</p>
                    </div>


                    <div className='grid gap-2'>            
                        <h3>Requirements</h3>
                        <p>{job.requirements.content}</p>
                        <ul>
                            {
                                job.requirements.items.map(item => {
                                    return <li key={item}>{item}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className='grid-gap-2'>
                        <h3>What You Will Do</h3>
                            <p>{job.role.content}</p>
                            <ol>
                                {
                                    job.role.items.map(role => {
                                        return <li key={role}>{role}</li>
                                    })
                                }
                            </ol>
                    </div>
                </div>
            </div>

            <div className='job-description_footer-wrapper'>
                <div className='flex container job-container job-description_footer'>
                    <div className='job-name_footer'>
                        <h3>{job.position}</h3>
                        <p>{job.company}</p>
                    </div>
                    <Button href={job.apply} primary>Apply now</Button>                               
                </div>
            </div>
        </>
    )
}