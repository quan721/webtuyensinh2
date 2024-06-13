import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import theme6 from '../../src/image2/theme6.jpg';
import Form1 from '../Component/Form1';


function AWH() {

    return (
        <div>
            <Header />
            <div className="elementor" >
                <img fetchpriority="high" decoding="async" width="2500" height="500" src={theme6} alt="" sizes="(max-width: 2500px) 100vw, 2500px" />
            </div>

            <div className="services-breadcrumb">
                <div className="inner_breadcrumb">
                    <ul className="short_ls">
                        <li>
                            <a href="#a">Trang chủ</a>
                            <span>| |</span>
                        </li>
                        <li>Khóa học AWS Cloud Foundation</li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div class="container-fluid">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <h1 class="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>THÔNG TIN KHÓA HỌC</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <ul>
                                <li class="list-item">
                                    <h4>Tên khóa học: AWS Cloud Foundation</h4>
                                </li>
                                <li class="list-item">
                                    <h4>Giảng viên: Ths. Lê Hoàng Bình Nguyên</h4>
                                </li>
                                <li class="list-item">
                                    <h4>Thời lượng: 20h, mỗi buổi 2h</h4>
                                </li>
                                <li class="list-item">
                                    <h4>Lịch học: tối hai – tư – sáu (18h30 đến 20h30)</h4>
                                </li>
                                <li class="list-item">
                                    <h4>Yêu cầu học viên: có kiến thức CNTT cơ bản, có máy tính hoặc laptop</h4>
                                </li>
                                <li class="list-item">
                                    <h4>Hình thức: online/offline </h4>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <div class="text-center mb-5">
                                <img class="img-fluid" style={{ width: '350px' }} src="./img/AWSmain.jpg" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br/>
            <br />

            <div class="container-fluid">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-center mb-5">
                                <h1 class="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>ĐỐI TƯỢNG HỌC VIÊN</h1></div>
                            <ul>
                                <li class="list-item">
                                    <p>Sinh viên muốn học thêm về điện toán đám mây để nâng cao kiến thức và lấy chứng chỉ.</p>
                                </li>
                                <li class="list-item">
                                    <p>Những người yêu thích và muốn tìm hiểu về Cloud (AWS)</p>
                                </li>
                                <li class="list-item">
                                    <p>Người muốn học để nâng cao kiến thức. </p>
                                </li>
                                <li class="list-item">
                                    <p>Những người làm về dịch vụ Cloud (Sale, tư vấn viên, marketing, chủ doanh nghiệp…)</p>
                                </li>
                                <li class="list-item">
                                    <p>Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <div class="text-center mb-5">
                                <h1 class="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>VÌ SAO BẠN NÊN HỌC AWS?</h1></div>
                            <ul>
                                <li class="list-item">
                                    <p>Là một trong những dịch vụ cloud computing lớn nhất thế giới hiện nay.</p>
                                </li>
                                <li class="list-item">
                                    <p>Cung cấp cái nhìn tổng quan về các dịch vụ, những điều nên làm (và không nên làm) để xây dựng một hệ thống tốt trên cloud</p>
                                </li>
                                <li class="list-item">
                                    <p>Các doanh nghiệp dịch chuyển dần lên Cloud với tốc độ chóng mặt</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br/>

            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <h1 class="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>LỢI THẾ KHI HỌC AWS TẠI iSPACE CENTER</h1>
                    </div>
                    <div class="text-center mb-5">
                        <img class="img-fluid" style={{ width: 'auto' }} src="./img/AWS1.jpg" alt='' />
                        <img class="img-fluid" style={{ width: 'auto' }} src="./img/AWS2.jpg" alt='' />
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <h1 class="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="text-center mb-5">
                                <img class="img-fluid" style={{ width: '250px' }} src="./img/AWS3.jpg" alt='' />
                            </div>

                        </div>
                        <div class="col-md-8">
                            <ul>
                                <li class="list-item">
                                    <h5>Hiểu biết về cơ sở hạ tầng toàn cầu AWS</h5>
                                </li>
                                <li class="list-item">
                                    <h5>Hiểu biết về các nguyên tắc kiến trúc cơ bản của việc xây dựng trên AWS</h5>
                                </li>
                                <li class="list-item">
                                    <h5>Khả năng xác định dịch vụ AWS đáp ứng yêu cầu kỹ thuật nhất định</h5>
                                </li>
                                <li class="list-item">
                                    <h5>Kiến thức về các phương pháp hay được đề xuất để xây dựng các ứng dụng an toàn và đáng tin cậy trên nền tảng AWS</h5>
                                </li>
                                <li class="list-item">
                                    <h5>Có đủ kiến thức để thi lấy chứng chỉ AWS Certified Cloud Practitioner.</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <h1 class="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>NỘI DUNG CHƯƠNG TRÌNH HỌC</h1>
                    </div>
                    <div class="text-center mb-5">
                        <img class="img-fluid" style={{ width: 'auto' }} src="./img/AWSlotrinh.jpg" alt='' />
                    </div>
                </div>
            </div>


            <Form1 />
            <Footer />


        </div>
    )
}

export default AWH