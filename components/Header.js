import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { signIn, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { Input } from "postcss";

function Header() {
  // const [session] = useSession();
  const router = useRouter();

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center pl-10 pr-6 md:pl-12 md:pr-6 h-[62px] lg:pl-10 lg:pr-6">
      <Image
        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
        alt=""
        width={100}
        height={100}
        className="cursor-pointer mt-[-8]"
        onClick={() => router.push("/")}
      />
      {/* {session && ( */}
      <div className="hidden ml-10 md:flex items-center space-x-6 ">
        <a className="header-link group">
          <HomeIcon className="h-3" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <SearchIcon className="h-3" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <PlusIcon className="h-3" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-3" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group">
          <img src="/images/movie-icon.svg" alt="" className="h-3" />
          <span className="span">Movies</span>
        </a>
        <a className="header-link group">
          <img src="/images/series-icon.svg" alt="" className="h-3" />
          <span className="span">Series</span>
        </a>
        <a className="header-link group">
          <img
            src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
            alt=""
            className="h-3"
          />
          <span className="span"></span>
        </a>
      </div>
      {/* )} */}

      {/* <button
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
        onClick={signIn}>
        Login
      </button> */}
    </header>
  );
}

export default Header;
