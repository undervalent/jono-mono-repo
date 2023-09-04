export function determineFontFamily(

  font: "mono" | "sans" | "serif" | string
) {
  switch (font) {
    case 'serif':
      return "Lora";
    case "mono":
      return "Inconsolata";
     case "sans":
      return "Inter";
    default:
      return null;
  }
}
