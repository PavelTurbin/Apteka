import React, { useState } from 'react';

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    name: '',
    login: '',
    email: '',
    password: '',
    passwordAgain: '',
  });

   function logIn(e) {
    e.preventDefault();
    const newForm = { ...signUpForm };

    delete newForm.passwordAgain;
    setSignUpForm(newForm);
    
     fetch('/api/auth/signup', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpForm),
    })
      .then((res) => res.json())
      .then((data) => (window.location.href = '/'));
  }

  return (
    <form
      className="d-flex flex-column row g-3 position-relative needs-validation"
      style={{ marginTop: '20px', marginLeft: '50px' }}
    >
      <h2>Регистрация</h2>
      <div className="col-md-4 position-relative">
        <label htmlFor="validationTooltip00" className="form-label">
          Имя
        </label>
        <input
          type="text"
          placeholder="Введите имя"
          className="form-control"
          id="validationTooltip00"
          name="name"
          value={signUpForm.name}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, name: e.target.value })
          }
          required
        />
        <div className="valid-tooltip">Looks good!</div>
      </div>
      <div className="col-md-4 position-relative">
        <label htmlFor="validationTooltip01" className="form-label">
          Логин
        </label>
        <input
          type="text"
          placeholder="Введи логин"
          className="form-control"
          id="validationTooltip01"
          name="login"
          value={signUpForm.login}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, login: e.target.value })
          }
          required
        />
        <div className="valid-tooltip">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          placeholder="Введи почту"
          value={signUpForm.email}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, email: e.target.value })
          }
          required
        />
      </div>
      <div className="col-md-4 position-relative">
        <label htmlFor="validationTooltip02" className="form-label">
          Пароль
        </label>
        <input
          type="password"
          className="form-control"
          id="validationTooltip02"
          placeholder="Введите пароль"
          name="color"
          value={signUpForm.password}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, password: e.target.value })
          }
          required
        />
        <div className="valid-tooltip">Looks good!</div>
      </div>
      <div className="col-md-4 position-relative">
        <label htmlFor="validationTooltip03" className="form-label">
          Пароль повторно
        </label>
        <input
          type="password"
          className="form-control"
          id="validationTooltip03"
          name="color"
          placeholder="Еще раз и без ошибок"
          value={signUpForm.passwordAgain}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, passwordAgain: e.target.value })
          }
          required
        />
        <div className="valid-tooltip">Looks good!</div>
      </div>
      <div className="col-12">
        <button
          className="btn btn-success"
          type="submit"
          onClick={(e) => logIn(e)}
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}

export default SignUp;