import React from 'react';
import LoaderData from '../../components/LoaderData';
import { getUsersJSON, getEventsJSON, getProductsJSON } from '../../api';
import ViewUsers from '../../components/ViewUsers';
import ViewEvents from '../../components/ViewEvents';
import ViewProducts from '../../components/ViewProducts';

const LoaderPage = () => {
  return (
    <div>
      <h2>Users:</h2>
      <LoaderData
        loadData={getUsersJSON}
        render={(state) => <ViewUsers state={state} />}
      />
      {/* <LoaderUsers /> */}
      <h2>Events:</h2>
      <LoaderData
        loadData={getEventsJSON}
        render={(state) => <ViewEvents state={state} />}
      />
      {/* <LoaderEvents /> */}
      <h2>Products:</h2>
      <LoaderData
        loadData={getProductsJSON}
        render={(state) => <ViewProducts state={state} />}
      />
    </div>
  );
};

export default LoaderPage;
