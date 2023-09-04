function Side() {
	return (
		<aside className="py-3 sidebar">
			<form className="d-flex search-side" role="search">
				<input
					className="form-control me-2 rounded-pill"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
			</form>

			<section className="rounded-4 bg-light p-3 mt-3">
				<h4 className="mb-3">What's happening</h4>
				<div className="mb-3">
					<p className="m-0 text-black-50 trends-terciary-text">
						Programming - Trending
					</p>
					<h5 className="m-0 trends-secondary-text">#MongoVsSequelize</h5>
					<p className="m-0 text-black-50 trends-terciary-text">97,5k Tweets</p>
				</div>
				<div className="mb-3">
					<p className="m-0 text-black-50 trends-terciary-text">
						Programming - Trending
					</p>
					<h5 className="m-0 trends-secondary-text">#MongoVsSequelize</h5>
					<p className="m-0 text-black-50 trends-terciary-text">97,5k Tweets</p>
				</div>
				<div className="mb-3">
					<p className="m-0 text-black-50 trends-terciary-text">
						Programming - Trending
					</p>
					<h5 className="m-0 trends-secondary-text">#MongoVsSequelize</h5>
					<p className="m-0 text-black-50 trends-terciary-text">97,5k Tweets</p>
				</div>
				{/* <!-- More trending topics... --> */}
			</section>

			<section className="my-3 rounded-4 bg-light p-3">
				<h4 className="mb-3">Who to follow</h4>
				<div className="follow-user mb-3">
					<div className="d-flex align-items-center">
						<img src="/img/user1.png" className="side-pics" />
						<div className="side-text">
							<h3 className="m-0 fs-5">Hack Academy Dev</h3>
							<p className="text-black-50 m-0 fs-6">@HackAcademy</p>
						</div>
						<span className="btn rounded-pill">Follow</span>
					</div>
				</div>
				<div className="follow-user mb-3">
					<div className="d-flex align-items-center">
						<img src="/img/user1.png" className="side-pics" />
						<div className="side-text">
							<h3 className="m-0 fs-5">Hack Academy Dev</h3>
							<p className="text-black-50 m-0 fs-6">@HackAcademy</p>
						</div>
						<span className="btn rounded-pill">Follow</span>
					</div>
				</div>
				<div className="follow-user mb-3">
					<div className="d-flex align-items-center">
						<img src="/img/user1.png" className="side-pics" />
						<div className="side-text">
							<h3 className="m-0 fs-5">Hack Academy Dev</h3>
							<p className="text-black-50 m-0 fs-6">@HackAcademy</p>
						</div>
						<span className="btn rounded-pill">Follow</span>
					</div>
				</div>
				<div className="follow-user mb-3">
					<div className="d-flex align-items-center">
						<img src="/img/user1.png" className="side-pics" />
						<div className="side-text">
							<h3 className="m-0 fs-5">Hack Academy Dev</h3>
							<p className="text-black-50 m-0 fs-6">@HackAcademy</p>
						</div>
						<span className="btn rounded-pill">Follow</span>
					</div>
				</div>
				{/* <!-- More users to follow... --> */}
			</section>

			{/* <footer>
						<p>Terms of Service</p>
						<p>Privacy Policy</p>
						<p>Cookie Policy</p>
						<p>Accessibility</p>
						<p>Ads info</p>
						<p>More...</p>
						<p>© 2023 X Corp.</p>
					</footer> */}
		</aside>
	)
}

export default Side