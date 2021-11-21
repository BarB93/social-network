export const checkDate = (checkingDate, verificationDate) => {
	if (typeof verificationDate === 'string') {
		verificationDate =
			verificationDate === 'сегодня' || verificationDate === 'tooday'
				? new Date()
				: verificationDate
		verificationDate =
			verificationDate === 'вчера' || verificationDate === 'yesterday'
				? getYesterday(new Date())
				: verificationDate
	} else if (typeof verificationDate === 'number') {
		verificationDate = new Date(verificationDate)
	}

	return checkingDate.setHours(0, 0, 0, 0) === verificationDate.setHours(0, 0, 0, 0)
}

function getYesterday(d) {
	d.setDate(d.getDate() - 1)
	return d
}
