import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>DevTools Hub</h2>

      <div className="tools">
        <Link to="/translator" className="tool-card">🌐 Text Translator</Link>
        <Link to="/random-string" className="tool-card">🔠 Random String Generator</Link>
        <Link to="/todo" className="tool-card">📝 Todo Manager</Link>
      </div>
    </div>
  );
};

export default Dashboard;
