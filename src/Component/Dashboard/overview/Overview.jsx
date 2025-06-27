import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Overview = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-800">Dashboard Overview</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold text-blue-700">Logged In User:</p>
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold text-green-700">Stats:</p>
          <p>Total Listings: ...</p>
          <p>My Listings: ...</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;