const NewsContainer = (props) => {
   const {searchNews} = props
   return (
      <div className=" grid grid-flow-row grid-cols-3 gap-5 ml-4 mt-5 mr-4">
         {
            searchNews.map((newsMap) => {
            return (
               <div key={newsMap.title} className="border-4 rounded-md border-blue-100 p-3">
                  <div className=" text-lg font-black"> 
                     {newsMap.source.name}
                  </div>
                  {newsMap.title}
                  <br/>
                  {newsMap.publishedAt}
                  <br />
                  <a href={newsMap.url} className=" text-red-500 text-lg">Klik disini untuk baca</a>
                  
                  <br/>
                  <br/>
               </div>  
            )
            })
         }
      </div>
   )
}

export default NewsContainer