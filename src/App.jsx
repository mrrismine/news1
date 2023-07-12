import { useState,useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import NewsContainer from './components/news-container/news-container.component';
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
  const filterSearchHandler = (event) => {
    const filterSearch= News.filter(filterNews => {
      return filterNews.title.toLowerCase().includes(event.target.value.toLocaleLowerCase()) || 
      filterNews.source.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
    setSearchNews(filterSearch)
  }   

  return (
    <div className="App">
      <h1 className=' text-center font-sans text-blue-500 text-6xl'>Berita Hari Ini</h1>
      <div className='search-news flex flex-row justify-center mt-5'>
        <SearchBox filterSearchHandler={filterSearchHandler} />
      </div>
      <div className='news-container '>
        <NewsContainer searchNews={searchNews}/>
      </div>
    </div>
  );
}

export default App;
