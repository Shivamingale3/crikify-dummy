export interface Country {
  name: string;
  code: string;
  flag: string;
  dial_code: string;
}

export const COUNTRIES: Country[] = [
  { name: "India", code: "IN", flag: "🇮🇳", dial_code: "+91" },
  { name: "United States", code: "US", flag: "🇺🇸", dial_code: "+1" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧", dial_code: "+44" },
  { name: "Canada", code: "CA", flag: "🇨🇦", dial_code: "+1" },
  { name: "Australia", code: "AU", flag: "🇦🇺", dial_code: "+61" },
  { name: "Germany", code: "DE", flag: "🇩🇪", dial_code: "+49" },
  { name: "France", code: "FR", flag: "🇫🇷", dial_code: "+33" },
  { name: "Japan", code: "JP", flag: "🇯🇵", dial_code: "+81" },
  { name: "China", code: "CN", flag: "🇨🇳", dial_code: "+86" },
  { name: "Brazil", code: "BR", flag: "🇧🇷", dial_code: "+55" },
  { name: "Pakistan", code: "PK", flag: "🇵🇰", dial_code: "+92" },
  { name: "Bangladesh", code: "BD", flag: "🇧🇩", dial_code: "+880" },
  { name: "Sri Lanka", code: "LK", flag: "🇱🇰", dial_code: "+94" },
  { name: "Nepal", code: "NP", flag: "🇳🇵", dial_code: "+977" },
  { name: "Afghanistan", code: "AF", flag: "🇦🇫", dial_code: "+93" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦", dial_code: "+27" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿", dial_code: "+64" },
  { name: "Singapore", code: "SG", flag: "🇸🇬", dial_code: "+65" },
  { name: "UAE", code: "AE", flag: "🇦🇪", dial_code: "+971" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", dial_code: "+966" },
];
