import React, { useState } from 'react';
import { Modal } from '../Modal';
import './ImageGallery.css';

export const ImageGallery = ({ items = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!items.length) {
    return <div className="gallery--empty">No media items available.</div>;
  }

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className="gallery-item"
            onClick={() => setSelectedImage(item)}
          >
            <div className="gallery-item__media-wrap">
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title || `Gallery media ${index + 1}`}
                  loading="lazy"
                  className="gallery-item__img"
                />
              ) : (
                <div className="gallery-item__placeholder">
                  <span>{item.title || `Media ${index + 1}`}</span>
                </div>
              )}
              <div className="gallery-item__overlay">
                <span className="gallery-item__title">{item.title}</span>
                <span className="gallery-item__tag">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title}
      >
        <div className="gallery-preview">
          {selectedImage?.url ? (
            <img src={selectedImage.url} alt={selectedImage.title} className="gallery-preview__img" />
          ) : (
            <div className="gallery-preview__placeholder">
              <p>{selectedImage?.title}</p>
              <span className="text-muted">{selectedImage?.description || 'Cinematic Preview'}</span>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
