import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('영화');
  useEffect(() => {
    getMovie()
  }, []);


  const getMovie = async () => {
    const res = await axios.get('/v1/search/movie', {
      params: {
        query: search,
        display: 20
      },
      headers: {
        'X-Naver-Client-Id': 'GnKM3Exfyuo03kt2IOJK',
        'X-Naver-Client-Secret': 'c9iRV7lmcy'
      }
    })

    console.log(res)
    console.log(res.data.items);
    setMovie(res.data.items)
  };


  return (
    <div className="App">
      <ul className="App-header">
        {movie ?
          <ul>
            {
              movie.map(it => {
                return (
                  <figure>
                    <img src={it.image} />
                    {it.title}
                  </figure>
                )
              })
            }

          </ul>

          : <div>loading...</div>
        }
      </ul>
    </div>
  );
}

export default App;
