import './App.css';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/404/404';
import Register from './components/registration/register';
function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Register} />
				<Route path='/terms' component={NotFound} />
				<Route path='/data-policy' component={NotFound} />
				<Route path='/cookies-policy' component={NotFound} />
				<Route path='/login' component={NotFound} />
				<Route path='/about' component={NotFound} />
				<Route path='/blog' component={NotFound} />
				<Route path='/jobs' component={NotFound} />
				<Route path='/help' component={NotFound} />
				<Route path='/api' component={NotFound} />
				<Route path='/privacy' component={NotFound} />
				<Route path='/top-accounts' component={NotFound} />
				<Route path='/hashtags' component={NotFound} />
				<Route path='/location' component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
