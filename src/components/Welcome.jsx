import './Welcome.css';
export default function Welcome({ user, onLogout }) {
  return (
    <div className="form">
      <h2>🎉 Welcome {user}</h2>
      <p>Thank you for signing in!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}