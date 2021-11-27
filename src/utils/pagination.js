export const computeTotalItems = (totalCount, limit) => {
	const totalPages = Math.ceil(totalCount / limit)
	return totalPages < 1 ? 1 : totalPages
}
