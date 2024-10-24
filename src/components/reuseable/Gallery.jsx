import React, { useState } from "react";

const Gallery = () => {
  // State to manage dialog visibility and current image index
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    "https://cache.careers360.mobi/media/article_images/2023/2/21/madrasa-up-yogi-government-featured-image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/Pabna_Islamia_Madrasah%2C_Pabna%2C_Bangladesh.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9YaBoKpNlrOHoZC9636nKx6mCeoO-apVCw0ioXLTe_FH-qXFZ0kTiH52t-M-5nolcSk&usqp=CAU",
    "https://www.dailypost.net/media/imgAll/2023September/madra-20240407101559.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReX2K5k68TJwBoVNYa_SfyxwZpo4wHJAORag&s",
    "https://media.licdn.com/dms/image/D4D12AQEjBbVB5Cduhw/article-cover_image-shrink_600_2000/0/1683982288615?e=2147483647&v=beta&t=_-kvydzqJaMuJ_yICSxbbQNLg16GjYft8-P6WP_6YI4",
    "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2023/07/03/20180116-mahmud-hossain-opu-mho1352.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IKCopXk6ANdAxHEenrFebrIlr_eAFtL3JA&s",

    "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2023/07/03/20180116-mahmud-hossain-opu-mho1352.jpeg",

    // Add more images as needed
  ];
  // Open dialog function
  const openDialog = (index) => {
    setCurrentImageIndex(index);
    setDialogOpen(true);
  };

  // Close dialog function
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="bg-[white] text-black pt-4">
      <header className="py-3 xl:py-6">
        <h1 className="text-[22px] sm:text-[27px] 2xl:text-[32px] text-center">
          মাদ্রাসার <span className="text-[#0984e3]">ছাএদের</span> একাংশ -
        </h1>
      </header>

      <main className="container mx-auto p-4">
        {/* Image Gallery */}
        <section>
          <div className="grid grid-cols-3 grid-rows-3 gap-2 xl:gap-3">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => openDialog(index)}
                className="relative group"
              >
                <img
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </section>

        {/* Dialog */}
        {isDialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                &times;
              </button>
              <div className="flex overflow-x-scroll no-scrollbar">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="min-w-full flex justify-center items-center"
                  >
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="max-h-screen"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
