import { useState, useEffect } from "react";
import { getProductsJSON } from "../../api";

const LoaderData = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setIsFetching(true);
    getProductsJSON()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return { data, error, isFetching };
};

export default LoaderData;
