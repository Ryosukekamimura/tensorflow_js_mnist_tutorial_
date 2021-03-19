import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <>
      {/* <NavigationBar/>
      <div className="flex h-auto content-center">
        <div className="mx-auto bg-gray-800">

          

          <h3 className="text-gray-50 text-3xl">I'm Ryosuke Kamimura👋, iOS software engineer focused on user experiences👨🏻‍💻</h3>

          <div className="flex flex-row p-10">
            <div className="text-gray-50">1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div> */}

      <div class="flex h-screen">
        <div class="m-auto text-gray-50">
          <h1 className="text-xl">Hi, my name is</h1>
          <h1 className="text-xl">Ryosuke Kamimura</h1>
          <h1 className="text-xl">I build things for the iOS</h1>
          <h1 className="text-xl"></h1>
          <div className="flex flex-row">
            <button>
              <img />
            </button>
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