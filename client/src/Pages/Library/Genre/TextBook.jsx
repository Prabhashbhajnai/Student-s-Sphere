import React, {useState, useEffect} from "react";

// components
import BookCard from "../../../components/Library/Books/BookCard";

const TextBook = () => {
	return (
		<>
			<div className="flex flex-wrap gap-14 mx-1">
				<BookCard />
			</div>
		</>
	);
}

export default TextBook;