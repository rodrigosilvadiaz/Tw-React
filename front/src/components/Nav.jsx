function Nav(){
	return(
		<div className="row">
			<div className="col-3 d-none d-md-block"></div>
			<div className="col-9 mt-3">
				<div>
					<a href="/"><img className="img-nav-logo" src="/img/logo_azul.png" alt="" /></a>
				</div>
				<br />
				<div className="justify-content-start align-items-center d-flex">
					<img className="img-nav" src="/img/house2.png" alt="" />
					<a className="text-decoration-none text-reset fs-4 ms-2" href="/">Home</a>
				</div>
				<br />
				<div className="justify-content-start align-items-center d-flex">
					<img className="img-nav" src="/img/user3.png" alt="" />
					<a className="text-decoration-none text-reset fs-4 ms-2" href="/profile/1">Profile</a>
				</div>
				<br /><br />
				<div><a className="newtweet text-decoration-none" href="">Tweet</a></div>
				<div><a className="logout text-decoration-none" href="">Logout</a></div>
			</div>
		</div>
	)
}

export default Nav;