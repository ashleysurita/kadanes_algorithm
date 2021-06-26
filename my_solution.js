function kadanesAlgorithm(array) {
  let max = -Infinity
	let maxSoFar = -Infinity
	array.forEach(num => {
		const maxWithCurr = num + maxSoFar
		maxSoFar = Math.max(num, maxWithCurr)
		max = Math.max(max, maxSoFar)
	})
	
	return max
}
