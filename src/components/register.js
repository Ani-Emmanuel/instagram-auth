import firstImage from '../assests/images/180ae7a0bcf7.png';
import secondImage from '../assests/images/e9cd846dc748.png';
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
							<span className='span-text'> Terms</span>,
							<span className='span-text'> Data Policy </span>
							and <span className='span-text'>Cookies Policy</span>.
						</p>
					</div>
				</div>
			</div>
			<div className='login-section'>
				<p className='account-login'>Have an account? Log in</p>
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
		</div>
	);
};

export default Register;
