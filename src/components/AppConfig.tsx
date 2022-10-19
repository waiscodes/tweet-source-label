import React, { useState } from "react";
import { Config } from "../App";

interface IAppConfig {
	setConfig: (config: Config) => void;
}

const AppConfig: React.FC<IAppConfig> = ({ setConfig }) => {
	const [appKey, setAppKey] = useState("");
	const [appSecret, setAppSecret] = useState("");
	const [accessToken, setAccessToken] = useState("");
	const [accessSecret, setAccessSecret] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (appKey && appSecret && accessToken && accessSecret) {
			setConfig({
				appKey,
				appSecret,
				accessToken,
				accessSecret,
			});
		}
	};

	return (
		<div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
			<form className="space-y-6" onSubmit={handleSubmit}>
				<h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
				<div>
					<label htmlFor="appKey" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						App Key
					</label>
					<input
						type="text"
						name="appKey"
						id="appKey"
						value={appKey}
						onChange={(e) => setAppKey(e.target.value)}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="App Key"
					/>
				</div>
				<div>
					<label htmlFor="appSecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						App Secret
					</label>
					<input
						type="text"
						name="appSecret"
						id="appSecret"
						value={appSecret}
						onChange={(e) => setAppSecret(e.target.value)}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="App Secret"
					/>
				</div>
				<div>
					<label htmlFor="accessToken" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Access Token
					</label>
					<input
						type="text"
						name="accessToken"
						id="accessToken"
						value={accessToken}
						onChange={(e) => setAccessToken(e.target.value)}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Access Token"
					/>
				</div>
				<div>
					<label htmlFor="accessSecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Access Secret
					</label>
					<input
						type="text"
						name="accessSecret"
						id="accessSecret"
						value={accessSecret}
						onChange={(e) => setAccessSecret(e.target.value)}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Access Secret"
					/>
				</div>
				<div className="flex items-start">
					<div className="flex items-start">
						<div className="flex items-center h-5">
							<input
								id="remember"
								type="checkbox"
								value=""
								className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
							/>
						</div>
						<label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Remember this App
						</label>
					</div>
				</div>
				<button
					type="submit"
					className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Login to your account
				</button>
				<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
					Not sure how?{" "}
					<a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
						Follow these steps
					</a>
				</div>
			</form>
		</div>
	);
};

export default AppConfig;
