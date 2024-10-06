import './Profile.css'

function Profile() {

    return (
        <>
            <article className='profile-article'>
                <div className='profile-background'>
                    <img 
                        className='profile-background-img'
                        src='https://img.freepik.com/free-vector/flat-design-polygonal-background_23-2148900723.jpg?t=st=1727465517~exp=1727469117~hmac=92e384a74f9d7f06f184ace1478b8fd844b6ed60f1d5a09af148e10e777e5248&w=1060' 
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
                            <button>
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