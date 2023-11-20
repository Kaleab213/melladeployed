

const postData = async () => {
    try {
      const response = await axios.post('/api/endpoint', { data: 'example' });
      console.log(response.data); // Handle response data here
    } catch (error) {
      console.error(error); // Handle error here
    }
  };
  
  // Call the function to make the POST request
  postData();