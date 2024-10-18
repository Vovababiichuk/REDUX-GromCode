import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		// reducers:  Тут визначені три редуктори: increment, decrement та reset.  Завдяки Immer.js, вбудованому в Redux Toolkit, ви можете мутувати стан (state) напряму всередині редукторів, не турбуючись про незмінність.
		increment(state) {
			state.value += 1;
		},
		decrement(state) {
			state.value -= 1;
		},
		reset(state) {
			state.value = 0;
		}
	}
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;