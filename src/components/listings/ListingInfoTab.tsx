import { useState } from "react";
import { Link } from "react-router-dom";
import InfoRow from "./InfoRow";
import StatusInfo from "./StatusInfo";
import dogImage from "../../assets/dog.png";

const mockListing = {
  name: "Pet For Adoption",
  category: "ABSOLUTE ADOPTION",
  species: "Dog",
  breed: "German Shepard",
  age: "4 Years Old",
  gender: "Female",
  vaccinated: "Yes",
  location: "Mainland, Lagos Nigeria",
  status: "Pending Consent",
  description:
    "A friendly and energetic German Shepherd looking for a loving forever home. She is well-trained, great with kids, and loves outdoor activities. She has been fully vaccinated and is in excellent health.",
  images: [dogImage, dogImage, dogImage, dogImage],
};

export default function ListingInfoTab() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6">
        {/* Thumbnail column */}
        <div className="hidden lg:flex flex-col gap-3">
          {mockListing.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-[72px] h-[72px] rounded-xl overflow-hidden border-2 transition-all ${
                activeImage === i
                  ? "border-[#E84D2A] shadow-sm"
                  : "border-gray-100 hover:border-gray-300"
              }`}
            >
              <img
                src={img}
                alt={`Pet image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="rounded-2xl overflow-hidden bg-gray-100">
          <img
            src={mockListing.images[activeImage]}
            alt={mockListing.name}
            className="w-full h-[380px] lg:h-[420px] object-cover"
          />
          {/* Mobile thumbnails */}
          <div className="flex gap-2 p-3 lg:hidden">
            {mockListing.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i ? "border-[#E84D2A]" : "border-transparent"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="flex flex-col gap-5">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D162B]">
              {mockListing.name}
            </h2>
            <span className="inline-block mt-1.5 text-[11px] font-semibold tracking-widest text-[#E84D2A] uppercase bg-red-50 px-2.5 py-1 rounded-full">
              {mockListing.category}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {mockListing.location}
          </div>

          {/* Pet details */}
          <div className="bg-gray-50 rounded-xl border border-gray-100 divide-y divide-gray-100">
            <InfoRow label="Pet Type" value={mockListing.species} />
            <InfoRow label="Breed" value={mockListing.breed} />
            <InfoRow label="Age" value={mockListing.age} />
            <InfoRow label="Gender" value={mockListing.gender} />
            <InfoRow label="Vaccinated" value={mockListing.vaccinated} last />
          </div>

          {/* Status */}
          <StatusInfo status={mockListing.status} />

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <button className="flex-1 py-3 rounded-xl bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition-colors">
              Delete Listing
            </button>
            <Link
              to={`/listings/edit`}
              className="flex-1 py-3 rounded-xl border border-gray-200 font-semibold text-sm text-[#0D162B] text-center hover:bg-gray-50 transition-colors"
            >
              Edit Details
            </Link>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-base font-bold text-[#0D162B] mb-2">Description</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {mockListing.description}
        </p>
      </div>
    </div>
  );
}
