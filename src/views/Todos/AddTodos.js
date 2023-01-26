import React from 'react';

class AddTodos extends React.Component {
    state = {
        title : ''
    }

    handleOnChange = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    handleAddTodos = () => {
        if(!this.state.title) {
            alert('Todoの内容を入力ください。')
            return
        }
    let todo = {
        id: Math.floor(Math.random() * 1000),
        title: this.state.title
    }
    this.props.addNewTodos(todo)

    this.setState ({
        title: ''
    })
    }
    render() {
        let {title} = this.state
        return(
            <div className="add-todos">
                <input type="text" value={title} onChange={(event) => this.handleOnChange(event)}/>
                <button type="button" onClick={() => this.handleAddTodos()}>追加</button>
            </div>
        )
    }
}

export default AddTodos