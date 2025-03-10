import Link from 'next/link'
import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Footer from '@/components/footer';

const montserrat = Montserrat({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
  });
  


const Contact = () => {
  return (
    <div>
         <div> 
      {/* Navbar */}
      <div
        className={`w-full h-[58px] bg-white flex justify-between items-center px-4 shadow-md ${montserrat.className}`}
      >
        <div className="text-2xl font-bold text-gray-900">Bandage</div>

{/* Navigation Links */}
<nav className="hidden md:flex space-x-6 text-gray-600 font-bold ">
  <Link href="/" className="hover:text-gray-900 font-bold transition">Home</Link>
  <Link href="/products" className="hover:text-gray-900  transition">Product</Link>
  <Link href="/pricing" className="hover:text-gray-900  transition">Pricing</Link>
  <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
</nav>

{/* Login & Button */}
<div className="flex items-center space-x-6">
  <Link href="/login" className="text-blue-500 hover:text-blue-700 font-bold transition">
    Login
  </Link>
  <Link
    href="/signup"
    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center transition"
  >
    Become a member →
  </Link>
</div>
</div>
</div>


<div className="relative flex flex-col gap-8">
      <div className="w-full max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
        <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-full lg:h-[321px]">
          {/* Column 1 */}
          <div className="flex flex-col items-center lg:items-start  w-full lg:w-[599px] h-auto lg:h-[321px]">
            <h5 className="text-[14px]  font-semibold text-[#252B42] tracking-[0.1px] text-center hidden sm:block">
              Contact Us
            </h5>
            <h1 className="text-[30px] sm:text-[30px] sm:justify-center font-semibold lg:text-[58px]  text-[#252B42] tracking-[0.2px] text-center lg:text-left">
            Get in touch <br className="sm:hidden"/>
            today!
            </h1>
            <h4 className="text-[12px] font-normal  sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px] text-center lg:text-left">
            
              We know how large <br className="sm:hidden"/> 
objects will act, but things <br className="sm:hidden"/> 
on a small scale 
            </h4>
            <h4 className="text-[12px] font-bold md:mt-2  sm:text-[18px] lg:text-[20px] text-[#252B42] w-[200px] lg:w-[376px] text-center lg:text-left">
            
            Phone ; +451 215 215 
          </h4>
          <h4 className="text-[12px] font-bold md:mt-3 sm:text-[18px] lg:text-[20px] text-[#252B42] w-[200px] lg:w-[376px] text-center lg:text-left">
          Fax : +451 215 215
          
          </h4>
            <div className="flex flex-row items-center  justify-center md:mt-9 lg:justify-start gap-[20px] w-[195px] h-[52px]">
            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_232_716)">
<path d="M30 2.98277C28.8766 3.48044 27.685 3.80711 26.4649 3.95191C27.7358 3.19019 28.7116 1.98398 29.1711 0.546797C27.963 1.26373 26.6412 1.76886 25.2628 2.04035C24.14 0.844219 22.5405 0.0966797 20.7702 0.0966797C17.3711 0.0966797 14.6152 2.85246 14.6152 6.25137C14.6152 6.73383 14.6696 7.20351 14.7745 7.6541C9.6593 7.39734 5.12414 4.94707 2.0884 1.22332C1.55871 2.13234 1.2552 3.18973 1.2552 4.31754C1.2552 6.45293 2.34188 8.33672 3.99328 9.44051C3.01588 9.40989 2.05998 9.14591 1.20539 8.67058C1.20504 8.69637 1.20504 8.72215 1.20504 8.74804C1.20504 11.7301 3.3266 14.2178 6.14215 14.7832C5.2358 15.0297 4.28511 15.0658 3.3627 14.8887C4.14586 17.3339 6.41895 19.1133 9.11215 19.1631C7.0057 20.8138 4.35176 21.7978 1.46824 21.7978C0.971367 21.7978 0.481523 21.7686 0 21.7118C2.72379 23.4581 5.95898 24.4771 9.43477 24.4771C20.7559 24.4771 26.9466 15.0984 26.9466 6.96515C26.9466 6.6982 26.9407 6.43277 26.9288 6.16887C28.1337 5.29779 29.1737 4.21888 30 2.98277Z" fill="#252B42"/>
</g>
<defs>
<clipPath id="clip0_232_716">
<rect width="30" height="24.4922" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_232_718)">
<path d="M28.3443 30.0001C29.2586 30.0001 30 29.2588 30 28.3444V1.65574C30 0.741211 29.2586 0 28.3443 0H1.65574C0.741094 0 0 0.741211 0 1.65574V28.3444C0 29.2588 0.741094 30.0001 1.65574 30.0001H28.3443Z" fill="#252B42"/>
<path d="M20.6993 30.0003V18.3827H24.5989L25.1828 13.8552H20.6993V10.9644C20.6993 9.65351 21.0634 8.76019 22.9432 8.76019L25.3407 8.75914V4.70973C24.9259 4.65453 23.5028 4.53125 21.8471 4.53125C18.3903 4.53125 16.0239 6.64121 16.0239 10.5161V13.8552H12.1143V18.3827H16.0239V30.0003H20.6993Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_232_718">
<rect width="30" height="30.0001" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9998 7.30838C10.7435 7.30838 7.30854 10.7434 7.30854 14.9996C7.30854 19.2559 10.7435 22.6909 14.9998 22.6909C19.2561 22.6909 22.6911 19.2559 22.6911 14.9996C22.6911 10.7434 19.2561 7.30838 14.9998 7.30838ZM14.9998 19.9984C12.2473 19.9984 10.001 17.7521 10.001 14.9996C10.001 12.2471 12.2473 10.0009 14.9998 10.0009C17.7523 10.0009 19.9986 12.2471 19.9986 14.9996C19.9986 17.7521 17.7523 19.9984 14.9998 19.9984ZM23.0061 5.20088C22.0123 5.20088 21.2098 6.00338 21.2098 6.99713C21.2098 7.99088 22.0123 8.79338 23.0061 8.79338C23.9998 8.79338 24.8023 7.99463 24.8023 6.99713C24.8026 6.76116 24.7563 6.52745 24.6662 6.30939C24.576 6.09132 24.4437 5.89319 24.2769 5.72633C24.11 5.55947 23.9119 5.42718 23.6938 5.33701C23.4757 5.24684 23.242 5.20059 23.0061 5.20088ZM29.9923 14.9996C29.9923 12.9296 30.0111 10.8784 29.8948 8.81213C29.7786 6.41213 29.2311 4.28213 27.4761 2.52713C25.7173 0.768381 23.5911 0.224631 21.1911 0.108381C19.1211 -0.00786902 17.0698 0.010881 15.0035 0.010881C12.9335 0.010881 10.8823 -0.00786902 8.81604 0.108381C6.41604 0.224631 4.28604 0.772131 2.53104 2.52713C0.772288 4.28588 0.228537 6.41213 0.112287 8.81213C-0.00396278 10.8821 0.0147873 12.9334 0.0147873 14.9996C0.0147873 17.0659 -0.00396278 19.1209 0.112287 21.1871C0.228537 23.5871 0.776038 25.7171 2.53104 27.4721C4.28979 29.2309 6.41604 29.7746 8.81604 29.8909C10.886 30.0071 12.9373 29.9884 15.0035 29.9884C17.0735 29.9884 19.1248 30.0071 21.1911 29.8909C23.5911 29.7746 25.7211 29.2271 27.4761 27.4721C29.2348 25.7134 29.7786 23.5871 29.8948 21.1871C30.0148 19.1209 29.9923 17.0696 29.9923 14.9996ZM26.6923 23.8421C26.4186 24.5246 26.0886 25.0346 25.5598 25.5596C25.0311 26.0884 24.5248 26.4184 23.8423 26.6921C21.8698 27.4759 17.1861 27.2996 14.9998 27.2996C12.8135 27.2996 8.12604 27.4759 6.15354 26.6959C5.47104 26.4221 4.96104 26.0921 4.43604 25.5634C3.90729 25.0346 3.57729 24.5284 3.30354 23.8459C2.52354 21.8696 2.69979 17.1859 2.69979 14.9996C2.69979 12.8134 2.52354 8.12588 3.30354 6.15338C3.57729 5.47088 3.90729 4.96088 4.43604 4.43588C4.96479 3.91088 5.47104 3.57713 6.15354 3.30338C8.12604 2.52338 12.8135 2.69963 14.9998 2.69963C17.1861 2.69963 21.8736 2.52338 23.8461 3.30338C24.5286 3.57713 25.0386 3.90713 25.5636 4.43588C26.0923 4.96463 26.4223 5.47088 26.6961 6.15338C27.4761 8.12588 27.2998 12.8134 27.2998 14.9996C27.2998 17.1859 27.4761 21.8696 26.6923 23.8421Z" fill="#252B42"/>
</svg>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5782 25.4624H21.1504V18.5282C21.1504 16.8747 21.1209 14.7461 18.8475 14.7461C16.5414 14.7461 16.1885 16.5477 16.1885 18.4078V25.4619H11.7609V11.2024H16.0114V13.1512H16.071C16.4963 12.4238 17.111 11.8254 17.8496 11.4198C18.5881 11.0142 19.4229 10.8165 20.2649 10.8477C24.7526 10.8477 25.58 13.7996 25.58 17.6398L25.5782 25.4624ZM6.76477 9.25338C5.34567 9.25361 4.19504 8.10334 4.19481 6.68423C4.19458 5.26513 5.34473 4.11451 6.76384 4.11427C8.18294 4.11392 9.33356 5.26419 9.3338 6.6833C9.33392 7.36478 9.06333 8.0184 8.58155 8.50038C8.09977 8.98236 7.44625 9.25322 6.76477 9.25338ZM8.9787 25.4625H4.54629V11.2024H8.97858V25.4624L8.9787 25.4625ZM27.7856 0.00217493H2.32139C1.11788 -0.0113659 0.130919 0.952719 0.116211 2.15622V27.7266C0.130452 28.9307 1.1173 29.8957 2.32127 29.8831H27.7856C28.9921 29.898 29.9828 28.933 29.9995 27.7266V2.15424C29.9823 0.9484 28.9915 -0.0155683 27.7856 0.000190493" fill="#252B42"/>
</svg>

            </div>
          </div>
          {/* Column 2 */}
          <div className="w-full  flex justify-center">
           <Image
                   src="/background (1).png" // Replace with your PNG image path
                   alt="Shopping Girl"
                   layout="fill" // Makes the image fill the parent container
                   objectFit="cover" // Ensures the image covers the entire area
                   quality={100} // Optional: Adjust image quality
                   
                 />
          </div>
        </div>
      </div>
    </div>


    <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Visit Our Office</h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            We help small businesses<br className="sm:hidden"/> with big ideas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg w-full sm:w-[328px] h-[403px]">
              <div className="mb-4">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.929 38.9947C55.5775 38.6426 55.16 38.3632 54.7004 38.1726C54.2408 37.982 53.7482 37.8839 53.2506 37.8839C52.7531 37.8839 52.2604 37.982 51.8008 38.1726C51.3413 38.3632 50.9238 38.6426 50.5722 38.9947L44.5335 45.0334C41.7339 44.1999 36.5097 42.3057 33.1987 38.9947C29.8876 35.6836 27.9934 30.4594 27.16 27.6598L33.1987 21.6211C33.5508 21.2696 33.8301 20.8521 34.0207 20.3925C34.2113 19.9329 34.3094 19.4403 34.3094 18.9427C34.3094 18.4452 34.2113 17.9525 34.0207 17.4929C33.8301 17.0333 33.5508 16.6159 33.1987 16.2643L18.0451 1.11076C17.6936 0.758646 17.2761 0.479298 16.8165 0.288701C16.3569 0.0981045 15.8642 0 15.3667 0C14.8692 0 14.3765 0.0981045 13.9169 0.288701C13.4573 0.479298 13.0398 0.758646 12.6883 1.11076L2.41418 11.3849C0.97459 12.8245 0.163873 14.802 0.19418 16.8212C0.281313 22.2159 1.70954 40.9533 16.4767 55.7204C31.2439 70.4876 49.9813 71.912 55.3797 72.003H55.4858C57.4861 72.003 59.3765 71.215 60.8085 69.783L71.0826 59.5088C71.4347 59.1573 71.7141 58.7398 71.9047 58.2802C72.0953 57.8207 72.1934 57.328 72.1934 56.8304C72.1934 56.3329 72.0953 55.8402 71.9047 55.3807C71.7141 54.9211 71.4347 54.5036 71.0826 54.1521L55.929 38.9947ZM55.4479 64.4224C50.72 64.3428 34.5435 63.0737 21.8335 50.3599C9.08175 37.6081 7.84674 21.3749 7.77097 16.7417L15.3667 9.14594L25.1635 18.9427L20.2651 23.8411C19.8198 24.2861 19.4924 24.835 19.3125 25.4382C19.1326 26.0414 19.1058 26.68 19.2346 27.2961C19.3256 27.7318 21.5494 38.0627 27.8381 44.3515C34.1268 50.6402 44.4578 52.864 44.8934 52.9549C45.5092 53.0874 46.1484 53.0627 46.7522 52.8833C47.356 52.7039 47.9049 52.3755 48.3485 51.9283L53.2506 47.0299L63.0474 56.8267L55.4479 64.4224Z" fill="#23A6F0"/>
                </svg>
              </div>
              <p className="text-black text-sm mb-2 font-bold">
                georgia.young@example.com <br />
                georgia.youngaple.com
              </p>
              <p className="text-black mb-4 font-bold">Get Support</p>
              <button className="border text-[rgb(35,166,240)] border-[rgb(35,166,240)] px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                Submit Request
              </button>
            </div>
  
            {/* Card 2 */}
            <div className="bg-[rgb(37,43,66)] flex flex-col items-center text-white p-6 rounded-sm w-full sm:w-[328px] h-[403px]">
              <div className="mb-4">
                <svg width="51" height="67" viewBox="0 0 51 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.5 0C11.4168 0 0 11.3074 0 25.2559C0 29.9206 0.921868 34.7384 3.56734 38.2109L25.5 67L47.4327 38.2109C49.8356 35.0569 51 29.4811 51 25.2559C51.0001 11.3074 39.5833 0 25.5 0ZM25.5 14.6276C31.4257 14.6276 36.231 19.3869 36.231 25.2558C36.231 31.1248 31.4257 35.8841 25.5 35.8841C19.5743 35.8841 14.7691 31.1248 14.7691 25.2559C14.7691 19.3869 19.5743 14.6276 25.5 14.6276Z" fill="#23A6F0"/>
                </svg>
              </div>
              <p className="text-white text-sm mb-2 font-bold">
                georgia.young@example.com <br />
                georgia.youngaple.com
              </p>
              <p className="mb-4 font-bold">Get Support</p>
              <button className="border text-[rgb(35,166,240)] border-[rgb(35,166,240)] px-4 py-2 rounded-full hover:bg-white hover:text-blue-500 transition">
                Submit Request
              </button>
            </div>
  
            {/* Card 3 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg w-full sm:w-[328px] h-[403px]">
              <div className="mb-4">
                <svg width="72" height="55" viewBox="0 0 72 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clip-rule="evenodd" d="M0.225 7.12708C0.678682 5.10236 1.79395 3.29456 3.38815 1.99975C4.98235 0.704934 6.96098 -0.000139766 9 2.07815e-08H63C65.039 -0.000139766 67.0177 0.704934 68.6118 1.99975C70.206 3.29456 71.3213 5.10236 71.775 7.12708L36 29.3975L0.225 7.12708ZM0 12.3612V44.9212L26.1135 28.6137L0 12.3612ZM30.4245 31.3042L0.8595 49.7612C1.58997 51.3301 2.74287 52.6553 4.18402 53.5827C5.62516 54.5102 7.29529 55.0017 9 55H63C64.7044 55.0004 66.3739 54.5078 67.8143 53.5796C69.2546 52.6513 70.4065 51.3256 71.136 49.7567L41.571 31.2996L36 34.7692L30.4245 31.2996V31.3042ZM45.8865 28.6183L72 44.9212V12.3612L45.8865 28.6137V28.6183Z" fill="#23A6F0"/>
                </svg>
              </div>
              <p className="text-black text-sm mb-2 font-bold">
                georgia.young@example.com <br />
                georgia.youngaple.com
              </p>
              <p className="mb-4 font-bold text-black">Get Support</p>
              <button className="border border-[rgb(35,166,240)] rounded-full text-[rgb(35,166,240)] px-4 py-2 hover:bg-blue-500 hover:text-white transition">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>




      <div className="flex flex-col items-center justify-center bg-white px-4 sm:px-8 md:px-12 lg:px-16 ">
      {/* Image */}
      <svg
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6"
      >
        <path
          d="M43.9052 61.2058C44.5713 62.0869 45.8256 62.2611 46.7067 61.5949L61.0645 50.7389C61.9456 50.0727 62.1198 48.8184 61.4536 47.9374C60.7874 47.0563 59.5331 46.8821 58.6521 47.5483L45.8896 57.1981L36.2398 44.4356C35.5736 43.5545 34.3193 43.3803 33.4382 44.0465C32.5572 44.7127 32.383 45.9669 33.0491 46.848L43.9052 61.2058ZM0.367223 4.49559C13.131 5.34642 22.0886 9.24913 28.4012 14.4985C34.7283 19.7599 38.5351 26.4888 40.7922 33.1997C43.0521 39.9191 43.7382 46.5647 43.8525 51.5532C43.9095 54.0417 43.8239 56.1028 43.7249 57.5345C43.6755 58.2501 43.6228 58.8073 43.5831 59.181C43.5632 59.3678 43.5466 59.5086 43.5354 59.6003C43.5297 59.6461 43.5254 59.6796 43.5227 59.7005C43.5213 59.7109 43.5203 59.7181 43.5198 59.7221C43.5195 59.7242 43.5194 59.7254 43.5193 59.7257C43.5193 59.7259 43.5193 59.7256 43.5193 59.7257C43.5194 59.7252 43.5195 59.7245 45.5005 59.9996C47.4815 60.2747 47.4816 60.2736 47.4818 60.2722C47.4819 60.2715 47.4821 60.27 47.4823 60.2685C47.4827 60.2656 47.4832 60.2619 47.4838 60.2574C47.485 60.2483 47.4867 60.236 47.4887 60.2204C47.4928 60.1893 47.4985 60.1453 47.5054 60.0889C47.5193 59.976 47.5384 59.8132 47.5607 59.6036C47.6052 59.1846 47.6623 58.5782 47.7154 57.8104C47.8215 56.2753 47.9117 54.0903 47.8515 51.4616C47.7313 46.2158 47.0111 39.1427 44.5835 31.9246C42.153 24.6981 37.991 17.2708 30.9587 11.423C23.9119 5.56306 14.1195 1.40343 0.63327 0.50445L0.367223 4.49559Z"
          fill="#23A6F0"
        />
      </svg>

      {/* First Text */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        WE Cant WAIT TO MEET YOU
      </h2>

      {/* Second Text */}
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
        Lets Talk
      </p>

      {/* Button */}
      <button className="bg-[rgb(96,109,117)] px-6 py-3 text-white rounded-sm hover:bg-blue-600 transition text-lg sm:text-xl md:text-2xl">
        Try it free now
      </button>
    </div>







  <Footer /> 










</div>
            
  )
}

export default Contact