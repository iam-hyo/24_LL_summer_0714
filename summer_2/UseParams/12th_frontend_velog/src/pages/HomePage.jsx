import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";

// 스타일드 컴포넌트 정의
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1024px;
  /* margin: 20px; */

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;
const CardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  object-position: 50%;
`;
const ContentWrapper = styled.div`
  margin: 20px;
  padding: 0px;
  display: flex;
  height: 165px;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 1em;
  color: #333;
`;
const Content = styled.p`
  margin: 0;
  color: #666;
`;
const Date = styled.small`
  margin: 0;
  color: #999;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  max-width: 1024px;
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
// Card 컴포넌트 정의
const Card = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`detail/${post.postID}`);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <Thumbnail src={post.thumbnail} alt={post.title} />
        <ContentWrapper>
        <div>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
        </div>
        <Date>{post.createdAt}</Date>
        {/* <Post_Footer></Post_Footer> */}
      </ContentWrapper>
    </CardWrapper>
  );
};

// HomePage 컴포넌트 정의
function HomePage() {
  return (
  <>
    <Header>   {/* 해더 2번째 줄 */}
          <Header_Left>
          <StyledLink href="/trending/week">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
        </svg>
        <span>트렌딩</span>
      </StyledLink>
      <StyledLink href="/recent">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
        </svg>
        <span>최신</span>
      </StyledLink>
      <StyledLink href="/feed">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <circle cx="6.18" cy="17.82" r="2.18"></circle>
          <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
        </svg>
        <span>피드</span>
      </StyledLink>
          </Header_Left>
          <Header_right>
          <div id="selet_box">
            이번 주
            <svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 24 24" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
          <svg 
            stroke="currentColor" 
            fill="currentColor" 
            stroke-width="0" 
            viewBox="0 0 24 24" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
          </Header_right>
    </Header>
    <Container>
      {dummy_data.map((post) => (
        <Card key={post.postID} post={post} />
      ))}
    </Container>
  </>
  );
}

export default HomePage;
