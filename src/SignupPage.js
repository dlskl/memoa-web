import React from 'react';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className="container">
      <div className="left-side-signup">
        <h1>기록하고,<br />공유하고,<br />활용하는,<br />가장 <span className="highlight">똑똑한</span> SNS</h1>
        <button className="Sproject-button">프로젝트 로고</button>
      </div>
      <div className="right-side">
        <div className="signup-box">
          <div className="avatar"></div>
          <h2>회원가입</h2>
          <p>가입해서 노트 정리 시작하기!</p>
          <div className="email-container">
            <input type="email" placeholder="이메일" className="input-field" />
            <button className="email-auth-button">이메일 인증</button>
          </div>
          <div className="code-box">
            <input type="text" maxLength="1" className="code-input" />
            <input type="text" maxLength="1" className="code-input" />
            <input type="text" maxLength="1" className="code-input" />
            <input type="text" maxLength="1" className="code-input" />
            <input type="text" maxLength="1" className="code-input" />
            <input type="text" maxLength="1" className="code-input" />
          </div>
          <button className="signup-button">다음으로</button>
          <p className="terms">
            계정을 생성함으로써, <span className="highlight">이용약관</span>과 <span className="highlight">개인정보처리약관</span>에 동의하였음을 확인합니다.
          </p>
          <p className="login-link">이미 계정이 있다면? <span className="highlight">로그인</span></p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
