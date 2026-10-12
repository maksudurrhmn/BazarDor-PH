import React from 'react';

function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 px-4 xl:px-0">
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 justify-between items-center container mx-auto">
        <h4 className="text-base lg:text-xl  text-gray-600">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </h4>
        <p className="text-sm lg:text-base text-gray-600">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
}

export default Footer;
