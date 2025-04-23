import { getPayload } from "~/server/payload";
import { writeFile } from "fs/promises";
import path from "path";

async function exportNewsToJson() {
  try {
    console.log("Starting export process...");

    // Get payload instance
    const payload = await getPayload();

    // Execute the query
    const result = await payload.find({
      collection: "news",
      limit: 100,
    });

    console.log(`Found ${result.docs?.length || 0} news items`);

    // Convert to JSON string with pretty formatting
    const jsonData = JSON.stringify(result, null, 2);

    // Define output file path (in the current directory)
    const outputPath = path.join(process.cwd(), "news-export.json");

    // Write to file
    await writeFile(outputPath, jsonData, "utf8");

    console.log(`Export successful! File saved to: ${outputPath}`);
  } catch (error) {
    console.error("Error exporting news to JSON:", error);
  }
}

// Execute the function
exportNewsToJson();
