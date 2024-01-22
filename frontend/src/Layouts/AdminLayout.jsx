import React, { useState } from 'react';
import { Upload, Button, Input, Select, Typography } from 'antd';
import PropTypes from "prop-types"
import { UploadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const getUserRole = ()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.role : null;
};


const AdminLayout = () => {

  const [trainerName, setTrainerName] = useState('');
  const [trainingArea, setTrainingArea] = useState('');
  const [trainingDescription, setTrainingDescription] = useState('');
  const [file, setFile] = useState(null);


  const userRole = getUserRole();

  const handleTrainerNameChange = (value) => {
    setTrainerName(value);
  };

  const handleTrainingAreaChange = (value) => {
    setTrainingArea(value);
  };

  const handleTrainingDescriptionChange = (e) => {
    setTrainingDescription(e.target.value);
  };

  const handleUpload = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} dosyası başarıyla yüklendi`);
    } else if (info.file.status === 'error') {
      console.error(`${info.file.name} dosyası yüklenirken hata oluştu.`);
    }
    setFile(info.file.originFileObj);
  };

  const handleUploadClick = async () => {
    try {
      // Eğitimi yükle butonuna tıklandığında yapılacak işlemleri buraya ekleyebilirsiniz
      const formData = new FormData();
      formData.append('trainerName', trainerName);
      formData.append('trainingArea', trainingArea);
      formData.append('trainingDescription', trainingDescription);
      formData.append('file', file);
  
      
      const response = await fetch('/api/video', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Video başarıyla yüklendi.');
      } else {
        console.error('Video yüklenirken bir hata oluştu.');
      }
    } catch (error) {
      console.error('Video yüklenirken bir hata oluştu:', error);
    }
    
  };
  
   if(userRole === "admin"){
    return (
      <div>
        <Title level={2}>Eğitim Yükle</Title>
  
        <div>
          <Text>Eğitmen Adı:</Text>
          <Input value={trainerName} onChange={(e) => handleTrainerNameChange(e.target.value)} />
        </div>
  
        <div>
          <Text>Yüklenmek İstenen Eğitim Alanı:</Text>
          <Select style={{ width: 200 }} value={trainingArea} onChange={handleTrainingAreaChange}>
            <Option value="web">Web Geliştirme</Option>
            <Option value="mobile">Mobil Uygulama Geliştirme</Option>
            <Option value="data">Veri Bilimi</Option>
            <Option value="game">Oyun Geliştirme</Option>
          </Select>
        </div>
  
        <div>
          <Text>Eğitim Açıklaması:</Text>
          <Input.TextArea rows={4} value={trainingDescription} onChange={handleTrainingDescriptionChange} />
        </div>
  
        <div>
          <Text>Videoların Yükleneceği Yer:</Text>
          <Upload onChange={handleUpload}>
            <Button icon={<UploadOutlined />}>Dosya Yükle</Button>
          </Upload>
        </div>
  
        <div style={{ marginTop: '20px' }}>
          <Button type="primary" onClick={handleUploadClick}>
            Eğitimi Yükle
          </Button>
        </div>
      </div>
    );
  } else {
    // window.location.href="/"; // Bu kısmı aşağıdaki şekilde güncelliyoruz
   
  }

};

export default AdminLayout;
AdminLayout.propTypes ={
    children:PropTypes.node
}


