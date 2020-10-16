// Core
import React from 'react';

// Assets
import logo from '../../assets/img/logo_white.svg'

const Header = () => { 
	return (
		<>
			<style jsx>{`
				header {
					padding: 60px 0;
				}

				.logo {
					max-width: 600px;
					padding: 0 20px;
					margin: 0 auto;
				}
			`}</style>
			<header>
				<div className="logo">
					<img src={logo} />
				</div>
			</header>
		</>
	);
}

export default Header;
