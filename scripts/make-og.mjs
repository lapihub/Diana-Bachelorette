// Creates public/og.jpg (the link preview image for Snapchat, iMessage etc.)
// from the hero photo. Run with: npm run og
import sharp from "sharp";

const source = "public/villa/living-room.png";
const target = "public/og.jpg";

await sharp(source)
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(target);

console.log(`Created ${target}`);
