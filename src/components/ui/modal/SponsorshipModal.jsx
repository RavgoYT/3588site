import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BaseModal from './BaseModal';

const SponsorshipModal = ({ showModal, setShowModal, activeLevelData }) => {
  if (!activeLevelData) return null;

  // Defines the simple header for the sponsorship modal
  const renderCustomHeader = () => (
    <h2 className="text-2xl font-bold text-white">
      {activeLevelData?.name || 'Details'}
    </h2>
  );

  return (
    <BaseModal
      showModal={showModal}
      setShowModal={setShowModal}
      renderHeader={renderCustomHeader}
    >
      {/* The rich text description is passed as children */}
      {activeLevelData?.description ? documentToReactComponents(activeLevelData.description) : <p>No description available.</p>}
    </BaseModal>
  );
};

export default SponsorshipModal;

