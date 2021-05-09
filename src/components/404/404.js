import { useHistory } from 'react-router-dom';
import notfoundImg from '../../assests/images/404.png';
import './404.css';
const Notfound = () => {
	const history = useHistory();

	const Homepage = () => {
		const newPath = '/';
		history.push(newPath);
	};

	return (
		<div className='notfound-container'>
			<div className='notfound-row'>
				<div className='notfound-image'>
					<img src={notfoundImg} alt='not found' />
				</div>
				<div className='notfound-text'>
					<h1>404</h1>
					<h2>UH OH! You're lost.</h2>
					<p>
						The page you are looking for does not exist. How you got here is a
						mystery. But you can click the button below to go back to the
						homepage.
					</p>
					<button className='btn' onClick={Homepage}>
						HOME
					</button>
				</div>
			</div>
		</div>
	);
};

export default Notfound;
