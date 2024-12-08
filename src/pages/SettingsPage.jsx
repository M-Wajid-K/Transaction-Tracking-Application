import React from 'react';
import Card from '../components/Card';

const SettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <Card title="User Settings">
        <p>Settings content goes here</p>
      </Card>
    </div>
  );
};

export default SettingsPage; 