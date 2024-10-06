import './Profile.css'

function Profile() {
    const openEmail = () => {
        window.location.href = `mailto:Atangmaleka78@gmail.com?subject=Subject&body=Body`;
    }

    return (
        <>
            <article className='profile-article'>
                <div className='profile-background'>
                    <img 
                        className='profile-background-img'
                        src='https://i.pinimg.com/564x/a3/af/35/a3af356c5d57a46a1abdf37421ce3ac3.jpg' 
                        alt='image-background' />
                    
                    <div className='profile-info'>
                        <img
                            className='profile-img'
                            src='pic.jpg'
                            alt='profile-image' />
                        <div className='profile-details'>
                            <h2 className='profile-name'>Atang Maleka</h2>
                            <h3>Student</h3>
                        </div>
                        
                    </div>
                </div>
                
                <div className='profile-content-holder'>
                    <section className='profile-content'>
                        <h2>Bio</h2>
                        <p>Avid developing cybersecurity specialist.</p>
                        <div className='profile-underline' />
                        
                        <div className='profile-buttons'>
                            <button>
                                <i className="fa-brands fa-github"></i>
                                <span>Github</span>
                            </button>
                            <button onClick={openEmail}>
                                <i className="fa-solid fa-comment"></i>
                                <span>Message</span>
                            </button>
                        </div>
                    </section>
                </div>
                
            </article>
        </>
    )
}

export default Profile;