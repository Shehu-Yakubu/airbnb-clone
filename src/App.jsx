import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import dataFile from './data'

export default function App() {
  const data = dataFile.map(df => {
    return <Card 
      key={df.id}
      // {...df}
      df={df}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card--list'>
        {data}
      </section>
    </div>
  )
}

{/* <Card
        // img="katie-zaferes.png" 
        img={zaferes}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={138}
      /> 
*/}

{/* 
  <Contact
        img="../assets/whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-2134"
        email="mr.whiskerson@catnap.meow"
      />
      <Contact 
        img="../assets/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img="../assets/felix.png"
        name="Felix"
        phone="(212) 555-4657"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="../assets/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumkin@scrimba.com"
      /> 
*/}
