import express, { type Express } from "express";
import fs from "fs";
import path from "path";

// @ts-ignore - __dirname is available in CommonJS (bundled) but not in ES modules
declare const __dirname: string | undefined;

export function serveStatic(app: Express) {
  // In production (bundled to CommonJS), __dirname will be available and point to dist/
  // So dist/public will be at __dirname/public
  let distPath: string;
  
  try {
    if (typeof __dirname !== "undefined") {
      // CommonJS bundled version - __dirname points to dist/
      distPath = path.resolve(__dirname, "public");
    } else {
      // Fallback: resolve from process.cwd() (works in most cases)
      distPath = path.resolve(process.cwd(), "dist", "public");
    }
    
    console.log(`[static] Attempting to serve from: ${distPath}`);
    
    if (!fs.existsSync(distPath)) {
      console.error(`[static] Build directory not found: ${distPath}`);
      console.error(`[static] Current working directory: ${process.cwd()}`);
      console.error(`[static] __dirname: ${typeof __dirname !== "undefined" ? __dirname : "undefined"}`);
      throw new Error(
        `Could not find the build directory: ${distPath}, make sure to build the client first`,
      );
    }

    console.log(`[static] Serving static files from: ${distPath}`);
    app.use(express.static(distPath));

    // fall through to index.html for all routes (SPA routing)
    app.get("*", (_req, res) => {
      const indexPath = path.resolve(distPath, "index.html");
      if (!fs.existsSync(indexPath)) {
        return res.status(404).send("index.html not found");
      }
      res.sendFile(indexPath);
    });
  } catch (error) {
    console.error("[static] Error setting up static file serving:", error);
    throw error;
  }
}
