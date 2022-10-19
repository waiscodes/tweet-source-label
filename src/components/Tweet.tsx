import React, { useState } from "react";

interface ITweet {
	makeTweet: (tweet: string) => void;
}

const Tweet: React.FC<ITweet> = ({ makeTweet }) => {
	const [tweet, setTweet] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (tweet) {
			makeTweet(tweet);
		}
	};
	return (
		<div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
			<form className="space-y-6" onSubmit={handleSubmit}>
				<h5 className="text-xl font-medium text-gray-900 dark:text-white">Make Tweet</h5>

				<div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
					<div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
						<label htmlFor="comment" className="sr-only">
							Your comment
						</label>
						<textarea
							id="comment"
							rows={4}
							value={tweet}
							onChange={(e) => setTweet(e.target.value)}
							className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
							placeholder="Write a comment..."
						></textarea>
					</div>
					<div className="flex items-center py-2 px-3 border-t dark:border-gray-600">
						<button
							type="submit"
							className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
						>
							Tweet
						</button>
						<div className="flex pl-0 space-x-1 sm:pl-2"></div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Tweet;
