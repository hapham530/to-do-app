import React from 'react';

class ChildComponents extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (elemJob) => {
        console.log('>>handleDelete', elemJob);
        this.props.deleteJob(elemJob)
    }
    render() {
    let {arrJobs} = this.props;
    let {showJobs} = this.state;
    return (
        <>
            {!showJobs && <button onClick={() => this.handleShowHide()}>show</button>}
            {showJobs && 
                <>
                    <div className="job-description">
                        {
                            arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.job} - {item.salary}&nbsp;<span onClick={() => this.handleDelete(item)}>X</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={() => this.handleShowHide()}>hide</button>
                </>
            }
        </>
        )
    }
}

// const ChildComponents = (props) => {
//     console.log('>>check props', props)
//     let {arrJobs} = props;
//     return (
//         <div className="job-description">
//             {
//                 arrJobs.map((item, index) => {
//                     if(item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.job} - {item.salary}$
//                             </div>
//                         )
                        
//                     }
//                 })
//             }
//         </div>
//     )
// }
export default ChildComponents;