import { useEffect, useState } from "react";

export default function ChurnChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/churn")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Customer Churn Summary</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.Churn}: {item.count}
          </li>
        ))}
      </ul>
    </div>
  );
}

