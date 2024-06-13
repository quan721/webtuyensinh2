import React from 'react'
import { Link } from 'react-router-dom';
import DarkModeToggle from '../Component/DarkModeToggle';


function Header() {
	return (
		<div>
			<div className="header-top" style={{}}>
				<div className="container">
					<div className="row d-flex justify-content-end align-items-center">
						<div className="col-md-6 thim-have-any-question">
							Learning By Doing
						</div>
						<div className="col-md-3 mobile">
							<i className="fa fa-phone"></i>
							<a href="tel:02862678999" className="value">0938 205 966</a>
						</div>
						<div className="col-md-3 email">
							<i className="fa fa-envelope"></i>
							<a href="mailto:quangcao@ispace.edu.vn">quangcao@ispace.edu.vn</a>
						</div>
					</div>
				</div>
			</div>

			<div className="header">
				<div className="content white">
					<nav className="navbar navbar-default">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<img src="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-e1661395790159.png" alt="Trường Cao đẳng An ninh mạng iSPACE" />
							</div>

							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<nav className="link-effect-2" id="link-effect-2">
									<ul class="nav navbar-nav">
										<li>
											<Link to="/">Trang chủ</Link>
										</li>
										<li class="active">
											<Link to="/join">Đăng ký</Link>
										</li>



										<li class="dropdown">
											<a href="#3" class="dropdown-toggle" data-toggle="dropdown">
												Ngành học
												<span class="caret"></span>
											</a>
											<ul class="dropdown-menu" role="menu">
												<p>---Cao đẳng chính quy</p>
												<li>

													<Link to="/anm">An ninh mạng</Link>
												</li>
												<li>
													<Link to="/ptpm">Phát triển phần mềm</Link>
												</li>
												<li>
													<Link to="/tkdh">Thiết kế đồ họa</Link>
												</li>
												<p> ---Khóa học ngắn hạn</p>
												<li>
													<Link to="/ceh">Khóa Học CEH</Link>
												</li>
												<li>
													<Link to="/awh">Khóa học AWS Cloud Foundation</Link>
												</li>
												<li>
													<Link to="/dasdboard">Dash Board</Link>
												</li>
												<li className='active'>
													<DarkModeToggle />
												</li>



											</ul>

										</li>


									</ul>
								</nav>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header