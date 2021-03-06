import { Link } from 'react-router-dom';
import './registration.css';
import firstImage from '../../assests/images/180ae7a0bcf7.png';
import secondImage from '../../assests/images/e9cd846dc748.png';
// import NotFound from '../404/404';
const Register = () => {
	return (
		<div className='container'>
			<div className='registration-section'>
				<h1 className='registration-header'>Instagram</h1>
				<div className='registration-form-section'>
					<form id='register' className='registration-form'>
						<h2 className='registration-subheader'>
							Sign up to see photos and videos from your friends.
						</h2>
						<div className='fb-login-section'>
							<button className='fb-login'>Log in with Facebook</button>
						</div>
						<div className='line-divider'>
							<div className='first-line'></div>
							<div className='or-divider'>or</div>
							<div className='second-line'></div>
						</div>
						<div className='user-info-section'>
							<input placeholder='Mobile Number or Email' />
							<input placeholder='Full Name' />
							<input placeholder='Username' />
							<input placeholder='Password' />
							<button className='btn-signup'>Sign Up</button>
						</div>
					</form>
					<div className='terms-text-section'>
						<p className='terms-text'>
							By signing up, you agree to our
							<span className='span-text'>
								<Link to='/terms'> Terms, </Link>
							</span>
							<span className='span-text'>
								<Link to='/data-policy'> Data Policy </Link>
							</span>
							<span className='span-text'>
								<Link to='/cookies-policy'> Cookies Policy</Link>
							</span>
							.
						</p>
					</div>
				</div>
			</div>
			<div className='login-section'>
				<p className='account-login'>
					Have an account? <Link to='/login'>Log in</Link>
				</p>
			</div>
			<div className='advart-section'>
				<div className='discription-text-section'>
					<p>Get the app.</p>
				</div>
				<div className='image-secction'>
					<img src={firstImage} alt='download from appstore' />
					<img src={secondImage} alt='download form playstore' />
				</div>
			</div>
			<div className='footer-section'>
				<div className='links'>
					<p>
						<Link to='/about'>About</Link>
					</p>
					<p>
						<Link to='/blog'>Blog</Link>
					</p>
					<p>
						<Link to='/jobs'>Jobs</Link>
					</p>
					<p>
						<Link to='/help'>Help</Link>
					</p>
					<p>
						<Link to='/api'>API</Link>
					</p>
					<p>
						<Link to='/privacy'>Privacy</Link>
					</p>
					<p>
						<Link to='/terms'>Terms</Link>
					</p>
					<p>
						<Link to='/top-accounts'>Top Accounts</Link>
					</p>
					<p>
						<Link to='/hashtags'>Hashtags</Link>
					</p>
					<p>
						<Link to='/location'>Location</Link>
					</p>
				</div>

				<div className='language-selector'>
					<select aria-label='Switch Display Language' class='hztqj'>
						<option value='af'>Afrikaans</option>
						<option value='cs'>??e??tina</option>
						<option value='da'>Dansk</option>
						<option value='de'>Deutsch</option>
						<option value='el'>????????????????</option>
						<option value='en'>English</option>
						<option value='en-gb'>English (UK)</option>
						<option value='es'>Espa??ol (Espa??a)</option>
						<option value='es-la'>Espa??ol</option>
						<option value='fi'>Suomi</option>
						<option value='fr'>Fran??ais</option>
						<option value='id'>Bahasa Indonesia</option>
						<option value='it'>Italiano</option>
						<option value='ja'>?????????</option>
						<option value='ko'>?????????</option>
						<option value='ms'>Bahasa Melayu</option>
						<option value='nb'>Norsk</option>
						<option value='nl'>Nederlands</option>
						<option value='pl'>Polski</option>
						<option value='pt-br'>Portugu??s (Brasil)</option>
						<option value='pt'>Portugu??s (Portugal)</option>
						<option value='ru'>??????????????</option>
						<option value='sv'>Svenska</option>
						<option value='th'>?????????????????????</option>
						<option value='tl'>Filipino</option>
						<option value='tr'>T??rk??e</option>
						<option value='zh-cn'>??????(??????)</option>
						<option value='zh-tw'>??????(??????)</option>
						<option value='bn'>???????????????</option>
						<option value='gu'>?????????????????????</option>
						<option value='hi'>??????????????????</option>
						<option value='hr'>Hrvatski</option>
						<option value='hu'>Magyar</option>
						<option value='kn'>???????????????</option>
						<option value='ml'>??????????????????</option>
						<option value='mr'>???????????????</option>
						<option value='ne'>??????????????????</option>
						<option value='pa'>??????????????????</option>
						<option value='si'>???????????????</option>
						<option value='sk'>Sloven??ina</option>
						<option value='ta'>???????????????</option>
						<option value='te'>??????????????????</option>
						<option value='vi'>Ti???ng Vi???t</option>
						<option value='zh-hk'>??????(??????)</option>
						<option value='bg'>??????????????????</option>
						<option value='fr-ca'>Fran??ais (Canada)</option>
						<option value='ro'>Rom??n??</option>
						<option value='sr'>????????????</option>
						<option value='uk'>????????????????????</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Register;
