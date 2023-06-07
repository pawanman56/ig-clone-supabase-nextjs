'use client'
import { useState, useEffect } from "react";
import { supabase } from '../api/client';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase.from('posts').select('*');

    try {
      setLoading(false);
      setPosts(data || []);
      console.log('Data: ', data);

    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <div>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="ig-container">
            <aside></aside>

            <section>
              <header>
                <div className="ig-profile-picture-container">
                  <div className="ig-profile-picture"></div>
                </div>

                <div className="ig-profile">
                  <div className="ig-name">
                    <h2>JohnDoe</h2>

                    <button>Edit Profile</button>

                    <div>⚙️</div>
                  </div>

                  <div className="ig-stats">
                    <p>12 posts</p>
                    <p>145 followers</p>
                    <p>356 following</p>
                  </div>

                  <div className="ig-bio">
                    <p>
                      John Doe | Blogger
                      <br/>
                      <span>Personal Blog</span>
                      <br/>
                      London, UK
                      <br/>
                      {' '} 🇬🇧 💫 @johndoe.codes - documenting my tech journey!
                      <br/>
                      <a href="https://linktr.ee/" target="_blank" rel="noopener norefferrer">
                        https://linktr.ee/
                      </a>
                    </p>
                  </div>
                </div>
              </header>

              <nav>
                <button>POSTS</button>
                <button>REELS</button>
                <button>SAVED</button>
                <button>TAGGED</button>
              </nav>

              <div className="ig-container-gallery">
                {posts.map((post) => {
                  return(
                    <div key={post.id} className="ig-post">
                      <img src={post.image} alt={post.text} /> 
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
