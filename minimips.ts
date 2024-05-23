interface WebsiteConfig {
  website: string;
}

const config: WebsiteConfig = {
  website: "anastasia.net",
};

// Function to display website information
function displayWebsiteInfo(config: WebsiteConfig): void {
  console.log(`Website: ${config.website}`);
}

// Call the function to display the website
displayWebsiteInfo(config);
