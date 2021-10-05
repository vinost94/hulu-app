import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightBulbIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from './HeaderItem';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightBulbIcon} />
                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="Collections" Icon={CollectionIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />
                <HeaderItem title="Account" Icon={UserIcon} />
            </div>
            <Image 
                className="object-contain"
                src="/logo/Hulu-Logo.png"
                width={90}
                height={50}
             />
        </header>
    )
}

export default Header
