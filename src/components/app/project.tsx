import { Component } from "react";
import Select from "react-select/src/Select";
import React from "react";

const API = 'https://virtserver.swaggerhub.com/psyclone1991/cobol-colleague_representation/1.1/projects/';

export class ProjectsList extends Component{

    state = {
        todos: [
          {
            label: 1,
            value: 'Take out the trash',
          },
          {
            label: 2,
            value: 'Grocery shopping',
          },
          {
            label: 3,
            value: 'Clean gecko tank',
          }
        ]
      };
      render() {
        const todoItems = this.state.todos;
        return todoItems.map((todoItem, index) => (
            <Select options={todoItems} />
        ));
      }
     }