import React from "react";
import { useParams } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
`
const Head_Wrapper = styled.div `
  margin: 15px 0 60px 0;
`
const Info_bar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 10px 0;
`
const HashTag = styled.div `
  display: flex;
  align-items: flex-start;
`
const HT = styled.div`
    margin-bottom: 0.875rem;
    background: #E9ECEF;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.875rem;
    color: #12B886;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
`

function PostDetailPage() {
  const postID = useParams().postID;
  const post_content = dummy_data.find(p => p.postID === parseInt(postID));
  
  return (
    <>
    <Container>
      <Head_Wrapper>
        <h1>{post_content.title}</h1>
        <Info_bar>
          <div>
            <b>{post_content.writer}</b> · {post_content.createdAt}
          </div>
          <div>
            통계 수정 삭제
          </div>
        </Info_bar>
        <HashTag>
          <HT>React</HT>
          <HT>TanStack</HT>
          <HT>작성중</HT>
        </HashTag>
      </Head_Wrapper>
      {/* {post_content.content}  */}
      <div dangerouslySetInnerHTML={{ __html: post_content.content_html}} />
    </Container>
    </>
  );
}

export default PostDetailPage;
