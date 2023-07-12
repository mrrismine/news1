const SearchBox = (props) => {
   const {filterSearchHandler} = props
   return(
      
      <div className=" border-zinc-100 font-extrabold border-2 rounded-md border-red-400">
         <input 
          placeholder='search news' 
          onChange={filterSearchHandler}
          className=" text-center"/>
      </div>
   )
}

export default SearchBox