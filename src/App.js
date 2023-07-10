import { useState,useEffect } from 'react';

import './App.css';

const App = () => {

  const [News,setNews] = useState([])
  const [searchNews, setSearchNews] = useState([])

  useEffect(() => {
    let url='https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=d56ce2e6439143ea88480abdb30156db'
    const fetchingData= async () =>{  
      fetch(url)
      .then(response => response.json())
      .then(a => {
        setNews(a.articles)
        setSearchNews(a.articles)
      })}
    fetchingData()
    
  }, [])

  console.log(News, searchNews)

  return (
    <div className="App">
      <div className='search-news'>
        <input 
          placeholder='search news' 
          onChange={(event) => {
            console.log(event.target.value)
            const filterSearch = News.filter(filterNews => 
              filterNews.title.toLowerCase().includes(event.target.value.toLocaleLowerCase()))
            setSearchNews(filterSearch)
            console.log(searchNews)
        }}/>
      </div>
      <div className='news-container'>
        {
          searchNews.map((newsMap) => {
            return (
              <div key={newsMap.title}>
                {newsMap.title}
                <br />
                <a href={newsMap.url}>URL</a>
                <br/>
                <br/>
              </div>  

            )
          })
        }
      </div>
    </div>
  );
}

export default App;
