import Icon from '../components/Icon';


export default function Home() {
  return (
    <>
      <div className="container mx-auto dark bg-gray-800">
        <div className="flex h-screen items-center">
          <div className="m-auto text-gray-50">
            <h1 className="text-base sm:text-3xl text-green-400 font-mono">$ Hi, my name is</h1>
            <h1 className="text-3xl sm:text-9xl font-sans text-gray-50 p-4">Ryosuke Kamimura</h1>
            <h1 className="text-xl sm:text-7xl text-gray-50 p-4">I build things for the iOS , Web</h1>
              <div className="flex flex-row space-x-4 py-10">
                <Icon siteURL="https://github.com/RyosukeKamimura" isBlack={false} imageURL="https://user-images.githubusercontent.com/52638834/111755661-aeb1c280-88dc-11eb-8d17-66f425de6b7d.png" />
                <Icon siteURL="https://twitter.com/Ryosuke_Kamimur" isBlack={true} imageURL="https://user-images.githubusercontent.com/52638834/111733815-16a3e100-88bc-11eb-9e53-474d31743ee4.png" />
                <Icon siteURL="https://qiita.com/RyosukeKamimura" isBlack={true} imageURL="https://user-images.githubusercontent.com/52638834/111733818-1acffe80-88bc-11eb-94e7-5b2dc8d59e35.png" />
                <Icon siteURL="https://note.com/ryosuke_kamimura" isBlack={true} imageURL="https://user-images.githubusercontent.com/52638834/111733828-1f94b280-88bc-11eb-8c23-9727dad34dcc.png" />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
