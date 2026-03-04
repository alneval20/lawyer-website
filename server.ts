import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  const resend = process.env.RESEND_API_KEY || "re_HM1H3rg2_CM2sbpxBLj1Mb9Yi9jdhdAiL" 
  ? new Resend(process.env.RESEND_API_KEY || "re_HM1H3rg2_CM2sbpxBLj1Mb9Yi9jdhdAiL") 
  : null;

  // API routes
  app.post("/api/contact", async (req, res) => {
    console.log("Received contact form submission:", req.body);
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Lütfen tüm zorunlu alanları doldurun." });
    }

    try {
      if (resend) {
        console.log("Attempting to send email via Resend...");
        const { data, error } = await resend.emails.send({
          from: 'Hukuk Destek <onboarding@resend.dev>',
          to: ['av.rahimeozpolat@outlook.com'],
          subject: subject || 'Yeni Hukuki Destek Talebi',
          replyTo: email,
          text: `Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`,
        });

        if (error) {
          console.error("Resend API error:", error);
          return res.status(500).json({ error: "E-posta gönderilemedi: " + error.message });
        }

        console.log("Email sent successfully:", data);
        return res.json({ success: true, data });
      } else {
        console.warn("RESEND_API_KEY is missing. Email not sent.");
        return res.status(503).json({ 
          error: "E-posta servisi şu an yapılandırılmamış (API anahtarı eksik).",
          fallback: true 
        });
      }
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Sunucu hatası oluştu." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
