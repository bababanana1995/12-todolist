import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {action} from "@storybook/addon-actions";
import {string} from "prop-types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskStatus'),
        removeTask: action('changeTaskStatus'),
        task: {id: 'haha', title: 'JS', isDone: true},
        todolistId: '123'
    },
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TaskIsDoneStory: Story = {
    args: {
    },
};
export const TaskIsNoteDoneStory: Story = {
    args: {
        task: {id: 'haha', title: 'CSS', isDone: false},

    },
};
