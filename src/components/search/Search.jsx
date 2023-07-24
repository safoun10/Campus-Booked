import React from "react";
import "./Search.css";

const Search = () => {

    const handleSearch = e => {
        e.preventDefault();

		const form = e.target;
        const text = form.text.value;

        console.log(text);
        form.text.value = "";
    }

	return (
		<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
			<div className="text-center display-4 fw-bold">
				Search your Dream College here !
			</div>

			<form onSubmit={handleSearch}>
				<div className="text-center text-secondary py-2 mb-5">
					Discover Your Dream College - Where Futures Take Flight!
				</div>
				<div className="search-bar">
					<input type="text" name="text" className="search-input" required/>
					<input className="search" type="submit" value={"Search!"}/>
				</div>
			</form>
		</div>
	);
};

export default Search;
