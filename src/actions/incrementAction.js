// name of action.

export const increment = (number) => {
	return {
		type: 'INCREMENT', // this name can be anything.
		param: number
	}
}