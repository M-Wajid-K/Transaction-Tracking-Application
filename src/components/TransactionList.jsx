import React from 'react';

const TransactionList = ({ transactions = [] }) => {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="border-b p-4">
          <div className="flex justify-between">
            <span>{transaction.description}</span>
            <span>{transaction.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList; 