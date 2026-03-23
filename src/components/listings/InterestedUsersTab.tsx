import { useState } from "react";
import ownerImage from "../../assets/mockownder.png";

interface InterestedUser {
  id: number;
  name: string;
  location: string;
  date: string;
  status: "pending" | "approved" | "rejected";
  avatarUrl: string;
}

export default function InterestedUsersTab() {
  const [users, setUsers] = useState<InterestedUser[]>([
    {
      id: 1,
      name: "Angela Christoper",
      location: "Mainland, Lagos Nigeria",
      date: "10 Jan 2026",
      status: "pending",
      avatarUrl: ownerImage,
    },
    {
      id: 2,
      name: "James Okafor",
      location: "Ikeja, Lagos Nigeria",
      date: "12 Jan 2026",
      status: "pending",
      avatarUrl: ownerImage,
    },
  ]);

  const handleApprove = (id: number) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: "approved" } : u)),
    );
  };

  const handleReject = (id: number) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: "rejected" } : u)),
    );
  };

  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <p className="text-sm font-semibold text-[#0D162B]">
          No interested users yet
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Users who express interest in this listing will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-400 mb-4">
        {users.filter((u) => u.status === "pending").length} pending{" "}
        {users.filter((u) => u.status === "pending").length === 1
          ? "request"
          : "requests"}
      </p>

      {users.map((user) => (
        <div
          key={user.id}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 hover:shadow-sm transition-shadow"
        >
          {/* User info */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-100 shrink-0">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0D162B]">{user.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <svg
                  className="w-3 h-3 text-gray-400 shrink-0"
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
                <p className="text-xs text-gray-400">{user.location}</p>
              </div>
              <p className="text-xs text-gray-300 mt-0.5">{user.date}</p>
            </div>
          </div>

          {/* Actions / Status */}
          <div className="flex items-center gap-2 sm:shrink-0">
            {user.status === "pending" ? (
              <>
                <button
                  onClick={() => handleReject(user.id)}
                  className="px-4 py-2 text-sm font-semibold bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleApprove(user.id)}
                  className="px-4 py-2 text-sm font-semibold bg-[#0D162B] text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Approve
                </button>
              </>
            ) : (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  user.status === "approved"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    user.status === "approved" ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                {user.status === "approved" ? "Approved" : "Rejected"}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
