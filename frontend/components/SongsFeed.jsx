import Song from '../components/Song'
import { useState, useEffect } from 'react'

import axios from 'axios'

const SongFeed = ({  }) => {

    const [songs, setSongs] = useState([
        {
          "title": "Death Bed",
          "artist": "Powfu",
          "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
          "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
          "id": "1"
        },
        {
          "title": "Bad Liar",
          "artist": "Imagine Dragons",
          "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
          "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
          "id": "2"
        },
        {
          "title": "Faded",
          "artist": "Alan Walker",
          "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
          "url": "https://samplesongs.netlify.app/Faded.mp3",
          "id": "3"
        },
        {
          "title": "Hate Me",
          "artist": "Ellie Goulding",
          "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
          "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
          "id": "4"
        },
        {
          "title": "Solo",
          "artist": "Clean Bandit",
          "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
          "url": "https://samplesongs.netlify.app/Solo.mp3",
          "id": "5"
        },
        {
          "title": "Without Me",
          "artist": "Halsey",
          "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
          "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
          "id": "6"
        }
      ]
    )

    const [songRows, setSongRows] = useState([])
    const [search, setSearch] = useState('')

    const [searchedSong, setSearchedSong] = useState({})
    
    useEffect(() => {
        let tempSongRows = []
        let tempSongRow = []

        songs.forEach((song, idx) => {
            tempSongRow.push(song)
            if ((idx + 1) % 3 === 0) {
                tempSongRows.push(tempSongRow)
                tempSongRow = []
            } else if (idx === songs.length - 1) {
                tempSongRows.push(tempSongRow)
            } else {
                return
            }
        })

        setSongRows(tempSongRows)
        console.log(tempSongRows)
    }, [songs])


    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const onSearch = () => {
        const searchTerm = search
        const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchTerm}&api_key=7256f49ae9e240893e9ee2032b929e40&format=json`

        const fetchFirstSong = async () => {
            const response = await axios.get(url)
            const song = await response.data.results.trackmatches.track[0]   
            console.log(song)
            setSearchedSong(song)
    
        }

        fetchFirstSong()
        
             
    }

    const addSong = () => {
        const newSong = {
            title: searchedSong.name,
            artist: searchedSong.artist,
            artwork: searchedSong['image'][3]['#text'],
            url: searchedSong.url,
            id: searchedSong.mbid
        }

        setSongs([...songs, newSong])
    }

    useEffect(() => {
        console.log(searchedSong.name)
        if (searchedSong.name) {
            addSong()
        }
    }, [searchedSong])



    return (
        <div className="flex flex-col w-screen justify-centerspace-y-8 mt-8 px-[10%] overflow-scroll">
            <div className="flex flex-row justify-between items-center">
            <div className="flex ml-24 py-4 items-center">
  <input
    type="text"
    name="search"
    value={search}
    onChange={handleSearch}

    placeholder="Search for an artist or song"
    className="bg-gray-800 rounded-l-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
  />
  <button
    onClick={onSearch}
    className="bg-green-500 rounded-r-lg py-2 px-4 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    Add
  </button>
</div>
</div>


            <div className='flex w-full justify-center flex-col px-[6%] mt-8 space-y-8'>
                {
                    songRows.map((songRow, idx) => (
                        <div key={idx} className='flex flex-row justify-between  '>
                            {
                                 songRow.map((song) => (
                                      <Song songName={song.title} artistName={song.artist} albumCover={song.artwork}  key={song.id} />
                                 ))
                               }
                                </div>
                    ))

                    
    }

    
    </div>

    </div>


    )
}

export default SongFeed;


