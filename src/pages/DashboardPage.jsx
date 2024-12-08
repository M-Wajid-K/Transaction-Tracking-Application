import React from 'react';
import Card from '../components/Card';
import TransactionList from '../components/TransactionList';

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Recent Transactions">
          <TransactionList />
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage; 