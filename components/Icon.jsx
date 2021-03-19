
export default function Icon({ siteURL, isBlack, imageURL}) {
  if (isBlack) {
    return(
      <a href={siteURL}>
        <img className="rounded-full bg-gray-50" src={imageURL} width={50}/>
      </a>
    )
  }else{
    return (
      <a href={siteURL}>
        <img className="rounded-full bg-gray-900" src={imageURL} width={50}/>
      </a>
    )
  }
}