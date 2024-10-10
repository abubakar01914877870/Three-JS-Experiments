import { WebServiceClient } from "@maxmind/geoip2-node";
// const requestIp = require("request-ip");
import { unstable_noStore as noStore } from "next/cache";

const maxmindAccountID = process.env.MAXMIND_ACCOUNT_ID;
const maxmindLicenseKey = process.env.MAXMIND_LICENSE_KEY;
const host = "geoip.maxmind.com";

export default async function handler(req, res) {
  noStore();
  try {
    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.setHeader("Expires", "0");
    res.setHeader("Surrogate-Control", "no-store");
    // const ip = requestIp.getClientIp(req);
    // if (!ip) {
    //   throw new Error("Failed to get IP");
    // }
    const ip = req.headers["cf-connecting-ip"];
    if (!ip) {
      throw new Error("IP not available");
    }
    const client = new WebServiceClient(maxmindAccountID, maxmindLicenseKey, {
      host,
    });
    const { subdivisions, city } = await client.city(ip);
    if (subdivisions && subdivisions.length) {
      return res.status(200).json({ location: subdivisions[0] });
    }
    if (city) {
      return res.status(200).json({ location: city });
    } else {
      throw new Error("Failed to get location");
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to get location" });
  }
}
