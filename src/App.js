import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Modal, Paper, TextField, Typography} from '@mui/material';

const App = () => {
  const [open, setOpen] = useState(false); // useState.apply(false) を useState(false) に修正
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen}>ログイン画面へ</Button>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ // ここでModalのスタイルを直接指定
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StyledPaper>
          <form className='form'>
            <Typography variant={'h5'}>ログイン</Typography>
            <TextField label='メールアドレス' variant='standard' className='text' />
            <TextField label='パスワード' variant='standard' className='text' />
            <center><Button className='login btn'>ログイン</Button></center>
            <center><Button className='signup btn'>新規会員登録はこちら</Button></center>
            <center><Button className='outlined'>閉じる</Button></center>
          </form>
        </StyledPaper>
      </Modal>
    </>
  );
};

const StyledPaper = styled(Paper)`
  position: 'absolute'; // 絶対位置指定
  display: flex;
  justify-content: center;
  width: 80%; // 幅を80%に設定
  max-width: 960px; // 最大幅を960pxに設定
  height: auto; // 高さを自動調整
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden; // 内容がはみ出た場合に隠す
  outline: none; // フォーカス時のアウトラインを削除
  .form {
    width: 100%;
    max-width: 400px;
    margin: 3rem auto;
    text-align: center;
  }
  .text {
    width: 100%;
    margin: 1rem 0;
  }
  .btn {
    width: 100%;
    max-width: 300px;
    color: white;
    text-align: center;
    margin: 1.5rem 0 auto;
  }
  .login {
    background-color: lightseagreen;
  }
  .signup {
    background-color: #06579b;
  }

  @media (max-width: 600px) {
    width: 90%;
    .form {
      margin: 2rem auto;
    }
    .btn {
      margin: 1rem 0 auto;
    }
  }

  @media (min-width: 961px) {
    max-width: none; /* 画面が961px以上の場合は最大幅の制限を解除 */
    width: 80%; /* 画面幅の80%を使用 */
    .form {
      margin: 4rem auto; /* 画面が大きい場合はフォームのマージンを増やす */
    }
    .btn {
      margin: 2rem 0 auto; /* 画面が大きい場合はボタンのマージンを増やす */
    }
  }
`;

export default App;