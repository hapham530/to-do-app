import React from 'react';
class AddComponent extends React.Component {
    state = {
        job: '',
        salary: '',
    }
    handleChangeJob = (event) => {
        this.setState({
            job: event.target.value
        }) 
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        }) 
    }

    handleOnClick = () => {
        console.log('check input data:', this.state);

        if(!this.state.job || !this.state.salary) {
            alert('missing required parameters');
            return
        }

        this.props.addNewJob({
            id : Math.floor(Math.random() * 101),
            job : this.state.job,
            salary : this.state.salary,
        })

        this.setState({
            job : '',
            salary : ''
        }) 
    }
    render() {
        return(
            <>
            <form action="">
                <label for="fname">Job Title:</label><br/>
                <input 
                    type="text" 
                    value={this.state.job} 
                    onChange={(event) => this.handleChangeJob(event)} 
                />
                <br/>
                <label for="lname">Salary:</label><br/>
                <input 
                    type="text" 
                    value={this.state.salary} 
                    onChange={(event) => this.handleChangeSalary(event)} 
                />
                <br/>
                <br/>
                <input 
                    type="button" 
                    value="Submit" 
                    onClick={() => this.handleOnClick()}
                />
            </form> 
            </>
        )
    }
}
export default AddComponent