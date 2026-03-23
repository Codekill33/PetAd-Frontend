export default function StatusInfo({ status }: { status: string }) {
  if (status === "Pending Consent") {
    return (
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
          <svg
            className="w-4 h-4 text-amber-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-amber-700">
            Pending Consent
          </p>
          <p className="text-xs text-amber-600 mt-0.5 leading-relaxed">
            Go to the Interested Users tab to approve or consent to an adoption
            interest.
          </p>
        </div>
      </div>
    );
  }

  if (status === "Consent Granted") {
    return (
      <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
          <svg
            className="w-4 h-4 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-green-700">
            Consent Granted
          </p>
          <p className="text-xs text-green-600 mt-0.5 leading-relaxed">
            You have approved a request to adopt your pet.
          </p>
        </div>
      </div>
    );
  }

  if (status === "Adoption In-progress") {
    return (
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-blue-700">
            Adoption In-Progress
          </p>
          <p className="text-xs text-blue-600 mt-0.5 leading-relaxed">
            The adoption process is currently underway.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
