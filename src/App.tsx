import React, { useState } from "react";
import AppConfig from "./components/AppConfig";
import Tweet from "./components/Tweet";
import { TwitterApi } from "twitter-api-v2";

export interface Config {
	appKey: string;
	appSecret: string;
	accessToken: string;
	accessSecret: string;
}

const App = () => {
	const [config, setConfig] = useState({} as Config);

	const makeTweet = async (tweet: string) => {
		console.log(tweet);
	};

	return (
		<div>
			<AppConfig setConfig={setConfig} />
			<Tweet makeTweet={makeTweet} />
		</div>
	);
};

export default App;
