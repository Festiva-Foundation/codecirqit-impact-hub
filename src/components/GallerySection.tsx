import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', 'Food Drive', 'Plantation', 'Education', 'Health Camps'];

  const galleryImages = [
    {
      id: 1,
      src: '/api/placeholder/600/400',
      title: 'Community Food Distribution Drive',
      category: 'Food Drive',
      description: 'Volunteers distributing meals to underprivileged families'
    },
    {
      id: 2,
      src: '/api/placeholder/600/400',
      title: 'Tree Plantation Initiative',
      category: 'Plantation',
      description: 'Engineering students planting trees for a greener tomorrow'
    },
    {
      id: 3,
      src: '/api/placeholder/600/400',
      title: 'Digital Literacy Program',
      category: 'Education',
      description: 'Teaching computer skills to rural children'
    },
    {
      id: 4,
      src: '/api/placeholder/600/400',
      title: 'Health Awareness Campaign',
      category: 'Health Camps',
      description: 'Free health checkups and awareness sessions'
    },
    {
      id: 5,
      src: '/api/placeholder/600/400',
      title: 'Volunteer Orientation Session',
      category: 'Education',
      description: 'Training new volunteers for community service'
    },
    {
      id: 6,
      src: '/api/placeholder/600/400',
      title: 'Environmental Conservation Drive',
      category: 'Plantation',
      description: 'Beach cleanup and environmental awareness'
    },
    {
      id: 7,
      src: '/api/placeholder/600/400',
      title: 'Donation Collection Drive',
      category: 'Food Drive',
      description: 'Collecting donations for disaster relief'
    },
    {
      id: 8,
      src: '/api/placeholder/600/400',
      title: 'Medical Camp in Villages',
      category: 'Health Camps',
      description: 'Providing healthcare services to remote areas'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of impact, service, and community transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Navigation Arrows */}
                {selectedImage > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
                
                {selectedImage < filteredImages.length - 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;