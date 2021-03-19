import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <>
      <div className="container mx-auto dark bg-gray-800">
        <div className="flex h-screen items-center">
          <div className="m-auto text-gray-50">
            <h1 className="text-3xl text-green-400 font-mono">$ Hi, my name is</h1>
            <h1 className="text-9xl font-sans text-gray-50 p-4">Ryosuke Kamimura</h1>
            <h1 className="text-7xl text-gray-50 p-4">I build things for the iOS , Web</h1>
            <div className="flex flex-row space-x-4 py-10">
              <a href="https://github.com/RyosukeKamimura">
                <img className="bg-gray-50 rounded-full" src="https://user-images.githubusercontent.com/52638834/111732925-ff63f400-88b9-11eb-9422-d1a14dd35e36.png" width={50}/>
              </a>
              <a href="https://twitter.com/Ryosuke_Kamimur">
                <img className="bg-gray-50 rounded-full" src="https://user-images.githubusercontent.com/52638834/111733815-16a3e100-88bc-11eb-9e53-474d31743ee4.png" width={50}/>
              </a>
              <a href="https://qiita.com/RyosukeKamimura">
                <img className="bg-gray-50 rounded-full" src="https://user-images.githubusercontent.com/52638834/111733818-1acffe80-88bc-11eb-94e7-5b2dc8d59e35.png" width={50}/>
              </a>
              <a href="https://note.com/ryosuke_kamimura">
                <img className="bg-gray-50 rounded-full" src="https://user-images.githubusercontent.com/52638834/111733828-1f94b280-88bc-11eb-8c23-9727dad34dcc.png" width={50}/>
              </a>
            </div>
            </div>
          </div>
      </div>
    </>
  )
}

const NavigationBar = () => {
  return (
    <header className="container mx-auto flex justify-start bg-gray-900">
      <h1 className="text-4xl font-semibold text-gray-900">Ryosuke Kamimura</h1>
    </header>
  )
}