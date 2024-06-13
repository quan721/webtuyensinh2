import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const GoogleSheetPieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetId = '1cHxrz3dRlVh8tsCgTDV12Ys4Mz0uAeverBK-Kneugic'; // Thay thế bằng Sheet ID của bạn
      const apiKey = 'AIzaSyAdC1_6BkkqvVCqyIrnSHf4-1pL9wR3Sik'; // Thay thế bằng API key của bạn
      const range = 'F:F'; // Phạm vi dữ liệu cần lấy

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const rows = response.data.values;
        if (rows && rows.length > 1) {
          const data = rows.slice(1); // Bỏ hàng đầu tiên (tiêu đề)
          setData(data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  // Xử lý dữ liệu để đếm số lượng mỗi loại chuyên ngành
  const countSpecializations = () => {
    const counts = {};
    data.forEach(row => {
      const specialization = row[0]; // Chuyên ngành ở cột đầu tiên
      counts[specialization] = (counts[specialization] || 0) + 1;
    });
    return counts;
  };

  // Chuẩn bị dữ liệu cho biểu đồ tròn
  const prepareChartData = () => {
    const counts = countSpecializations();
    const chartData = [['Chuyên ngành', 'Số lượng']];
    Object.entries(counts).forEach(([specialization, count]) => {
      chartData.push([specialization, count]);
    });
    return chartData;
  };

  return (
    <div>
      <h2>Biểu đồ tròn từ Google Sheets</h2>
      {data.length > 0 ? (
        <Chart
          chartType="PieChart"
          data={prepareChartData()}
          options={{
            title: 'Phân phối chuyên ngành',
            is3D: true,
          }}
          width="100%"
          height="400px"
        />
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
};

export default GoogleSheetPieChart;