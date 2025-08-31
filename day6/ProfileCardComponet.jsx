import React from 'react';
function ProfileCard({ name, role, imgUrl }) {
  return (
    <div style={{
      maxWidth: 300,
      margin: '2rem auto',
      padding: 20,
      border: '1px solid #ccc',
      borderRadius: 8,
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <img
        src={imgUrl}
        alt={name}
        style={{ width: 100, borderRadius: '50%', marginBottom: 12 }}
      />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default function App() {
  return (
    <ProfileCard
      name="John Doe"
      role="Frontend Developer"
      imgUrl="https://randomuser.me/api/portraits/men/75.jpg"
    />
  );
}
