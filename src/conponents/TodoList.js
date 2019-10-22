import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const TodosQuery = gql`
    query {
        allTodoes {
            id
            text
        }
    }
`;

class TodoList extends Component {
    renderTodosList = () => (
        <ul>
            { this.props.todos.allTodoes.map(todo => 
                <li key={todo.id}>{todo.text}</li>
            )}
        </ul>
    );

    render() {
        const { todos } = this.props;

        return(
            <>
                { this.props.loading
                    ? <p>Carregando...</p>
                    : this.renderTodosList()
                }
            </>
        );
    }
}


export default graphql(TodosQuery, {
    nome: 'todos'
})(TodoList);