import React from 'react'

import theme3 from '../../src/image2/theme4.jpg';
import loiich1 from '../../src/image2/loiich.jpg';
import Form1 from '../Component/Form1';
import Footer from '../Component/Footer';

function TKĐH() {
 
  return (
    <div>
    <div className="header-top">
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
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <a href='/' className="effect-3">Trang Chủ</a>
                                        </li>
                                        <li>													
                                            <a href="/join" className="effect-3">Đăng Ký</a>
                                        </li>
                                         <li className="dropdown">
                                            <a href="#a" className="dropdown-toggle" data-toggle="dropdown">Ngành Học
                                                <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li>
                                                    ---Cao đăng chính quy
                                                    <a href="/anm">An ning mạng</a>
                                                </li>
                                                <li>
                                                    <a href="/ptpm">Phát triển phần mềm</a>
                                                </li>
                                                <li>
                                                    <a href='/tkdh'>Thiết kế đồ họa</a>
                                                </li>
                                                    ---Khóa ngắn hạn
                                                <li>
                                                    <a href='/ceh'>Khóa Học CEH</a>
                                                </li>
                                                <li>
                                                    <a href='/awh'>Khóa học AWS Cloud Foundation</a>
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

            <div className="elementor" >
           <img fetchpriority="high" decoding="async" width="3000" height="1042" src={theme3} alt="" sizes="(max-width: 2500px) 100vw, 2500px"/>
           </div>

<div className="services-breadcrumb">
    <div className="inner_breadcrumb">
        <ul className="short_ls">
            <li>
                <a href="index.html">Trang chủ</a>
                <span>| |</span>
            </li>
            <li>Thiết Kế Đồ Họa</li>
        </ul>
    </div>
</div>

 {/*}  <div className="register-form-main">
    <div className="container">
        <div className="title-div">
            <h3 className="tittle">
                <span>F</span>orm
                
            </h3>
            <div className="tittle-style">

            </div>
        </div>
        <div className="register-form">
            <form action="#" method="post">
                <div className="fields-grid">
                    <div className="styled-input">
                        <input type="text" placeholder="Họ và tên" name="Your name" required=""/>
                    </div>
            
                    <div className="styled-input agile-styled-input-top">
                        <select className="category2"  required="">								
                            <option value="">Sinh viên</option>
                            <option value="">HS hoàn thành THPT</option>
                            <option value="">HS đang học lớp 12</option>
                            <option value="">Người đi làm</option>
                        </select>
                    </div>
                    <div className="styled-input">
                        <input type="email" placeholder="E-mail của bạn" name="Email" required=""/>
                    </div>
                    <div className="styled-input">
                        <input type="text" placeholder="Số điện thoại của bạn" name="Phone" required=""/>
                    </div>
                    <div className="styled-input agile-styled-input-top">
                        <select className="category2" required="">
                            <option value="">An ninh mạng</option>
                            <option value="">Phát triển phần mềm</option>
                            <option value="">Thiết kế đồ họa</option>							
                        </select>
                        <span></span>
                    </div>
                
                    <div className="clearfix"> </div>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
</div>*/}
     <div style={{ padding: '0 16px'}}>
     <span style={{color: '#ff6600'}}> Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức, 
     nền tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG - Cyber Range. Học viên được 
     trực tiếp trải nghiệm các tình huống tấn công mạng thực tế, giúp học viên thành thạo và có kinh
      nghiệm thực tiễn ngay khi còn ngồi trên ghế nhà trường.</span> 
     </div>
    
    <div className='elementor'>
    <img fetchpriority="high" decoding="async" width="2500" height="1042" 
    src={loiich1} alt="" sizes="(max-width: 2500px) 100vw, 2500px"/>              
    </div>

    

    <div className="elementor-container elementor-column-gap-default">
        <h1 className="elementor-heading-title2">&emsp;LỘ TRÌNH HỌC</h1>
		<div>
		<section
        className="elementor-section elementor-top-section elementor-element elementor-element-3e45ec3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="3e45ec3"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-a5afd27"
            data-id="a5afd27"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image"
                data-id="30711b3"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width="176"
                    height="203"
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK1.png"
                    className="attachment-large size-large wp-image-9960"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-330a318"
            data-id="330a318"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-0d3d328 elementor-widget elementor-widget-image"
                data-id="0d3d328"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="176"
                    height="203"
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK2.png"
                    className="attachment-large size-large wp-image-9961"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-f128c23" data-id="f128c23" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-44d0fff elementor-widget elementor-widget-image" data-id="44d0fff" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK3.png" className="attachment-large size-large wp-image-9962" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-3c7f158" data-id="3c7f158" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-cf57baf elementor-widget elementor-widget-image" data-id="cf57baf" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK4.png" className="attachment-large size-large wp-image-9963" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-d9e518a" data-id="d9e518a" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-0aea3df elementor-widget elementor-widget-image" data-id="0aea3df" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK5.png" className="attachment-large size-large wp-image-9964" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-bb0be78" data-id="bb0be78" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-3cf53e9 elementor-widget elementor-widget-image" data-id="3cf53e9" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK6.png" className="attachment-large size-large wp-image-9965" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-c4e8c2d" data-id="c4e8c2d" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-a2e1840 elementor-widget elementor-widget-image" data-id="a2e1840" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png" className="attachment-large size-large wp-image-9966" alt="" />
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
		</div>
      
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-b810357 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="b810357"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7293956"
            data-id="7293956"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-b6e0b2f elementor-widget elementor-widget-image"
                data-id="b6e0b2f"
                data-element_type="widget"
                data-widget_type="image.default"
              >
               
              </div>
            </div>
          </div>
        </div>
      </section>
	  </div>
	  <br />
	  <br />
	  <div className="elementor-widget-container1">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="58"
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png"
                    className="attachment-medium_large size-medium_large wp-image-9974"
                    alt=""
                    srcSet="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-300x27.png 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-1024x92.png 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x.png 1144w"
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                </div>
	  <br />
	  <br />
	  <div className="elementor-widget-container2">
<h1 className="elementor-heading-title2">NỘI DUNG CHƯƠNG TRÌNH HỌC</h1>		</div>
       


<section className="image-grid-custom22">
  <div className="image-container-custom22">
    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png" className="attachment-large size-large wp-image-11752" alt="" />
	<div className='textabout'>
	<p>
      <span>-Đồ họa căn bản<br/> -Mỹ thuật đồ họa</span>
      <br />
      <span>-Khoa học màu sắc <br />-Photoshop cơ bản<br/>
      -Trang trí đồ hạo
      
      </span>
    </p>
	</div>
   
  </div>
  <div className="image-container-custom22">
    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png" className="attachment-large size-large wp-image-11753" alt="" />
    <div className='textabout'>
	<p>
      <span>-Nguyên lý thị giác<br />
	  -Kỹ thuật nhiếp ảnh<br/>
	  -ILustrator<br/>
      -Photoshop nâng cao<br/>
      -Đồ án 1
	  </span>
    </p>
	</div>
  </div>
</section>

<section className="image-grid-custom22">
  <div className="image-container-custom22">
    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png" className="attachment-large size-large wp-image-11754" alt="" />
	<div className="textabout">
	<p>
      <span>-In Design <br/>-Kỹ thuật in</span>
      <br />
      <span>-Ý tưởng sáng tạo<br/> -Digitak Marketing<br/>
      -Nghệ thuật chữ</span>
    </p>
	</div>
   
  </div>
  <div className="image-container-custom22">
    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png" className="attachment-large size-large wp-image-11755" alt="" />
    <div className='textabout'>
	<p>
      <span>-Thiết kế bao bì<br/>
		-Thiết kế nhận dạng thương hiệu<br/>
		-Nguyên lý thiết kế đồ họa<br/>
        -Đồ án 2
		</span>
    </p>
	</div>
  </div>
</section>
    
<section className="image-grid-custom22">
  <div className="image-container-custom22">
    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png" className="attachment-large size-large wp-image-11754" alt="" />
	<div className="textabout">
	<p>
      <span>
            -Kỹ thuật nghề nghiệp<br/>
             -Kỹ thuật quay phim<br/>
             -Xử lý phim - Adobe Premier<br/>
             -Nguyên lý thiết kế nội thất<br/>
             -Autocad 2D<br/>
             -Dựng phối cảnh nội thất 3D - SketchUp</span>
    </p>
	</div>
   
  </div>
  <div className="image-container-custom22">
    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png" className="attachment-large size-large wp-image-11755" alt="" />
    <div className='textabout'>
    <p>
      <span> -Thực tập tốt nghiệp<br/>
        -Đồ án 3 <br/>
        -Chuyên đề hãng CN/DN
		</span>
    </p>
    </div>
  </div>
</section>



<section className="image-grid-custom22">
  <div className="image-container-custom22">
    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png" className="attachment-large size-large wp-image-11754" alt="" />
	<div className="textabout">
	<p>
      
      <span>-Bảo vệ đồ án tốt nghiệp</span>
    </p>
	</div>
   
  </div>
</section>

<br/>
<br/>

<Form1/>
  

<Footer/>
          
</div>
  )
}

export default TKĐH