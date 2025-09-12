import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BaseModal from './BaseModal';

const BiographyModal = ({ showModal, setShowModal, activeLead }) => {
  // Don't render anything if there's no active lead
  if (!activeLead) return null;

  // This function defines the unique header for the biography modal
  const renderCustomHeader = () => (
    <div className="flex items-center gap-5">
      <div className="w-20 h-20 rounded-full flex-shrink-0" style={{ background: "linear-gradient(90deg, #6586c7, #e23942)" }}>
        {activeLead.picture ? (
          <img
            src={activeLead.picture.fields.file.url}
            alt={activeLead.name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-500"></div>
        )}
      </div>
      <h2 className="text-2xl font-bold text-white">
        {activeLead?.name} - {activeLead?.role}
      </h2>
    </div>
  );

  return (
    <BaseModal
      showModal={showModal}
      setShowModal={setShowModal}
      renderHeader={renderCustomHeader}
    >
      {/* The body content is passed as children to the BaseModal */}
      {activeLead?.biography ? documentToReactComponents(activeLead.biography) : <p>No biography available.</p>}
    </BaseModal>
  );
};

export default BiographyModal;
