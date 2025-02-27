import { db, ref, push } from "./firebase";

export const saveSummaryToDB = (userId, summaryData) => {
  const summariesRef = ref(db, `summaries/${userId}`);
  return push(summariesRef, {
    ...summaryData,
    timestamp: new Date().toISOString(),
  });
};
