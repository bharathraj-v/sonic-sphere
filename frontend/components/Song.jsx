const Song = ({songName, artistName, songYear="2016", albumCover }) => {
    return (

        <div className="bg-gray-800 h-82 w-96 rounded-lg overflow-hidden shadow-lg">
  <img
    src={albumCover}
    alt="Song cover"
    className="w-full h-48 object-cover"
  />
  <div className="p-4">
    <h3 className="text-xl text-white font-bold mb-2">
      {songName}
    </h3>
    <p className="text-gray-400 mb-2" >
      {artistName}
    </p>
    {/* <p className="text-gray-400 mb-2" >
      {songYear}
    </p> */}
    {/* <a
      href="#"
      className="bg-green-500 rounded-lg py-2 px-4 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      View Details
    </a> */}
  </div>
</div>


    )
}

export default Song;