import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Form1 from '../Component/Form1';




function Home() {

	return (
		<div>
			<body>
				<Header/>
			
				<div id="myCarousel" className="carousel slide" data-ride="carousel">

					<div className="carousel-inner" >
						<div className="item active">
							<div className="container">
								<div className="carousel-caption">
									<h6>Welcome To Ispace</h6>
									<h3>Leading
										<span>Colleges</span>
									</h3>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				<div className="banner-bottom-w3l" id="about">
					<div className="container">
						<div className="title-div">
							<h3 className="tittle">
								<span>W</span>elcome
							</h3>					
						</div>
						<div className="welcome-sub-wthree">
							<div className="col-md-6 banner_bottom_left">
								<h4>Đôi chút về 
									<span> ISPACE</span>
								</h4>
								<div class="elementor-widget-container">
                             <p>&nbsp; Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc&nbsp; <a href="https://ngs.com.vn/" trel="noopener">NGS Group</a>. iSPACE&nbsp;tiên phong trong đào tạo 
							 thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.</p>
							 <p>&nbsp;Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm 
								việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.</p>
                             <p>&nbsp;Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.</p>						</div>
							</div>
							<div className="col-md-6 stats-info-agile">
								<div className="col-xs-6 stats-grid stat-border">
									<div className='numscroller numscroller-big-bottom'>100%</div>
									<p>Sinh viên có việc làm ngay</p>
								</div>
								<div className="col-xs-6 stats-grid">
									<div className='numscroller numscroller-big-bottom' >15,000</div>
									<p>Sinh viên được đào tạo</p>
								</div>
								<div className="clearfix"></div>
								<div className="child-stat">
									<div className="col-xs-6 stats-grid stat-border border-st2">
										<div className='numscroller numscroller-big-bottom'>70%</div>
										<p>Thực hành</p>
									</div>
									<div className="col-xs-6 stats-grid">
										<div className='numscroller numscroller-big-bottom'>18 Năm</div>
										<p>Kinh nghiệm đào tạo</p>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="services">
					<div className="container">
						<div className="title-div">
							<h3 className="tittle">
								<br />
							<h2>BAN CỐ VẤN-GIẢNG VIÊN</h2>
							</h3>
							<div className="tittle-style">

							</div>
						</div>
						<div className="services-moksrow">
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
								<img fetchpriority="high" decoding="async" width="210" height="280" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-10-730x1024.png" alt="PGS.TS Nguyễn Duy Hàm"/>
								<p>Chức vụ: Hiệu trưởng Trường Cao đẳng An ninh mạng Ispace </p> <br />							
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
								<img fetchpriority="high" decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-11-730x1024.png" alt='THS.NCS Lê Hoàng Bình Nguyên' />
								<p>Chức vụ: Phó trưởng khoa Công nghệ thông tin</p>
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img fetchpriority="high" decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2021/11/NguyenThePhuong_GV.png" alt='Kỹ sư CNTT' />
									<p>Chức vụ: Giảng viên cơ hữu khoa Quản Trị Mạng</p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="services-moksrow">
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-12-730x1024.png" alt='Thầy Trương Phạm Hoài Thương' />
									<p>Chức vụ: Giảng viên cơ hữu Khoa An ning mạng</p>
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-13a-730x1024.jpg" alt='Cô Lê Thị Kim Ngân' />
									<p>Chức vụ: Giảng viên cơ hữu khoa Thiết kế đồ họa</p>
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img  decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/02/format-giang-vien-Anh-Dai-01.jpg" alt='Thầy Văn Minh Đại'/>
									<p>Chức vụ: Giảng viên khoa thương mại điện tử</p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="news" id="news">
					<div className="container">
						<div className="title-div">
							
						<Form1/>

	<h3 className="tittle">
								<span>L</span>earning
								By
								<span> D</span>oing
							</h3>
							<div className="tittle-style">

							</div>
						</div>
						
					</div>
				</div>
				<div className="modal about-modal fade" id="myModal" tabindex="-1" role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 className="modal-title">Best
									<span>Study</span>
								</h4>
							</div>
							<div className="modal-body">
								<div className="model-img-info">
									<img src="images/e1.jpg" alt="" />
									<p>Duis venenatis, turpis eu bibendum porttitor, sapien quam ultricies tellus, ac rhoncus risus odio eget nunc. Pellentesque
										ac fermentum diam. Integer eu facilisis nunc, a iaculis felis. Pellentesque pellentesque tempor enim, in dapibus turpis
										porttitor quis. Suspendisse ultrices hendrerit massa. Nam id metus id tellus ultrices ullamcorper. Cras tempor massa
										luctus, varius lacus sit amet, blandit lorem. Duis auctor in tortor sed tristique. Proin sed finibus sem</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="middle-sec-agile">
					<div className="container">
						<h4>Học tại &nbsp;
							<span>ISPACE</span></h4>
						<ul>
							<li>
								<div className="midle-left-w3l">
									<span className="fa fa-check" aria-hidden="true"></span>
								</div>
								<div className="middle-right">
									<h5> 100% CÓ VIỆC LÀM NGAY KHI TỐT NGHIỆP</h5>
									<p>Mô hình giảng dạy theo đặt hàng từ doanh nghiệp, đầu ra hơn 100 doanh nghiệp, cam kết giới thiệu đến khi có việc làm.</p>
								</div>
								<div className="clearfix"></div>
							</li>
							<li>
								<div className="midle-left-w3l">
									<span className="fa fa-check" aria-hidden="true"></span>
								</div>
								<div className="middle-right">
									<h5>CƠ SỞ VẬT CHẤT HIỆN ĐẠI</h5>
									<p>Cao đẳng duy nhất có trung tâm SOC (Security Operation Center).</p>
								</div>
								<div className="clearfix"></div>
							</li>
							<li>
								<div className="midle-left-w3l">
									<span className="fa fa-check" aria-hidden="true"></span>
								</div>
								<div className="middle-right">
									<h5>70% THỜI GIAN THỰC HÀNN</h5>
									<p>Mô hình đào tạo chú trọng thực hành với thời lượng 30% lý thuyết, 70% thực hành <br />
                                        Tốt nghiệp với 1 bằng cao đẳng và 2 chứng chỉ quốc tế</p>
								</div>
								
								<div className="clearfix"></div>
							</li>
						</ul>
						<a className="button-style" href="/Join">Tham Gia Ngay</a>
					</div>
					<div className="pencil-img">
						<img src="images/bg5.png" alt="" />
					</div>
				</div>
				<div className="testimonials">
					<div className="container">
						<div className="title-div">
							<h3 className="tittle">
								<span>T</span>in &nbsp;
								<span>N</span>ổi &nbsp;
								<span>B</span>ật &nbsp;
							</h3>
							
						</div>
						<ul id="flexiselDemo1">
							<li>
								<div className="three_testimonials_grid_main">
									<div className="col-xs-3 three_testimonials_grid_pos">
										<div className="grid-test-allah-agile">
											
										

                                       <img loading="lazy" className='img-responsive' decoding="async" src="https://ispace.edu.vn/wp-content/uploads/2024/05/Banner-su-kien-fb-iConnect-5-450x267.png" 
                                    alt="iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng chính thức khởi động." title="Banner sự kiện fb – iConnect 5" width="450" height="267" data-skip-lazy=""/>
											
										</div>
									</div>
									<div className="col-xs-9 three_testimonials_grid">
										<div className="three_testimonials_grid1">
											<h5>iCONNECTSPACE #5</h5>
											<p>MAY 26, 2024</p>
										</div>
										<p>
										Bán hàng trên sàn hay quảng cáo trên mạng diễn ra thành công tốt đẹp
										</p>
									</div>
									<div className="clearfix"> </div>
								</div>
							</li>
							<li>
								<div className="three_testimonials_grid_main">
									<div className="col-xs-3 three_testimonials_grid_pos">
										<div className="grid-test-allah-agile">
										
										<img loading="lazy" className="img-responsive" decoding="async" src="https://ispace.edu.vn/wp-content/uploads/2024/05/gian-lan-qua-mail-450x267.jpg"
											 alt="Đài HTV phỏng vấn chuyên gia iSPACE với chuyên đề cảnh báo chiêu trò gian lận qua mail"
											  title="gian-lan-qua-mail" width="450" height="267" data-skip-lazy=""></img>
										</div>
									</div>
									<div className="col-xs-9 three_testimonials_grid">
										<div className="three_testimonials_grid1">
											<h5>Cảnh báo chiêu trò gian lận qua mail</h5>
											<p>MAY 22, 2024</p>
										</div>
										<p>
										Đài HTV phỏng vấn chuyên gia iSPACE với chuyên đề cảnh báo chiêu trò gian lận qua mail
										</p>
									</div>
									<div className="clearfix"> </div>
								</div>
							</li>
							<li>
								<div className="three_testimonials_grid_main">
									<div className="col-xs-3 three_testimonials_grid_pos">
										<div className="grid-test-allah-agile">
										<img loading="lazy" className='img-responsive' decoding="async" src="https://ispace.edu.vn/wp-content/uploads/2024/05/19-450x267.png"
										 alt="Sự kiện iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng diễn ra thành công tốt đẹp"
										  title="su-kien-iconnectspace" width="450" height="267" data-skip-lazy=""/>
											
										</div>
									</div>
									<div className="col-xs-9 three_testimonials_grid">
										<div className="three_testimonials_grid1">
											<h5>iCONNECTSPACE #5</h5>
											<p>MAY 11, 2024</p>
										</div>
										<p>
										Bán hàng trên sàn hay quảng cáo trên mạng chính thức khởi động.
										</p>
									</div>
									<div className="clearfix"> </div>
								</div>
							</li>

						</ul>
					</div>
				</div>
				<Footer/>

			</body>
		</div>

	)
}

export default Home