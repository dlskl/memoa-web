import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container">
      <div className="left-side">
        <h1>기록하고,<br />공유하고,<br />활용하는,<br />가장 <span className="highlight">똑똑한</span> SNS —</h1>
        <button className="project-button">프로젝트 로고</button>
      </div>
      <div className="right-side">
        <div className="login-box">
          <div className="avatar"></div>
          <h2>로그인</h2>
          <p><span className="highlight">프로젝트</span> 계정으로 계속하기</p>
          <input type="email" placeholder="이메일" className="input-field" />
          <input type="password" placeholder="비밀번호" className="input-field" />
          <button className="login-button">로그인</button>
          <p className="signup">계정이 없다면? <span className="highlight" onClick={handleSignupClick}>가입하기</span></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
