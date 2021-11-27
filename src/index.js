import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<ReduxProvider store={store}>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
