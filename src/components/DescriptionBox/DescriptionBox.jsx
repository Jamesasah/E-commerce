import React from 'react'

const DescriptionBox = () => {
  return (
    <div className="my-[60px] lg:my-[120px] mx-4 lg:mx-[170px]">
      <div className="flex">
        <div className="flex items-center justify-center text-[12px] lg:text-[14px] font-semibold w-[120px] lg:w-[160px] h-[50px] lg:h-[65px] border border-[#d0d0d0]">Description</div>
        <div className="flex items-center justify-center text-[12px] lg:text-[14px] font-semibold w-[120px] lg:w-[160px] h-[50px] lg:h-[65px] border border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">Reviews (122)</div>
      </div>
      <div className="flex flex-col gap-[20px] lg:gap-[25px] border border-[#d0d0d0] p-[20px] lg:p-[40px] pb-[40px] lg:pb-[65px]">
        <p className='text-[12px] lg:text-[14px]'>
          An e-commerce website is an online platform that facilitates the
          buying and selling of goods or services over the internet. It allows
          businesses to showcase their products, process orders, and manage 
          customer interactions through a digital interface. E-commerce websites
          typically include features like product catalogs, shopping carts,
          payment gateways, and shipping options, enabling customers to browse,
          select, and purchase products from anywhere with an internet
          connection.
        </p>
        <p className='text-[12px] lg:text-[14px]'>
          E-commerce website typically display products or services along with
          derailed description, images, prices and any available variations.
          (e.g. sizes, colors). each product usually has it own dedicated page
          with relevant information
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox
