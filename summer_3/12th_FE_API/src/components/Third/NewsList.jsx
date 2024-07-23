import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../common/Title";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  #top_bar{
    border: 1px solid white;
    margin: 15px 30px;
    padding: 15px;
    font-size: 20px;
  }
`
const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  padding: 15px;
  * {
        /* border: 1px solid white; */
        padding: 6px;
  }
#card_container{
  display: flex;
  flex-direction: row;
}
img{
  height: 108px;
  width: 192px;
}
#img_box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 108px;
  width: 192px;
}
`
const fetchData = async (setNews) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
    setNews(response.data.articles)
  } catch (error) {
    console.log("에러!")
  }
};

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData(setNews);
  }, []);

  return (
    <Container>
      <Title title={" 멋사 NEWS"} />
      <div id="top_bar">
        전체   스포츠   연예   경제
      </div>
      <NewsContainer>
        {news.length > 0 ? (
          news.map((article, index) => (

            <div id="card_container" key={index}>
              <div id="img_box">
                <img src={article.urlToImage} alt="이미지 준비중" />
              </div>
              <a href={article.url} target="_blank">
                <h2>{article.title}</h2>
              </a>
            </div>
          ))
        ) : (
          <p>뉴스를 불러오는중...</p>
        )}
      </NewsContainer>
    </Container >
  );
};

export default NewsList;
