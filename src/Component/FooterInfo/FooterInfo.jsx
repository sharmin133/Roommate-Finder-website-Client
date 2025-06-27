// src/components/FooterInfo/FooterInfo.jsx
import React from 'react';
import { useParams } from 'react-router';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaUserShield,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTools,
  FaGavel,
  FaInfoCircle,
  FaCodeBranch,
  FaLaptopCode,
  FaBook
} from 'react-icons/fa';

const FooterInfo = () => {
  const { section } = useParams();

  const renderContent = () => {
    switch (section) {
      case 'terms':
        return (
          <>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <FaGavel className="text-purple-600" /> Terms of Service
            </h2>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Respectful and honest usage is mandatory.
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-blue-600" />
                No posting of false or misleading content.
              </li>
              <li className="flex items-center gap-2">
                <FaUserShield className="text-rose-600" />
                Respect others' privacy and safety.
              </li>
              <li className="flex items-center gap-2">
                <FaGavel className="text-indigo-500" />
                FlatFusion may remove any policy-violating content.
              </li>
            </ul>
          </>
        );

      case 'privacy':
        return (
          <>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-teal-600" /> Privacy Policy
            </h2>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Only necessary user data is collected.
              </li>
              <li className="flex items-center gap-2">
                <FaUserShield className="text-pink-500" />
                We never sell your data to third parties.
              </li>
              <li className="flex items-center gap-2">
                <FaInfoCircle className="text-blue-500" />
                You can request data deletion anytime.
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-yellow-500" />
                We use cookies to improve your experience.
              </li>
            </ul>
          </>
        );

      case 'dev':
        return (
          <>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <FaTools className="text-green-600" /> Developer Resources
            </h2>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center gap-2">
                <FaCodeBranch className="text-blue-600" />
                Public API access for listings & reviews.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Webhooks for real-time roommate updates.
              </li>
              <li className="flex items-center gap-2">
                <FaLaptopCode className="text-indigo-600" />
                SDKs for React, Next.js & Node.js.
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-orange-600" />
                Full documentation portal coming soon.
              </li>
            </ul>

            <div className="mt-6 border-t pt-4">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-pink-600" /> Address
              </h3>
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <FaMapMarkerAlt className="text-pink-500" />
                Gulshan, Dhaka, Bangladesh
              </p>

              <h3 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-blue-600" /> Contact
              </h3>
              <p className="flex items-center gap-2 text-gray-700">
                <FaEnvelope className="text-blue-500" />
                support@flatfusion.com
              </p>
            </div>
          </>
        );

      
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-xl">
      {renderContent()}
    </div>
  );
};

export default FooterInfo;
