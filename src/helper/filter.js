function filter(time) {
	const now = new Date().getTime();
	console.log(now - time);
	const diff = now - 86400000;
	const _date = new Date(diff);
	const yyyy = _date.getFullYear();
	const month = _date.getMonth() + 1;
	const M = month < 10 ? `0${month}` : `${month}`;
	const date = _date.getDate();
	const d = date < 10 ? `0${date}` : `${date}`;

	if (diff < 60000) {
		return `${Math.round(diff / 1000)} s `;
	} else if (diff >= 60000 && diff < 3600000) {
		return `${Math.round(diff / 60000)} min(s) `;
	} else if (diff >= 3600000 && diff < 8640000) {
		return `${Math.round(diff / 3600000)} hr(s) `;
	} else if (diff >= 86400000) {
		return `${yyyy}-${M}-${d}`;
	}
	return diff;
}
export { filter };
