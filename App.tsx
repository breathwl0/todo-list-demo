import React, { useRef } from "react";
import ReactDOM from "react-dom/client";

interface IHeaderProps {
  totalCount: number;
  finishedCount: number;
  unfinishedCount: number;
}
const Header = (props: IHeaderProps) => {
  return (
    <div>
      <div>
        <h1>TODO List</h1>
      </div>
      <div>
        <p>(当前总量: {props.totalCount}, 已完成: {props.finishedCount}, 未完成: {props.unfinishedCount})</p>
      </div>
    </div>
  );
};

interface IInputComponentProps {
  onConfirm: (todo: string) => void;
}
const InputComponent = (props: IInputComponentProps) => {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={() => {
        const val = inputRef.current.value.trim();
        props.onConfirm(val);
      }}>
        添加
      </button>
    </div>
  )
}

interface IToDoListItem {
  id:string;
  title: string;
  createTime: number;
  isFinished: boolean;
}
interface TodoListComponentProps {
  onEditTodo: (id: string) => void;
  todoList: Array<IToDoListItem>;
}
const TodoListComponent = (props: TodoListComponentProps) => {
  return (
    <div>
     {
       props.todoList.map((todo) => {
        const titleStyle = {
          textDecoration: todo.isFinished ? 'line-through': 'auto'
        };
        return (
          <div>
            <input type="checkbox" checked={todo.isFinished} onChange={() => {
              props.onEditTodo(todo.id);
            }}/>
            <span style={titleStyle}>{todo.title}</span>
          </div>
        );
       })
     }
    </div>
  )
}


interface IBodyProps {
  onAddTodo: (title: string) => void;
  onEditTodo: (id: string) => void;
  todoList: Array<IToDoListItem>;
}
const Body = (props: IBodyProps) => {
  return (
    <div>
      <InputComponent onConfirm={props.onAddTodo} />
      <TodoListComponent todoList={props.todoList} onEditTodo={props.onEditTodo}/>
    </div>
  );
}

class App extends React.Component {
  state = {
    count: 2,
    todoList: [
      {
        id: '1',
        title: '开发任务 1',
        createTime: Date.now(),
        isFinished: false
      },
      {
        id: '2',
        title: '开发任务 2',
        createTime: Date.now(),
        isFinished: false
      },
    ]
  };

  render() {
    const finishTodoList = this.state.todoList.filter(todo => todo.isFinished);
    const unfinishedTodoList = this.state.todoList.filter(todo =>!todo.isFinished);
    return (
      <div>
        <Header
          totalCount={this.state.count}
          finishedCount={finishTodoList.length}
          unfinishedCount={unfinishedTodoList.length}
        />
        <Body
          todoList={this.state.todoList}
          onAddTodo={title => {
            this.setState({
              count: this.state.count++,
              todoList: [
                ...this.state.todoList,
                {
                  id: `${this.state.count + 1}`,
                  title,
                  createTime: Date.now(),
                  isFinished: false
                }
              ]
            })
          }}
          onEditTodo={(id) => {
            const todoList = this.state.todoList.map(todo => {
              if (todo.id === id) {
                return {
                  ...todo,
                  isFinished: !todo.isFinished
                };
              }
              return todo;
            })
            this.setState({
              todoList,
            });
          }}
        />
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);