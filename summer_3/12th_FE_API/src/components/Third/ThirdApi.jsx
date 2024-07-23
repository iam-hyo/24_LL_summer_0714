import { useState } from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";

const ThirdApi = () => {
  const [news, setNews] = useState([]);

  //state 작성
  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
      console.log(response);
     
      setNews(response.data.articles);
      
      console.log(news)
    } catch (error) {
      console.log("에러!")
    }
};

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;
