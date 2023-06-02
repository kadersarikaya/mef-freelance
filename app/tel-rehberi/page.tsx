import React from "react";
import Navbar from "../(components)/Navbar";

const page = () => {
  return <div>
    <Navbar bolum={"MÜHENDİSLİK FAKÜLTESİ"} color={"#FF8E6C"} />
      <div className="flex flex-col md:px-24 xl:px-40 px-8 py-14 md:py-20 space-y-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#2E2E2E]">Telefon Rehberi</h1>
        <div className="rounded-2xl space-y-4 lg:space-y-0 lg:flex w-full p-6 lg:space-x-7 bg-[#FEEBEC]">
            <div className="flex flex-col space-y-2 w-full">
                <label className="text-[#333333] text-xs">Bölüme Göre Arama</label>
                <select className="bg-white border-1 border-gray-200 rounded-md text-xs py-2 px-4">
                    <option value="eğitim">Eğitim Fakültesi</option>
                    <option value="mühendislik">Mühendislik Fakültesi</option>
                    <option value="iktisat">İktisadi ve İdari Bilimler Fakültesi</option>
                </select>
            </div>
            <div className="flex flex-col space-y-2 w-full">
                <label className="text-[#333333] text-xs" >İsim ile Arama</label>
                <input className="bg-white border-1 border-gray-200 rounded-md text-xs py-2 px-4" placeholder="Örn: Ahmet Örnek" type="text" name="" id="" />
            </div>
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-[#333333] text-xs" >Dahili ile Arama</label>
                <input className="bg-white border-1 border-gray-200 rounded-md text-xs py-2 px-4" placeholder="Örn: 9999" type="text" name="" id="" />
            </div>
              <div className="pt-2 lg:pt-4">
                  <button className="bg-[#F5333F] p-2 rounded-lg" >
                  <svg color="#fff" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="whitespace-nowrap table-auto border w-full border-collapse border-1 border-gray-200">
                <thead>
                    <tr className="bg-[#F9F9F9] border-b border-gray-200 text-[#333] text-sm md:text-base font-semibold" >
                        <th className="border-gray-200 p-3 md:p-2 text-start relative">
                            Birim
                            <svg
                                className="hidden lg:block absolute right-2 top-1/2 transform -translate-y-1/2"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.0092 20.4148C12.8102 20.6992 12.389 20.6992 12.19 20.4148L7.90032 14.2867C7.66835 13.9553 7.90543 13.5 8.30994 13.5H16.8893C17.2938 13.5 17.5309 13.9553 17.2989 14.2867L13.0092 20.4148Z" fill="#D8D3D3" />
                                <path d="M13.0092 3.58517C12.8102 3.30081 12.389 3.30081 12.19 3.58517L7.90032 9.71327C7.66835 10.0447 7.90543 10.5 8.30994 10.5H16.8893C17.2938 10.5 17.5309 10.0447 17.2989 9.71327L13.0092 3.58517Z" fill="#D8D3D3" />
                            </svg>
                        </th>
                        <th className="border-gray-200 p-3 md:p-2 text-start relative">
                            Görev
                            <svg
                                  className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.0092 20.4148C12.8102 20.6992 12.389 20.6992 12.19 20.4148L7.90032 14.2867C7.66835 13.9553 7.90543 13.5 8.30994 13.5H16.8893C17.2938 13.5 17.5309 13.9553 17.2989 14.2867L13.0092 20.4148Z" fill="#D8D3D3" />
                                <path d="M13.0092 3.58517C12.8102 3.30081 12.389 3.30081 12.19 3.58517L7.90032 9.71327C7.66835 10.0447 7.90543 10.5 8.30994 10.5H16.8893C17.2938 10.5 17.5309 10.0447 17.2989 9.71327L13.0092 3.58517Z" fill="#D8D3D3" />
                            </svg>
                        </th>
                        <th className="border-gray-200 p-3 md:p-2 text-start relative">
                            Ad Soyad
                            <svg
                                  className="hidden lg:block absolute right-2 top-1/2 transform -translate-y-1/2"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.0092 20.4148C12.8102 20.6992 12.389 20.6992 12.19 20.4148L7.90032 14.2867C7.66835 13.9553 7.90543 13.5 8.30994 13.5H16.8893C17.2938 13.5 17.5309 13.9553 17.2989 14.2867L13.0092 20.4148Z" fill="#D8D3D3" />
                                <path d="M13.0092 3.58517C12.8102 3.30081 12.389 3.30081 12.19 3.58517L7.90032 9.71327C7.66835 10.0447 7.90543 10.5 8.30994 10.5H16.8893C17.2938 10.5 17.5309 10.0447 17.2989 9.71327L13.0092 3.58517Z" fill="#D8D3D3" />
                            </svg>
                        </th>
                        <th className="border-gray-200 p-3 md:p-2 text-start relative">
                            Dahili Telefon
                            <svg
                                  className="hidden lg:block absolute right-2 top-1/2 transform -translate-y-1/2"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.0092 20.4148C12.8102 20.6992 12.389 20.6992 12.19 20.4148L7.90032 14.2867C7.66835 13.9553 7.90543 13.5 8.30994 13.5H16.8893C17.2938 13.5 17.5309 13.9553 17.2989 14.2867L13.0092 20.4148Z" fill="#D8D3D3" />
                                <path d="M13.0092 3.58517C12.8102 3.30081 12.389 3.30081 12.19 3.58517L7.90032 9.71327C7.66835 10.0447 7.90543 10.5 8.30994 10.5H16.8893C17.2938 10.5 17.5309 10.0447 17.2989 9.71327L13.0092 3.58517Z" fill="#D8D3D3" />
                            </svg>
                        </th>
                        <th className="border-gray-200 p-3 md:p-2 text-start relative">
                            Harici Telefon
                            <svg
                                  className="hidden lg:block absolute right-2 top-1/2 transform -translate-y-1/2"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.0092 20.4148C12.8102 20.6992 12.389 20.6992 12.19 20.4148L7.90032 14.2867C7.66835 13.9553 7.90543 13.5 8.30994 13.5H16.8893C17.2938 13.5 17.5309 13.9553 17.2989 14.2867L13.0092 20.4148Z" fill="#D8D3D3" />
                                <path d="M13.0092 3.58517C12.8102 3.30081 12.389 3.30081 12.19 3.58517L7.90032 9.71327C7.66835 10.0447 7.90543 10.5 8.30994 10.5H16.8893C17.2938 10.5 17.5309 10.0447 17.2989 9.71327L13.0092 3.58517Z" fill="#D8D3D3" />
                            </svg>
                        </th>
                        <th className="border-gray-200 p-3 md:p-2 text-start relative">
                            E-Posta
                            <svg
                                  className="hidden lg:block absolute right-2 top-1/2 transform -translate-y-1/2"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.0092 20.4148C12.8102 20.6992 12.389 20.6992 12.19 20.4148L7.90032 14.2867C7.66835 13.9553 7.90543 13.5 8.30994 13.5H16.8893C17.2938 13.5 17.5309 13.9553 17.2989 14.2867L13.0092 20.4148Z" fill="#D8D3D3" />
                                <path d="M13.0092 3.58517C12.8102 3.30081 12.389 3.30081 12.19 3.58517L7.90032 9.71327C7.66835 10.0447 7.90543 10.5 8.30994 10.5H16.8893C17.2938 10.5 17.5309 10.0447 17.2989 9.71327L13.0092 3.58517Z" fill="#D8D3D3" />
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200">
                        <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                        <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                        <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                        <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                        <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                        <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                    </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Mühendislik Fakültesi</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Dekan</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">Prof. Dr. Mehmet Fevzi Ünal</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">3608</td>
                          <td className=" border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">(212) 395 3608</td>
                          <td className="border-gray-200 p-1 md:p-2 text-sm md:text-base font-semibold">mustafa.ozcan@mef.edu.tr</td>
                      </tr>
                </tbody>
            </table>
        </div>
      </div>
  </div>;
};

export default page;
