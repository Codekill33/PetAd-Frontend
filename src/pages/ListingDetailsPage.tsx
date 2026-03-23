import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import ListingInfoTab from "../components/listings/ListingInfoTab";
import InterestedUsersTab from "../components/listings/InterestedUsersTab";

export default function ListingDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"details" | "interested">(
    "details",
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back navigation */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#0D162B] transition-colors mb-6"
        >
          <ChevronLeft size={18} />
          Back to Listings
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Page Header */}
          <div className="px-6 pt-6 pb-0">
            <h1 className="text-2xl font-bold text-[#0D162B]">
              Listing Details
            </h1>
            <p className="text-sm text-gray-400 mt-1">ID: {id}</p>
          </div>

          {/* Tabs */}
          <div className="flex mt-5 border-b border-gray-100 px-6">
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-3 mr-8 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "details"
                  ? "text-[#0D162B] border-[#E84D2A]"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              }`}
            >
              Listing Details
            </button>
            <button
              onClick={() => setActiveTab("interested")}
              className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "interested"
                  ? "text-[#0D162B] border-[#E84D2A]"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              }`}
            >
              Interested Users
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "details" ? (
              <ListingInfoTab />
            ) : (
              <InterestedUsersTab />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
