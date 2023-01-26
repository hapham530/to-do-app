import React from 'react';
import AddTodos from './AddTodos';
import { toast } from 'react-toastify';

class ListTodos extends React.Component {
    state = {
        listTodos : [
            {id:'123', title:'運動'},
            {id:'122', title:'洗濯'},
            {id:'121', title:'買い物'}
        ],
        editTodo: {}
    }

    handleAddTodos = (todo) => {
        this.setState({
            listTodos : [...this.state.listTodos, todo]
        })
        toast.success("Todo Item Added");
    }

    handledeleteTodos = (todo) => {
        let currrentTodos = this.state.listTodos
        currrentTodos = currrentTodos.filter(item => item.id !== todo.id)
        this.setState ({
            listTodos : currrentTodos
        })
        toast.success("Todo Item Deleted");
    }

    handleEditTodo = (todo) => {
        let {listTodos,editTodo} = this.state
        let checkObjEmpty = Object.keys(editTodo).length === 0;
        
        if(checkObjEmpty === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]

            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title
            
            this.setState({
                listTodos : listTodosCopy,
                editTodo: {}
            })

            toast.success("Todo Item Updated");
            return
        }
        

        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEdit = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo : editTodoCopy
        })
    }

    render() {
        let {listTodos,editTodo} = this.state
        let checkObjEmpty = Object.keys(editTodo).length === 0;
        return(
            
            <div className="con-todos">
                <AddTodos addNewTodos={this.handleAddTodos}/>
                <div className="list-todos">
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item,index) => {
                                return(
                                <div className="item-todos" key={item.id}>
                                    {checkObjEmpty === true ?
                                    <span className="title-todo">{index + 1} - {item.title}</span>
                                    :
                                    <>
                                    {item.id === editTodo.id ?
                                    <span className="title-todo">{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnChangeEdit(event)}/></span>
                                    :
                                    <span className="title-todo">{index + 1} - {item.title}</span>
                                }
                                    </>
                                    }
                                    <button className="btn-edit" onClick={() => this.handleEditTodo(item)}>
                                        {checkObjEmpty === false && item.id === editTodo.id ? '保存' : '編集'}
                                    </button>
                                    <button className="btn-delete" onClick={() => this.handledeleteTodos(item)}>削除</button>
                                </div>
                                )
                            })
                        }
                </div>
            </div>
            
        )
    }

}

export default ListTodos;