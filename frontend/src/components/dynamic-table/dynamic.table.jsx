import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './dynamic.table.css';
import DynamicItem from '../dynamic-item/dynamic.item';

const DynamicTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    fetchData(currentPage);
  }, [currentPage, isFirstRender]);

  /**
   * 
   * @param {*} page 
   */
  const fetchData = (page) => {
    setIsLoading(true);

    fetch(`http://localhost:3004/575/${page}`)
      .then((response) => response.json())
      .then((json) => {
        if (!json.data?.length) {
          Swal.fire({
            title: 'Empty response',
            text: 'There are not more records',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }

        setIsLoading(false);
        setLoadedData((prevData) => [...prevData, ...json.data]);
      });
  };

  /**
   * 
   */
  const handleClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div id="json-table">
      
      <DynamicItem data={loadedData} />

      <div className="row load-more">
        <div className="col-lg-12 text-center">
          <button onClick={handleClick} disabled={isLoading} className={'btn btn-success font-bold'}>
            {isLoading ? 'Loading ...' : 'Load More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;