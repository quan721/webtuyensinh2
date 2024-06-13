import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';

import Form1 from '../Component/Form1';



function Join() {


	return (
		<div>
			<Header />

			<div className="inner_page_agile">

			</div>

			<div className="services-breadcrumb">
				<div className="inner_breadcrumb">
					<ul className="short_ls">
						<li>
							<a href="index.html">Trang chủ</a>
							<span>| |</span>
						</li>
						<li>Đăng ký</li>
					</ul>
				</div>
			</div>

			<Form1 />

			





			<Footer />
		</div>
	)
}

export default Join