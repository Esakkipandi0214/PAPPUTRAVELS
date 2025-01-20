import { Timeline } from "../../Components/TripTimeline/Timeline"
import { trips } from "../../Components/TripTimeline/tripsdata"
import Layout from "@/Components/Home/HomeLayout/Layout"

export default function TripsPage() {
  return (
    <Layout>
    <div className="min-h-screen bg-transparent text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl text-[#411256] font-bold mb-12 text-center">My Travel Journey</h1>
        <Timeline trips={trips} />
      </div>
    </div>
    </Layout>
  )
}

