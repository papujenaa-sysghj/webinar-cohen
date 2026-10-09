import { webinarConfig } from "../config/webinarConfig";

/**
 * Sends registration and payment data to Google Sheets via Google Apps Script Web App.
 * Uses mode: 'no-cors' so it works smoothly from browser clients without CORS issues.
 */
export async function sendToGoogleSheet(data) {
  const url = webinarConfig.googleSheetScriptUrl;
  if (!url || url.trim() === "" || url.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE")) {
    console.info("Google Sheets integration: No webhook URL configured yet in webinarConfig.js");
    return { success: false, reason: "No webhook URL configured" };
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      ...data,
    };

    // Google Apps Script Web Apps accept URLSearchParams or JSON in POST
    await fetch(url, {
      method: "POST",
      mode: "no-cors", // Crucial for cross-origin requests to script.google.com
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending registration to Google Sheet:", error);
    return { success: false, error };
  }
}
