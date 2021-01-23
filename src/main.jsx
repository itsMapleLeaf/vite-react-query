import React from "react"
import ReactDOM from "react-dom"
import { QueryCache, QueryClientProvider } from "react-query"
import devtools from "react-query/devtools"
import App from "./App"
import "./index.css"
const { ReactQueryDevtools } = devtools

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={new QueryCache()}>
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root"),
)
