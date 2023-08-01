import React, { useEffect, useState } from 'react';

function Index() {
  const [text, setText] = useState(null);

  useEffect(() => {
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://test-v5o1.onrender.com/';

    fetch(corsProxyUrl + apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // setText(data.message);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {/* <div>{text}</div> */}
      <div>
        <p>Hello</p>
      </div>
    </>
  );
}

export default Index;
