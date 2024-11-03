import Moralis from "moralis";

let moralisInitialized = false;

// Function to initialize Moralis lazily
export async function initializeMoralis(): Promise<void> {
  if (!moralisInitialized) {
    try {
      await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY as string,
      });
      moralisInitialized = true;
      console.log("Moralis initialized successfully");
    } catch (error) {
      console.error("Failed to initialize Moralis:", error);
      throw new Error("Failed to initialize Moralis");
    }
  }
}

// Function to convert scientific notation to decimal
export const scientificToDecimal = (num: number): string => {
  const nsign = Math.sign(num);
  num = Math.abs(num);

  if (/\d+\.?\d*e[\+\-]*\d+/i.test(String(num))) {
    const zero = "0";
    const parts = String(num).toLowerCase().split("e");
    const e = parseInt(parts.pop() || "0", 10);
    const l = Math.abs(e);
    const sign = e / l;
    const coeffArray = parts[0].split(".");

    if (sign === -1) {
      num =
        l < coeffArray[0].length
          ? coeffArray[0].slice(0, l) +
            "." +
            coeffArray[0].slice(l) +
            (coeffArray[1] || "")
          : zero +
            "." +
            "0".repeat(l - coeffArray[0].length) +
            coeffArray.join("");
    } else {
      const dec = coeffArray[1] || "";
      num = coeffArray[0] + dec.slice(0, l) + "." + dec.slice(l);
    }
  }

  return nsign < 0 ? "-" + num : num;
};

// Validates if a string is a valid Ethereum or BSC transaction hash
export function isValidEthOrBscTransactionHash(txHash: string): boolean {
  const hexRegex = /^0x[a-fA-F0-9]{64}$/;
  return hexRegex.test(txHash);
}

// Converts BNB value to a human-readable decimal format
export function convertBnbToDecimals(value: number): number {
  const decimals = 18;
  return value / Math.pow(10, decimals);
}

// Converts an ISO date string to a Unix timestamp (in seconds)
export function convertDateToTimestamp(dateValue: string): number {
  const dateObject = new Date(dateValue);
  return Math.floor(dateObject.getTime() / 1000);
}

// Checks if a given amount is within ±0.1 range of a target amount
export function amountWithinRange(value: number, amount: number): boolean {
  const lowerBound = amount - 0.1;
  const upperBound = amount + 0.1;
  return value >= lowerBound && value <= upperBound;
}

// Verifies if a timestamp falls within a 48-hour range from the current time
export function timestampWithinRange(timestamp: number): boolean {
  const currentTime = Math.floor(Date.now() / 1000);
  const twoDaysInSeconds = 2 * 24 * 60 * 60;

  return (
    timestamp >= currentTime - twoDaysInSeconds &&
    timestamp <= currentTime + twoDaysInSeconds
  );
}
