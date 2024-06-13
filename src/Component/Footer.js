import React from 'react'
import { FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <div className="mkl_footer">
					<div className="sub-footer">
						<div className="container">
							<div className="mkls_footer_grid">
								<div className="col-xs-4 mkls_footer_grid_left">
									<h4>Location:</h4>
									<p>240 Võ Văn Ngân, phường Bình Thọ, 
										<br /> TP Thủ Đức, TPHCM</p>
								</div>
								<div className="col-xs-4 mkls_footer_grid_left">
									<h4>Mail Us:</h4>
									<p>
										<span>Phone : </span>0938 205 966</p>
									<p>
										<span>Email : </span>
										<a href="mailto:quangcao@ispace.edu.vn">quangcao@ispace.edu.vn</a>
									</p>
								</div>
								<div className="col-xs-4 mkls_footer_grid_left">
									<h4>Opening Hours:</h4>
									<p>Working days : 8am-10pm</p>
									<p>Sunday
										<span>(closed)</span>
									</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<br /> <br />
							<div className="footer-middle-thanks">
								<h2>Thanks For watching</h2>
							</div>
						</div>
					</div>
					<div className="footer-copy-right">
						<div className="container">

							<div className="footercopy-social" style={{aline: 'center'}} >
							<div className="icon-container">
      <a
        href="https://www.youtube.com/user/ispacechannel"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://www.facebook.com/ispace.vn"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://www.tiktok.com/@caodanganninhmangispace"
        target="_blank"
        rel="noopener noreferrer"
        className="tiktok"
      >
        <FaTiktok size={24} />
      </a>
    </div>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
  )
}

export default Footer