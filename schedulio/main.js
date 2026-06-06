// Simple data-driven renderer for the class schedule

const days = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY'];

const schedule = {
	'08:00': [
		'MATH\nGeometry Gina',
		'PHYSICS\nDr. Book Worm',
		'BIOLOGY\nMr. Brainiac Brawn',
		'BIOLOGY\nMr. Brainiac Brawn',
		''
	],
	'09:00': [
		'',
		'MATH\nGeometry Gina',
		'',
		'ENGLISH\nMiss Wizbang',
		''
	],
	'10:00': [
		'CHEMISTRY\nCalculus Carl',
		'',
		'PHYSICS\nDr. Book Worm',
		'',
		''
	],
	'11:00': ['', '', '', '', 'CHEMISTRY\nCalculus Carl'],
	'12:00': ['LUNCH','LUNCH','LUNCH','LUNCH','LUNCH'],
	'13:00': ['ENGLISH\nMiss Wizbang','', 'CHESS PRACTICE','CHESS PRACTICE',''],
	'14:00': ['','', 'CHESS PRACTICE','CHESS PRACTICE','ACTING'],
	'15:00': ['','','','','ACTING']
};

function makeCell(content) {
	const td = document.createElement('td');
	if (!content) return td;
	// If content contains newlines, split into lines and make divs
	const parts = content.split('\n');
	parts.forEach(p => {
		const d = document.createElement('div');
		d.textContent = p;
		td.appendChild(d);
	});
	return td;
}

function renderSchedule(root) {
	const table = document.createElement('table');
	table.className = 'schedule';

	// header
	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const emptyTh = document.createElement('th');
	emptyTh.className = 'time-cell header_table';
	headerRow.appendChild(emptyTh);
	days.forEach(d => {
		const th = document.createElement('th');
		th.textContent = d;
		headerRow.appendChild(th);
	});
	thead.appendChild(headerRow);
	table.appendChild(thead);

	// body
	const tbody = document.createElement('tbody');
	Object.keys(schedule).forEach(time => {
		const tr = document.createElement('tr');
		const timeTd = document.createElement('td');
		timeTd.className = 'time-cell header_table';
		timeTd.textContent = time;
		tr.appendChild(timeTd);
		const row = schedule[time];
		for (let i = 0; i < days.length; i++) {
			const content = row[i] || '';
			tr.appendChild(makeCell(content));
		}
		tbody.appendChild(tr);
	});
	table.appendChild(tbody);

	root.innerHTML = '';
	root.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('schedule-root');
	if (!root) return;
	renderSchedule(root);
});

