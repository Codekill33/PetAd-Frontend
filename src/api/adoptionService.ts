import { apiClient } from "../lib/api-client";
import type { ApprovalDecisionPayload, AdoptionRating } from "../types/adoption";

export const adoptionService = {
  async submitRating(ratingData: AdoptionRating): Promise<void> {
    // TODO: Replace with actual API endpoint
    console.log("Submitting rating:", ratingData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock successful submission
    return Promise.resolve();
  },

  async approveAdoption(id: string, payload: ApprovalDecisionPayload): Promise<void> {
    return apiClient.post(`/adoption/${id}/approve`, payload);
  },
};
