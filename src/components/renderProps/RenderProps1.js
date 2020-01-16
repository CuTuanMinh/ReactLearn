import React from 'react';

export default function({data, render}) {
	return (
		<div>
			{
				data.map(x => render(x))
			}
		</div>
	);
}

// import to PracticeReact.js

// Để render dữ liệu theo nhiều cách, thay vì mỗi cách phải viết 1 component,
// thì chỉ cần viết 1 component, truyền vào dữ liệu cho 1 props và truyền function cách hiển thị vào 1 props khác 