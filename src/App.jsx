import { useState } from "react";
import Prayer from "./components/prayer"
import { useEffect } from "react";
import axios from "axios";

function App() {
  const cities = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الجيزة", value: "Giza" },
    { name: "الاسكندرية", value: "Alexandria" },
    { name: "اسوان", value: "Aswan" },
    { name: "اسيوط", value: "Asyut" },
    { name: "البحيرة", value: "Beheira" },
    { name: "بني سويف", value: "Beni Suef" },
    { name: "دقهلية", value: "Dakahlia" },
    { name: "دمياط", value: "Damietta" },
    { name: "الفيوم", value: "Faiyum" },
    { name: "الغربية", value: "Gharbia" },
    { name: "الاسماعيلية", value: "Ismailia" },
    { name: "كفر الشيخ", value: "Kafr El Sheikh" },
    { name: "الاقصر", value: "Luxor" },
    { name: "مطروح", value: "Matruh" },
    { name: "المنيا", value: "Minya" },
    { name: "المنوفية", value: "Monufia" },
    { name: "الوادي الجديد", value: "New Valley" },
    { name: "شمال سينا", value: "North Sinai" },
    { name: "بورسعيد", value: "Port Said" },
    { name: "القليوبية", value: "Qalyubia" },
    { name: "قنا", value: "Qena" },
    { name: "البحر الحمر", value: "Red Sea" },
    { name: "الشرقية", value: "Sharqia" },
    { name: "سوهاج", value: "Sohag" },
    { name: "جنوب سينا", value: "South Sinai" },
    { name: "السويس", value: "Suez" }
  ]
  const [selectedCity, setSelectedCity] = useState('cairo');
  const [PrayerTimesData, setPrayerTimesData] = useState()

  const formatToDDMMYYYY = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const formattedDate = formatToDDMMYYYY()
  const [selectedDate, setSelectedDate] = useState(formattedDate);


  useEffect(() => {
    const fetchPrayerTimes = async () => {

      const url = `https://api.aladhan.com/v1/timingsByCity/${selectedDate}?city=${selectedCity}&country=Egypt&method=5`;

      try {
        const response = await axios.get(url);
        const Data = response.data.data.timings;
        setPrayerTimesData(Data)
      } catch (err) {
        console.error(err);
      }
    };

    fetchPrayerTimes();
  }, [selectedCity, selectedDate]);

  return (
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>المدينة</h3>
            <select name="" id="" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              {cities.map((city) => (
                <option value={city.value} key={city.value}>{city.name}</option>
              ))}
            </select>
          </div>
          <div className="date">
            <h3>التاريخ</h3>
            <h4>{selectedDate}</h4>
          </div>
        </div>

        {PrayerTimesData && (
          <>
            <Prayer name='الفجر' time={PrayerTimesData.Fajr} />
            <Prayer name='الشروق' time={PrayerTimesData.Sunrise} />
            <Prayer name='الظهر' time={PrayerTimesData.Dhuhr} />
            <Prayer name='العصر' time={PrayerTimesData.Asr} />
            <Prayer name='المغرب' time={PrayerTimesData.Maghrib} />
            <Prayer name='العشاء' time={PrayerTimesData.Isha} />
          </>
        )}


      </div>
    </section>
  )
}
export default App

