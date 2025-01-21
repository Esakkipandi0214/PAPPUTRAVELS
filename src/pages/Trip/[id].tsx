import Link from "next/link"
import { Timeline } from "../../Components/TripTimeline/Timeline"
import { trips } from "../../Components/TripTimeline/tripsdata"
import Layout from "@/Components/Home/HomeLayout/Layout"
import { useRouter } from "next/router"
import LocationCollage from "@/Components/Trips/location-collage"

export default function TripsPage() {
    const reactRouter = useRouter()
    const { id } = reactRouter.query; // Extract the slug named "id"
  return (
    <Layout>
    <div className="min-h-screen bg-transparent text-white">
    <nav aria-label="breadcrumb" className="w-full p-4 ">
	<ol className="flex h-8 space-x-2 text-black">
    <li className="flex items-center">
			<p >
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-600">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
				</svg>
			</p>
		</li>
		<li className="flex items-center">
			<Link rel="noopener noreferrer" href="/Destination" title="Back to homepage" className="flex items-center text-black hover:underline">/ Destination</Link>
		</li>
		<li className="flex items-center space-x-1">
			<span className="dark:text-gray-600">/</span>
			<p  className="flex text-black items-center px-1 capitalize ">{id}</p>
		</li>
	</ol>
</nav>
      <div className="container mx-auto px-4 py-1">
		<LocationCollage/>
        <Timeline trips={trips} />
      </div>
    </div>
    </Layout>
  )
}

