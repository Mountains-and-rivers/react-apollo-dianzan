import React, { Component } from 'react';
import { gql } from "apollo-boost";
import {  Mutation ,Query } from "react-apollo";

const GET_TODOS = gql`
  query {
    todos{
      id
      dianzan
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($input: updateTodoInput) {
    updateTodo(input: $input) {
      todo {
        id
        dianzan
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.todos.map(({ id, dianzan }) => {
            let input;

            return (
              <Mutation mutation={UPDATE_TODO} key={id}>
                {updateTodo => (
                  <div>
                    <p>{dianzan}{"  ⭐"}</p>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        console.log("----------------------print---------------------------")
                        console.log( input.value )
                        console.log(id)
                        updateTodo({
                          variables: {
                            input: {
                              where: {
                                id: id
                              },
                              data: {
                                dianzan: parseInt(input.value)
                              }
                            }
                          }
                        });
                        input.value = "";
                      }}
                    >
                      <input
                        ref={node => {
                          input = node;
                        }}
                      />
                      <button type="submit">点赞</button>
                    </form>
                  </div>
                )}
              </Mutation>
            );
          });
        }}
      </Query>
    );
  }
}

export default App;
