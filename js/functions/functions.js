export function calculateTimeRemaining(endDate) {
  // Parse the provided end date string
  const endDateTime = new Date(endDate);

  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const timeDiff = endDateTime - now;

  // Check if the end date is in the future
  if (timeDiff > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Create the "Listing ends in" message
    const message = `Ends in ${days}d, ${hours}h, ${minutes}m, and ${seconds}s.`;

    return message;
  } else {
    // If the end date is in the past, return a message indicating that the listing has ended
    return "Listing has ended.";
  }
}
