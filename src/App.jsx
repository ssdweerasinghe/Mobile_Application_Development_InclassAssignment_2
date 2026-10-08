import { useState } from "react";
import avatar from "./assets/Profile_pic.png";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
    />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
    <path
      fill="#00e600"
      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
      stroke="#00e600"
      strokeWidth="1.2"
    />
  </svg>
);

export default function App() {
  const [user, setUser] = useState({
    name: "Sarodye",
    email: "ssdweerasinghe@students.nsbm.ac.lk",
    points: 0,
  });

  // Floating "+" button adds a point
  const addPoint = () => setUser((u) => ({ ...u, points: u.points + 1 }));

  return (
    <div className="stage">
      <div className="phone">
        <div className="status-bar">
          <span>8:33</span>
          <span className="status-icons">▾◢▮</span>
        </div>

        <header className="app-bar">My Profile</header>

        <main className="content">
          <div className="avatar-wrap">
            <img className="avatar" src={avatar} alt="Profile" />
            <span className="badge">
              <CheckIcon />
            </span>
          </div>

          <hr className="divider" />

          <section className="field">
            <h2>Name</h2>
            <p>{user.name}</p>
          </section>

          <section className="field">
            <h2>Email</h2>
            <p className="with-icon">
              <MailIcon />
              <span>{user.email}</span>
            </p>
          </section>

          <section className="field">
            <h2>Points</h2>
            <p className="with-icon">
              <StarIcon />
              <span>{user.points}</span>
            </p>
          </section>
        </main>

        <button className="fab" onClick={addPoint} aria-label="Add point">
          +
        </button>

        <div className="home-bar" />
      </div>
    </div>
  );
}
