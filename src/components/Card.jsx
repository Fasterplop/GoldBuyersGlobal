import React from 'react'
import Image from 'next/image'


const Card = (props) => {

   


  return (

    

    <div className={`${props.className} text-center`}>
       
            <div className=" bg-gray-200 duration-500 group-hover:blur-sm group-hover:scale-[0.85] hover:!scale-100 hover:!blur-none cursor-pointer p-3 rounded-xl min-w-[230px] w-[230px] max-w-[250px]">
                <Image
                className="mx-auto p-4 bg-gray-400 rounded-xl "
                src={props.image} alt="product"
                width={185}
                height={150}  />
                <h4 className="uppercase text-xl font-bold my-3">PRODUCT NAME</h4>
                <p className="text-sm leading-6 my-3 font-light opacity-80">text description Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit </p>
            </div>
       
            {/* <div className="bg-gray-400 duration-500 group-hover:blur-sm group-hover:scale-[0.85] hover:!scale-100 hover:!blur-none cursor-pointer p-8 rounded-xl w-[250px]">
                <Image
                className="mx-auto"
                src={heroImage} alt="product"
                width={150}
                height={150}  />
                <h4 className="uppercase text-xl my-3 font-bold">PRODUCT NAME</h4>
                <p className="text-sm leading-6 my-3 font-light opacity-50">text description Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit </p>
            </div>
       
            <div className="bg-gray-400 duration-500 group-hover:blur-sm group-hover:scale-[0.85] hover:!scale-100 hover:!blur-none cursor-pointer p-8 rounded-xl w-[250px]">
                <Image
                className="mx-auto"
                src={heroImage} alt="product"
                width={150}
                height={150}  />
                <h4 className="uppercase text-xl my-3 font-bold">PRODUCT NAME</h4>
                <p className="text-sm leading-6 my-3 font-light opacity-50">text description Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit </p>
            </div>

            <div className="bg-gray-400 duration-500 group-hover:blur-sm group-hover:scale-[0.85] hover:!scale-100 hover:!blur-none cursor-pointer p-8 rounded-xl w-[250px]">
                <Image
                className="mx-auto"
                src={heroImage} alt="product"
                width={150}
                height={150}  />
                <h4 className="uppercase text-xl my-3 font-bold">PRODUCT NAME</h4>
                <p className="text-sm leading-6 my-3 font-light opacity-50">text description Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit </p>
            </div> */}
           
    </div>
  )
}

export default Card