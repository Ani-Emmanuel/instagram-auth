import './App.css';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/404/404';
import Register from './components/registration/register';
function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Register />
				</Route>
				<Route path='/terms'>
					<NotFound />
				</Route>
				<Route path='/data-policy'>
					<NotFound />
				</Route>
				<Route path='/cookies-policy'>
					<NotFound />
				</Route>
				<Route path='/login'>
					<NotFound />
				</Route>
				<Route path='/about'>
					<NotFound />
				</Route>
				<Route path='/blog'>
					<NotFound />
				</Route>
				<Route path='/jobs'>
					<NotFound />
				</Route>
				<Route path='/help'>
					<NotFound />
				</Route>
				<Route path='/api'>
					<NotFound />
				</Route>
				<Route path='/privacy'>
					<NotFound />
				</Route>
				<Route path='/top-accounts'>
					<NotFound />
				</Route>
				<Route path='/hashtags'>
					<NotFound />
				</Route>
				<Route path='/location'>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
