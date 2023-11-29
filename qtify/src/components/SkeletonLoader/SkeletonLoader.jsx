import React from "react";
import Card from "./Card";

const SkeletonLoader = ({ name, count }) => {
	switch (name) {
		case "card":
			return <Card count={count} />;

		default:
			break;
	}
};

export default SkeletonLoader;
