import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import Search from './components/Search/Search';
import _ from 'lodash';
import './App.css';


function App() {
  
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [typeSort, setTypeSort] = useState('asc'); //desc
  const [fieldSort, setFieldSort] = useState('rank');
  const [viewData, setViewData] = useState([]);
  const [notFound, setNotFound] = useState('');

   useEffect(()=>{
    async function fetchData(){
      const respons = await fetch(`./data.json`)
      const dataRes = await respons.json(); 
      
      if(!data[0]){
        setLoading(true);
        setData( _.orderBy(dataRes, fieldSort, typeSort));
        typeSort === 'asc' ? setTypeSort('desc') : setTypeSort('asc');
      }
    }
    fetchData()
  }, [data, fieldSort, typeSort]);

  const onSort = field => {
    typeSort === 'asc' ? setTypeSort('desc') : setTypeSort('asc');
    setFieldSort(field);
    setData( _.orderBy(data, field, typeSort) );
  }
  const onSortSearch = field => {
    typeSort === 'asc' ? setTypeSort('desc') : setTypeSort('asc');
    setFieldSort(field);
    setViewData( _.orderBy(viewData, field, typeSort) );
  }

  const onSearch = (search) => {
    setNotFound('');
    let viewDataOnSearch = data;
    if(!search) {
      setViewData([]);
      return setData(data) 
    }
    viewDataOnSearch = viewDataOnSearch.filter(item => {
      return item['name'].toLowerCase()
              .includes(search.toLowerCase())
      });
      if(viewDataOnSearch[0]){
        return setViewData(viewDataOnSearch);
      }
      return setNotFound(`Not Found ${search}`);
     
  }

  return (
    <div className="container">
        { 
          !isLoading 
          ? <Loader /> 
          : 
          <React.Fragment>
            <Search 
              onSearch={onSearch}

            />
            {
              notFound ? <h2>{notFound}</h2>
              :
              viewData[0]
              ? <Table 
                  data={viewData} 
                  onSort={onSortSearch}
                  typeSort={typeSort}
                  fieldSort={fieldSort}
                />
              : <Table 
                  data={data} 
                  onSort={onSort}
                  typeSort={typeSort}
                  fieldSort={fieldSort}
                />
            }
          </React.Fragment>
          
        }
    </div>
  );
}

export default App;
