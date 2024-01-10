import React, { useState } from "react";

const ItemsSearch = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		// Perform search logic here
	};

	return (
		<div className="bg-black text-white">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			Test
			<input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
			{/* Render search results here */}
		</div>
	);
};

export default ItemsSearch;
