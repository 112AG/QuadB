import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        removeTask: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        },
        updateTask: (state, action) => {
            const { index, newTask, newPriority } = action.payload;
            state[index] = { text: newTask, priority: newPriority };
        },
    },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;