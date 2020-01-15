import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import ProductCard from './AddProduct';




const ProductList = () =>  {
    const [productList, setWorkerList] = useState([]);
    const [workerSearch, setWorkerSearch] = useState('');
  
    useEffect(() => {
      axiosWithAuth().get('/serviceWorkers')
        .then(res =>{
          
          setWorkerList(res.data)
        })
        .catch(err => console.log('Error: ', err));
      
    }, []);
  
    if (!workerList) {
      return <LoadingError>Loading data...</LoadingError>
    }
    
    const searchOnChange = (e) => {
      setWorkerSearch(e.target.value);
    }
    let filteredList = workerList.filter(worker =>
      worker.fullName.toLowerCase().indexOf(workerSearch.toLowerCase()) !== -1)
    
  
    
  
    return (
      <Container>
        <Header>
          <PageHeader>Meet Our Employees</PageHeader>
          
        </Header>
        <SearchName>
            <input className="inputSearch"
              type="text"
              placeholder="Search Employee..." 
              value={workerSearch}
              onChange={searchOnChange}
            
            />
          </SearchName>
        <ListCards>      
          {filteredList.map((worker) => 
            
             <WorkersCard worker={worker} key={worker.id}/>
             
             )}
          
        </ListCards>
      
      </Container>
    );
  }

  export default ProductList;