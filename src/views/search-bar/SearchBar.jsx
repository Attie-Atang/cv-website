import './SearchBar.css'

export default function SearchBar() {

    return (
        <>
            <section className='searchbar-section'>
                <h3 className='searchbar-heading'>Curriculum Vitae</h3>

                <div className='searchbar'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='Search' />
                </div>
                
                <div className='searchbar-links'>
                    <div className='location'>
                        <i className="fa-solid fa-location-dot"></i>
                        <h4>Limpopo, SA</h4>
                    </div>
                    <div className='email'>
                        <i className="fa-solid fa-paper-plane"></i>
                        <h4>Atangmaleka78@gmail.com</h4>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
            </section>
        </>
    )
}