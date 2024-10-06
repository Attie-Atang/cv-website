import './Profile.css'

function Profile() {

    return (
        <>
            <article className='profile-article'>
                <div className='profile-background'>
                    <img 
                        className='profile-background-img'
                        src='https://i.pinimg.com/564x/56/b9/7a/56b97a178021083cdb612959bf02083f.jpg' 
                        alt='image-background' />
                    
                    <div className='profile-info'>
                        <img
                            className='profile-img'
                            src='https://drive.google.com/file/d/1OeIYNOTApyexlWu1X1J0F9riiKPLw6T6/view?usp=sharing'
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