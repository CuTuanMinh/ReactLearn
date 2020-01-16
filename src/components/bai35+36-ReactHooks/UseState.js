// viết component bằng function(sử dụng hook)

import React, { useState } from 'react';
// useState là 1 loại hook
// có nhiều loại hook tùy mục đích sử dụng 

export default function() {
	const [count, setCount] = useState(0);
	// 0 là giá trị khởi đầu
	return (
		<div>
			<h2>{count}</h2> {/*in giá trị hiện tại */}
			<button onClick={() => setCount(count + 1)}>Increase</button> {/*bấm vào tăng lên 1*/}
		</div>
	);
}

// dùng hook để rút ngắn code 

