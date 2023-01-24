import React from 'react';
import ChildComponents from './childComponents';
import AddComponent from './addComponent';

class NewComponents extends React.Component {
    state = {
        arrJobs : [
            {id: 'person1', job: 'developer', salary: '500'},
            {id: 'person2', job: 'tester', salary: '400'},
            {id: 'person3', job: 'pm', salary: '1000'},
        ]
    }

    addNewJob = (newJob) => {
        console.log('check', newJob);
        this.setState({
            arrJobs : [...this.state.arrJobs, newJob]
        })
    }

    deleteJob = (elemJob) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== elemJob.id);
        this.setState ({
            arrJobs : currentJobs
        })
    }


    render() {
        
        
    return (
        <>
            <AddComponent 
                addNewJob = {this.addNewJob}
            />
            <ChildComponents 
                name={this.state.firstName} 
                age={'24'} 
                arrJobs={this.state.arrJobs}
                deleteJob={this.deleteJob}
            />
        </>
        )
    }

}
export default NewComponents;