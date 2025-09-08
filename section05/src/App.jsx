import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
        {/*
        App 리턴문 html에 포함되니 Header 컴포넌트는 자식 컴포넌트가 됨.
        반대로 Header에게 App은 부모 컴포넌트가 됨.
        APP 은 모든 컴포넌트의 뿌리역할이라고 해서 루트 컴포넌트라고 함.
        */}
        <Header />
        <Main />
        <Footer />
    </>
  )
}

export default App
