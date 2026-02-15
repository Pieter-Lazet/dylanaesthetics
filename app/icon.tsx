import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Configuration
export const runtime = 'nodejs';

// Image generation
export default async function Icon() {
    // Read the hero image from the public folder
    // We use process.cwd() to get the root directory
    const heroImage = await readFile(join(process.cwd(), "public/hero-image.png"));

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    borderRadius: "50%",
                    overflow: "hidden",
                }}
            >
                {/* @ts-ignore */}
                <img src={heroImage.buffer} alt="Icon" width="100%" height="100%" style={{ objectFit: "cover" }} />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
