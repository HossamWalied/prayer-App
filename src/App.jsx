import Prayer from "./components/prayer"

function App() {
  const cities=[
    {name:'القاهرة', value:"cairo"},
    {name:'الاسكندرية', value:"alex"},
    {name:'المنصورة', value:"mansoura"},
    {name:'الزقازيق', value:"zagazig"},
    {name:'المنيا', value:"minya"},
    {name:'الاسماعيلية', value:"ismailia"},
    {name:'السويس', value:"suez"},
    {name:'بورسعيد', value:"portsaid"},
  ]

  return (
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>المدينة</h3>
            <select name="" id="">
              {cities.map((city) => (
                <option value={city.value} key={city.value}>{city.name}</option>
              ))}
            </select>
          </div>
          <div className="date">
            <h3>التاريخ</h3>
            <h4>03-09-2024</h4>
          </div>
        </div>

        <Prayer name='الفجر' time='04:30 Am'/>
        <Prayer name='الظهر' time='04:30 Am'/>
        <Prayer name='العصر' time='04:30 Am'/>
        <Prayer name='المغرب' time='04:30 Am'/>
        <Prayer name='العشاء' time='04:30 Am'/>



      </div>
    </section>
  )
}

export default App
