import React from "react";

const Arastirma = () => {
  return <div className="flex w-full px-3 md:pl-14 2xl:pl-28 flex-col space-y-6">
    <div className="">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Araştırma Alanları</h1>
      <p className="py-6 text-base" >İnşaat Mühendisliği Bölümü Araştırma Alanları</p>
      <div className="flex flex-col space-y-6">
        <div className="overflow-x-auto">
          <ul className="w-full border rounded-md md:rounded-lg lg:rounded-2xl text-[#333333] text-base font-semibold">
            <li className="flex justify-between py-4 px-3 border-b rounded-t-md md:rounded-t-lg lg:rounded-t-2xl bg-[#F9F9F9]">
              <span className="font-bold">Yapı Mühendisliği</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span className="font-bold">Betonarme ve çelik yapıların deprem etkileri altındaki davranışı</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span>Yapı sistemlerinin doğrusal olmayan analizi</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span className="font-bold">Yapıların kazı kökenli zemin yerdeğiştirmeleri altındaki davranışı</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span className="font-bold">Yapıların lifli polimer kompozit malzemeler ile güçlendirilmesi ve onarılması</span>
            </li>
            <li className="flex justify-between py-4 px-3">
              <span className="font-bold">Açıkdeniz rüzgar enerjisi</span>
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <ul className="w-full border rounded-md md:rounded-lg lg:rounded-2xl text-[#333333] text-base font-semibold">
            <li className="flex justify-between py-4 px-3 border-b rounded-t-md md:rounded-t-lg lg:rounded-t-2xl bg-[#F9F9F9]">
              <span className="font-bold">Yapı Malzemeleri</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span className="font-bold">Çimento esaslı malzemeler</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span>Betonun erken yaş özellikleri</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span className="font-bold">Betonun mikroyapısı</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span className="font-bold">Altyapı sistemlerinin servis ömürlerinin modellenmesi</span>
            </li>
            <li className="flex justify-between py-4 px-3">
              <span className="font-bold">İleri beton teknolojileri</span>
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <ul className="w-full border rounded-md md:rounded-lg lg:rounded-2xl text-[#333333] text-base font-semibold">
            <li className="flex justify-between py-4 px-3 border-b rounded-t-md md:rounded-t-lg lg:rounded-t-2xl bg-[#F9F9F9]">
              <span className="font-bold">Yapı İşletmesi</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span className="font-bold">İnşaat sözleşmeleri ve sözleşme yönetimi</span>
            </li>
            <li className="flex justify-between py-4 px-3 border-b">
              <span>Yapım maliyetleri</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
};

export default Arastirma;
