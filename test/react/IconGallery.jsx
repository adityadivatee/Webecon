import React from 'react';

/**
 * Webecon Icon React Showcase
 * Demonstrates theme and vibration control via props.
 */
const WebeconIconGallery = () => {
  const icons = [
    { name: 'activity', color: '#00f2fe', theme: 'glass', anim: 'pulse' },
    { name: 'heart', color: '#f43f5e', theme: 'neon', anim: 'heartbeat', secondary: '#9f1239' },
    { name: 'zap', color: '#f59e0b', theme: '3d', anim: 'none' }
  ];

  return (
    <div style={{ padding: '2rem', background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <h1>React Icon Showcase</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {icons.map((icon, i) => (
          <div key={i} style={{ background: '#111', padding: '2rem', borderRadius: '1rem', border: '1px solid #333' }}>
            <webecon 
              name={icon.name} 
              size="64" 
              color={icon.color} 
              theme={icon.theme} 
              animation={icon.anim} 
              secondary-color={icon.secondary || 'none'}
              secondary-opacity="1.0"
            />
            <p>{icon.name} ({icon.theme})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebeconIconGallery;

