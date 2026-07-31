export interface MonthData {
  month: string;
  label: string;
  tempLow: number;
  tempHigh: number;
  rainDays: number;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  highlights: string[];
  downsides: string[];
  bestRegions: string[];
  packing: string;
}

export const monthlyData: MonthData[] = [
  { month: "january", label: "January", tempLow: -5, tempHigh: 4, rainDays: 2, crowdLevel: 2, highlights: ["Ice & Snow Festival in Harbin", "Lowest flight prices", "Quiet Great Wall"], downsides: ["Bitterly cold in Beijing and northern China", "Many outdoor attractions closed"], bestRegions: ["Harbin", "Beijing (indoor)", "Hong Kong"], packing: "Thermal layers, down jacket, boots, gloves" },
  { month: "february", label: "February", tempLow: -2, tempHigh: 7, rainDays: 3, crowdLevel: 3, highlights: ["Chinese New Year (most years)", "Spring Festival temple fairs", "Lantern Festival"], downsides: ["Chinese New Year travel chaos", "Everything closes for 3-7 days"], bestRegions: ["Beijing", "Xi'an", "Hong Kong"], packing: "Warm coat, layers, nice outfit for CNY dinners" },
  { month: "march", label: "March", tempLow: 5, tempHigh: 13, rainDays: 5, crowdLevel: 3, highlights: ["Cherry blossoms in Wuhan & Kunming", "Warming temperatures", "Shoulder-season deals"], downsides: ["Unpredictable weather swings", "Dust storms possible in Beijing"], bestRegions: ["Wuhan", "Shanghai", "Kunming"], packing: "Layers, light rain jacket, comfortable shoes" },
  { month: "april", label: "April", tempLow: 10, tempHigh: 20, rainDays: 7, crowdLevel: 4, highlights: ["Perfect spring weather", "Peony blossoms in Luoyang", "Great Wall hiking season"], downsides: ["Tomb Sweeping Day crowds", "Pollen / allergies for some"], bestRegions: ["Beijing", "Luoyang", "Guilin"], packing: "Light jacket, t-shirts, walking shoes, sunglasses" },
  { month: "may", label: "May", tempLow: 15, tempHigh: 26, rainDays: 9, crowdLevel: 5, highlights: ["Labor Day holiday (early May)", "Warm, pleasant everywhere", "Yellow Mountains at their best"], downsides: ["Labor Day week: massive domestic crowds", "Prices spike first week"], bestRegions: ["Yellow Mountains", "Zhangjiajie", "Chengdu"], packing: "Short sleeves, light layers, umbrella, sunscreen" },
  { month: "june", label: "June", tempLow: 20, tempHigh: 30, rainDays: 12, crowdLevel: 4, highlights: ["Dragon Boat Festival", "Long daylight hours", "Lush green scenery"], downsides: ["Rainy season starts in south", "Hot and humid in Shanghai/Guangzhou"], bestRegions: ["Yunnan", "Guilin", "Inner Mongolia"], packing: "Light cotton, rain gear, mosquito repellent" },
  { month: "july", label: "July", tempLow: 23, tempHigh: 32, rainDays: 14, crowdLevel: 5, highlights: ["Summer festivals", "Tibet accessible", "Best month for Qinghai Lake"], downsides: ["Peak heat and humidity", "Typhoon risk on southeast coast", "Summer school holidays = crowds"], bestRegions: ["Tibet", "Qinghai", "Yunnan"], packing: "Breathable fabrics, wide-brim hat, sunscreen, bug spray" },
  { month: "august", label: "August", tempLow: 22, tempHigh: 31, rainDays: 13, crowdLevel: 5, highlights: ["Qixi Festival (Chinese Valentine's)", "Inner Mongolia grasslands", "Lhasa Shoton Festival"], downsides: ["Still unbearably hot in most cities", "Typhoon season peaks"], bestRegions: ["Inner Mongolia", "Tibet", "Sichuan mountains"], packing: "Same as July, plus light rain shell" },
  { month: "september", label: "September", tempLow: 17, tempHigh: 26, rainDays: 9, crowdLevel: 4, highlights: ["Mid-Autumn Festival (mooncakes!)", "Perfect weather returns", "Best month for hiking"], downsides: ["Mid-Autumn domestic travel surge", "Still rainy in some southern areas"], bestRegions: ["Beijing", "Xi'an", "Guilin", "Yellow Mountains"], packing: "Light layers, comfortable walking shoes, camera" },
  { month: "october", label: "October", tempLow: 10, tempHigh: 19, rainDays: 6, crowdLevel: 5, highlights: ["National Day Golden Week (Oct 1-7)", "Best weather of the year", "Autumn colors peak"], downsides: ["Golden Week: avoid at all costs", "Crowded everywhere Oct 1-7"], bestRegions: ["Beijing", "Jiuzhaigou", "Hangzhou", "Nanjing"], packing: "Sweater, light jacket, scarf, umbrella" },
  { month: "november", label: "November", tempLow: 3, tempHigh: 12, rainDays: 4, crowdLevel: 2, highlights: ["Lowest crowds after Golden Week", "Crisp, clear days in Beijing", "Best value flights & hotels"], downsides: ["Getting cold, especially evenings", "Trees bare in north"], bestRegions: ["Beijing", "Xi'an", "Shanghai", "Guangzhou"], packing: "Warm coat, scarf, gloves, layers" },
  { month: "december", label: "December", tempLow: -3, tempHigh: 5, rainDays: 2, crowdLevel: 3, highlights: ["Christmas markets in Shanghai", "Ice lantern shows in Harbin", "Year-end sales"], downsides: ["Cold across most of China", "Short daylight hours"], bestRegions: ["Harbin", "Shanghai", "Hong Kong", "Hainan"], packing: "Full winter gear or tropical wear (south only)" },
];
