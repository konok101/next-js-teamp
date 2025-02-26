export default function AnalyticsPage() {
    const analysts = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Brown", "David Wilson"];
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Analytics Page</h1>
        <ul>
          {analysts.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
  