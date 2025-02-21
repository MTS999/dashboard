import axios from "axios";
import React from "react";
import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (method, url, data = null, token = null) => {
    setLoading(true);
    setError(null);

    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios({
        method,
        url,
        data,
        headers,
      });
      //  console.log(response);
       
      return { data: response.data, error: null };
    } catch (error) {

        // console.log(error);
        
      return {
        data: null,
        error: error.response?.data?.message || "Something went wrong",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    request,
    loading,
    
  };
};

export default useFetch;
