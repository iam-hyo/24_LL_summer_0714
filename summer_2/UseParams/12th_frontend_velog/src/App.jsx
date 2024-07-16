import { styled, ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";

//스타일 컴포넌트를 지정해주기
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  * {
    /* border: 1px solid black; */
  }
`; 
const HomeLayout_innerBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100vw;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 1024px;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 12px 0;
`
const Header_right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 40px;
  width: 172px;
  margin: 4px;
  #selet_box {
    background-color: white;
    height: 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 10px;
    font-weight: 600;
    color: var(--text2);
    gap: 5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, .05);
  }
`
const Btn_a = styled.p`
  font-size: 100%;
  vertical-align: baseline;
  width: 40px;
  svg {
    padding: 0 8px 0 8px;
  }
  `
const Btn_Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1.5rem;
  margin-left: 8px;
  background-color: black;
  color: white;
  box-sizing: inherit;
  width: 52px;
`
const Header_Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 40px;
  width: 250px;
  /* margin: 4px; */
  flex-wrap: nowrap;
  gap: 8px;
`
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black; /* 텍스트 색상 */
  text-decoration: none; /* 기본 밑줄 제거 */
  border-radius: 4px;
  transition: background-color 0.3s;
  /* width: 80px; */
  &.active {
    color: black;
    font-weight: bold;
  }
  svg {
    padding: 0 8px 0 0;
  }
`
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

//Layout을 정의, 위에서 정의한 Wrapper의 스타일을 적용시킴
const Layout = () => {
  return (
    <>
    <Wrapper>
      <HomeLayout_innerBlock>
        <Header>  {/* 해더 1번째 줄 */}
          <div class="HeaderLogo_block"> {/* 벨로그 로고 */}
            <Btn_a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 24" class="velogLogo" width="71" height="24"><path fill="currentColor" d="M12.248 5.328 7.76 18H4.64L.152 5.328h2.904l3.192 10.44 3.24-10.44h2.76Zm5.51 7.2c.08 1.232.433 2.16 1.057 2.784.64.608 1.44.912 2.4.912.592 0 1.152-.088 1.68-.264a7.693 7.693 0 0 0 1.656-.84l1.152 1.632a6.443 6.443 0 0 1-2.088 1.152c-.8.272-1.64.408-2.52.408-1.936 0-3.44-.6-4.512-1.8-1.072-1.216-1.608-2.832-1.608-4.848 0-1.264.232-2.4.696-3.408.464-1.024 1.136-1.824 2.016-2.4.88-.576 1.904-.864 3.072-.864 1.68 0 3.008.568 3.984 1.704.992 1.12 1.488 2.664 1.488 4.632 0 .48-.024.88-.072 1.2h-8.4Zm3.025-5.544c-.864 0-1.568.312-2.112.936-.544.624-.856 1.552-.936 2.784h5.88c-.032-1.2-.288-2.12-.768-2.76-.48-.64-1.168-.96-2.064-.96Zm14.702 7.56c0 1.072.64 1.608 1.92 1.608.64 0 1.312-.144 2.016-.432l.672 1.872c-.88.48-1.968.72-3.264.72-1.264 0-2.256-.352-2.976-1.056-.704-.72-1.056-1.704-1.056-2.952V2.208h-3.816V.24h6.504v14.304Zm13.91-9.552c1.825 0 3.233.6 4.225 1.8.992 1.184 1.488 2.8 1.488 4.848s-.504 3.672-1.512 4.872c-1.008 1.2-2.416 1.8-4.224 1.8-1.824 0-3.24-.584-4.248-1.752-.992-1.184-1.488-2.816-1.488-4.896 0-2.016.504-3.632 1.512-4.848 1.024-1.216 2.44-1.824 4.248-1.824Zm0 2.088c-.975 0-1.711.376-2.207 1.128-.48.752-.72 1.904-.72 3.456 0 1.568.24 2.728.72 3.48.48.736 1.208 1.104 2.184 1.104.976 0 1.704-.376 2.184-1.128.48-.752.72-1.912.72-3.48 0-1.552-.24-2.696-.72-3.432-.48-.752-1.2-1.128-2.16-1.128Zm20.68-1.128a7.26 7.26 0 0 1-1.585.336c-.575.048-1.271.072-2.087.072.767.352 1.343.792 1.727 1.32.385.528.577 1.168.577 1.92 0 .832-.208 1.568-.624 2.208-.4.64-.977 1.144-1.728 1.512-.752.368-1.64.552-2.665.552-.72 0-1.295-.072-1.727-.216a1.311 1.311 0 0 0-.409.48 1.183 1.183 0 0 0-.144.576c0 .64.52.96 1.56.96h2.209c.895 0 1.695.152 2.4.456.704.304 1.248.728 1.632 1.272.4.528.6 1.128.6 1.8 0 1.264-.545 2.24-1.633 2.928-1.087.704-2.656 1.056-4.703 1.056-1.425 0-2.553-.152-3.385-.456-.816-.288-1.4-.72-1.752-1.296-.336-.56-.504-1.288-.504-2.184h2.4c0 .48.088.856.264 1.128.193.288.52.496.985.624.464.144 1.136.216 2.016.216 1.28 0 2.2-.16 2.76-.48.56-.304.84-.76.84-1.368 0-.512-.225-.912-.672-1.2-.433-.272-1.025-.408-1.777-.408h-2.184c-1.136 0-2-.232-2.592-.696-.576-.464-.864-1.048-.864-1.752 0-.432.12-.848.36-1.248s.585-.744 1.033-1.032c-.752-.4-1.304-.88-1.657-1.44-.336-.576-.504-1.28-.504-2.112 0-.88.225-1.656.672-2.328.448-.688 1.072-1.216 1.872-1.584.8-.384 1.712-.576 2.736-.576 1.377.016 2.465-.08 3.265-.288.816-.208 1.68-.536 2.591-.984l.697 2.232Zm-6.529.912c-.847 0-1.487.24-1.92.72-.431.464-.648 1.096-.648 1.896 0 .816.216 1.464.648 1.944.449.464 1.096.696 1.945.696.8 0 1.407-.232 1.823-.696.416-.464.624-1.128.624-1.992 0-1.712-.823-2.568-2.471-2.568Z"></path></svg>
            </Btn_a>
          </div>
          <Header_right> {/* 우측 툴박스 */}
            <Btn_a href="/notifications">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 19v-2h2v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.388 18 8.617 18 10v7h2v2H4Zm8 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Z"></path></svg>
              </div>
            </Btn_a>  {/* 종 닫기 */}
            <Btn_a href="https://velog.io/search">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="m19.326 20.712-5.809-5.808a5.693 5.693 0 0 1-1.765.98 6.394 6.394 0 0 1-2.133.354c-1.849 0-3.414-.64-4.697-1.923C3.641 13.033 3 11.468 3 9.619c0-1.849.637-3.414 1.91-4.697C6.183 3.641 7.744 3 9.593 3c1.866 0 3.44.64 4.723 1.922 1.282 1.283 1.922 2.848 1.922 4.697 0 .75-.117 1.46-.352 2.132a6.052 6.052 0 0 1-.982 1.793l5.834 5.808a.888.888 0 0 1 .262.654c0 .261-.096.497-.288.706a.944.944 0 0 1-.693.288.945.945 0 0 1-.693-.288Zm-9.707-6.436c1.29 0 2.39-.453 3.297-1.36s1.36-2.006 1.36-3.297c0-1.308-.453-2.411-1.36-3.31-.907-.898-2.006-1.347-3.297-1.347-1.308 0-2.411.45-3.309 1.347-.898.899-1.348 2.002-1.348 3.31 0 1.29.45 2.39 1.348 3.297.898.907 2.001 1.36 3.31 1.36Z"></path></svg>
              </div>
            </Btn_a>  {/* 돋보기 닫기 */}
            <Btn_Btn>로그인</Btn_Btn>
          </Header_right>
        </Header>
        <Page>
        <Outlet />    
        {/* Outlet 컴포넌트는 React Router에서 부모 라우트 
        내부에 자식 라우트를 렌더링하는 위치를 지정
        이 경우에는 HomePage.jsx*/}  
        </Page>
      </HomeLayout_innerBlock>
    </Wrapper>
    </>
  );
};


//Layout을 출력
function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
